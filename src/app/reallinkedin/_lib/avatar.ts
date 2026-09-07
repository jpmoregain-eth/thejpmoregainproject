/**
 * The share card avatar. Downscaled and centre-cropped in the browser to a
 * small data URL: it never leaves the device, it survives a reload via
 * localStorage, and html-to-image can inline it into the exported PNG without
 * a network fetch.
 */

/** Twice the 48px the card renders, so the 2x export stays sharp. */
export const AVATAR_PX = 96;

export const AVATAR_KEY = "reallinkedin:avatar";

export async function toAvatarDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file);
  try {
    const side = Math.min(bitmap.width, bitmap.height);
    const canvas = document.createElement("canvas");
    canvas.width = AVATAR_PX;
    canvas.height = AVATAR_PX;

    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas unavailable");

    // Centre-crop to a square before scaling, so nothing is stretched.
    context.drawImage(
      bitmap,
      (bitmap.width - side) / 2,
      (bitmap.height - side) / 2,
      side,
      side,
      0,
      0,
      AVATAR_PX,
      AVATAR_PX,
    );
    return canvas.toDataURL("image/jpeg", 0.85);
  } finally {
    bitmap.close();
  }
}

export function readStoredAvatar(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(AVATAR_KEY) ?? "";
  } catch {
    return ""; // Private mode, or site data blocked.
  }
}

export function storeAvatar(dataUrl: string): void {
  try {
    if (dataUrl) window.localStorage.setItem(AVATAR_KEY, dataUrl);
    else window.localStorage.removeItem(AVATAR_KEY);
  } catch {
    // Not being able to remember it is not worth interrupting anyone over.
  }
}
