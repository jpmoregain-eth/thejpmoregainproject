import { cookies } from "next/headers";
import { FREE_LIMIT, type Entitlements, type Tier } from "./constants";

/**
 * Server-side tier + free-usage tracking.
 *
 * The free counter has to live on the server (the PRD sells 5 *lifetime* free
 * translations, which localStorage cannot enforce), so it lives in httpOnly
 * cookies for now — no database is wired up to this project yet.
 *
 * TODO(supabase): replace both cookies with a `usage` row keyed by the Supabase
 * auth session, falling back to an anonymous device id for signed-out visitors.
 * TODO(stripe): `tier` should come from the Stripe subscription/payment status
 * synced onto that row, not from a cookie the client caused us to set.
 */

const USAGE_COOKIE = "rli_used";
const TIER_COOKIE = "rli_tier";
const TWO_YEARS = 60 * 60 * 24 * 365 * 2;

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: TWO_YEARS,
};

function shape(tier: Tier, used: number): Entitlements {
  // Paid visitors are unlimited; `remaining` is only ever read for the free tier
  // (JSON has no Infinity, so it stays a plain number).
  const remaining = tier === "paid" ? FREE_LIMIT : Math.max(0, FREE_LIMIT - used);
  return { tier, used, limit: FREE_LIMIT, remaining };
}

export async function readEntitlements(): Promise<Entitlements> {
  const store = await cookies();
  const tier: Tier = store.get(TIER_COOKIE)?.value === "paid" ? "paid" : "free";
  const used = Number.parseInt(store.get(USAGE_COOKIE)?.value ?? "0", 10);
  return shape(tier, Number.isFinite(used) && used > 0 ? used : 0);
}

/** True when a free visitor has nothing left. Paid visitors are never locked. */
export function isLocked(entitlements: Entitlements): boolean {
  return entitlements.tier === "free" && entitlements.remaining <= 0;
}

/** Records one translation against the free allowance. Paid usage is not counted. */
export async function consumeTranslation(): Promise<Entitlements> {
  const current = await readEntitlements();
  if (current.tier === "paid") return current;

  const store = await cookies();
  const used = current.used + 1;
  store.set(USAGE_COOKIE, String(used), cookieOptions);
  return shape("free", used);
}

export async function setTier(tier: Tier): Promise<Entitlements> {
  const store = await cookies();
  store.set(TIER_COOKIE, tier, cookieOptions);
  const current = await readEntitlements();
  return shape(tier, current.used);
}
