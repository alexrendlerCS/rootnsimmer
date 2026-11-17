import "server-only";
import { createClient } from "@supabase/supabase-js";
import { supabaseUrl } from "./env";

/**
 * Supabase client with the secret key. It bypasses row level security, so only call it on the server
 * AFTER checking who the visitor is (see lib/members.ts). Never import it into a client component.
 */
export function createAdminClient() {
  const secret = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !secret) throw new Error("Supabase secret key is not configured.");
  return createClient(supabaseUrl, secret, { auth: { persistSession: false, autoRefreshToken: false } });
}
