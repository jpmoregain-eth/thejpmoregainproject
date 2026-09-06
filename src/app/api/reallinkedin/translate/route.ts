import { MAX_POST_CHARS } from "@/app/reallinkedin/_lib/constants";
import {
  ClaudeUnavailableError,
  translatePost,
} from "@/app/reallinkedin/_lib/claude";
import {
  consumeTranslation,
  isLocked,
  readEntitlements,
} from "@/app/reallinkedin/_lib/entitlements";

export async function POST(request: Request) {
  const entitlements = await readEntitlements();
  if (isLocked(entitlements)) {
    return Response.json(
      { error: "limit_reached", ...entitlements },
      { status: 402 },
    );
  }

  let post: unknown;
  try {
    post = (await request.json())?.text;
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  if (typeof post !== "string" || !post.trim()) {
    return Response.json({ error: "Paste a post first" }, { status: 400 });
  }
  if (post.length > MAX_POST_CHARS) {
    return Response.json(
      { error: `Keep the post under ${MAX_POST_CHARS} characters.` },
      { status: 413 },
    );
  }

  try {
    const output = await translatePost(post.trim());
    // Only a successful translation costs the visitor one of their five.
    const updated = await consumeTranslation();
    return Response.json({ output, ...updated });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Translation failed.";
    const status = error instanceof ClaudeUnavailableError ? 503 : 502;
    return Response.json({ error: message }, { status });
  }
}
