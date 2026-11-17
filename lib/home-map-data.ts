import "server-only";
import data from "@/data/lincolnville-homes.json";

/**
 * The map data lives outside public/ so only members can load it (through /api/map-data).
 * Imported here so it is bundled with the server code; rebuild it with scripts/build-home-map.mjs.
 */
export const loadHomeMapData = async () => data as unknown as { homes: { id: string; address: string }[] } & Record<string, unknown>;

/** "2075600000-2" -> "2075600000": a map lot id back to its City parcel number. */
export const parcelOf = (id: string) => id.replace(/-\d+$/, "");

/**
 * Which of a member's homes a private document belongs to. Home files are stored as
 * members/<member id>/<parcel>/<file>; an older file without a parcel belongs to the member's first home.
 */
export const homeOfDoc = (storagePath: string, homeParcels: string[]) =>
  storagePath.match(/^members\/[^/]+\/(\d{6,})\//)?.[1] ?? homeParcels[0] ?? "";

/** A parcel's street address from the map data, e.g. "41 Lovett St". */
export const addressOf = async (parcel: string) => (await loadHomeMapData()).homes.find((h) => parcelOf(h.id) === parcel)?.address ?? "Your home";
