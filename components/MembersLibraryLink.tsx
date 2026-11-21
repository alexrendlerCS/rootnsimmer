import Link from "next/link";
import { LIBRARY_AREAS, LIBRARY_GROUPS, type LibraryAreaId } from "@/lib/library-view";

/**
 * A pointer from a public section page to its area of the Members' Library (/members#library-<area>).
 * It names the groups but never lists or copies documents, so each document keeps one listing. Opening it needs a member sign-in.
 */
export function MembersLibraryLink({ area, intro }: { area: LibraryAreaId; intro: string }) {
  const a = LIBRARY_AREAS.find((x) => x.id === area)!;
  const groups = LIBRARY_GROUPS.filter((g) => g.area === area && g.title !== "Other documents").map((g) => g.title);
  return (
    <aside className="panel library-pointer" aria-label={`Members’ Library: ${a.title}`}>
      <p className="section-label">Members’ Library · Members only</p>
      <h3>{a.title} documents</h3>
      <p>{intro}</p>
      <p className="library-pointer-groups">{groups.join(" · ")}</p>
      <p>
        <Link className="button" href={`/members#library-${area}`}>
          Open the {a.title} documents
        </Link>
      </p>
    </aside>
  );
}
