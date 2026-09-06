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
4. Optional but wise before any real traffic: Project Settings → Auth → SMTP,
   pointed at Resend or Postmark. Supabase's built-in sender is rate limited to
   a handful of emails an hour, and sign-ins fail silently once it throttles.

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

**Add the webhook** (after the route exists — tell me and I'll say when)

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

## 4. What gets wired once these exist

- `_lib/entitlements.ts` reads the Supabase session and the usage row instead of
  cookies; signed-out visitors fall back to an anonymous device id.
- "Send magic link" calls Supabase auth for real, and the session survives.
- `api/reallinkedin/checkout` creates a Stripe Checkout Session and redirects;
  a new `api/reallinkedin/webhook` route sets the tier when payment completes.
- The Pro state stops being a cookie and starts being an account.
