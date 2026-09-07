import { createServerClient } from "@supabase/ssr";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(URL && ANON_KEY && SERVICE_KEY);
}

/**
 * Request-scoped client carrying the visitor's session. Never share one across
 * requests — it reads and writes that visitor's auth cookies.
 */
export async function sessionClient(): Promise<SupabaseClient> {
  const store = await cookies();
  return createServerClient(URL!, ANON_KEY!, {
    cookies: {
      getAll: () => store.getAll(),
      setAll: (toSet) => {
        try {
          for (const { name, value, options } of toSet) {
            store.set(name, value, options);
          }
        } catch {
          // Called from a context that cannot write cookies (a Server
          // Component render). Route handlers, where auth actually happens,
          // can — so a refresh here is safe to drop.
        }
      },
    },
  });
}

/** Bypasses row-level security. Server only, never handed anything user-supplied to interpolate. */
export function adminClient(): SupabaseClient {
  return createClient(URL!, SERVICE_KEY!, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function currentUser() {
  if (!isSupabaseConfigured()) return null;
  const supabase = await sessionClient();
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
}
