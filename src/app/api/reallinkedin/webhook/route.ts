import type Stripe from "stripe";
import { grantPro } from "@/app/reallinkedin/_lib/pro";
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


async function revokeMonthly(subscription: Stripe.Subscription) {
  const customer =
    typeof subscription.customer === "string"
      ? subscription.customer
      : subscription.customer.id;

  // Lifetime buyers have no subscription, so they can never be caught by this.
  const { error } = await adminClient()
    .from("profiles")
    .update({ tier: "free" })
    .eq("stripe_customer_id", customer)
    .eq("plan", "monthly");
  if (error) throw new Error(error.message);
}
