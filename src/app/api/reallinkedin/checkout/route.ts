import { forbidden, isSameOrigin } from "@/app/reallinkedin/_lib/origin";
import {
  isStripeConfigured,
  siteUrl,
  stripe,
  STRIPE_PRICES,
  type Plan,
} from "@/app/reallinkedin/_lib/stripe";
import { currentUser } from "@/app/reallinkedin/_lib/supabase";

/** Opens a Stripe Checkout Session; the visitor is redirected to `url`. */
export async function POST(request: Request) {
  if (!isSameOrigin(request)) return forbidden();

  let body: { plan?: unknown; email?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  const plan = body.plan;
  if (plan !== "monthly" && plan !== "lifetime") {
    return Response.json({ error: "Unknown plan." }, { status: 400 });
  }
  if (!isStripeConfigured(plan as Plan)) {
    return Response.json({ error: "Payments are not configured yet." }, { status: 503 });
  }

  const user = await currentUser();
  const email =
    user?.email ??
    (typeof body.email === "string" && body.email.includes("@")
      ? body.email.trim()
      : undefined);

  if (!email) {
    return Response.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const site = siteUrl(request);

  try {
    const session = await stripe().checkout.sessions.create({
      mode: plan === "monthly" ? "subscription" : "payment",
      line_items: [{ price: STRIPE_PRICES[plan]!, quantity: 1 }],
      customer_email: email,
      // Both are read by the webhook to attach Pro to the right account.
      client_reference_id: user?.id,
      metadata: { plan, email },
      success_url: `${site}/reallinkedin?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${site}/reallinkedin?checkout=cancelled`,
    });

    if (!session.url) {
      return Response.json({ error: "Stripe did not return a checkout link." }, { status: 502 });
    }
    return Response.json({ url: session.url });
  } catch {
    return Response.json({ error: "Could not start checkout." }, { status: 502 });
  }
}
