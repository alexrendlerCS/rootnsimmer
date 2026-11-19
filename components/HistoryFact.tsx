import type { Fact } from "@/content/facts";

/** A quiet "from the record" note: a year or number, one sentence and its source. */
export function HistoryFact({ fact }: { fact: Fact }) {
  return (
    <aside className="history-fact" aria-label="From the record">
      <div className="wrap">
        <div className="history-fact-inner">
        <p className="history-fact-mark" aria-hidden="true">
          {fact.mark}
        </p>
        <div>
          <p className="history-fact-text">{fact.text}</p>
          <p className="history-fact-source">From the record · {fact.source}</p>
        </div>
        </div>
      </div>
    </aside>
  );
}
