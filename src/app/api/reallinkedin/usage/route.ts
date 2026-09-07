import { readEntitlements } from "@/app/reallinkedin/_lib/entitlements";

/** Current tier + free allowance for this visitor. */
export async function GET() {
  try {
    return Response.json(await readEntitlements());
  } catch {
    return Response.json(
      { error: "Usage is temporarily unavailable." },
      { status: 503 },
    );
  }
}
