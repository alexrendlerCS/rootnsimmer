import type { Metadata } from "next";
import { site } from "@/content/site";
import { latestIssue, newsletterAdvertise, newsletterContents, newsletterHero, newsletterSignup, supportLocally } from "@/content/newsletter";
import { EmailDraftButton } from "@/components/EmailDraftButton";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: `Newsletter | ${site.fullName}`,
  description: newsletterHero.lede,
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <SiteShell>
      <div className="wrap newsletter">
        <header className="newsletter-head">
          <p className="section-label">{newsletterHero.label}</p>
          <h1 className="page-title">{newsletterHero.title}</h1>
          <p className="page-lede">{newsletterHero.lede}</p>
        </header>

        <section className="latest newsletter-latest" aria-labelledby="latest-title">
          <p className="latest-label">{latestIssue.label}</p>
          <h2 id="latest-title" className="latest-title">
            {latestIssue.title}
          </h2>
          <p className="latest-date">{latestIssue.date}</p>
          <p>{latestIssue.about}</p>
          <p className="latest-actions">
            <a className="button button-red" href={latestIssue.file} target="_blank" rel="noopener">
              Read Issue 1<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className="doc-size">{latestIssue.size}</span>
          </p>
        </section>

        <section className="newsletter-section" aria-labelledby="contents-title">
          <h2 id="contents-title" className="guide-h2">
            {newsletterContents.title}
          </h2>
          <dl className="glance newsletter-contents">
            {newsletterContents.items.map((i) => (
              <div key={i.name}>
                <dt>{i.name}</dt>
                <dd>{i.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="support-locally" className="newsletter-section" aria-labelledby="local-title">
          <h2 id="local-title" className="local-title">
            {supportLocally.title}
          </h2>
          <p className="local-intro">{supportLocally.intro}</p>
          <ul className="local-list">
            {supportLocally.places.map((p) => (
              <li key={p.name} className="local-card">
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
            ))}
          </ul>
          <p className="fine">{supportLocally.note}</p>
        </section>

        <div className="newsletter-actions">
          <section className="panel" aria-labelledby="signup-title">
            <h2 id="signup-title" className="newsletter-panel-title">
              {newsletterSignup.title}
            </h2>
            <p>{newsletterSignup.body}</p>
            <EmailDraftButton label={newsletterSignup.button} subject={newsletterSignup.subject} body={newsletterSignup.emailBody} />
          </section>
          <section className="panel" aria-labelledby="advertise-title">
            <h2 id="advertise-title" className="newsletter-panel-title">
              {newsletterAdvertise.title}
            </h2>
            <p>{newsletterAdvertise.body}</p>
            <EmailDraftButton label={newsletterAdvertise.button} subject={newsletterAdvertise.subject} body={newsletterAdvertise.emailBody} />
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
