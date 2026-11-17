import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { DOCUMENT_CATEGORIES, HOME_FILE_SECTIONS, requireMember } from "@/lib/members";
import { createClient } from "@/lib/supabase/server";
import { addressOf, homeOfDoc } from "@/lib/home-map-data";
import { SiteShell } from "@/components/SiteShell";

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
  const shared = docs.filter((d) => d.visibility === "shared");
  const order = (c: string) => {
    const i = (DOCUMENT_CATEGORIES as readonly string[]).indexOf(c);
    return i === -1 ? 99 : i;
  };
  const categories = [...new Set(shared.map((d) => d.category))].sort((a, b) => order(a) - order(b));
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

        {categories.map((c) => (
          <section key={c} className="members-section" aria-labelledby={`cat-${order(c)}`}>
            <h2 id={`cat-${order(c)}`} className="guide-h2">
              {c}
            </h2>
            <ul className="docs">
              {shared
                .filter((d) => d.category === c)
                .map((d) => (
                  <DocRow key={d.id} doc={d} />
                ))}
            </ul>
          </section>
        ))}
        {shared.length === 0 && <p className="muted">The shared library is being filled in. Check back soon.</p>}

        <p className="notice">
          These documents are for Lincolnville Connection members. Please do not post them publicly. Root &amp; Simmer
          Hospitality Co. is independent and not affiliated with or endorsed by the City of St. Augustine or its CRA.
        </p>
      </div>
    </SiteShell>
  );
}

function HomeFile({ parcel, address, docs, several, first }: { parcel: string; address: string; docs: Doc[]; several: boolean; first: boolean }) {
  const welcome = docs.find((d) => d.category === "Start here");
  const rest = docs.filter((d) => d !== welcome);
  const sections = [...new Set(rest.map((d) => d.category))];
  const titleId = `home-${parcel || "mine"}-title`;
  return (
    <section className="members-section" aria-labelledby={titleId} id={parcel ? `home-${parcel}` : "my-home"}>
      {first && parcel && <span id="my-home" />}
      {several && <p className="section-label">Your home history</p>}
      <h2 id={titleId} className="guide-h2">
        {several ? address : "Your home history"}
      </h2>
      {welcome ? (
        <>
          <div className="welcome-card">
            <p className="latest-label">Start here</p>
            <h3 className="latest-title">{welcome.title}</h3>
            {welcome.description && <p>{welcome.description}</p>}
            <p className="latest-actions">
              <a className="button button-red" href={`/members/document/${welcome.id}`} target="_blank" rel="noopener">
                {/welcome/i.test(welcome.title) ? "Read your welcome letter" : `Open the ${welcome.title}`}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
          {sections.map((section) => (
            <div key={section} className="home-file-section">
              <h3 className="home-file-title">{section}</h3>
              <ul className="docs">
                {rest
                  .filter((d) => d.category === section)
                  .map((d) => (
                    <DocRow key={d.id} doc={d} />
                  ))}
              </ul>
            </div>
          ))}
        </>
      ) : docs.length ? (
        <ul className="docs">
          {docs.map((d) => (
            <DocRow key={d.id} doc={d} />
          ))}
        </ul>
      ) : (
        <p className="muted">Your home history packet will appear here when it is ready.</p>
      )}
    </section>
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
