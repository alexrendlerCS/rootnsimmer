import Link from "next/link";
import { packets, preservePages, protectJoin, protectNote, type PreserveSlug } from "@/content/protect";
import { SiteShell } from "./SiteShell";

export const preserveHref = (slug: PreserveSlug) => (slug ? `/preserve-historic-homes/${slug}` : "/preserve-historic-homes");

function Route({ current, id }: { current: PreserveSlug; id: string }) {
  return (
    <ol className="route" aria-labelledby={id}>
      {preservePages.map((p, i) => (
        <li key={p.slug} aria-current={p.slug === current ? "page" : undefined}>
          <Link href={preserveHref(p.slug)}>
            <span className="route-num">{i + 1}</span>
            <span>{p.title}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/** Frame for every Preserve Historic Homes page: side menu, title, previous/next. */
export function PreserveGuide({
  slug,
  title,
  lede,
  children,
}: {
  slug: PreserveSlug;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  const index = preservePages.findIndex((p) => p.slug === slug);
  const prev = preservePages[index - 1];
  const next = preservePages[index + 1];
  return (
    <SiteShell>
      <div className="wrap guide">
        <aside className="guide-aside">
          <p id="preserve-route-desktop" className="route-title">
            Preserve Historic Homes
          </p>
          <Route current={slug} id="preserve-route-desktop" />
          <p className="route-title aside-back">
            <Link href="/library">All documents in the Library</Link>
          </p>
        </aside>

        <article className="guide-main">
          <header className="guide-head">
            <p className="section-label">Preserve Historic Homes</p>
            <h1 className="page-title">{title}</h1>
            {lede && <p className="page-lede">{lede}</p>}
            <details className="route-mobile">
              <summary>
                <span id="preserve-route-mobile">Preserve Historic Homes</span>
                <span className="route-count">
                  Page {index + 1} of {preservePages.length}
                </span>
              </summary>
              <Route current={slug} id="preserve-route-mobile" />
            </details>
          </header>

          {children}

          <p className="notice">{protectNote}</p>

          <nav className="pager" aria-label="Preserve Historic Homes pages">
            {prev ? (
              <Link href={preserveHref(prev.slug)} className="pager-link">
                <small>Previous</small>
                {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={preserveHref(next.slug)} className="pager-link pager-next">
                <small>Next</small>
                {next.title}
              </Link>
            )}
          </nav>
        </article>
      </div>
    </SiteShell>
  );
}

const Lock = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
    <rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor" />
    <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

/** One or more member packets, by id, with the join panel underneath. */
export function PacketCards({ ids, join = true }: { ids: string[]; join?: boolean }) {
  const list = packets.filter((p) => ids.includes(p.id));
  return (
    <>
      <div className={list.length > 1 ? "packets" : "packets packets-one"}>
        {list.map((p) => (
          <article key={p.id} id={p.id} className="packet" aria-labelledby={`${p.id}-title`}>
            <p className="packet-number">{p.number}</p>
            <h3 id={`${p.id}-title`}>{p.title}</h3>
            <ul>
              {p.contents.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="packet-foot">
              <span className="doc-badge">
                <Lock />
                Members only
              </span>
              <span className="doc-size">PDF, {p.pages}</span>
            </p>
          </article>
        ))}
      </div>
      {join && (
        <div className="members-divider">
          <h3 className="members-divider-title">{list.length > 1 ? protectJoin.title : "Get the packet"}</h3>
          <p>{protectJoin.body}</p>
          <Link className="button" href={protectJoin.href}>
            {protectJoin.button}
          </Link>
        </div>
      )}
    </>
  );
}
