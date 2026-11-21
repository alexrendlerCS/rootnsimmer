import Link from "next/link";
import type { LinkGroup } from "@/content/site";

/** A grouped list of links at the bottom of a landing page (Explore, Community). Each group has its own #id. */
export function MoreLinks({ id, title, groups }: { id: string; title: string; groups: LinkGroup[] }) {
  return (
    <section id={id} className="page-section more-links" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <h2 id={`${id}-title`} className="guide-h2">
          {title}
        </h2>
        <div className="more-links-grid">
          {groups.map((g) => (
            <div key={g.id} id={g.id} className="more-links-group">
              <h3>{g.title}</h3>
              {g.intro && <p className="more-links-intro">{g.intro}</p>}
              <ul>
                {g.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href}>{l.label}</Link>
                    {l.note && <span>{l.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
