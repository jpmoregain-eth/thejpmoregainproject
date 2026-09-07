import { readEntitlements, markDevicePaid } from "@/app/reallinkedin/_lib/entitlements";
import { forbidden, isSameOrigin } from "@/app/reallinkedin/_lib/origin";
import { isStripeConfigured, stripe } from "@/app/reallinkedin/_lib/stripe";

/**
 * Called when Stripe sends the visitor back. Verifies the session with Stripe
 * before unlocking anything on this browser — the id in the URL is worthless
 * on its own, and the webhook (which owns the account record) may lag.
 */
export async function POST(request: Request) {
  if (!isSameOrigin(request)) return forbidden();
  if (!isStripeConfigured()) {
    return Response.json({ error: "Payments are not configured yet." }, { status: 503 });
  }

  let sessionId: unknown;
  try {
    sessionId = (await request.json())?.session_id;
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  if (typeof sessionId !== "string" || !sessionId.startsWith("cs_")) {
    return Response.json({ error: "Unknown checkout session." }, { status: 400 });
  }

  try {
    const session = await stripe().checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return Response.json({ error: "Payment not completed." }, { status: 402 });
    }
  } catch {
    return Response.json({ error: "Could not verify that payment." }, { status: 502 });
  }

  await markDevicePaid();
  return Response.json(await readEntitlements());
}
