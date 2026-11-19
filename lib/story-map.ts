import "server-only";
import { createAdminClient } from "./supabase/admin";
import { MEMBER_BUCKET, supabaseConfigured } from "./supabase/env";
import { STORY_GROUPS, groupOf, type GroupId } from "./story-groups";
import type { ResidentsData } from "./residents-map";

/**
 * Public summary for the Story Map page: how many directory entries record each kind of work.
 * Counts only, never names or addresses; the map itself (names, homes) stays members only.
 */
export async function loadStorySummary(): Promise<{ total: number; people: number; addresses: number; groups: { id: GroupId; label: string; color: string; count: number }[] } | null> {
  if (!supabaseConfigured) return null;
  try {
    const { data, error } = await createAdminClient().storage.from(MEMBER_BUCKET).download("data/historic-residents.json");
    if (error || !data) return null;
    const d = JSON.parse(await data.text()) as ResidentsData;
    const entries = [...d.places.flatMap((p) => p.people), ...d.elsewhere];
    const count = (id: GroupId) => entries.filter((e) => groupOf(e.work) === id).length;
    return {
      total: entries.length,
      people: new Set(entries.map((e) => e.name)).size,
      addresses: d.places.length,
      groups: STORY_GROUPS.map((g) => ({ id: g.id, label: g.label, color: g.color, count: count(g.id) })).filter((g) => g.count > 0 && g.id !== "other"),
    };
  } catch {
    return null;
  }
}
