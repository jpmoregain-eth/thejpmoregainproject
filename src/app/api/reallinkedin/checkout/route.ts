import { setTier } from "@/app/reallinkedin/_lib/entitlements";

/**
 * Stand-in for Stripe Checkout (PRD v1.1 §6: $1.99/mo or $4.99 lifetime).
 *
 * TODO(stripe): create a Checkout Session for the chosen plan and return its
 * URL for the client to redirect to; the tier should then be flipped by the
 * `checkout.session.completed` webhook against the Supabase user, never here.
 */
export async function POST(request: Request) {
  let plan: unknown;
  try {
    plan = (await request.json())?.plan;
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  if (plan !== "monthly" && plan !== "lifetime") {
    return Response.json({ error: "Unknown plan." }, { status: 400 });
  }

  return Response.json({ plan, ...(await setTier("paid")) });
}
