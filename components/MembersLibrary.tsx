import type { ReactNode } from "react";
import { OpenFromHash } from "./OpenFromHash";
import { LIBRARY_AREAS, LIBRARY_GROUPS, libraryGroupOf, type LibraryDoc } from "@/lib/library-view";

/**
 * The shared members' library on /members, below the member's own Home File: one collapsible area per subject,
 * each document listed once (lib/library-view.ts). `renderDoc` draws one document row.
 */
export function MembersLibrary<T extends LibraryDoc>({ docs, renderDoc }: { docs: T[]; renderDoc: (d: T) => ReactNode }) {
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
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
