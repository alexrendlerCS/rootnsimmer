import "server-only";
import data from "@/data/lincolnville-homes.json";

/**
 * The map data lives outside public/ so only members can load it (through /api/map-data).
 * Imported here so it is bundled with the server code; rebuild it with scripts/build-home-map.mjs.
 */
export const loadHomeMapData = async () => data as unknown as { homes: { id: string; address: string }[] } & Record<string, unknown>;

/** "2075600000-2" -> "2075600000": a map lot id back to its City parcel number. */
export const parcelOf = (id: string) => id.replace(/-\d+$/, "");
