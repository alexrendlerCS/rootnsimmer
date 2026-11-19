import "server-only";
import { getMember } from "./members";
import { createAdminClient } from "./supabase/admin";
import { MEMBER_BUCKET } from "./supabase/env";

export type ResidentEntry = { name: string; work: string; year: string; era: "early" | "cards"; kind: string; note?: string };
export type ResidentPlace = { lat: number; lng: number; today: string; historic: string[]; match: "exact" | "near" | "renamed"; people: ResidentEntry[] };
export type ResidentsData = { built: string; places: ResidentPlace[]; elsewhere: (ResidentEntry & { address: string })[] };

/** Members only: the Historic Residents Map data, read from the private members' storage. Visitors get null. */
export async function loadResidentsData(): Promise<ResidentsData | null> {
  if (!(await getMember())) return null;
  const { data, error } = await createAdminClient().storage.from(MEMBER_BUCKET).download("data/historic-residents.json");
  if (error || !data) return null;
  return JSON.parse(await data.text()) as ResidentsData;
}
