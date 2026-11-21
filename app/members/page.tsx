import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { HOME_FILE_SECTIONS, requireMember } from "@/lib/members";
import { createClient } from "@/lib/supabase/server";
import { addressOf, homeOfDoc } from "@/lib/home-map-data";
import { SiteShell } from "@/components/SiteShell";
import { MembersLibrary } from "@/components/MembersLibrary";
import { STAGING_PREFIX, hiddenFromLibrary } from "@/lib/library-view";
import { HOME_FILE_VIEW, featured, isCopyOrBundle, longAddress, sectionOf } from "@/lib/home-file";

export const metadata: Metadata = {
  title: `Members’ library | ${site.fullName}`,
  robots: { index: false },
};

type Doc = {
  id: string;
  title: string;
  category: string;
  description: string | null;
  visibility: string;
  size_bytes: number | null;
  file_name: string | null;
  member_id: string | null;
  storage_path: string;
};

const size = (b: number | null) => (b ? (b > 1_000_000 ? `${Math.round(b / 1_000_000)} MB` : `${Math.max(1, Math.round(b / 1000))} KB`) : "");

export default async function MembersPage() {
  const member = await requireMember("/members");
  const supabase = await createClient();
  const { data } = await supabase
    .from("documents")
    .select("id, title, category, description, visibility, size_bytes, file_name, member_id, storage_path")
    .eq("archived", false)
    .order("created_at", { ascending: true });
  const docs = (data ?? []) as Doc[];
  const sectionIndex = (c: string) => {
    const i = (HOME_FILE_SECTIONS as readonly string[]).indexOf(c);
    return i === -1 ? 99 : i;
  };
  // Oldest first inside a section (uploaded in reading order); sections in HOME_FILE_SECTIONS order.
  // Only this member's own file. (An admin can read every private file, but sees just their own here.)
  const mine = docs.filter((d) => d.visibility === "private" && d.member_id === member.id).sort((a, b) => sectionIndex(a.category) - sectionIndex(b.category));
  // One home file per home (a member can have more than one house), in the order the homes were added.
  const parcels = member.home_parcels.length ? member.home_parcels : [""];
  const homes = await Promise.all(
    parcels.map(async (parcel) => ({
      parcel,
      address: parcel ? await addressOf(parcel) : "Your home",
      docs: mine.filter((d) => !parcel || homeOfDoc(d.storage_path, member.home_parcels) === parcel),
    })),
  );
  // The shared library, minus listings kept only in a Home File (lib/library-view.ts).
  const shared = docs.filter((d) => d.visibility === "shared" && !hiddenFromLibrary(d));
  // Administrator only: Mohlman files staged for review (archived records, which row-level security shows only to admins).
  let staged: Doc[] = [];
  if (member.role === "admin") {
    const { data: st } = await supabase
      .from("documents")
      .select("id, title, category, description, visibility, size_bytes, file_name, member_id, storage_path")
      .eq("archived", true)
      .like("category", `${STAGING_PREFIX}%`)
      .order("file_name", { ascending: true });
    staged = (st ?? []) as Doc[];
  }
  const firstName = member.full_name?.split(" ")[0];

  return (
    <SiteShell>
      <div className="wrap members-page">
        <header className="members-head">
          <div>
            <p className="section-label">Lincolnville Connection</p>
            <h1 className="page-title members-title">{firstName ? `Welcome, ${firstName}.` : "Welcome."}</h1>
            <p className="page-lede">Your home’s history and the members’ library, in one place.</p>
          </div>
          <div className="members-tools">
            <Link className="button" href="/preserve-historic-homes/map">
              Open the home map
            </Link>
            {member.role === "admin" && (
              <Link className="button button-red" href="/members/admin">
                Admin
              </Link>
            )}
            <form action="/members/sign-out" method="post">
              <button type="submit" className="text-button">
                Sign out
              </button>
            </form>
          </div>
        </header>

        {homes.map(({ parcel, address, docs: homeDocs }, i) => (
          <HomeFile key={parcel || "home"} parcel={parcel} address={address} docs={homeDocs} several={homes.length > 1} first={i === 0} />
        ))}

        {shared.length > 0 ? (
          <MembersLibrary docs={shared} staged={staged} renderDoc={(d) => <DocRow key={d.id} doc={d} />} />
        ) : (
          <p className="muted">The shared library is being filled in. Check back soon.</p>
        )}

        <p className="notice">
          These documents are for Lincolnville Connection members. Please do not post them publicly. Root &amp; Simmer
          Hospitality Co. is independent and not affiliated with or endorsed by the City of St. Augustine or its CRA.
        </p>
      </div>
    </SiteShell>
  );
}

/**
 * One home file in five collapsible sections (lib/home-file.ts decides where each stored document is listed).
 * The welcome letter and the home history are featured at the top. Copies (printed folder, presentation,
 * compiled collection, ZIP) stay available under "Other copies and downloads".
 */
function HomeFile({ parcel, address, docs, several, first }: { parcel: string; address: string; docs: Doc[]; several: boolean; first: boolean }) {
  const titleId = `home-${parcel || "mine"}-title`;
  const { welcome, history } = featured(docs);
  const featuredIds = new Set([welcome?.id, history?.id].filter(Boolean));
  const listed = docs.filter((d) => !featuredIds.has(d.id));
  const copies = listed.filter(isCopyOrBundle);
  const name = parcel ? longAddress(address) : "your home";
  return (
    <section className="members-section" aria-labelledby={titleId} id={parcel ? `home-${parcel}` : "my-home"}>
      {first && parcel && <span id="my-home" />}
      <p className="section-label">Your Home File</p>
      <h2 id={titleId} className="guide-h2">
        {parcel ? address : "Your home history"}
      </h2>
      {docs.length === 0 ? (
        <p className="muted">Your home history packet will appear here when it is ready.</p>
      ) : (
        <div className="home-file">
          {HOME_FILE_VIEW.map((section, i) => {
            const items = listed.filter((d) => !isCopyOrBundle(d) && sectionOf(d) === section.id);
            const showFeatured = section.id === "welcome" && (welcome || history);
            const showCopies = section.id === "welcome" && copies.length > 0;
            if (!items.length && !showFeatured && !showCopies) return null;
            const count = items.length + (section.id === "welcome" ? featuredIds.size + copies.length : 0);
            return (
              <details key={section.id} className="home-file-part" open={i === 0}>
                <summary>
                  <span className="home-file-part-title">{section.title}</span>
                  <span className="home-file-part-count">
                    {count} {count === 1 ? "document" : "documents"}
                  </span>
                </summary>
                <div className="home-file-part-body">
                  {showFeatured && (
                    <div className="home-file-featured">
                      {welcome && <FeaturedDoc doc={welcome} label="Start here" title="Welcome to Your Home File" />}
                      {history && <FeaturedDoc doc={history} label="Your home’s story" title={`The History of ${name}`} />}
                    </div>
                  )}
                  {items.length > 0 && (
                    <ul className="docs">
                      {items.map((d) => (
                        <DocRow key={d.id} doc={d} />
                      ))}
                    </ul>
                  )}
                  {showCopies && (
                    <div className="home-file-copies">
                      <h3 className="home-file-title">Other copies and downloads</h3>
                      <p className="muted">The same documents gathered together, to print or keep.</p>
                      <ul className="docs">
                        {copies.map((d) => (
                          <DocRow key={d.id} doc={d} />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      )}
    </section>
  );
}

function FeaturedDoc({ doc, label, title }: { doc: Doc; label: string; title: string }) {
  return (
    <div className="welcome-card">
      <p className="latest-label">{label}</p>
      <h3 className="latest-title">{title}</h3>
      {doc.description && <p>{doc.description}</p>}
      <p className="latest-actions">
        <a className="button button-red" href={`/members/document/${doc.id}`} target="_blank" rel="noopener">
          Open PDF<span className="sr-only">: {title} (opens in a new tab)</span>
        </a>
      </p>
    </div>
  );
}

function DocRow({ doc }: { doc: Doc }) {
  return (
    <li className="doc doc-open">
      <div className="doc-text">
        <h3 className="doc-title">{doc.title}</h3>
        {doc.description && <p className="doc-about">{doc.description}</p>}
      </div>
      <div className="doc-action">
        <a className="doc-link" href={`/members/document/${doc.id}${/\.pdf$/i.test(doc.file_name ?? "") ? "" : "?download"}`} target="_blank" rel="noopener">
          Open document<span className="sr-only">: {doc.title} (opens in a new tab)</span>
        </a>
        {doc.size_bytes ? (
          <span className="doc-size">
            {(doc.file_name?.split(".").pop() ?? "file").toUpperCase()}, {size(doc.size_bytes)}
          </span>
        ) : null}
      </div>
    </li>
  );
}
