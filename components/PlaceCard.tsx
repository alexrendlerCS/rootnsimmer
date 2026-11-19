import type { LocalPlace } from "@/content/newsletter";

/** A Support Locally or partner card: flyer photo, optional "Partner" tag, kind, name, description, where, visit, website. */
export function PlaceCard({ p, badge }: { p: LocalPlace; badge?: string }) {
  return (
          <li className="local-card">
            {p.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="local-photo" src={p.photo.src} alt={p.photo.alt} loading="lazy" />
            )}
            {badge && <p className="partner-badge">{badge}</p>}
            <p className="local-kind">{p.kind}</p>
            <h3>{p.name}</h3>
            <p>{p.about}</p>
            {(p.where || p.visit) && (
              <dl className="local-facts">
                {p.where && (
                  <div>
                    <dt>Where</dt>
                    <dd>{p.where}</dd>
                  </div>
                )}
                {p.visit && (
                  <div>
                    <dt>Visit</dt>
                    <dd>{p.visit}</dd>
                  </div>
                )}
              </dl>
            )}
            <a className="doc-link local-link" href={p.website} target="_blank" rel="noopener noreferrer">
              {p.websiteLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
  );
}
