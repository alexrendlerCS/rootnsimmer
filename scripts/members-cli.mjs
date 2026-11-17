/**
 * Members' area helper, run on Kimberly's laptop with the Supabase keys in .env.local.
 *
 *   Add a member (or an admin):
 *     node --env-file=.env.local scripts/members-cli.mjs add-member --email you@example.com --name "Full Name" [--role admin] [--parcel 2115600000]
 *
 *   Move a whole home file from one member to another (e.g. from Kimberly's test account to the owner), no re-upload:
 *     node --env-file=.env.local scripts/members-cli.mjs move-file --from rootnsimmer@gmail.com --to owner@example.com
 *
 *   Load the shared members' library from the back office folders (every member can open these):
 *     node --env-file=.env.local scripts/members-cli.mjs upload-shared --folder "C:\...\Root & Simmer Member Library"
 *     Only the numbered library folders are read (see SHARED_FOLDERS); "_Never share", "_Hold", "Members (private)",
 *     "7 Partnerships" and "(editable)" copies are always skipped.
 *
 *   Preview what would be loaded, without uploading: add --dry-run
 *
 *   Load a member's whole home file from a folder, in reading order (private to that member):
 *     node --env-file=.env.local scripts/members-cli.mjs upload-folder --email owner@example.com --folder "C:\...\Members (private)\74 South St"
 *
 *   Add one file to a member's home file (e.g. the whole digital packet as a ZIP; files in "Start here" also show on the map):
 *     node --env-file=.env.local scripts/members-cli.mjs add-file --email owner@example.com --file "C:\...\E-Packet.zip" --section "Start here" --title "Your digital packet, every file"
 *
 * Folder layout (numbers set the order and are dropped from what the member sees):
 *   1 Start here/01 Welcome letter.pdf        <- the first file in "Start here" is shown first, as the welcome letter
 *   2 Your home's history/03 Home History Packet.pdf
 *   3 Next steps/...
 *   4 The records, one by one/1 Ownership/Record 1.1 ....pdf   -> section "The records: Ownership"
 *
 * Files already in that member's file (same file name) are skipped, so it is safe to run again.
 * Nothing here is ever written to the repo: member files go only to the private Supabase bucket.
 */
import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const BUCKET = "member-files";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const secret = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
const dryRun = process.argv.includes("--dry-run");
if (!dryRun && (!url || !secret)) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY. Run with: node --env-file=.env.local scripts/members-cli.mjs ...");
  process.exit(1);
}
const db = dryRun ? null : createClient(url, secret, { auth: { persistSession: false, autoRefreshToken: false } });

const [command, ...rest] = process.argv.slice(2);
const args = {};
for (let i = 0; i < rest.length; i++) if (rest[i].startsWith("--")) args[rest[i].slice(2)] = rest[i + 1]?.startsWith("--") || rest[i + 1] === undefined ? true : rest[++i];

const SECTION_NAMES = {
  "start here": "Start here",
  "your home's history": "Your home’s history",
  "your home’s history": "Your home’s history",
  "next steps": "Next steps",
};
const stripNumber = (s) => s.replace(/^\d+\s+/, "").trim();
const TYPES = { ".pdf": "application/pdf", ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".zip": "application/zip" };

async function findUserId(email) {
  for (let page = 1; page < 50; page++) {
    const { data, error } = await db.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw error;
    const hit = data.users.find((u) => u.email?.toLowerCase() === email);
    if (hit) return hit.id;
    if (data.users.length < 200) return null;
  }
  return null;
}

async function addMember() {
  const email = String(args.email ?? "").toLowerCase();
  if (!email.includes("@")) throw new Error("--email is required");
  const created = await db.auth.admin.createUser({ email, email_confirm: true });
  const id = created.data.user?.id ?? (await findUserId(email));
  if (!id) throw new Error(created.error?.message ?? "Could not create or find the sign-in account.");
  const row = { id, email, active: true, role: args.role === "admin" ? "admin" : "member" };
  if (typeof args.name === "string") row.full_name = args.name;
  if (typeof args.parcel === "string") row.home_parcels = [args.parcel];
  const { error } = await db.from("members").upsert(row, { onConflict: "id" });
  if (error) throw error;
  console.log(`Member ready: ${args.name ?? email} (${row.role})${row.home_parcels ? `, home parcel ${row.home_parcels[0]}` : ""}`);
}

function walk(dir, parts = []) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, [...parts, entry.name]));
    else if (TYPES[path.extname(entry.name).toLowerCase()]) out.push({ full, parts, name: entry.name });
  }
  return out;
}

function sectionFor(parts) {
  const top = stripNumber(parts[0] ?? "");
  if (/^the records/i.test(top)) return `The records: ${stripNumber(parts[1] ?? "Other")}`;
  return SECTION_NAMES[top.toLowerCase()] ?? top;
}

async function uploadFolder() {
  const email = String(args.email ?? "").toLowerCase();
  const folder = String(args.folder ?? "");
  if (!fs.existsSync(folder)) throw new Error("an existing --folder is required");
  if (dryRun) {
    for (const file of walk(folder)) console.log(`  ${sectionFor(file.parts)}  |  ${stripNumber(path.basename(file.name, path.extname(file.name)))}`);
    return console.log("(dry run: nothing uploaded)");
  }
  if (!email) throw new Error("--email is required");
  const { data: member } = await db.from("members").select("id, full_name").eq("email", email).maybeSingle();
  if (!member) throw new Error(`${email} is not a member yet. Run add-member first.`);
  const { data: existing } = await db.from("documents").select("file_name").eq("member_id", member.id);
  const have = new Set((existing ?? []).map((d) => d.file_name));

  for (const file of walk(folder)) {
    if (have.has(file.name)) {
      console.log(`  skip (already there): ${file.name}`);
      continue;
    }
    const ext = path.extname(file.name).toLowerCase();
    const storagePath = `members/${member.id}/${randomUUID()}${ext}`;
    const body = fs.readFileSync(file.full);
    const up = await db.storage.from(BUCKET).upload(storagePath, body, { contentType: TYPES[ext], upsert: false });
    if (up.error) throw up.error;
    const { error } = await db.from("documents").insert({
      title: stripNumber(path.basename(file.name, ext)),
      category: sectionFor(file.parts),
      storage_path: storagePath,
      file_name: file.name,
      size_bytes: body.length,
      visibility: "private",
      member_id: member.id,
    });
    if (error) throw error;
    console.log(`  added: ${sectionFor(file.parts)} / ${file.name}`);
  }
  console.log(`Done: ${member.full_name ?? email}'s home file is up to date.`);
}

async function addFile() {
  const email = String(args.email ?? "").toLowerCase();
  const file = String(args.file ?? "");
  const section = String(args.section ?? "Start here");
  if (!fs.existsSync(file)) throw new Error("an existing --file is required");
  const ext = path.extname(file).toLowerCase();
  if (!TYPES[ext]) throw new Error(`files of type ${ext} are not allowed`);
  const name = path.basename(file);
  const title = typeof args.title === "string" ? args.title : stripNumber(path.basename(file, ext));
  if (dryRun) return console.log(`  ${section}  |  ${title}  (${name})\n(dry run: nothing uploaded)`);
  const { data: member } = await db.from("members").select("id, full_name").eq("email", email).maybeSingle();
  if (!member) throw new Error(`${email} is not a member yet. Run add-member first.`);
  const { data: existing } = await db.from("documents").select("id").eq("member_id", member.id).eq("file_name", name);
  if (existing?.length) return console.log(`  skip (already there): ${name}`);
  const storagePath = `members/${member.id}/${randomUUID()}${ext}`;
  const body = fs.readFileSync(file);
  const up = await db.storage.from(BUCKET).upload(storagePath, body, { contentType: TYPES[ext], upsert: false });
  if (up.error) throw up.error;
  const { error } = await db.from("documents").insert({ title, category: section, storage_path: storagePath, file_name: name, size_bytes: body.length, visibility: "private", member_id: member.id });
  if (error) throw error;
  console.log(`  added: ${section} / ${title}`);
}

async function moveFile() {
  const from = String(args.from ?? "").toLowerCase();
  const to = String(args.to ?? "").toLowerCase();
  const { data: a } = await db.from("members").select("id, home_parcels").eq("email", from).maybeSingle();
  const { data: b } = await db.from("members").select("id, home_parcels").eq("email", to).maybeSingle();
  if (!a || !b) throw new Error("Both --from and --to must already be members (run add-member for the owner first).");
  const { data, error } = await db.from("documents").update({ member_id: b.id }).eq("member_id", a.id).eq("visibility", "private").select("id");
  if (error) throw error;
  // The home on the map goes with the file.
  if (!b.home_parcels?.length && a.home_parcels?.length) {
    await db.from("members").update({ home_parcels: a.home_parcels }).eq("id", b.id);
    await db.from("members").update({ home_parcels: [] }).eq("id", a.id);
  }
  console.log(`Moved ${data.length} private files from ${from} to ${to}.`);
}

/** Back office folder -> library category. Anything not listed here is never uploaded. */
const SHARED_FOLDERS = {
  "0 Member packets": "Home protection packets",
  "1 Meetings and minutes": "Meetings and minutes",
  "2 The money, researched": "The money, researched",
  "3 Protecting homes and history": "Protecting homes and history",
  "4 Voices from City Hall": "Voices from City Hall",
  "5 Projects and landmarks": "Projects and landmarks",
  "6 Guides": "Guides",
};
const tidyTitle = (name) =>
  stripNumber(name)
    .replace(/^(\d{4})-(\d{2})-(\d{2}) /, (_, y, m, d) => `${new Date(`${y}-${m}-${d}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}: `)
    .replace(/ - summary and (plain |timestamped )?(transcript|original)$/i, (_, kind, what) => `: summary and ${(kind ?? "").trim() ? kind.trim() + " " : ""}${what}`)
    .replace(/^Packet (\d) - /, "Packet $1: ");

async function uploadShared() {
  const folder = String(args.folder ?? "");
  if (!fs.existsSync(folder)) throw new Error("an existing --folder is required");
  const plan = [];
  for (const [dir, category] of Object.entries(SHARED_FOLDERS)) {
    const full = path.join(folder, dir);
    if (!fs.existsSync(full)) continue;
    for (const entry of fs.readdirSync(full, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))) {
      const ext = path.extname(entry.name).toLowerCase();
      if (!entry.isFile() || !TYPES[ext] || /\(editable\)/i.test(entry.name)) continue;
      plan.push({ full: path.join(full, entry.name), name: entry.name, ext, category, title: tidyTitle(path.basename(entry.name, ext)) });
    }
  }
  if (dryRun) {
    for (const p of plan) console.log(`  ${p.category}  |  ${p.title}`);
    return console.log(`(dry run: ${plan.length} files, nothing uploaded)`);
  }
  const { data: existing } = await db.from("documents").select("file_name").eq("visibility", "shared");
  const have = new Set((existing ?? []).map((d) => d.file_name));
  for (const p of plan) {
    if (have.has(p.name)) {
      console.log(`  skip (already there): ${p.name}`);
      continue;
    }
    const storagePath = `library/${randomUUID()}${p.ext}`;
    const body = fs.readFileSync(p.full);
    const up = await db.storage.from(BUCKET).upload(storagePath, body, { contentType: TYPES[p.ext], upsert: false });
    if (up.error) throw up.error;
    const { error } = await db.from("documents").insert({ title: p.title, category: p.category, storage_path: storagePath, file_name: p.name, size_bytes: body.length, visibility: "shared" });
    if (error) throw error;
    console.log(`  added: ${p.category} / ${p.title}`);
  }
  console.log("Done: the shared library is up to date.");
}

const commands = { "add-member": addMember, "upload-folder": uploadFolder, "add-file": addFile, "move-file": moveFile, "upload-shared": uploadShared };
if (!commands[command]) {
  console.error("Commands: add-member, upload-folder (see the top of this file)");
  process.exit(1);
}
commands[command]().catch((e) => {
  console.error("Stopped:", e.message ?? e);
  process.exit(1);
});
