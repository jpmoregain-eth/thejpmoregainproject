import {
  ACCEPTED_IMAGE_TYPES,
  MAX_IMAGE_BYTES,
} from "@/app/reallinkedin/_lib/constants";
import {
  ClaudeUnavailableError,
  extractPostText,
} from "@/app/reallinkedin/_lib/claude";
import { isLocked, readEntitlements } from "@/app/reallinkedin/_lib/entitlements";

/**
 * Reads the post text out of an uploaded screenshot so the input card can show
 * the real extracted word count. Extraction does not consume a translation —
 * the counter moves in /translate — but it is gated on having one left.
 */
export async function POST(request: Request) {
  const entitlements = await readEntitlements();
  if (isLocked(entitlements)) {
    return Response.json(
      { error: "limit_reached", ...entitlements },
      { status: 402 },
    );
  }

  let file: File | null = null;
  try {
    const form = await request.formData();
    const value = form.get("image");
    file = value instanceof File ? value : null;
  } catch {
    return Response.json({ error: "Malformed upload." }, { status: 400 });
  }

  if (!file) {
    return Response.json({ error: "No screenshot uploaded." }, { status: 400 });
  }
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return Response.json(
      { error: "Use a PNG, JPEG, WebP or GIF screenshot." },
      { status: 415 },
    );
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return Response.json(
      { error: "That screenshot is over 5MB." },
      { status: 413 },
    );
  }

  try {
    const base64 = Buffer.from(await file.arrayBuffer()).toString("base64");
    const text = await extractPostText(
      base64,
      file.type as "image/png" | "image/jpeg" | "image/webp" | "image/gif",
    );
    const words = text.split(/\s+/).filter(Boolean).length;
    return Response.json({ text, words });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not read that screenshot.";
    const status = error instanceof ClaudeUnavailableError ? 503 : 502;
    return Response.json({ error: message }, { status });
  }
}
