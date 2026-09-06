/** Shared config for RealLinkedIn. Safe to import from both server and client. */

/** Lifetime free translations before the paywall. */
export const FREE_LIMIT = 5;

export const WATERMARK =
  "Translated by RealLinkedIn at thejpmoregainproject.com";

/** PRD v1.1 §5.2 - translation runs on Claude Haiku. */
export const MODEL = "claude-haiku-4-5";

/** PRD v1.1 §11 - system prompt passed to Haiku on every translation. */
export const TRANSLATOR_SYSTEM_PROMPT =
  "You are a cynical, darkly humorous LinkedIn translator. Your job is to take " +
  "LinkedIn posts — with all their performative positivity, humble-bragging, and " +
  "corporate speak — and rewrite them to say what the author actually meant. Be " +
  "savage, witty, and brutally honest. Keep it funny, not mean-spirited. Do not add " +
  "disclaimers. Do not explain yourself. Just write the translated post.";

export const EXTRACTION_SYSTEM_PROMPT =
  "You extract the text of a LinkedIn post from a screenshot. Return only the post " +
  "body as plain text, preserving line breaks. Ignore navigation chrome, reaction " +
  "counts, comments and sidebars. If the image contains no readable post text, " +
  "return exactly: NO_POST_TEXT";

export const MAX_POST_CHARS = 6000;
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const ACCEPTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
];

export type Tier = "free" | "paid";

export type Entitlements = {
  tier: Tier;
  used: number;
  limit: number;
  remaining: number;
};
