import { rootnsimmerHelps, type ProjectConcern, type ProjectRecord } from "@/content/projects";

/** "The records behind it": City, County and State documents and pages, each with a plain-words note. */
export function ProjectRecords({ id = "records", title, intro, records }: { id?: string; title: string; intro?: string; records: ProjectRecord[] }) {
  return (
    <section id={id} className="bodega-section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="guide-h2">
        {title}
      </h2>
      {intro && <p>{intro}</p>}
      <ul className="project-records">
        {records.map((r) => (
          <li key={r.title + r.source}>
            <div>
              <h3>{r.title}</h3>
              <p className="project-record-source">{r.source}</p>
              <p>{r.note}</p>
            </div>
            {r.href && (
              <a className="doc-link" href={r.href} target="_blank" rel="noopener">
                {r.kind === "Web page" ? "Open the page" : "Open the document"}
                <span className="sr-only">: {r.title} (opens in a new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** The CRA's and the City's concerns, each with how Root & Simmer can help answer it. */
export function ProjectConcerns({ title, intro, concerns }: { title: string; intro?: string; concerns: ProjectConcern[] }) {
  return (
    <section className="bodega-section" aria-labelledby="concerns-title">
      <h2 id="concerns-title" className="guide-h2">
        {title}
      </h2>
      {intro && <p>{intro}</p>}
      <dl className="glance project-concerns">
        {concerns.map((c) => (
          <div key={c.concern}>
            <dt>{c.concern}</dt>
            <dd>{c.help}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** How Root & Simmer helps: the same four promises on every project page. */
export function ProjectHelp() {
  const h = rootnsimmerHelps;
  return (
    <section className="bodega-section project-help" aria-labelledby="help-title">
      <h2 id="help-title" className="guide-h2">
        {h.title}
      </h2>
      <p>{h.intro}</p>
      <ol className="project-help-list">
        {h.ways.map((w, i) => (
          <li key={w.title}>
            <span className="twine-num" aria-hidden="true">
              {i + 1}
            </span>
            <div>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
