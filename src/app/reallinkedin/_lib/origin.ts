/**
 * Cheap guard against the routes being driven from outside the site — a curl
 * loop or someone else's page. It does not stop anyone determined (headers are
 * trivially forged); it stops casual scripted use of our API credits.
 */
export function isSameOrigin(request: Request): boolean {
  const host = request.headers.get("host");
  if (!host) return false;

  // Browsers send Origin on POST; Referer is the fallback for the rare ones
  // that do not. Neither present means it did not come from a page.
  const source = request.headers.get("origin") ?? request.headers.get("referer");
  if (!source) return false;

  try {
    return new URL(source).host === host;
  } catch {
    return false;
  }
}

export function forbidden() {
  return Response.json({ error: "Use the page." }, { status: 403 });
}
