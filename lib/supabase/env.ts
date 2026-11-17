/**
 * Supabase settings come from environment variables (set in Vercel, and in .env.local on this laptop).
 * Several names are accepted so the new "publishable"/"secret" keys and the older "anon"/"service_role" keys both work.
 */
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

export const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "";

export const supabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);

/** The private bucket that holds every members' document. */
export const MEMBER_BUCKET = "member-files";
