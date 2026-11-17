"use client";

import { useActionState, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { MEMBER_BUCKET } from "@/lib/supabase/env";
import {
  addMember,
  createUploadLink,
  recordDocument,
  setDocumentArchived,
  setMemberActive,
  setMemberHome,
  type ActionResult,
} from "@/app/members/admin/actions";

function Result({ result }: { result: ActionResult | null }) {
  if (!result?.message) return null;
  return (
    <p className={result.ok ? "form-ok" : "form-error"} role={result.ok ? "status" : "alert"}>
      {result.message}
    </p>
  );
}

export function AddMemberForm() {
  const [result, action, pending] = useActionState(addMember, null);
  return (
    <form action={action} className="admin-form">
      <div className="admin-fields">
        <label>
          Name
          <input name="full_name" autoComplete="off" />
        </label>
        <label>
          Email address
          <input name="email" type="email" required autoComplete="off" />
        </label>
        <label>
          Role
          <select name="role" defaultValue="member">
            <option value="member">Member</option>
            <option value="admin">Admin (can use this page)</option>
          </select>
        </label>
      </div>
      <button type="submit" className="button" disabled={pending}>
        {pending ? "Adding…" : "Add member"}
      </button>
      <Result result={result} />
    </form>
  );
}

export function MemberHomeForm({ memberId, current }: { memberId: string; current: string }) {
  const [result, action, pending] = useActionState(setMemberHome, null);
  return (
    <form action={action} className="admin-inline">
      <input type="hidden" name="member_id" value={memberId} />
      <label className="sr-only" htmlFor={`home-${memberId}`}>
        Home address on the map
      </label>
      <input id={`home-${memberId}`} name="address" list="map-addresses" defaultValue={current} placeholder="Home address on the map" />
      <button type="submit" className="text-button" disabled={pending}>
        Save home
      </button>
      <Result result={result} />
    </form>
  );
}

export function ToggleButton({
  kind,
  id,
  on,
  labels,
}: {
  kind: "member" | "document";
  id: string;
  on: boolean;
  labels: [string, string];
}) {
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  return (
    <>
      <button
        type="button"
        className="text-button"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const r = kind === "member" ? await setMemberActive(id, !on) : await setDocumentArchived(id, on);
            setError(r.ok ? null : r.message);
          })
        }
      >
        {on ? labels[0] : labels[1]}
      </button>
      {error && <span className="form-error">{error}</span>}
    </>
  );
}

type Option = { id: string; label: string };

export function UploadForm({
  categories,
  homeSections,
  members,
  documents,
}: {
  categories: readonly string[];
  homeSections: readonly string[];
  members: Option[];
  documents: Option[];
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [visibility, setVisibility] = useState<"shared" | "private">("shared");
  const [status, setStatus] = useState<ActionResult | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const file = form.get("file") as File | null;
    if (!file || !file.size) return setStatus({ ok: false, message: "Choose a file to upload." });
    setBusy(true);
    setStatus({ ok: true, message: `Uploading ${file.name}…` });
    const link = await createUploadLink(file.name);
    if ("error" in link) {
      setBusy(false);
      return setStatus({ ok: false, message: link.error });
    }
    const { error } = await createClient().storage.from(MEMBER_BUCKET).uploadToSignedUrl(link.path, link.token, file, { contentType: file.type || undefined });
    if (error) {
      setBusy(false);
      return setStatus({ ok: false, message: "The file did not upload. Check your connection and try again." });
    }
    const result = await recordDocument({
      path: link.path,
      fileName: file.name,
      size: file.size,
      title: String(form.get("title") ?? ""),
      category: String(form.get("category") ?? ""),
      description: String(form.get("description") ?? ""),
      visibility,
      memberId: visibility === "private" ? String(form.get("member_id") || "") || null : null,
      replaces: String(form.get("replaces") || "") || null,
    });
    setBusy(false);
    setStatus(result);
    if (result.ok) {
      formRef.current?.reset();
      setVisibility("shared");
      router.refresh();
    }
  }

  return (
    <form ref={formRef} className="admin-form" onSubmit={onSubmit}>
      <div className="admin-fields">
        <label className="span-2">
          File (PDF, Word or Excel)
          <input name="file" type="file" required accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png" />
        </label>
        <label className="span-2">
          Title members will see
          <input name="title" required />
        </label>
        <label>
          {visibility === "private" ? "Section of their home file" : "Category"}
          <select key={visibility} name="category" required defaultValue="">
            <option value="" disabled>
              Choose…
            </option>
            {(visibility === "private" ? homeSections : categories).map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <fieldset>
          <legend>Who can open it</legend>
          <label className="radio">
            <input type="radio" name="visibility" checked={visibility === "shared"} onChange={() => setVisibility("shared")} /> Every member
          </label>
          <label className="radio">
            <input type="radio" name="visibility" checked={visibility === "private"} onChange={() => setVisibility("private")} /> One member only
          </label>
        </fieldset>
        {visibility === "private" && (
          <label>
            Which member
            <select name="member_id" required defaultValue="">
              <option value="" disabled>
                Choose…
              </option>
              {members.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label}
                </option>
              ))}
            </select>
          </label>
        )}
        <label>
          Replaces an older version (optional)
          <select name="replaces" defaultValue="">
            <option value="">No, this is new</option>
            {documents.map((d) => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
        </label>
        <label className="span-2">
          Short note on what it is (optional)
          <textarea name="description" rows={2} />
        </label>
      </div>
      <button type="submit" className="button button-red" disabled={busy}>
        {busy ? "Uploading…" : "Upload to the library"}
      </button>
      <Result result={status} />
    </form>
  );
}
