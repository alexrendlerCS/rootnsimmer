/**
 * Builds public/data/locator-map.json for the Lincolnville Locator Map (/locator-map).
 *
 *   node scripts/build-locator-map.mjs            (uses cached lookups in scripts/locator-geocode-cache.json)
 *   node scripts/build-locator-map.mjs --refresh  (looks every address up again)
 *
 * Streets, water and parks: OpenStreetMap (Overpass API), © OpenStreetMap contributors.
 * Pins: each address is looked up on OpenStreetMap (Nominatim) and accepted only when OSM has that exact house
 * number. If OSM doesn't, the City of St. Augustine's parcel address (data/lincolnville-homes.json) is used. If
 * neither has it, the pin is left off and reported. Nothing is guessed.
 * District shading: the City's official Lincolnville neighborhood boundary (City GIS).
 */
import fs from "node:fs";

const ROOT = new URL("..", import.meta.url);
const read = (p) => JSON.parse(fs.readFileSync(new URL(p, ROOT), "utf8"));
const dir = read("content/locator/businesses.json");
const homes = read(fs.existsSync(new URL("data/lincolnville-homes.json", ROOT)) ? "data/lincolnville-homes.json" : "public/data/lincolnville-homes.json");
const CACHE_PATH = new URL("scripts/locator-geocode-cache.json", ROOT);
const cache = fs.existsSync(CACHE_PATH) ? JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")) : {};
const refresh = process.argv.includes("--refresh");
const UA = "RootAndSimmerLocatorMap/1.0 (static site build)";

// Map area: the district plus King St. to the north and the south-end marine center.
const S = 29.8742, N = 29.8936, W = -81.3218, E = -81.3083;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- streets, water, parks ----------
async function overpass() {
  const q = `[out:json][timeout:60];
(
  way["highway"~"^(primary|secondary|tertiary|residential|unclassified|living_street|pedestrian)$"](${S},${W},${N},${E});
  way["natural"="water"](${S},${W},${N},${E});
  way["waterway"="riverbank"](${S},${W},${N},${E});
  relation["natural"="water"](${S},${W},${N},${E});
  way["natural"="wetland"](${S},${W},${N},${E});
  relation["natural"="wetland"](${S},${W},${N},${E});
  way["leisure"="park"](${S},${W},${N},${E});
  relation["leisure"="park"](${S},${W},${N},${E});
);
out geom;`;
  const servers = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter", "https://overpass.private.coffee/api/interpreter"];
  for (let attempt = 0; attempt < 6; attempt++) {
    const url = servers[attempt % servers.length];
    try {
      const res = await fetch(url, { method: "POST", body: "data=" + encodeURIComponent(q), headers: { "User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded" } });
      if (res.ok) return (await res.json()).elements;
      console.log("Overpass", url, res.status, "- trying again");
    } catch (e) { console.log("Overpass", url, e.message, "- trying again"); }
    await sleep(4000);
  }
  throw new Error("Overpass servers are busy; try again later");
}

// ---------- projection to SVG units ----------
const lat0 = (S + N) / 2;
const kx = Math.cos((lat0 * Math.PI) / 180);
const WIDTH = 1000;
const scale = WIDTH / ((E - W) * kx);
const HEIGHT = Math.round((N - S) * scale);
const px = (lon, lat) => [+(((lon - W) * kx) * scale).toFixed(1), +(((N - lat) * scale)).toFixed(1)];
const path = (pts, close = false) => pts.map((p, i) => (i ? "L" : "M") + px(p[0], p[1]).join(" ")).join("") + (close ? "Z" : "");

// ---------- address helpers ----------
const EXPAND = [
  [/\bM\.?\s?L\.?\s?King Ave\.?/i, "Martin Luther King Avenue"],
  [/\bSt\.$/i, "Street"],
  [/\bSt\.?(?=,|$)/i, "Street"],
  [/\bAve\.?(?=,|$)/i, "Avenue"],
];
function parse(address) {
  const base = address.split(",")[0].trim();
  const m = base.match(/^(\d+)\s+(.*)$/);
  if (!m) return null;
  let street = m[2].trim();
  for (const [re, to] of EXPAND) street = street.replace(re, to);
  return { number: m[1], street };
}
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\b(street|st)\b/g, "st").replace(/\b(avenue|ave)\b/g, "ave").replace(/\bmartin luther king( jr)?\b/g, "m l king").replace(/\s+/g, " ").trim();

async function nominatim(a) {
  const variants = [a.street];
  if (/Martin Luther King/.test(a.street)) variants.push("Martin Luther King Jr Avenue", "M L King Avenue");
  for (const street of variants) {
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=3&countrycodes=us&street=${encodeURIComponent(a.number + " " + street)}&city=St.%20Augustine&state=Florida`;
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    await sleep(1100); // Nominatim usage policy: at most one request per second
    if (!res.ok) continue;
    const hits = await res.json();
    const exact = hits.find((h) => h.address?.house_number && h.address.house_number.split(/[;,]/).map((s) => s.trim()).includes(a.number));
    if (exact) return { lat: +exact.lat, lon: +exact.lon, source: "OpenStreetMap", label: exact.display_name };
  }
  return null;
}

function cityParcel(a) {
  const want = norm(`${a.number} ${a.street}`);
  const hits = homes.homes.filter((h) => h.address && norm(h.address.split(",")[0]) === want);
  if (!hits.length) return null;
  const lon = hits.reduce((s, h) => s + h.c[0], 0) / hits.length, lat = hits.reduce((s, h) => s + h.c[1], 0) / hits.length;
  return { lat, lon, source: "City of St. Augustine parcel records", label: hits[0].address };
}

// point in polygon (City boundary)
function inside([x, y], ring) {
  let c = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}

async function locate(address, osmName, parks) {
  if (osmName) {
    const p = parks.find((p) => p.name === osmName);
    return p ? { lat: p.lat, lon: p.lon, source: "OpenStreetMap (park outline)" } : null;
  }
  const key = address;
  if (!refresh && cache[key] !== undefined) return cache[key];
  const a = parse(address);
  let hit = a ? await nominatim(a) : null;
  if (!hit && a) hit = cityParcel(a);
  cache[key] = hit;
  return hit;
}

// ---------- build ----------
const elements = await overpass();
const streets = [], water = [], marsh = [], parks = [];
for (const el of elements) {
  const t = el.tags ?? {};
  const rings = el.type === "way" ? [el.geometry] : (el.members ?? []).filter((m) => m.geometry && m.role !== "inner").map((m) => m.geometry);
  const ptsList = rings.filter(Boolean).map((g) => g.map((p) => [p.lon, p.lat]));
  if (t.highway) {
    if (!t.name) continue;
    streets.push({ name: t.name, kind: t.highway, d: ptsList.map((p) => path(p)).join(""), pts: ptsList[0] });
  } else if (t.natural === "water" || t.waterway === "riverbank") water.push(ptsList.map((p) => path(p, true)).join(""));
  else if (t.natural === "wetland") marsh.push(ptsList.map((p) => path(p, true)).join(""));
  else if (t.leisure === "park") {
    const all = ptsList.flat();
    if (!all.length) continue;
    const lon = all.reduce((s, p) => s + p[0], 0) / all.length, lat = all.reduce((s, p) => s + p[1], 0) / all.length;
    parks.push({ name: t.name ?? "", d: ptsList.map((p) => path(p, true)).join(""), lon, lat });
  }
}

// One label per street name, placed on its longest piece.
const labelFor = {};
for (const s of streets) {
  if (!s.pts || s.pts.length < 2) continue;
  const len = s.pts.reduce((L, p, i) => (i ? L + Math.hypot((p[0] - s.pts[i - 1][0]) * kx, p[1] - s.pts[i - 1][1]) : 0), 0);
  if (!labelFor[s.name] || labelFor[s.name].len < len) {
    const mid = s.pts[Math.floor(s.pts.length / 2)], prev = s.pts[Math.max(0, Math.floor(s.pts.length / 2) - 1)];
    const [x1, y1] = px(prev[0], prev[1]), [x2, y2] = px(mid[0], mid[1]);
    let angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
    if (angle > 90) angle -= 180;
    if (angle < -90) angle += 180;
    const [x, y] = px(mid[0], mid[1]);
    labelFor[s.name] = { len, x, y, angle: +angle.toFixed(1) };
  }
}

const boundary = homes.boundary;
const report = { offMap: [], outside: [], sources: {} };
const pins = [];
for (const cat of dir.categories) {
  for (const [i, e] of cat.entries.entries()) {
    const hit = await locate(e.address);
    if (!hit) { report.offMap.push(`${cat.name} ${i + 1}. ${e.name} (${e.address})`); continue; }
    const [x, y] = px(hit.lon, hit.lat);
    const inDistrict = inside([hit.lon, hit.lat], boundary);
    if (!inDistrict) report.outside.push(`${cat.name} ${i + 1}. ${e.name} (${e.address})`);
    report.sources[hit.source] = (report.sources[hit.source] ?? 0) + 1;
    pins.push({ cat: cat.id, n: i + 1, x, y, key: e.address.split(",")[0].trim(), inDistrict, source: hit.source });
  }
}
const landmarks = [];
for (const l of dir.landmarks) {
  const hit = await locate(l.address, l.osmName, parks);
  if (!hit) { report.offMap.push(`Landmark: ${l.name} (${l.address})`); continue; }
  const [x, y] = px(hit.lon, hit.lat);
  landmarks.push({ name: l.name, kind: l.kind, x, y, side: l.labelSide ?? "right", source: hit.source });
}
fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 1));

const out = {
  built: new Date().toISOString().slice(0, 10),
  width: WIDTH,
  height: HEIGHT,
  district: path(boundary, true),
  water,
  marsh,
  parks: parks.map(({ name, d }) => ({ name, d })),
  streets: streets.map(({ name, kind, d }) => ({ name, kind, d })),
  labels: Object.entries(labelFor).map(([name, l]) => ({ name, x: l.x, y: l.y, angle: l.angle })),
  pins,
  landmarks,
};
fs.writeFileSync(new URL("public/data/locator-map.json", ROOT), JSON.stringify(out));
console.log(`Map ${WIDTH}x${HEIGHT}: ${streets.length} street pieces, ${water.length} water, ${marsh.length} marsh, ${parks.length} parks, ${pins.length} pins, ${landmarks.length} landmarks`);
console.log("Pin sources:", report.sources);
console.log("Left off the map (no exact address found):", report.offMap.length ? "\n  " + report.offMap.join("\n  ") : "none");
console.log("Outside the district shading:", report.outside.length ? "\n  " + report.outside.join("\n  ") : "none");
