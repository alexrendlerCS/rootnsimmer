"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { DOCUMENT_CATEGORIES, HOME_FILE_SECTIONS, requireAdmin } from "@/lib/members";
import { createAdminClient } from "@/lib/supabase/admin";
import { MEMBER_BUCKET } from "@/lib/supabase/env";
import { loadHomeMapData, parcelOf } from "@/lib/home-map-data";

export type ActionResult = { ok: true; message?: string } | { ok: false; message: string };

const clean = (v: FormDataEntryValue | null) => String(v ?? "").trim();

/** Add a member (or bring back one who was removed). They then sign in with an emailed link. */
export async function addMember(_: ActionResult | null, form: FormData): Promise<ActionResult> {
  await requireAdmin();
  const email = clean(form.get("email")).toLowerCase();
  const fullName = clean(form.get("full_name")) || null;
  const role = form.get("role") === "admin" ? "admin" : "member";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { ok: false, message: "Enter a valid email address." };

  const db = createAdminClient();
  let userId: string | undefined;
  const created = await db.auth.admin.createUser({ email, email_confirm: true });
  if (created.data.user) userId = created.data.user.id;
  else {
    // Already has a sign-in account: find it.
    for (let page = 1; page < 20 && !userId; page++) {
      const { data } = await db.auth.admin.listUsers({ page, perPage: 200 });
      userId = data.users.find((u) => u.email?.toLowerCase() === email)?.id;
      if (!data.users.length) break;
    }
  }
  if (!userId) return { ok: false, message: "That member could not be added. Please try again." };

  const { error } = await db.from("members").upsert({ id: userId, email, full_name: fullName, role, active: true }, { onConflict: "id" });
  if (error) return { ok: false, message: "That member could not be saved. Please try again." };
  revalidatePath("/members/admin");
  return { ok: true, message: `${fullName ?? email} is a member. They can sign in at /members/sign-in.` };
}

export async function setMemberActive(id: string, active: boolean): Promise<ActionResult> {
  const admin = await requireAdmin();
  if (id === admin.id && !active) return { ok: false, message: "You can’t remove yourself." };
  const { error } = await createAdminClient().from("members").update({ active }).eq("id", id);
  revalidatePath("/members/admin");
  return error ? { ok: false, message: "Could not save that change." } : { ok: true };
}

/** Link a member to their home on the map, by address. */
export async function setMemberHome(_: ActionResult | null, form: FormData): Promise<ActionResult> {
  await requireAdmin();
  const id = clean(form.get("member_id"));
  const address = clean(form.get("address"));
  const { homes } = await loadHomeMapData();
  const home = address ? homes.find((h) => h.address.toLowerCase() === address.toLowerCase()) : null;
  if (address && !home) return { ok: false, message: `“${address}” is not on the Lincolnville map. Pick an address from the list.` };
  const { error } = await createAdminClient()
    .from("members")
    .update({ home_parcels: home ? [parcelOf(home.id)] : [] })
    .eq("id", id);
  revalidatePath("/members/admin");
  return error ? { ok: false, message: "Could not save the home." } : { ok: true, message: home ? `Home set to ${home.address}.` : "Home cleared." };
}

/** Step 1 of an upload: a one-time link the browser uploads the file to directly (big PDFs never pass through the website). */
export async function createUploadLink(fileName: string): Promise<{ path: string; token: string } | { error: string }> {
  await requireAdmin();
  const safe = fileName.normalize("NFKD").replace(/[^\w.\- ]+/g, "").replace(/\s+/g, "-").slice(-120) || "document";
  const path = `${new Date().getFullYear()}/${randomUUID()}-${safe}`;
  const { data, error } = await createAdminClient().storage.from(MEMBER_BUCKET).createSignedUploadUrl(path);
  return error || !data ? { error: "The upload could not start. Please try again." } : { path: data.path, token: data.token };
}

/** Step 2 of an upload: record the document. A replacement archives the old version (nothing is deleted). */
export async function recordDocument(input: {
  path: string;
  fileName: string;
  size: number;
  title: string;
  category: string;
  description: string;
  visibility: "shared" | "private";
  memberId: string | null;
  replaces: string | null;
}): Promise<ActionResult> {
  await requireAdmin();
  if (!input.title.trim()) return { ok: false, message: "Give the document a title." };
  const allowed: readonly string[] = input.visibility === "private" ? HOME_FILE_SECTIONS : DOCUMENT_CATEGORIES;
  if (!allowed.includes(input.category)) return { ok: false, message: "Pick a category." };
  if (input.visibility === "private" && !input.memberId) return { ok: false, message: "Pick the member this private document is for." };
  const db = createAdminClient();
  const { error } = await db.from("documents").insert({
    title: input.title.trim(),
    category: input.category,
    description: input.description.trim() || null,
    storage_path: input.path,
    file_name: input.fileName,
    size_bytes: input.size,
    visibility: input.visibility,
    member_id: input.visibility === "private" ? input.memberId : null,
    replaces: input.replaces,
  });
  if (error) return { ok: false, message: "The file uploaded, but it could not be added to the library. Please try again." };
  if (input.replaces) await db.from("documents").update({ archived: true }).eq("id", input.replaces);
  revalidatePath("/members/admin");
  revalidatePath("/members");
  return { ok: true, message: `“${input.title.trim()}” is in the library.` };
}

export async function setDocumentArchived(id: string, archived: boolean): Promise<ActionResult> {
  await requireAdmin();
  const { error } = await createAdminClient().from("documents").update({ archived }).eq("id", id);
  revalidatePath("/members/admin");
  revalidatePath("/members");
  return error ? { ok: false, message: "Could not save that change." } : { ok: true };
}
