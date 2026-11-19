import "server-only";
import { getMember } from "./members";
import { createClient } from "./supabase/server";

/**
 * For a signed-in member: the members' library documents on the "Demolition records" shelf, as file name -> id,
 * so "Records on file" can link straight to them. Visitors get an empty list.
 */
export async function recordLinks(): Promise<Record<string, string>> {
  if (!(await getMember())) return {};
  const supabase = await createClient();
  const { data } = await supabase.from("documents").select("id, file_name").eq("category", "Demolition records").eq("archived", false);
  return Object.fromEntries((data ?? []).filter((d) => d.file_name).map((d) => [d.file_name as string, d.id as string]));
}

/**
 * For a signed-in member: every members' library document whose shelf starts with `prefix`
 * (for example "Mohlman research"), as file name -> id. Visitors get an empty list.
 */
export async function shelfLinks(prefix: string): Promise<Record<string, string>> {
  if (!(await getMember())) return {};
  const supabase = await createClient();
  const { data } = await supabase.from("documents").select("id, file_name").like("category", `${prefix}%`).eq("archived", false);
  return Object.fromEntries((data ?? []).filter((d) => d.file_name).map((d) => [d.file_name as string, d.id as string]));
}
