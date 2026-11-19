import "server-only";
import { getMember } from "./members";
import { createAdminClient } from "./supabase/admin";
import { MEMBER_BUCKET } from "./supabase/env";
import type { DirectoryStreet } from "@/content/africa-directory";

export type DirectoryData = { narrative: string[]; streets: DirectoryStreet[] };

/** Members only: the Lil Africa Directory list, read from the private members' storage. Visitors get null. */
export async function loadDirectory(): Promise<DirectoryData | null> {
  if (!(await getMember())) return null;
  const { data, error } = await createAdminClient().storage.from(MEMBER_BUCKET).download("data/little-africa-directory.json");
  if (error || !data) return null;
  return JSON.parse(await data.text()) as DirectoryData;
}
