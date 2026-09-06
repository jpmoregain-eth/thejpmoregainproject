import Anthropic from "@anthropic-ai/sdk";
import {
  EXTRACTION_SYSTEM_PROMPT,
  MODEL,
  TRANSLATOR_SYSTEM_PROMPT,
} from "./constants";

export class ClaudeUnavailableError extends Error {}
export class ClaudeRequestError extends Error {}

let client: Anthropic | null = null;

function getClient(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new ClaudeUnavailableError(
      "Translation is not configured yet. Set ANTHROPIC_API_KEY.",
    );
  }
  client ??= new Anthropic();
  return client;
}

function firstText(message: Anthropic.Message): string {
  return message.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();
}

/** Maps SDK errors onto something safe to show a visitor. */
function toFriendlyError(error: unknown): Error {
  if (error instanceof ClaudeUnavailableError) return error;
  if (error instanceof ClaudeRequestError) return error;
  if (error instanceof Anthropic.RateLimitError) {
    return new ClaudeRequestError("Too many translations right now. Try again in a moment.");
  }
  if (error instanceof Anthropic.AuthenticationError) {
    return new ClaudeUnavailableError("Translation is not configured correctly.");
  }
  if (error instanceof Anthropic.APIConnectionError) {
    return new ClaudeRequestError("Could not reach Claude. Try again.");
  }
  if (error instanceof Anthropic.APIError) {
    return new ClaudeRequestError("Claude could not translate that. Try again.");
  }
  return new ClaudeRequestError("Something went wrong translating that post.");
}

/**
 * Haiku occasionally opens with a label line or reaches for markdown; the output
 * card renders plain text, so the asterisks would show up literally.
 */
function stripFormatting(text: string): string {
  return text
    .replace(/^\s*\**\s*(the\s+)?translation\s*:?\s*\**\s*(\n+|$)/i, "")
    .replace(/\*\*([\s\S]+?)\*\*/g, "$1")
    .replace(/(^|[\s(])\*(\S(?:[^*\n]*\S)?)\*(?=[\s).,!?;:]|$)/g, "$1$2")
    .trim();
}

export async function translatePost(post: string): Promise<string> {
  try {
    const message = await getClient().messages.create({
      model: MODEL,
      max_tokens: 2000,
      system: TRANSLATOR_SYSTEM_PROMPT,
      messages: [{ role: "user", content: post }],
    });
    const output = stripFormatting(firstText(message));
    if (!output) throw new ClaudeRequestError("Claude returned an empty translation.");
    return output;
  } catch (error) {
    throw toFriendlyError(error);
  }
}

/** Reads the post text out of a screenshot (PRD v1.1 §5.1, Claude vision). */
export async function extractPostText(
  base64Image: string,
  mediaType: "image/png" | "image/jpeg" | "image/webp" | "image/gif",
): Promise<string> {
  try {
    const message = await getClient().messages.create({
      model: MODEL,
      max_tokens: 2000,
      system: EXTRACTION_SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: { type: "base64", media_type: mediaType, data: base64Image },
            },
            { type: "text", text: "Extract the LinkedIn post text from this screenshot." },
          ],
        },
      ],
    });
    const text = firstText(message);
    if (!text || text === "NO_POST_TEXT") {
      throw new ClaudeRequestError("No post text found in that screenshot.");
    }
    return text;
  } catch (error) {
    throw toFriendlyError(error);
  }
}
