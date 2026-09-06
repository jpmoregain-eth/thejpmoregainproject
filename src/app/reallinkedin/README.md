# RealLinkedIn

The LinkedIn translator (PRD v1.1). Paste a post or upload a screenshot, get the
cynical version back from Claude Haiku.

## What is here

| Path | What it does |
| --- | --- |
| `page.tsx` | All page state (tier, usage, tabs, view, modals, toast) |
| `_components/` | Presentational pieces — hero, input card, output, share panel, modals |
| `_lib/constants.ts` | Free limit, watermark, model id, the PRD system prompts |
| `_lib/entitlements.ts` | Server-side tier + free-usage counter |
| `_lib/claude.ts` | Haiku calls: translate, and read post text out of a screenshot |
| `../api/reallinkedin/*` | Route handlers: `usage`, `translate`, `extract`, `checkout` |

The nav and footer come from the root layout. The tier indicator (Sign in / Pro
pill) is portalled into `#navbar-action-slot`, which `src/components/Navbar.tsx`
renders on every page.

## Setup

Set `ANTHROPIC_API_KEY` (see `.env.example`). The page renders without it; the
translate and extract endpoints return a "not configured" message instead.

Note: the site no longer builds as a static export — these route handlers need a
Node runtime, so deploy to a host that runs the Next.js server.

## Still to wire up

Two pieces from the PRD are stubbed at a single seam each, both marked with TODOs:

- **Supabase** — auth and the usage row. Today the free counter and the tier live
  in httpOnly cookies (`_lib/entitlements.ts`); the "Send magic link" button only
  toasts. Swap the cookie reads for a session-keyed usage row.
- **Stripe** — `api/reallinkedin/checkout` currently flips the tier straight to
  paid. It should create a Checkout Session, redirect to it, and let the
  `checkout.session.completed` webhook set the tier.

Ad slots are the existing `AdSlot` placeholders and render for free users only,
once output is on screen. They need the real AdSense units before launch.
