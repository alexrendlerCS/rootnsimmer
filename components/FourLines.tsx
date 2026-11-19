import Link from "next/link";
import { lines, ourWorkPage } from "@/content/gaps";

/** Home page "What we do": the four lines of work as four short cards, each linking to its main page. */
export function FourLines() {
  return (
    <section id="what-we-do" className="section four-lines" aria-labelledby="four-lines-title">
      <div className="wrap">
        <p className="section-label">What we do</p>
        <h2 id="four-lines-title">{ourWorkPage.title}</h2>
        <ul className="four-lines-list">
          {lines.map((l) => (
            <li key={l.id} className="four-lines-card">
              <p className="four-lines-num" aria-hidden="true">
                {l.number}
              </p>
              <h3>{l.title}</h3>
              <p className="muted">{l.who}</p>
              <Link className="text-link" href={l.pages[0].href}>
                {l.pages[0].label}
              </Link>
            </li>
          ))}
        </ul>
        <p>
          <Link className="button" href="/our-work">
            See all four lines of work
          </Link>
        </p>
      </div>
    </section>
  );
}
