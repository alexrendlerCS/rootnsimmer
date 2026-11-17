import Link from "next/link";
import { craContact, craKicker, craMembersOnly, craPages, joinCta, type CraSlug } from "@/content/cra";
import { SiteShell } from "./SiteShell";

export const craHref = (slug: CraSlug) => (slug ? `/cra-lincolnville/${slug}` : "/cra-lincolnville");

/** Text in [SQUARE BRACKETS] is a placeholder: show it as one until the real words arrive. */
export const isPlaceholder = (text: string) => /^\[.*\]$/.test(text.trim());

export function Placeholder({ children }: { children: React.ReactNode }) {
  return <p className="placeholder">{children}</p>;
}

/** A paragraph that renders as a placeholder box when its text is still [IN BRACKETS]. */
export function Para({ text }: { text: string }) {
  return isPlaceholder(text) ? <Placeholder>{text}</Placeholder> : <p>{text}</p>;
}

function Route({ current, id }: { current: CraSlug; id: string }) {
  return (
    <ol className="route" aria-labelledby={id}>
      {craPages.map((p, i) => (
        <li key={p.slug} aria-current={p.slug === current ? "page" : undefined}>
          <Link href={craHref(p.slug)}>
            <span className="route-num">{i + 1}</span>
            <span>
              {p.title}
              {craMembersOnly.includes(p.slug) && <span className="route-members"> · Members only</span>}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/** Shared frame for every page of the CRA guide: title, wayfinding menu, contact and previous/next. */
export function CraGuide({
  slug,
  lede,
  children,
}: {
  slug: CraSlug;
  lede?: string;
  children: React.ReactNode;
}) {
  const index = craPages.findIndex((p) => p.slug === slug);
  const page = craPages[index];
  const prev = craPages[index - 1];
  const next = craPages[index + 1];

  return (
    <SiteShell>
      <div className="wrap guide">
        <aside className="guide-aside">
          <p id="route-title-desktop" className="route-title">
            In this guide
          </p>
          <Route current={slug} id="route-title-desktop" />
        </aside>

        <article className="guide-main">
          <header className="guide-head">
            <p className="section-label">{craKicker}</p>
            <h1 className="page-title">{page.title}</h1>
            {lede && <p className="page-lede">{lede}</p>}
            <details className="route-mobile">
              <summary>
                <span id="route-title-mobile">In this guide</span>
                <span className="route-count">
                  Page {index + 1} of {craPages.length}
                </span>
              </summary>
              <Route current={slug} id="route-title-mobile" />
            </details>
          </header>

          {children}

          <section className="guide-contact" aria-labelledby="guide-contact-title">
            <h2 id="guide-contact-title" className="guide-contact-title">
              Questions? Get in touch.
            </h2>
            <p>
              <strong>{craContact.name}</strong>, {craContact.role}
            </p>
            <p className="guide-contact-links">
              <a href={craContact.phoneHref}>{craContact.phone}</a>
              <a href={`mailto:${craContact.email}`}>{craContact.email}</a>
            </p>
          </section>

          <nav className="pager" aria-label="Guide pages">
            {prev ? (
              <Link href={craHref(prev.slug)} className="pager-link">
                <small>Previous</small>
                {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={craHref(next.slug)} className="pager-link pager-next">
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

/** "Join. Show up. Be heard. Vote." — the call to action on the guide's main page and the Connection page. */
export function JoinCta({ children }: { children?: React.ReactNode }) {
  return (
    <section className="join" aria-label={joinCta.words.join(" ")}>
      <p className="join-words" aria-hidden="true">
        {joinCta.words.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </p>
      {children && <div className="join-actions">{children}</div>}
    </section>
  );
}

/** Small section within a guide page. */
export function GuideSection({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`guide-section ${className}`} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="guide-h2">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Sources({ text }: { text: string }) {
  return <p className="fine guide-sources">{text}</p>;
}
