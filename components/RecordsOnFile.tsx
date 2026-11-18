import { propertyRecords, recordsCopy, recordStatusLabel } from "@/content/property-records";

/** "Records on file" for one property: every record, its status, and (for members) a link to open it. */
export function RecordsOnFile({ parcel, links, compact = false }: { parcel: string; links: Record<string, string>; compact?: boolean }) {
  const p = propertyRecords[parcel];
  if (!p) return null;
  const inHand = p.records.filter((r) => r.status === "in-hand").length;
  return (
    <div className={`records-on-file${compact ? " is-compact" : ""}`}>
      <p className="records-head">
        <strong>{recordsCopy.title}</strong> · {inHand} of {p.records.length} in hand
      </p>
      {!compact && <p className="records-intro">{recordsCopy.intro}</p>}
      <ul>
        {p.records.map((r) => {
          const id = r.fileName ? links[r.fileName] : undefined;
          return (
            <li key={r.title} className={`is-${r.status}`}>
              <span className="records-status">{recordStatusLabel[r.status]}</span>
              <span className="records-text">
                <span className="records-title">{r.title}</span>
                <span className="records-meta">
                  {[r.date, r.source, r.requested ? `requested ${r.requested}` : ""].filter(Boolean).join(" · ")}
                </span>
                {!compact && r.why && <span className="records-why">{r.why}</span>}
              </span>
              {r.fileName &&
                (id ? (
                  <a className="records-open" href={`/members/document/${id}`} target="_blank" rel="noopener">
                    {recordsCopy.memberOpen}
                    <span className="sr-only">: {r.title} (opens in a new tab)</span>
                  </a>
                ) : (
                  <a className="records-lock" href={recordsCopy.memberLockHref}>
                    {recordsCopy.memberLock}
                  </a>
                ))}
            </li>
          );
        })}
      </ul>
      <p className="records-note">{recordsCopy.memberNote}</p>
    </div>
  );
}
