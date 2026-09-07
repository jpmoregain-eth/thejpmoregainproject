import { cookies } from "next/headers";
import { FREE_LIMIT, type Entitlements, type Tier } from "./constants";
import { adminClient, currentUser, isSupabaseConfigured } from "./supabase";

/**
 * Who this visitor is and what they are owed.
 *
 * Signed-in visitors are counted against their `profiles` row. Signed-out ones
 * are counted against an `anon_usage` row keyed by an httpOnly device id, so
 * clearing site data does not hand out five more. Both are written server-side
 * with the service role key; the tables have no write policies, so nothing can
 * be moved from the browser.
 *
 * The paid-device cookie is a convenience only: it is set solely after Stripe
 * confirms a completed checkout, and the durable record of Pro is the account.
 */

/** The usage tables could not be read. Fail closed rather than hand out credit. */
export class UsageUnavailableError extends Error {}

const DEVICE_COOKIE = "rli_device";
const PAID_DEVICE_COOKIE = "rli_paid_device";
const LEGACY_USAGE_COOKIE = "rli_used";
const TWO_YEARS = 60 * 60 * 24 * 365 * 2;

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: TWO_YEARS,
};

function shape(tier: Tier, used: number, signedIn: boolean): Entitlements {
  const remaining = tier === "paid" ? FREE_LIMIT : Math.max(0, FREE_LIMIT - used);
  return { tier, used, limit: FREE_LIMIT, remaining, signedIn };
}

/** Stable per-browser id for visitors who have not signed up yet. */
async function deviceId(create: boolean): Promise<string | null> {
  const store = await cookies();
  const existing = store.get(DEVICE_COOKIE)?.value;
  if (existing) return existing;
  if (!create) return null;

  const id = crypto.randomUUID();
  try {
    store.set(DEVICE_COOKIE, id, cookieOptions);
  } catch {
    return null; // Read-only cookie context; the caller falls back to free.
  }
  return id;
}

async function paidDevice(): Promise<boolean> {
  return (await cookies()).get(PAID_DEVICE_COOKIE)?.value === "paid";
}

export async function readEntitlements(): Promise<Entitlements> {
  const paidHere = await paidDevice();

  if (!isSupabaseConfigured()) {
    // Local dev and preview builds without Supabase keys: fall back to the
    // cookie counter so the page still works. Production has the keys.
    const legacy = Number.parseInt(
      (await cookies()).get(LEGACY_USAGE_COOKIE)?.value ?? "0",
      10,
    );
    const used = Number.isFinite(legacy) && legacy > 0 ? legacy : 0;
    return shape(paidHere ? "paid" : "free", used, false);
  }

  const db = adminClient();
  const user = await currentUser();

  if (user) {
    const { data, error } = await db
      .from("profiles")
      .select("tier, translations_used")
      .eq("id", user.id)
      .maybeSingle();

    if (error) throw new UsageUnavailableError(error.message);

    const tier: Tier = data?.tier === "paid" || paidHere ? "paid" : "free";
    return shape(tier, data?.translations_used ?? 0, true);
  }

  const device = await deviceId(true);
  if (!device) return shape(paidHere ? "paid" : "free", 0, false);

  const { data, error } = await db
    .from("anon_usage")
    .select("translations_used")
    .eq("device_id", device)
    .maybeSingle();

  if (error) throw new UsageUnavailableError(error.message);

  return shape(paidHere ? "paid" : "free", data?.translations_used ?? 0, false);
}

export function isLocked(entitlements: Entitlements): boolean {
  return entitlements.tier === "free" && entitlements.remaining <= 0;
}

/** Records one translation. Paid visitors are not counted. */
export async function consumeTranslation(current: Entitlements): Promise<Entitlements> {
  if (current.tier === "paid") return current;

  const used = current.used + 1;

  if (!isSupabaseConfigured()) {
    const store = await cookies();
    store.set(LEGACY_USAGE_COOKIE, String(used), cookieOptions);
    return shape("free", used, false);
  }

  const db = adminClient();

  if (current.signedIn) {
    const user = await currentUser();
    if (user) {
      const { error } = await db
        .from("profiles")
        .update({ translations_used: used })
        .eq("id", user.id);
      if (error) throw new UsageUnavailableError(error.message);
      return shape("free", used, true);
    }
  }

  const device = await deviceId(true);
  if (device) {
    const { error } = await db
      .from("anon_usage")
      .upsert(
        { device_id: device, translations_used: used, updated_at: new Date().toISOString() },
        { onConflict: "device_id" },
      );
    if (error) throw new UsageUnavailableError(error.message);
  }
  return shape("free", used, false);
}

/**
 * Called once a signed-in session exists: carries anything the visitor used
 * anonymously onto their account, so signing up is not a way to reset the count.
 */
export async function mergeDeviceUsage(userId: string): Promise<void> {
  if (!isSupabaseConfigured()) return;

  const device = await deviceId(false);
  if (!device) return;

  const db = adminClient();
  const [{ data: anon }, { data: profile }] = await Promise.all([
    db.from("anon_usage").select("translations_used").eq("device_id", device).maybeSingle(),
    db.from("profiles").select("translations_used").eq("id", userId).maybeSingle(),
  ]);

  const merged = Math.max(anon?.translations_used ?? 0, profile?.translations_used ?? 0);
  if (merged > (profile?.translations_used ?? 0)) {
    await db.from("profiles").update({ translations_used: merged }).eq("id", userId);
  }
}

/** Marks this browser as paid. Only ever called after Stripe confirms a payment. */
export async function markDevicePaid(): Promise<void> {
  (await cookies()).set(PAID_DEVICE_COOKIE, "paid", cookieOptions);
}
