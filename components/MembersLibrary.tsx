import type { ReactNode } from "react";
import { OpenFromHash } from "./OpenFromHash";
import { LIBRARY_AREAS, LIBRARY_GROUPS, STAGING_PREFIX, STAGING_SUBJECTS, libraryGroupOf, type LibraryDoc } from "@/lib/library-view";

/**
 * The shared members' library on /members, below the member's own Home File: one collapsible area per subject,
 * each document listed once (lib/library-view.ts). `renderDoc` draws one document row.
 */
export function MembersLibrary<T extends LibraryDoc>({ docs, staged = [], renderDoc }: { docs: T[]; staged?: T[]; renderDoc: (d: T) => ReactNode }) {
  const placed = docs.map((d) => ({ d, group: libraryGroupOf(d) }));
  return (
    <section id="library" className="members-section members-library" aria-labelledby="library-title">
      <p className="section-label">Shared with every member</p>
      <h2 id="library-title" className="guide-h2">
        Members’ Library
      </h2>
      <p className="muted members-library-intro">General Lincolnville, CRA, demolition and research documents. These are not part of your Home File.</p>
      <OpenFromHash />
      <div className="home-file">
        {LIBRARY_AREAS.map((area) => {
          const groups = LIBRARY_GROUPS.filter((g) => g.area === area.id)
            .map((g) => ({ title: g.title, items: placed.filter((p) => p.group === g.title).map((p) => p.d) }))
            .filter((g) => g.items.length);
          const count = groups.reduce((n, g) => n + g.items.length, 0);
          if (!count) return null;
          return (
            <details key={area.id} id={`library-${area.id}`} className="home-file-part">
              <summary>
                <span className="home-file-part-title">{area.title}</span>
                <span className="home-file-part-count">
                  {count} {count === 1 ? "document" : "documents"}
                </span>
              </summary>
              <div className="home-file-part-body">
                {"note" in area && area.note && <p className="muted members-library-note">{area.note}</p>}
                {groups.map((g) => (
                  <div key={g.title} className="home-file-section">
                    <h3 className="home-file-title">{g.title}</h3>
                    <ul className="docs">{g.items.map((d) => renderDoc(d))}</ul>
                  </div>
                ))}
                {area.id === "research" && staged.length > 0 && <StagedMohlman staged={staged} renderDoc={renderDoc} />}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

/** Administrator only (the page passes staged files only to admins): Mohlman files waiting for review, by subject. */
function StagedMohlman<T extends LibraryDoc>({ staged, renderDoc }: { staged: T[]; renderDoc: (d: T) => ReactNode }) {
  const subjectOf = (d: T) => d.category.slice(STAGING_PREFIX.length);
  const subjects = [...STAGING_SUBJECTS, ...new Set(staged.map(subjectOf).filter((x) => !STAGING_SUBJECTS.includes(x)))];
  return (
    <div className="library-staging">
      <p className="section-label">Administrator only · not visible to members</p>
      <h3 className="home-file-title">Mohlman Research: Staged for Review ({staged.length})</h3>
      <p className="muted members-library-note">
        Each item is labeled “Historical Source — Pending Root &amp; Simmer Review” with any corrections it needs. Nothing here is published to members.
      </p>
      {subjects.map((subject) => {
        const items = staged.filter((d) => subjectOf(d) === subject);
        if (!items.length) return null;
        return (
          <div key={subject} className="home-file-section">
            <h4 className="library-staging-subject">
              {subject} ({items.length})
            </h4>
            <ul className="docs">{items.map((d) => renderDoc(d))}</ul>
          </div>
        );
      })}
    </div>
  );
}
