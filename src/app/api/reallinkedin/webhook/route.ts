import type Stripe from "stripe";
import { isStripeConfigured, stripe } from "@/app/reallinkedin/_lib/stripe";
import { adminClient, isSupabaseConfigured } from "@/app/reallinkedin/_lib/supabase";

/**
 * Stripe's record of truth. Attaches Pro to the account behind the email that
 * paid, creating that account if the payer never signed in — their Pro is then
 * waiting the first time they use a magic link.
 *
 * Not origin-guarded: Stripe is the caller. The signature check is the guard,
 * and an unsigned or missigned request is rejected before anything is read.
 */
export async function POST(request: Request) {
  if (!isStripeConfigured() || !isSupabaseConfigured()) {
    return Response.json({ error: "Not configured." }, { status: 503 });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!secret || !signature) {
    return Response.json({ error: "Unsigned." }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    // The raw body is required — parsing it first would break the signature.
    const payload = await request.text();
    event = await stripe().webhooks.constructEventAsync(payload, signature, secret);
  } catch {
    return Response.json({ error: "Bad signature." }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      await grantPro(event.data.object);
    } else if (event.type === "customer.subscription.deleted") {
      await revokeMonthly(event.data.object);
    }
  } catch {
    // A 500 makes Stripe retry, which is what we want for a transient failure.
    return Response.json({ error: "Handler failed." }, { status: 500 });
  }

  return Response.json({ received: true });
}

async function grantPro(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email ?? session.metadata?.email;
  const plan = session.metadata?.plan === "lifetime" ? "lifetime" : "monthly";
  const customer =
    typeof session.customer === "string" ? session.customer : (session.customer?.id ?? null);

  const db = adminClient();
  const fields = { tier: "paid", plan, stripe_customer_id: customer };

  // Signed-in checkout carries the user id straight through.
  if (session.client_reference_id) {
    await db.from("profiles").update(fields).eq("id", session.client_reference_id);
    return;
  }

  if (!email) return;

  const { data: existing } = await db
    .from("profiles")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (existing) {
    await db.from("profiles").update(fields).eq("id", existing.id);
    return;
  }

  // Paid before ever signing in: make the account now so the purchase has
  // somewhere to live. The signup trigger creates the profile row.
  const { data: created, error } = await db.auth.admin.createUser({
    email,
    email_confirm: true,
  });
  if (error || !created.user) throw error ?? new Error("Could not create the account");

  await db.from("profiles").update(fields).eq("id", created.user.id);
}

async function revokeMonthly(subscription: Stripe.Subscription) {
  const customer =
    typeof subscription.customer === "string"
      ? subscription.customer
      : subscription.customer.id;

  // Lifetime buyers have no subscription, so they can never be caught by this.
  await adminClient()
    .from("profiles")
    .update({ tier: "free" })
    .eq("stripe_customer_id", customer)
    .eq("plan", "monthly");
}
