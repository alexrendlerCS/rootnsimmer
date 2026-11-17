/**
 * Builds data/lincolnville-homes.json for the Lincolnville Home Map (/preserve-historic-homes/map).
 *
 * Inputs (downloaded from the City of St. Augustine ArcGIS services, see README in this folder):
 *   boundary.geojson   Neighborhoods layer, Neigh = LINCOLNVILLE
 *   parcels.geojson    City_Parcels (only STRAP and the site-address fields are requested; never owner names or values)
 *   footprints.geojson BuildingFootprints
 *   fmsf.geojson       NRHistoricStructures (Florida Master Site File structures)
 *   age.geojson        Building_Age_Distribution (decade built)
 * plus Kimberly's Street Files workbook (.xlsx).
 *
 * Display rules (from Kimberly, Nov 17 2026):
 *   - history and sources only for rows with Status = "Verified"
 *   - never the "Story / note", "Status" or "Next step" columns, listing sources, or anything about sales
 *   - rows that can't be matched to a lot go to an admin-only list (written next to the inputs, not to public/)
 *
 * Run: node scripts/build-home-map.mjs <inputDir> <workbook.xlsx> <outJson> <unmatchedCsv>
 * Needs the "exceljs" package available (npm i --no-save exceljs@4.4.0).
 */
import fs from "node:fs";
import ExcelJS from "exceljs";

const [inDir, workbookPath, outJson, unmatchedCsv] = process.argv.slice(2);

// Demolition watch: addresses from the City's 2019-2025 demolition permit list (see demolition-watch.json).
const watchFile = JSON.parse(fs.readFileSync(new URL("./demolition-watch.json", import.meta.url), "utf8"));
const read = (n) => JSON.parse(fs.readFileSync(`${inDir}/${n}.geojson`, "utf8"));
const round = (n) => Math.round(n * 1e6) / 1e6;

// ---------- geometry helpers ----------
const ringsOf = (g) => (g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []);
function inRing(pt, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
const inPoly = (pt, g) => ringsOf(g).some((poly) => inRing(pt, poly[0]) && !poly.slice(1).some((h) => inRing(pt, h)));
function centroid(g) {
  // area-weighted centroid of the largest outer ring, nudged inside if needed
  let best = null, bestA = 0;
  for (const poly of ringsOf(g)) {
    const r = poly[0]; let a = 0, cx = 0, cy = 0;
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const f = r[j][0] * r[i][1] - r[i][0] * r[j][1]; a += f; cx += (r[j][0] + r[i][0]) * f; cy += (r[j][1] + r[i][1]) * f;
    }
    if (Math.abs(a) > bestA) { bestA = Math.abs(a); best = [cx / (3 * a), cy / (3 * a)]; }
  }
  if (best && inPoly(best, g)) return best;
  const r = ringsOf(g)[0][0]; return r[Math.floor(r.length / 2)];
}
const simplify = (g) => ringsOf(g).map((poly) => poly.map((ring) => ring.map(([x, y]) => [round(x), round(y)])));

// ---------- addresses ----------
const STREET_ALIASES = { "M L KING": "MARTIN LUTHER KING", MLK: "MARTIN LUTHER KING", "MLK JR": "MARTIN LUTHER KING", "MARTIN LUTHER KING JR": "MARTIN LUTHER KING", DEHAVEN: "DE HAVEN", "PARK PLACE": "PARK", CENTRAL: "MARTIN LUTHER KING" };
const SUFFIX = /\b(ST|STREET|AVE|AVENUE|WAY|PL|PLACE|DR|RD|CT)\b\.?/g;
function streetKey(name) {
  let s = String(name).toUpperCase().replace(/\(.*?\)/g, " ").replace(/[.,]/g, " ").replace(SUFFIX, " ").replace(/\s+/g, " ").trim();
  s = s.replace(/\bSAINT\b/g, "ST");
  return STREET_ALIASES[s] || s;
}
function addrKey(text) {
  const m = String(text).toUpperCase().replace(/^RR\s+/, "").match(/^(\d+)(?:\s*1\/2)?(?:\s*[-/]\s*\d+)?\s+(.+)$/);
  return m ? `${Number(m[1])} ${streetKey(m[2].split(/[(;,]/)[0])}` : null;
}
const TITLE_EXCEPTIONS = { "DE HAVEN": "DeHaven", "M L KING": "Martin Luther King", "MARTIN LUTHER KING": "Martin Luther King", "DE SOTO": "DeSoto", "LA QUINTA": "La Quinta" };
const title = (s) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
function displayAddress(p) {
  const street = TITLE_EXCEPTIONS[p.str] || title(p.str || "");
  const sfx = title((p.str_sfx || "").trim()).replace(/^Pl$/, "Place");
  const num = p.str_num ? `${p.str_num}${(p.str_num_sf || "").trim()}` : "";
  const unit = (p.str_unit || "").trim();
  return [num, (p.str_pfx || "").trim(), street, sfx].filter(Boolean).join(" ") + (unit ? `, Unit ${unit}` : "");
}

// ---------- workbook ----------
const wb = new ExcelJS.Workbook();
await wb.xlsx.readFile(workbookPath);
const cell = (v) => (v && typeof v === "object" ? (v.text ?? v.result ?? (v.richText ? v.richText.map((r) => r.text).join("") : "")) : v ?? "");
const rowsOf = (ws, headRow) => {
  const head = ws.getRow(headRow).values.slice(1).map((h) => String(cell(h)).trim());
  const out = [];
  for (let r = headRow + 1; r <= ws.rowCount; r++) {
    const vals = ws.getRow(r).values;
    const row = Object.fromEntries(head.map((h, i) => [h, String(cell(vals[i + 1])).trim()]));
    if (Object.values(row).some(Boolean)) out.push({ ...row, _sheet: ws.name, _row: r });
  }
  return out;
};
const register1991 = new Map();
const research = [];
for (const ws of wb.worksheets) {
  if (ws.name === "1991 Register vs Today") {
    for (const r of rowsOf(ws, 2)) { const k = addrKey(r.Address); if (k) register1991.set(k, r); }
  } else if (ws.getRow(1).values.slice(1).map(cell).includes("Status")) {
    research.push(...rowsOf(ws, 1).filter((r) => r.Address));
  } else if (ws.name === "Removed from scope") {
    for (const r of rowsOf(ws, 1)) if (r.Address) research.push({ Address: r.Address, Status: "", _sheet: ws.name, _row: r._row });
  }
}

const LISTING = /stjohnstax|redfin|homes\.com|realtor|zillow|kellar|compass|mybrokerone|trulia|listing|for sale|field notes|field photo|sjcpa reply/i;
const EXPAND = [[/\bSJCPA\b/g, "St. Johns County Property Appraiser"], [/\bNR\b/g, "National Register"], [/\bFMSF\b/g, "Florida Master Site File"]];
const expand = (s) => EXPAND.reduce((t, [a, b]) => t.replace(a, b), s);
function cleanSources(s) {
  return String(s).split(/\s*;\s*/).map((x) => x.trim()).filter((x) => x && !LISTING.test(x)).map((x) => (/^https?:\/\//.test(x) ? { url: x, label: new URL(x).hostname.replace(/^www\./, "") } : { label: expand(x) }));
}

// ---------- build ----------
const boundary = read("boundary").features[0].geometry;
const parcels = read("parcels").features.filter((f) => f.geometry && inPoly(centroid(f.geometry), boundary));
const fmsf = read("fmsf").features.filter((f) => f.geometry && inPoly(f.geometry.coordinates, boundary));
const ages = read("age").features;
const footprints = read("footprints").features.filter((f) => f.geometry && inPoly(centroid(f.geometry), boundary));

const homes = parcels.map((f) => {
  const p = f.properties;
  const c = centroid(f.geometry);
  const decade = ages.find((a) => a.geometry && inPoly(c, a.geometry))?.properties.YB_DECADE;
  const site = fmsf.filter((s) => inPoly(s.geometry.coordinates, f.geometry)).map((s) => s.properties);
  return {
    id: String(p.STRAP).trim(),
    address: displayAddress(p),
    key: p.str_num ? `${p.str_num} ${streetKey(`${p.str_pfx} ${p.str}`)}` : null,
    c: [round(c[0]), round(c[1])],
    g: simplify(f.geometry),
    decade: decade && /^\d{4} - \d{4}$/.test(decade) ? `${decade.slice(0, 4)}s` : null,
    site: site.map((s) => ({ id: s.SITEID, year: (s.YEARBUILT || "").trim() || null, style: (s.STYLE || "").trim() || null, eval: String(s.SURVDIST || "").replace(/\bNR\b/g, "National Register"), destroyed: s.DESTROYED === "YES" })),
    // County land-use code says vacant (the code itself is never shown).
    vacant: /^vacant/i.test(String(p.dscr || "").trim()),
  };
});

// Some lots share a parcel number (condos, split geometry): keep ids unique for the map.
const seen = new Map();
for (const h of homes) {
  const n = (seen.get(h.id) || 0) + 1;
  seen.set(h.id, n);
  h.strap = h.id.replace(/\D/g, "");
  if (n > 1) h.id = `${h.id}-${n}`;
}
const byStrap = new Map();
homes.forEach((h) => !byStrap.has(h.strap) && byStrap.set(h.strap, h));
const byKey = new Map(); homes.forEach((h) => h.key && !byKey.has(h.key) && byKey.set(h.key, h));
const demolitionWatch = new Map(watchFile.addresses.map((w) => [addrKey(w.address), w.work]));
const unmatched = [];
for (const r of research) {
  const strap = (r["Parcel ID"] || "").replace(/\(.*?\)/g, "").replace(/\D/g, "").slice(0, 10);
  const home = (strap.length === 10 && byStrap.get(strap)) || byKey.get(addrKey(r.Address));
  if (!home) { unmatched.push(r); continue; }
  if (r.Status === "Verified") {
    (home.research ||= []).push({
      address: r.Address,
      built: r["Year built"] ? expand(r["Year built"]) : null,
      builtSource: r["Year built source"] ? expand(r["Year built source"]) : null,
      sources: cleanSources(r.Sources),
    });
  }
}
for (const h of homes) {
  const reg = h.key && register1991.get(h.key);
  if (reg) h.nr1991 = { status: reg["1991 status"] || null, date: reg["1991 date"] || null, style: reg["1991 style"] || null, lost: /^LOST/i.test(reg["What changed"] || "") };
  const historic = (h.nr1991 && /^contributing/i.test(h.nr1991.status || "")) || h.site.some((s) => /potential contributor/i.test(s.eval || ""));
  const lost = (h.nr1991 && h.nr1991.lost) || (h.site.length > 0 && h.site.every((s) => s.destroyed));
  h.kind = h.research ? "researched" : lost ? "lost" : historic ? "historic" : "other";
  h.historic = historic;
  const watch = h.key && demolitionWatch.get(h.key);
  if (watch) h.watch = watch;
  if (!h.vacant) delete h.vacant;
  delete h.key;
  delete h.strap;
}

const out = {
  built: new Date().toISOString().slice(0, 10),
  boundary: simplify(boundary)[0][0],
  homes: homes.sort((a, b) => a.address.localeCompare(b.address, "en", { numeric: true })),
  buildings: footprints.map((f) => simplify(f.geometry)),
};
fs.writeFileSync(outJson, JSON.stringify(out));
const esc = (s) => `"${String(s ?? "").replace(/"/g, '""')}"`;
fs.writeFileSync(unmatchedCsv, "\ufeffTab,Row,Address,Parcel ID,Status\n" + unmatched.map((r) => [r._sheet, r._row, r.Address, r["Parcel ID"], r.Status].map(esc).join(",")).join("\n"));
const watchMissed = watchFile.addresses.filter((w) => !homes.some((h) => h.watch === w.work && h.address));
if (watchMissed.length) console.log("demolition-watch addresses not on the Lincolnville map:", watchMissed.map((w) => w.address).join("; "));
const counts = homes.reduce((a, h) => ((a[h.kind] = (a[h.kind] || 0) + 1), a), {});
console.log({ homes: homes.length, buildings: footprints.length, ...counts, research: research.length, unmatched: unmatched.length, kb: Math.round(fs.statSync(outJson).size / 1024) });
