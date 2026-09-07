import type Stripe from "stripe";
import { adminClient } from "./supabase";

/**
 * Writes a completed purchase onto the account it belongs to.
 *
 * Called from two places on purpose: the Stripe webhook, and the visitor's
 * return trip through `checkout/confirm`. Either one alone is a single point of
 * failure — a webhook that never lands leaves the buyer with Pro on one browser
 * and nothing on their account. Both are idempotent, so running twice is fine.
 */
export async function grantPro(session: Stripe.Checkout.Session): Promise<void> {
  const email =
    session.customer_details?.email ??
    session.customer_email ??
    session.metadata?.email ??
    null;
  const plan = session.metadata?.plan === "lifetime" ? "lifetime" : "monthly";
  const customer =
    typeof session.customer === "string"
      ? session.customer
      : (session.customer?.id ?? null);

  const db = adminClient();
  const fields = { tier: "paid", plan, stripe_customer_id: customer };

  // Checkout started while signed in carries the user id straight through.
  if (session.client_reference_id) {
    const { data, error } = await db
      .from("profiles")
      .update(fields)
      .eq("id", session.client_reference_id)
      .select("id");

    if (error) throw new Error(error.message);
    // An update matching no rows is not success — that id has no profile, so
    // keep going and find the account by email instead of reporting done.
    if (data && data.length > 0) return;
  }

  if (!email) {
    throw new Error("Checkout session carried neither a known user nor an email");
  }

  const { data: existing, error: lookupError } = await db
    .from("profiles")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (lookupError) throw new Error(lookupError.message);

  if (existing) {
    const { error } = await db.from("profiles").update(fields).eq("id", existing.id);
    if (error) throw new Error(error.message);
    return;
  }

  // Paid before ever signing in: make the account now so the purchase has
  // somewhere to live. The signup trigger creates the profile row.
  const { data: created, error } = await db.auth.admin.createUser({
    email,
    email_confirm: true,
  });
  if (error || !created.user) throw error ?? new Error("Could not create the account");

  const { error: updateError } = await db
    .from("profiles")
    .update(fields)
    .eq("id", created.user.id);
  if (updateError) throw new Error(updateError.message);
}
