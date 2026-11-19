"use client";

import { useState } from "react";
import type { TimelineEntry } from "@/content/tracts";

/** Year stops along a line; choosing one shows that moment. Every entry is in the page for search and print. */
export function TractTimeline({ entries }: { entries: TimelineEntry[] }) {
  const [active, setActive] = useState(0);
  const e = entries[active];

  return (
    <div className="tl">
      <ol className="tl-stops" aria-label="Choose a year">
        {entries.map((entry, i) => (
          <li key={entry.year}>
            <button
              type="button"
              className="tl-stop"
              aria-pressed={i === active}
              aria-controls="tl-panel"
              onClick={() => setActive(i)}
            >
              <span className="tl-dot" aria-hidden="true" />
              <span className="tl-year">{entry.year}</span>
              <span className="tl-stop-title">{entry.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div id="tl-panel" className="tl-panel" aria-live="polite">
        <p className="tl-panel-year" aria-hidden="true">
          {e.year}
        </p>
        <div>
          <h3 className="tl-panel-title">
            <span className="sr-only">{e.year}: </span>
            {e.title}
          </h3>
          <p>{e.body}</p>
          <p className="evidence">
            <span className="evidence-tag" data-verified={e.evidence !== "To verify"}>
              {e.evidence}
            </span>
            {e.source && <span className="evidence-source">{e.source}</span>}
          </p>
          <div className="tl-nav">
            <button type="button" className="text-link tl-step" disabled={active === 0} onClick={() => setActive(active - 1)}>
              Earlier
            </button>
            <button
              type="button"
              className="text-link tl-step"
              disabled={active === entries.length - 1}
              onClick={() => setActive(active + 1)}
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
