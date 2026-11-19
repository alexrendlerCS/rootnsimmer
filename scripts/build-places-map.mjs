/**
 * Builds public/data/lincolnville-places.json for the Lincolnville Places Map (/places-map):
 * every park, restaurant, church, museum and business that OpenStreetMap lists inside the City's Lincolnville boundary,
 * plus the hand-checked Locator Map entries (content/locator/businesses.json) so none are missed.
 *
 *   node scripts/build-places-map.mjs                 (asks OpenStreetMap again)
 *   node scripts/build-places-map.mjs --raw scripts/places-osm-cache.json   (reuses the last OpenStreetMap answer)
 *
 * Only named places are kept. Private homes are never included. Hours and details change: the page says to confirm them.
 */
import fs from "node:fs";

const args = process.argv.slice(2);
const rawFile = args.includes("--raw") ? args[args.indexOf("--raw") + 1] : null;
const ring = JSON.parse(fs.readFileSync("data/lincolnville-homes.json", "utf8")).boundary; // [lng, lat] pairs

const inside = ([x, y]) => {
  let c = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
};

async function overpass() {
  const xs = ring.map((r) => r[0]), ys = ring.map((r) => r[1]);
  const poly = `${Math.min(...ys)},${Math.min(...xs)},${Math.max(...ys)},${Math.max(...xs)}`; // box around the boundary; trimmed to the exact line below
  const q = `[out:json][timeout:60];(
 nwr(${poly})["amenity"~"restaurant|cafe|fast_food|bar|pub|ice_cream|place_of_worship|community_centre|library|school|arts_centre|theatre"];
 nwr(${poly})["shop"];
 nwr(${poly})["leisure"~"park|playground|garden"];
 nwr(${poly})["tourism"~"museum|gallery|hotel|guest_house"];
 nwr(${poly})["craft"];
 nwr(${poly})["office"];
);out center tags;`;
  for (const url of ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter", "https://overpass.private.coffee/api/interpreter"]) {
    try {
      const r = await fetch(url, { method: "POST", body: "data=" + encodeURIComponent(q), headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": "site-map-builder/1.0" } });
      if (r.ok) return r.json();
      console.log(url, r.status);
    } catch (e) {
      console.log(url, e.message);
    }
  }
  throw new Error("OpenStreetMap did not answer; try again later");
}

const groupOf = (t) => {
  if (t.leisure) return "parks";
  if (t.amenity === "place_of_worship") return "faith";
  if (/restaurant|cafe|fast_food|bar|pub|ice_cream/.test(t.amenity ?? "")) return "food";
  if (t.tourism === "museum" || t.tourism === "gallery" || /community_centre|library|school|arts_centre|theatre/.test(t.amenity ?? "")) return "culture";
  return "business";
};
const kindOf = (t) => (t.leisure || t.amenity || (t.shop && `shop: ${t.shop}`) || t.tourism || (t.craft && `craft: ${t.craft}`) || (t.office && `office: ${t.office}`) || "").replace(/_/g, " ");

const raw = rawFile ? JSON.parse(fs.readFileSync(rawFile, "utf8")) : await overpass();
if (!rawFile) fs.writeFileSync("scripts/places-osm-cache.json", JSON.stringify(raw));

// 1. Hand-checked Locator Map entries first (exact addresses, Kimberly's spelling).
const biz = JSON.parse(fs.readFileSync("content/locator/businesses.json", "utf8"));
const cache = JSON.parse(fs.readFileSync("scripts/locator-geocode-cache.json", "utf8"));
const groupForCat = { history: "culture", food: "food", art: "business", marine: "business", lodging: "business", wellness: "business", faith: "faith" };
const baseAddr = (a) => a.replace(/,\s*Suite.*$/i, "").trim();
const candidates = [];
for (const cat of biz.categories) for (const it of cat.entries) {
  const hit = cache[it.address] ?? cache[baseAddr(it.address)];
  if (hit) candidates.push({ name: it.name, group: groupForCat[cat.id] ?? "business", kind: "", address: it.address, lat: hit.lat, lng: hit.lon, fromLocator: true });
}
// 2. Everything OpenStreetMap lists with a name.
for (const e of raw.elements) {
  const t = e.tags ?? {};
  const lat = e.lat ?? e.center?.lat, lng = e.lon ?? e.center?.lon;
  if (!t.name || /^\d/.test(t.name) || lat == null) continue; // a bare street number is a private rental or home, never listed
  candidates.push({ name: t.name, group: groupOf(t), kind: kindOf(t), address: [t["addr:housenumber"], t["addr:street"]].filter(Boolean).join(" "), lat: +lat.toFixed(6), lng: +lng.toFixed(6) });
}
// 3. Keep places inside the City's Lincolnville boundary; merge the same place listed twice.
const STOP = new Set(["st", "saint", "the", "church", "co", "company", "cafe", "inn", "of", "and", "bed", "breakfast", "museum", "baptist", "catholic", "episcopal", "ame", "a.m.e", "lincolnville", "augustine", "shop", "bar", "eats", "factory", "brewing", "missionary"]);
const words = (n) => n.toLowerCase().replace(/[’'.]/g, "").split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w));
const metres = (a, b) => Math.hypot((a.lat - b.lat) * 111320, (a.lng - b.lng) * 111320 * Math.cos((a.lat * Math.PI) / 180));
const fuzzy = (a, b) => { const x = words(a.name).map((w) => w.slice(0, 6)), y = words(b.name).map((w) => w.slice(0, 6)); return x.some((w) => y.includes(w)); };
const places = [];
let added = 0;
for (const c of candidates) {
  if (!inside([c.lng, c.lat])) continue;
  if (places.some((p) => !(p.fromLocator && c.fromLocator) && metres(p, c) < 120 && fuzzy(p, c))) continue;
  const place = { ...c };
  if (c.fromLocator) added++;
  places.push(place);
}

for (const p of places) delete p.fromLocator;
places.sort((a, b) => a.group.localeCompare(b.group) || a.name.localeCompare(b.name));
fs.writeFileSync("public/data/lincolnville-places.json", JSON.stringify({ built: new Date().toISOString().slice(0, 10), boundary: ring, places }));
const by = places.reduce((m, p) => ((m[p.group] = (m[p.group] ?? 0) + 1), m), {});
console.log(`${places.length} places inside Lincolnville (${added} from the Locator Map):`, by);
