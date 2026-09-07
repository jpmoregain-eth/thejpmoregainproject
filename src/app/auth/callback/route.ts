import { mergeDeviceUsage } from "@/app/reallinkedin/_lib/entitlements";
import { isSupabaseConfigured, sessionClient } from "@/app/reallinkedin/_lib/supabase";

/** Where the magic link lands. Exchanges the code for a session, then redirects. */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/reallinkedin";
  // Only ever redirect within this site.
  const destination = next.startsWith("/") ? next : "/reallinkedin";

  if (!code || !isSupabaseConfigured()) {
    return Response.redirect(new URL(`${destination}?signin=failed`, url), 303);
  }

  const supabase = await sessionClient();
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.user) {
    return Response.redirect(new URL(`${destination}?signin=failed`, url), 303);
  }

  // Anything used anonymously on this browser follows them onto the account.
  await mergeDeviceUsage(data.user.id);

  return Response.redirect(new URL(`${destination}?signin=ok`, url), 303);
}
