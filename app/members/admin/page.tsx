import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { DOCUMENT_CATEGORIES, HOME_FILE_SECTIONS, requireAdmin, type Member } from "@/lib/members";
import { createAdminClient } from "@/lib/supabase/admin";
import { loadHomeMapData, parcelOf } from "@/lib/home-map-data";
import { AddMemberForm, MemberHomeForm, ToggleButton, UploadForm } from "@/components/admin/AdminForms";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `Admin | ${site.fullName}`,
  robots: { index: false },
};

type DocRow = {
  id: string;
  title: string;
  category: string;
  visibility: "shared" | "private";
  member_id: string | null;
  archived: boolean;
  created_at: string;
};

export default async function AdminPage() {
  await requireAdmin();
  const db = createAdminClient();
  const [{ data: memberRows }, { data: docRows }, mapData] = await Promise.all([
    db.from("members").select("*").order("created_at", { ascending: false }),
    db.from("documents").select("id, title, category, visibility, member_id, archived, created_at").order("created_at", { ascending: false }),
    loadHomeMapData(),
  ]);
  const members = (memberRows ?? []) as Member[];
  const docs = (docRows ?? []) as DocRow[];
  const nameOf = (id: string | null) => {
    const m = members.find((x) => x.id === id);
    return m ? (m.full_name ?? m.email) : "";
  };
  const addressOf = (parcels: string[]) => mapData.homes.find((h) => parcels.includes(parcelOf(h.id)))?.address ?? "";
  const live = docs.filter((d) => !d.archived);
  const archived = docs.filter((d) => d.archived);

  return (
    <SiteShell>
      <div className="wrap members-page admin">
        <header className="members-head">
          <div>
            <p className="section-label">Lincolnville Connection</p>
            <h1 className="page-title members-title">Admin</h1>
            <p className="page-lede">Add members, upload documents, and decide who can open each one.</p>
          </div>
          <div className="members-tools">
            <Link className="button" href="/members">
              See the members’ library
            </Link>
          </div>
        </header>

        <section className="members-section" aria-labelledby="upload-title">
          <h2 id="upload-title" className="guide-h2">
            Upload a document
          </h2>
          <UploadForm
            categories={DOCUMENT_CATEGORIES}
            homeSections={HOME_FILE_SECTIONS}
            members={members.filter((m) => m.active).map((m) => ({ id: m.id, label: m.full_name ? `${m.full_name} (${m.email})` : m.email }))}
            documents={live.map((d) => ({ id: d.id, label: d.title }))}
          />
        </section>

        <section className="members-section" aria-labelledby="members-title">
          <h2 id="members-title" className="guide-h2">
            Members ({members.filter((m) => m.active).length})
          </h2>
          <AddMemberForm />
          <datalist id="map-addresses">
            {mapData.homes.map((h) => (
              <option key={h.id} value={h.address} />
            ))}
          </datalist>
          <div className="table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th scope="col">Member</th>
                  <th scope="col">Since</th>
                  <th scope="col">Home on the map</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr key={m.id} className={m.active ? "" : "is-off"}>
                    <th scope="row">
                      {m.full_name ?? m.email}
                      <span className="admin-sub">
                        {m.email}
                        {m.role === "admin" ? " · admin" : ""}
                      </span>
                    </th>
                    <td>{m.member_since}</td>
                    <td>
                      <MemberHomeForm memberId={m.id} current={addressOf(m.home_parcels)} />
                    </td>
                    <td>
                      {m.active ? "Active" : "Removed"}{" "}
                      <ToggleButton kind="member" id={m.id} on={m.active} labels={["Remove", "Bring back"]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="members-section" aria-labelledby="docs-title">
          <h2 id="docs-title" className="guide-h2">
            Documents in the library ({live.length})
          </h2>
          <DocTable docs={live} nameOf={nameOf} />
          {archived.length > 0 && (
            <details className="admin-archived">
              <summary>Archived ({archived.length}): kept, but hidden from members</summary>
              <DocTable docs={archived} nameOf={nameOf} />
            </details>
          )}
        </section>
      </div>
    </SiteShell>
  );
}

function DocTable({ docs, nameOf }: { docs: DocRow[]; nameOf: (id: string | null) => string }) {
  if (!docs.length) return <p className="muted">No documents yet.</p>;
  return (
    <div className="table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            <th scope="col">Document</th>
            <th scope="col">Category</th>
            <th scope="col">Who can open it</th>
            <th scope="col">Added</th>
            <th scope="col">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {docs.map((d) => (
            <tr key={d.id}>
              <th scope="row">
                <a href={`/members/document/${d.id}`} target="_blank" rel="noopener">
                  {d.title}
                </a>
              </th>
              <td>{d.category}</td>
              <td>{d.visibility === "shared" ? "Every member" : `Only ${nameOf(d.member_id)}`}</td>
              <td>{d.created_at.slice(0, 10)}</td>
              <td>
                <ToggleButton kind="document" id={d.id} on={!d.archived} labels={["Archive", "Restore"]} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
