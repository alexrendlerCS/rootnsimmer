import "server-only";
import { cookies } from "next/headers";
import { getMember } from "./members";
import { portalOpen } from "./portal";
import { connection } from "next/server";
import { createAdminClient } from "./supabase/admin";
import { MEMBER_BUCKET, supabaseConfigured } from "./supabase/env";

export type WalkStop = { title: string; where: string; theme?: string; story: string; look?: string };
export type Walk = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  start: string;
  intro: string[];
  stops?: WalkStop[];
  sections?: { title: string; stops: WalkStop[] }[];
  connections?: string;
};
type Code = { code: string; name: string; days: number; created: string; firstUsed: string | null; revoked: boolean };

export const WALK_COOKIE = "rs_walk";
const UNUSED_DAYS = 60;
const day = 24 * 60 * 60 * 1000;

async function readJson<T>(path: string): Promise<T | null> {
  if (!supabaseConfigured) return null;
  const { data, error } = await createAdminClient().storage.from(MEMBER_BUCKET).download(path);
  if (error || !data) return null;
  return JSON.parse(await data.text()) as T;
}

/** The walk guides (titles and summaries are shown to everyone; stops only to people with access). */
export async function loadWalks(): Promise<Walk[]> {
  return (await readJson<{ walks: Walk[] }>("data/walks.json"))?.walks ?? [];
}

function codeIsGood(c: Code, now = Date.now()) {
  if (c.revoked) return false;
  if (!c.firstUsed) return now - Date.parse(c.created) < UNUSED_DAYS * day;
  return now - Date.parse(c.firstUsed) < c.days * day;
}

/**
 * Checks a walk code. On first use it starts the clock and saves that back.
 * Returns the guest's name if the code is good, or null.
 */
export async function redeemWalkCode(raw: string): Promise<{ name: string; until: number } | null> {
  if (!portalOpen) return null;
  const code = raw.trim().toUpperCase();
  const store = await readJson<{ codes: Code[] }>("data/walk-codes.json");
  const c = store?.codes.find((x) => x.code === code);
  if (!store || !c || !codeIsGood(c)) return null;
  if (!c.firstUsed) {
    c.firstUsed = new Date().toISOString();
    await createAdminClient().storage.from(MEMBER_BUCKET).upload("data/walk-codes.json", JSON.stringify(store, null, 1), { contentType: "application/json", upsert: true });
  }
  return { name: c.name, until: Date.parse(c.firstUsed) + c.days * day };
}

/** Who may open the walk guides right now: a signed-in member, or a guest with a good walk code. */
export async function walkAccess(): Promise<{ name: string; kind: "member" | "code" } | null> {
  await connection(); // decided per visitor, never baked into a built page
  if (!portalOpen) return null;
  const member = await getMember();
  if (member) return { name: member.full_name ?? "Member", kind: "member" };
  const code = (await cookies()).get(WALK_COOKIE)?.value;
  if (!code) return null;
  const store = await readJson<{ codes: Code[] }>("data/walk-codes.json");
  const c = store?.codes.find((x) => x.code === code);
  return c && codeIsGood(c) ? { name: c.name, kind: "code" } : null;
}
