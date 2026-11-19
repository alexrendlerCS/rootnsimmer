"use server";

import { createAdminClient } from "./supabase/admin";
import { newsletterSignup } from "@/content/newsletter";

export type SignupResult = { ok: boolean; message: string } | null;

/** Saves a newsletter sign-up to the private "newsletter_signups" table (server only, secret key). */
export async function joinNewsletter(_prev: SignupResult, form: FormData): Promise<SignupResult> {
  if (String(form.get("website") ?? "")) return { ok: true, message: newsletterSignup.thanks }; // spam trap: people never fill this
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const name = String(form.get("name") ?? "").trim().slice(0, 120) || null;
  const interests = form
    .getAll("interests")
    .map(String)
    .filter((i) => newsletterSignup.interests.includes(i));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return { ok: false, message: "Please enter a valid email address." };
  try {
    const { error } = await createAdminClient().from("newsletter_signups").upsert({ email, name, interests }, { onConflict: "email" });
    if (error) throw error;
    return { ok: true, message: newsletterSignup.thanks };
  } catch {
    return { ok: false, message: newsletterSignup.error };
  }
}
