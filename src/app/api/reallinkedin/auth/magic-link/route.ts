import { forbidden, isSameOrigin } from "@/app/reallinkedin/_lib/origin";
import { isSupabaseConfigured, sessionClient } from "@/app/reallinkedin/_lib/supabase";
import { siteUrl } from "@/app/reallinkedin/_lib/stripe";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return forbidden();

  if (!isSupabaseConfigured()) {
    return Response.json({ error: "Sign-in is not configured yet." }, { status: 503 });
  }

  let email: unknown;
  try {
    email = (await request.json())?.email;
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  if (typeof email !== "string" || !email.includes("@")) {
    return Response.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const supabase = await sessionClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: { emailRedirectTo: `${siteUrl(request)}/auth/callback?next=/reallinkedin` },
  });

  if (error) {
    // The mail sender's hourly cap is the common failure, so name it rather
    // than implying a retry will work straight away.
    if (error.status === 429) {
      return Response.json(
        { error: "Too many sign-in emails just now. Try again later." },
        { status: 429 },
      );
    }
    return Response.json(
      { error: "Could not send the link. Try again in a minute." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
