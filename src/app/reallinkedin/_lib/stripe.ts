import Stripe from "stripe";

const SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export const STRIPE_PRICES = {
  monthly: process.env.STRIPE_PRICE_MONTHLY,
  lifetime: process.env.STRIPE_PRICE_LIFETIME,
} as const;

export type Plan = keyof typeof STRIPE_PRICES;

export function isStripeConfigured(plan?: Plan): boolean {
  if (!SECRET_KEY) return false;
  return plan ? Boolean(STRIPE_PRICES[plan]) : true;
}

let client: Stripe | null = null;

export function stripe(): Stripe {
  if (!SECRET_KEY) throw new Error("STRIPE_SECRET_KEY is not set");
  client ??= new Stripe(SECRET_KEY);
  return client;
}

export function siteUrl(request: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  const host = request.headers.get("host") ?? "localhost:3000";
  return `${host.startsWith("localhost") ? "http" : "https"}://${host}`;
}
