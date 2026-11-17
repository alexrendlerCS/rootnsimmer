import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { DOCUMENT_CATEGORIES, requireMember } from "@/lib/members";
import { createClient } from "@/lib/supabase/server";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `Members’ library | ${site.fullName}`,
  robots: { index: false },
};

type Doc = { id: string; title: string; category: string; description: string | null; visibility: string; size_bytes: number | null };

const size = (b: number | null) => (b ? (b > 1_000_000 ? `${Math.round(b / 1_000_000)} MB` : `${Math.max(1, Math.round(b / 1000))} KB`) : "");

export default async function MembersPage() {
  const member = await requireMember("/members");
  const supabase = await createClient();
  const { data } = await supabase
    .from("documents")
    .select("id, title, category, description, visibility, size_bytes")
    .eq("archived", false)
    .order("created_at", { ascending: false });
  const docs = (data ?? []) as Doc[];
  const mine = docs.filter((d) => d.visibility === "private");
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

        <section className="members-section" aria-labelledby="my-home-title" id="my-home">
          <h2 id="my-home-title" className="guide-h2">
            Your home history
          </h2>
          {mine.length ? (
            <ul className="docs">
              {mine.map((d) => (
                <DocRow key={d.id} doc={d} />
              ))}
            </ul>
          ) : (
            <p className="muted">Your home history packet will appear here when it is ready.</p>
          )}
        </section>

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

function DocRow({ doc }: { doc: Doc }) {
  return (
    <li className="doc doc-open">
      <div className="doc-text">
        <h3 className="doc-title">{doc.title}</h3>
        {doc.description && <p className="doc-about">{doc.description}</p>}
      </div>
      <div className="doc-action">
        <a className="doc-link" href={`/members/document/${doc.id}`} target="_blank" rel="noopener">
          Open document<span className="sr-only">: {doc.title} (opens in a new tab)</span>
        </a>
        {doc.size_bytes ? <span className="doc-size">PDF, {size(doc.size_bytes)}</span> : null}
      </div>
    </li>
  );
}
