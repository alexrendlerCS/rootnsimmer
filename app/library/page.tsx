import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import {
  latestUpdate,
  libraryHero,
  libraryMembership,
  libraryNote,
  membersLock,
  shelves,
  type LibraryDoc,
  type Shelf,
} from "@/content/library";
import { GuideSection } from "@/components/CraGuide";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `Library | ${site.fullName}`,
  description: libraryHero.lede,
  alternates: { canonical: "/library" },
};

const Lock = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
    <rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor" />
    <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

function Doc({ doc }: { doc: LibraryDoc }) {
  if (doc.access === "open" && doc.file) {
    return (
      <li className="doc doc-open">
        <div className="doc-text">
          <h3 className="doc-title">{doc.title}</h3>
          <p className="doc-source">{doc.source}</p>
          {doc.about && <p className="doc-about">{doc.about}</p>}
        </div>
        <div className="doc-action">
          <a className="doc-link" href={doc.file} target="_blank" rel="noopener">
            Open document<span className="sr-only">: {doc.title} (opens in a new tab)</span>
          </a>
          {doc.size && <span className="doc-size">{doc.size}</span>}
        </div>
      </li>
    );
  }
  // Members-only: the title is visible, but the link goes to the membership section, not the file.
  return (
    <li className="doc-members">
      <Link className="doc doc-locked" href={membersLock.href}>
        <span className="doc-text">
          <span className="doc-title">{doc.title}</span>
          <span className="doc-source">{doc.source}</span>
        </span>
        <span className="doc-badge">
          <Lock />
          {membersLock.badge}
          <span className="sr-only">: join the Lincolnville Connection to open</span>
        </span>
      </Link>
    </li>
  );
}

function ShelfMenu({ id, groups }: { id: string; groups: { name: string; items: Shelf[] }[] }) {
  return (
    <>
      {groups.map((g) => (
        <div key={g.name} className="shelf-menu-group">
          <p className="route-title" id={`${id}-${g.name.length}`}>
            {g.name}
          </p>
          <ul className="shelf-menu" aria-labelledby={`${id}-${g.name.length}`}>
            {g.items.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span>{s.title}</span>
                  <span className="shelf-count">{s.docs.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default function LibraryPage() {
  const free = shelves.filter((s) => s.kind !== "members");
  const members = shelves.filter((s) => s.kind === "members");
  const groups = [
    { name: libraryHero.freeGroup, items: free },
    { name: libraryHero.membersGroup, items: members },
  ];

  return (
    <SiteShell>
      <div className="wrap guide library">
        <aside className="guide-aside">
          <nav aria-label="Library shelves">
            <ShelfMenu id="desk" groups={groups} />
          </nav>
        </aside>

        <article className="guide-main">
          <header className="guide-head">
            <p className="section-label">{libraryHero.label}</p>
            <h1 className="page-title">{libraryHero.title}</h1>
            <p className="page-lede">{libraryHero.lede}</p>
            <details className="route-mobile">
              <summary>
                <span>Jump to a shelf</span>
                <span className="route-count">{shelves.length} shelves</span>
              </summary>
              <nav aria-label="Library shelves">
                <ShelfMenu id="mob" groups={groups} />
              </nav>
            </details>
          </header>

          <section className="feature-protect" aria-labelledby="feature-protect-title">
            <div>
              <h2 id="feature-protect-title">Preserve historic homes</h2>
              <p>
                How demolition review works, how to get a home recognized as historic, and the two member packets
                that walk you through both.
              </p>
            </div>
            <p className="feature-actions">
              <Link className="button button-red" href="/preserve-historic-homes">
                Start here
              </Link>
              <Link className="button" href="/preserve-historic-homes/map">
                Find your home on the map
              </Link>
            </p>
          </section>

          <section className="latest" aria-labelledby="latest-title">
            <p className="latest-label">{latestUpdate.label}</p>
            <h2 id="latest-title" className="latest-title">
              {latestUpdate.title}
            </h2>
            <p className="latest-date">{latestUpdate.date}</p>
            <p>{latestUpdate.about}</p>
            <p className="latest-actions">
              <a className="button button-red" href={latestUpdate.file} target="_blank" rel="noopener">
                Open the meeting guide<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span className="doc-size">{latestUpdate.size}</span>
            </p>
          </section>

          {free.map((shelf) => (
            <GuideSection key={shelf.id} id={shelf.id} title={shelf.title}>
              <p className="shelf-question">{shelf.question}</p>
              <ul className="docs">
                {shelf.docs.map((d) => (
                  <Doc key={d.title} doc={d} />
                ))}
              </ul>
            </GuideSection>
          ))}

          <section className="members-divider" aria-labelledby="members-divider-title">
            <h2 id="members-divider-title" className="members-divider-title">{libraryHero.membersGroup}</h2>
            <p>{libraryMembership.body}</p>
            <Link className="button" href={libraryMembership.href}>
              {libraryMembership.button}
            </Link>
          </section>

          {members.map((shelf) => (
            <GuideSection key={shelf.id} id={shelf.id} title={shelf.title}>
              <p className="shelf-question">{shelf.question}</p>
              <ul className="docs">
                {shelf.docs.map((d) => (
                  <Doc key={d.title} doc={d} />
                ))}
              </ul>
            </GuideSection>
          ))}

          <div className="panel library-join">
            <h3>{libraryMembership.title}</h3>
            <p>{libraryMembership.body}</p>
            <Link className="button" href={libraryMembership.href}>
              {libraryMembership.button}
            </Link>
          </div>

          <p className="notice">{libraryNote}</p>
        </article>
      </div>
    </SiteShell>
  );
}
