import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";
import { supabaseConfigured } from "./supabase/env";

export type Member = {
  id: string;
  email: string;
  full_name: string | null;
  role: "member" | "admin";
  active: boolean;
  home_parcels: string[];
  member_since: string;
};

/** The signed-in member, or null (not signed in, not a member, or deactivated). Checked once per request. */
export const getMember = cache(async (): Promise<Member | null> => {
  if (!supabaseConfigured) return null;
  const supabase = await createClient();
  const { data: claims } = await supabase.auth.getClaims();
  const userId = claims?.claims?.sub;
  if (!userId) return null;
  const { data } = await supabase.from("members").select("*").eq("id", userId).maybeSingle();
  return data && data.active ? (data as Member) : null;
});

/** For members-only pages: send visitors who are not signed in to the sign-in page, then back here. */
export async function requireMember(returnTo: string) {
  const member = await getMember();
  if (!member) redirect(`/members/sign-in?next=${encodeURIComponent(returnTo)}`);
  return member;
}

export async function requireAdmin() {
  const member = await requireMember("/members/admin");
  if (member.role !== "admin") redirect("/members");
  return member;
}

/** The categories the library is sorted into (the back office folders). */
export const DOCUMENT_CATEGORIES = [
  "Home protection packets",
  "Meetings and minutes",
  "The money, researched",
  "Protecting homes and history",
  "Voices from City Hall",
  "Projects and landmarks",
  "Guides",
  "Home history packets",
] as const;
