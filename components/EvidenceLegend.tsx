/**
 * "How we label what we know": the evidence key from Kimberly's "Guidelines for selling self-guided walks".
 * Five labels: Kimberly added "Public record" on Nov 19, 2026, to support the use of addresses and names from public records.
 */
export const evidenceLabels = [
  { name: "Directory entry", body: "A name, trade and address printed in a city directory (1885, 1899, 1907 or 1911–12).", example: "“Charles T. Evans, barber, 66 Washington Street, 1907.”" },
  { name: "National Register (1991)", body: "What the 1991 nomination for the Lincolnville Historic District says about a building or street.", example: "“Washington Street was the main Black business district.”" },
  { name: "Public record", body: "A City, County or State record: a deed, permit, HARB file, site file or property card. House numbers and names in these records are public information.", example: "“The County lists a masonry wall as the lot’s only remaining feature.” Public record (St. Johns County Property Appraiser)" },
  { name: "Oral history", body: "A resident’s or descendant’s account, shared with written permission and credited to them.", example: "(sample wording only) “My grandmother sold pies from this porch.” Oral history, shared by the family with permission." },
  { name: "To verify", body: "A faint reading, two sources that disagree, or a claim with no record yet.", example: "“Palace Market opened at 87 Washington in 1914.” (sources give three addresses)" },
];

const rules = [
  { title: "One label per fact.", body: "If two kinds of source agree, we use the stronger one: a record before an oral history." },
  { title: "Disagreement is shown, not hidden.", body: "When two records differ, we show both, each with its own label." },
  { title: "“To verify” is never removed by guessing.", body: "It comes off only when a record settles it." },
];

export function EvidenceLegend({ id = "how-we-label" }: { id?: string }) {
  return (
    <section id={id} className="evidence-legend" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="guide-h2">
        How we label what we know
      </h2>
      <p>Every historical fact ends with a small tag saying where it came from, so you can see at a glance how solid it is.</p>
      <ul>
        {evidenceLabels.map((l) => (
          <li key={l.name}>
            <span className="evidence-tag" data-verified={l.name !== "To verify"}>
              {l.name}
            </span>{" "}
            {l.body} <span className="evidence-example">Example: {l.example}</span>
          </li>
        ))}
      </ul>
      <ol className="evidence-rules">
        {rules.map((r) => (
          <li key={r.title}>
            <strong>{r.title}</strong> {r.body}
          </li>
        ))}
      </ol>
    </section>
  );
}
