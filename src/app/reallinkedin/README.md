# RealLinkedIn

The LinkedIn translator (PRD v1.1). Paste a post or upload a screenshot, get the
cynical version back from Claude Haiku.

## What is here

| Path | What it does |
| --- | --- |
| `page.tsx` | All page state (tier, usage, tabs, view, modals, toast) |
| `_components/` | Presentational pieces — hero, input card, output, share panel, modals |
| `_lib/constants.ts` | Free limit, watermark, model id, the PRD system prompts |
| `_lib/entitlements.ts` | Who the visitor is, what they have used, what they are owed |
| `_lib/supabase.ts` | Session and service-role clients |
| `_lib/stripe.ts` | Stripe client and price ids |
| `_lib/claude.ts` | Haiku calls: translate, and read post text out of a screenshot |
| `../api/reallinkedin/*` | `usage`, `translate`, `extract`, `checkout`, `checkout/confirm`, `webhook`, `auth/magic-link` |
| `../auth/callback` | Where the magic link lands |

The nav and footer come from the root layout. The tier indicator (Sign in / Pro
pill) is portalled into `#navbar-action-slot`, which `src/components/Navbar.tsx`
renders on every page.

## Setup

Environment variables and the Supabase/Stripe dashboard steps are in `SETUP.md`.
Without any keys the page still runs on a cookie counter; sign-in and payments
report themselves as unconfigured rather than failing oddly.

Note: the site no longer builds as a static export — these route handlers need a
Node runtime, so deploy to a host that runs the Next.js server.

## Abuse guards

- Pasted text is fenced in `<post>` tags and the system prompt treats it as
  content, never instructions; the model returns `NOT_A_POST` for input that is
  plainly not a post, which the route turns into a 422 and does **not** count
  against the visitor's five.
- `max_tokens` is capped at `MAX_OUTPUT_TOKENS` and input at `MAX_POST_CHARS`
  (3000 — LinkedIn's own post limit), so one call has a known worst-case cost.
- `_lib/origin.ts` rejects requests that did not come from a page on this host.
  Headers are forgeable; this stops casual scripting, not a determined person.

Still open: there is no rate limit. The free counter is a cookie, so clearing it
grants five more. Both need a store — Supabase or Upstash — see below.

## Setup

Environment variables and the Supabase/Stripe dashboard steps are in
`SETUP.md`. Without the keys the page still runs on a cookie counter, and
sign-in and payments report themselves as unconfigured.


Ad slots were removed from this page. The PRD budgets two AdSense units for the
free tier (leaderboard above the output, rectangle at the bottom) — re-add
`<AdSlot type="..." />` guarded on `free && view === "output"` if they come back.
