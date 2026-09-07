# RealLinkedIn — Supabase & Stripe setup

Do these two in the dashboards, then hand over the keys and the code side gets
wired: real magic-link sign-in, a usage counter that survives a cleared cookie,
and actual payments.

Dashboard menus move around in both products. Where a menu name below does not
match what you see, look for the nearest equivalent — the *values* being
collected are what matter.

---

## 1. Supabase

**Create the project**

1. supabase.com → New project. Region: Singapore. Save the database password.

**Turn on magic links**

2. Authentication → Sign In / Providers → Email: enabled. Turn *off* password
   sign-in, so email + magic link is the only way in.
3. Authentication → URL Configuration:
   - Site URL: `https://thejpmoregainproject.com`
   - Redirect URLs: `https://thejpmoregainproject.com/**` and
     `http://localhost:3000/**`
4. Required before any real traffic: **Authentication → Emails** (under
   NOTIFICATIONS in the sidebar) → custom SMTP, pointed at Resend or Postmark.
   The built-in sender is capped at 2 emails an hour and cannot be raised, so
   sign-ins stop working for everyone once it throttles. With custom SMTP set,
   the emails/hour field on the Rate Limits page unlocks.

   The magic-link template lives in `emails/magic-link.html` in this folder —
   edit it there and paste it into that same Emails page, so the version in the
   dashboard is not the only copy.

**Create the tables** — SQL Editor → New query → run this whole block:

```sql
-- one row per signed-up user
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  tier text not null default 'free',
  plan text,
  stripe_customer_id text unique,
  translations_used int not null default 0,
  created_at timestamptz not null default now()
);

-- the free counter for visitors who have not signed up yet
create table public.anon_usage (
  device_id text primary key,
  translations_used int not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.anon_usage enable row level security;

-- a user may read their own row; nothing may be written from the browser
create policy "read own profile" on public.profiles
  for select using (auth.uid() = id);

-- every new signup gets a profile row automatically
create function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end $$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

There are deliberately no write policies. All counting and tier changes happen
server-side with the service role key, which bypasses RLS. That is what stops
someone resetting their own counter from the browser.

**Then run this second block.** Payments arrive from Stripe carrying an email,
not a user id, so profiles need an email to match against — and someone who pays
before ever signing in needs an account created for them:

```sql
alter table public.profiles add column if not exists email text unique;

update public.profiles p
   set email = u.email
  from auth.users u
 where u.id = p.id and p.email is null;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email);
  return new;
end $$;
```

**Collect the keys** — Project Settings → API keys. Three values:

- Project URL
- anon / publishable key (safe in the browser)
- service role / secret key (**server only** — full admin access to the database)

---

## 2. Stripe

Stay in **Test mode** (the toggle in the dashboard) until the flow works
end to end. Test and live mode have completely separate keys and products.

**Create the prices**

1. Product catalogue → Add product: "RealLinkedIn Pro".
2. Add two prices to it:
   - $1.99 USD, recurring, monthly
   - $4.99 USD, one-time
3. Copy both **price IDs** (`price_...`). Not the product id — the price ids.

**Get the API key**

4. Developers → API keys. You want the **Secret key** (`sk_test_...` in test
   mode). Click to reveal, copy it once.
   - The *publishable* key is not needed — checkout happens server-side.
   - The secret key is a password to your Stripe account. Server env vars only,
     never `NEXT_PUBLIC_`, never committed.
   - If you only see "restricted keys", create one with write access to
     Checkout Sessions, Customers and Subscriptions.

**Add the webhook** (the route exists now)

5. Developers → Webhooks → Add endpoint:
   - URL: `https://thejpmoregainproject.com/api/reallinkedin/webhook`
   - Events: `checkout.session.completed` and `customer.subscription.deleted`
6. Copy the **signing secret** (`whsec_...`).

**Going live later:** live mode needs your business details filled in before
Stripe will accept real payments, and you redo steps 1-6 in live mode for a
fresh set of ids and keys.

---

## 3. Environment variables

Local: `.env.local`. Production: Vercel → Settings → Environment Variables,
then redeploy (Vercel does not apply new variables to an existing build).

```
ANTHROPIC_API_KEY=sk-ant-...

NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_MONTHLY=price_...
STRIPE_PRICE_LIFETIME=price_...

NEXT_PUBLIC_SITE_URL=https://thejpmoregainproject.com
```

Only the `NEXT_PUBLIC_` ones reach the browser. Everything else stays server-side.

---

## 4. How it fits together

**Who am I?** `_lib/entitlements.ts` answers this on every request. A signed-in
visitor is counted against their `profiles` row; a signed-out one against an
`anon_usage` row keyed by an httpOnly device id. Signing in merges whatever the
device used onto the account, so signing up is not a way to reset the count.

**Signing in.** `POST /api/reallinkedin/auth/magic-link` asks Supabase to email a
link; the link lands on `/auth/callback`, which exchanges the code for a session
and redirects back to the page.

**Paying.** `POST /api/reallinkedin/checkout` opens a Stripe Checkout Session and
the visitor is redirected to Stripe. They come back to
`/reallinkedin?session_id=…`, which the page posts to `checkout/confirm` — that
route asks Stripe whether the session was actually paid before unlocking Pro on
that browser. The id in the URL grants nothing on its own.

**The durable record** is set by `POST /api/reallinkedin/webhook`, which Stripe
calls directly. It attaches Pro to the account behind the paying email, creating
that account if the payer never signed in, so their Pro is waiting the first time
they use a magic link. The signature check is what authenticates Stripe.

**When Supabase is unreachable** every route fails closed — no translation runs
and no credit is spent, rather than handing out uncounted free calls. With no
Supabase keys at all (local dev, preview builds) it falls back to the old cookie
counter so the page still works.
