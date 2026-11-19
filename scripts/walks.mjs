/**
 * Self-guided walk guides: upload the private walk text and make walk codes for visitors.
 * The walk text and the codes live ONLY in the private members' storage (this project is public).
 *
 *   Upload or update the walks:
 *     node --env-file=.env.local scripts/walks.mjs upload --file "C:\Users\kimbe\Documents\Root & Simmer Member Library\Walks (private)\walks.json"
 *   Make a code for a paying visitor ($15) or a member's guest (prints the code to send them):
 *     node --env-file=.env.local scripts/walks.mjs add-code --name "Guest name" [--days 3] [--source purchase|member|admin] [--from "Member name"]
 *   Turn off a code:  node --env-file=.env.local scripts/walks.mjs revoke-code --code WALK-XXXXXX
 *   See every code and whether it has been used:
 *     node --env-file=.env.local scripts/walks.mjs list-codes
 *
 *   Upload the members-only Little Africa Directory:
 *     node --env-file=.env.local scripts/walks.mjs upload-directory --file "C:UserskimbeDocumentsRoot & Simmer Member LibraryLittle Africa Directory (private)little-africa-directory.json"
 *
 * A code opens every walk for one guest. It starts counting when first used and lasts --days (default 3).
 * An unused code stops working 60 days after it is made.
 */
import fs from "node:fs";
import { randomInt } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const [command, ...rest] = process.argv.slice(2);
const args = {};
for (let i = 0; i < rest.length; i++) if (rest[i].startsWith("--")) args[rest[i].slice(2)] = rest[i + 1]?.startsWith("--") || rest[i + 1] === undefined ? true : rest[++i];
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);
const BUCKET = "member-files";
const WALKS = "data/walks.json", CODES = "data/walk-codes.json";

async function readJson(path, fallback) {
  const { data, error } = await db.storage.from(BUCKET).download(path);
  if (error || !data) return fallback;
  return JSON.parse(await data.text());
}
const write = (path, obj) => db.storage.from(BUCKET).upload(path, JSON.stringify(obj, null, 1), { contentType: "application/json", upsert: true });

if (command === "upload") {
  const walks = JSON.parse(fs.readFileSync(String(args.file), "utf8"));
  const { error } = await write(WALKS, walks);
  if (error) throw error;
  console.log(`Uploaded ${walks.walks.length} walks: ${walks.walks.map((w) => w.title).join(", ")}`);
} else if (command === "upload-directory") {
  const dir = JSON.parse(fs.readFileSync(String(args.file), "utf8"));
  const { error } = await write("data/little-africa-directory.json", dir);
  if (error) throw error;
  console.log(`Uploaded the Little Africa Directory: ${dir.streets.length} streets, ${dir.streets.reduce((n, s) => n + s.people.length, 0)} people`);
} else if (command === "add-code") {
  if (!args.name) throw new Error("--name is required");
  const store = await readJson(CODES, { codes: [] });
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code;
  do code = "WALK-" + Array.from({ length: 6 }, () => letters[randomInt(letters.length)]).join("");
  while (store.codes.some((c) => c.code === code));
  store.codes.push({ code, name: String(args.name), days: Number(args.days ?? 3), source: String(args.source ?? "purchase"), from: args.from ? String(args.from) : null, created: new Date().toISOString(), firstUsed: null, revoked: false });
  const { error } = await write(CODES, store);
  if (error) throw error;
  console.log(`Walk code for ${args.name}: ${code}  (good for ${Number(args.days ?? 3)} days from first use)`);
} else if (command === "list-codes") {
  const store = await readJson(CODES, { codes: [] });
  for (const c of store.codes) console.log(`${c.code}  ${c.name}  ${c.source}${c.from ? ` (from ${c.from})` : ""}  made ${c.created.slice(0, 10)}  ${c.firstUsed ? `first used ${c.firstUsed.slice(0, 10)}` : "not used yet"}${c.revoked ? "  REVOKED" : ""}`);
  console.log(`${store.codes.length} codes`);
} else if (command !== "revoke-code") {
  console.log("Commands: upload, add-code, list-codes (see the top of this file)");
}

if (command === "revoke-code") {
  const store = await readJson(CODES, { codes: [] });
  const c = store.codes.find((x) => x.code === String(args.code ?? "").toUpperCase());
  if (!c) throw new Error("No such code");
  c.revoked = true;
  const { error } = await write(CODES, store);
  if (error) throw error;
  console.log(`Turned off ${c.code} (${c.name})`);
}
