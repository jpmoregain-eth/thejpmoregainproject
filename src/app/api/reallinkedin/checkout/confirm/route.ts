import { readEntitlements, markDevicePaid } from "@/app/reallinkedin/_lib/entitlements";
import { forbidden, isSameOrigin } from "@/app/reallinkedin/_lib/origin";
import { grantPro } from "@/app/reallinkedin/_lib/pro";
import { isStripeConfigured, stripe } from "@/app/reallinkedin/_lib/stripe";
import { isSupabaseConfigured } from "@/app/reallinkedin/_lib/supabase";

/**
 * Called when Stripe sends the visitor back. Verifies the session with Stripe
 * before unlocking anything — the id in the URL is worthless on its own — then
 * writes Pro onto the account as well as this browser, so a webhook that never
 * arrives cannot leave someone paid on one device and free on the next.
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

  let session;
  try {
    session = await stripe().checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return Response.json({ error: "Payment not completed." }, { status: 402 });
    }
  } catch {
    return Response.json({ error: "Could not verify that payment." }, { status: 502 });
  }

  if (isSupabaseConfigured()) {
    try {
      await grantPro(session);
    } catch {
      // The payment is real and verified, so unlock this browser regardless.
      // Stripe's webhook retries will keep trying to fix the account record.
    }
  }

  await markDevicePaid();
  return Response.json(await readEntitlements());
}
