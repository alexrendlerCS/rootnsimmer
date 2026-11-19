/**
 * Builds the members-only Historic Residents Map data and uploads it to the private members' storage.
 *
 *   node --env-file=.env.local scripts/build-residents-map.mjs --file "C:\...\9 Mohlman research\_Map data (private)\historic-residents-1911-12.json" [--dry-run]
 *
 * Inputs:
 *   - the private people file above (city directory cards, about 1911-12). It is NEVER copied into this project.
 *   - the Little Africa Directory (1885-1907) in content/africa-directory.ts.
 *   - the City lot data in data/lincolnville-homes.json, used to place each historic street number on today's map.
 * Output: member-files bucket, path data/historic-residents.json (read by /lincolnville-history/residents-map for members only).
 *
 * Placing: same number on the same street = "exact"; otherwise the nearest number on that street = "near".
 * Historic house numbers can differ from today's, so the page says every pin is approximate.
 * Addresses outside Lincolnville (downtown, San Marco Avenue, named buildings) go to an "elsewhere" list, not on the map.
 */
import fs from "node:fs";
import { createClient } from "@supabase/supabase-js";

const args = Object.fromEntries(process.argv.slice(2).map((a, i, all) => (a.startsWith("--") ? [a.slice(2), all[i + 1]?.startsWith("--") || all[i + 1] === undefined ? true : all[i + 1]] : null)).filter(Boolean));
if (!args.file || !fs.existsSync(args.file)) throw new Error("--file <private people json> is required");

const lots = JSON.parse(fs.readFileSync("data/lincolnville-homes.json", "utf8")).homes.filter((h) => h.address.trim());
const norm = (s) => s.toLowerCase().replace(/[’'.]/g, "").replace(/\bstreet\b/g, "st").replace(/\bavenue\b/g, "ave").replace(/\bde haven\b/g, "dehaven").replace(/\bkings ferry\b/g, "kings ferry").replace(/\s+/g, " ").trim();
// Historic street names -> today's.
const RENAMED = { "central ave": "martin luther king ave" };
// Streets whose historic numbers sit downtown, outside Lincolnville: never placed on this map.
const DOWNTOWN = new Set(["granada st", "king st", "charlotte st", "st george st", "treasury st", "cordova st"]);
const byStreet = new Map();
for (const h of lots) {
  const m = h.address.trim().match(/^(\d+)\s+(.+?)(,.*)?$/);
  if (!m) continue;
  const street = norm(m[2]);
  if (!byStreet.has(street)) byStreet.set(street, []);
  byStreet.get(street).push({ n: +m[1], c: h.c, address: h.address.trim() });
}

function place(address) {
  const m = address.match(/^(\d+)(?:-\d+)?\s+(.+)$/);
  if (!m) return null;
  let street = norm(m[2]);
  const renamed = RENAMED[street];
  if (renamed) street = renamed;
  if (DOWNTOWN.has(street)) return null;
  const list = byStreet.get(street);
  if (!list) return null;
  const n = +m[1];
  const exact = list.find((x) => x.n === n);
  if (exact) return { lat: exact.c[1], lng: exact.c[0], today: exact.address, match: renamed ? "renamed" : "exact" };
  const same = list.filter((x) => x.n % 2 === n % 2);
  const near = (same.length ? same : list).reduce((a, b) => (Math.abs(b.n - n) < Math.abs(a.n - n) ? b : a));
  if (Math.abs(near.n - n) > 8) return null;
  return { lat: near.c[1], lng: near.c[0], today: near.address, match: "near" };
}

// Little Africa Directory (public content file): read its entries without running TypeScript.
const ts = fs.readFileSync("content/africa-directory.ts", "utf8");
const block = ts.slice(ts.indexOf("export const directory"), ts.indexOf("export const directoryTeaser"));
const early = [...block.matchAll(/\{ name: "([^"]+)", where: "([^"]+)", role: "([^"]+)" \}/g)].map(([, name, where, role]) => {
  const places = [];
  const parts = /d/.test(where) ? where.split(";").map((p) => p.trim()) : [where];
  for (const p of parts) {
    const kind = /residence/i.test(p) ? "home" : /work|restaurant|grocery|\(|church/i.test(p) ? "work" : "home";
    const addr = p.replace(/^residence:\s*|^work:\s*|^restaurant:\s*|^grocery:\s*/i, "").replace(/\s*\((work|residence|restaurant)\)/i, "").replace(/\s*\(.*\)$/, "").trim();
    places.push({ kind: /\(work\)|^work:|restaurant|grocery/i.test(p) ? "work" : kind, address: addr, note: (p.match(/\(([^)]+(Church)[^)]*)\)/) || [])[1] });
  }
  return { name, work: role, year: "1885–1907", era: "early", places };
});

const cards = JSON.parse(fs.readFileSync(args.file, "utf8")).people.map((p) => ({ ...p, era: "cards" }));
const all = [...early, ...cards];

const pins = new Map();
const seen = new Set();
const elsewhere = [];
for (const person of all) {
  for (const pl of person.places) {
    const dedupe = `${person.name}|${pl.address}`;
    if (seen.has(dedupe)) continue;
    seen.add(dedupe);
    const where = place(pl.address);
    const entry = { name: person.name, work: person.work, year: person.year, era: person.era, kind: pl.kind, note: pl.note };
    if (!where) {
      elsewhere.push({ ...entry, address: pl.address });
      continue;
    }
    const key = `${where.lat},${where.lng}`;
    if (!pins.has(key)) pins.set(key, { lat: where.lat, lng: where.lng, today: where.today, historic: new Set(), match: where.match, people: [] });
    const pin = pins.get(key);
    pin.historic.add(pl.address);
    if (where.match === "near") pin.match = "near";
    pin.people.push(entry);
  }
}
const out = {
  built: new Date().toISOString().slice(0, 10),
  places: [...pins.values()].map((p) => ({ ...p, historic: [...p.historic] })),
  elsewhere,
};
console.log(`people: ${all.length}  pins: ${out.places.length}  (exact ${out.places.filter((p) => p.match !== "near").length}, near ${out.places.filter((p) => p.match === "near").length})  elsewhere: ${elsewhere.length}`);
for (const p of out.places.filter((x) => x.match === "near")) console.log(`  near: ${p.historic.join(" / ")} -> ${p.today}`);
for (const e of elsewhere) console.log(`  elsewhere: ${e.name} — ${e.address}`);
if (args["dry-run"]) process.exit(0);

const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);
const up = await db.storage.from("member-files").upload("data/historic-residents.json", JSON.stringify(out), { contentType: "application/json", upsert: true });
if (up.error) throw up.error;
console.log("Uploaded to members' storage: data/historic-residents.json");
