import { readEntitlements } from "@/app/reallinkedin/_lib/entitlements";

/** Current tier + free allowance for this visitor. */
export async function GET() {
  return Response.json(await readEntitlements());
}
