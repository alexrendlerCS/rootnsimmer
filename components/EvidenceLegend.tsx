/** "How we label what we know": the four evidence labels used on every historical claim. */
export const evidenceLabels = [
  { name: "Directory entry", body: "a name, trade and address as printed in a city directory (1885, 1899, 1907 or 1911–12)." },
  { name: "National Register (1991)", body: "what the nomination for the Lincolnville Historic District says about a building or street." },
  { name: "Oral history", body: "a resident’s account. Valuable, attributed with permission, and kept separate until records support it." },
  { name: "To verify", body: "a faint reading, a number that does not match, or a claim without a record yet." },
];

export function EvidenceLegend({ id = "how-we-label" }: { id?: string }) {
  return (
    <section id={id} className="evidence-legend" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="guide-h2">
        How we label what we know
      </h2>
      <ul>
        {evidenceLabels.map((l) => (
          <li key={l.name}>
            <span className="evidence-tag" data-verified={l.name !== "To verify"}>
              {l.name}
            </span>{" "}
            {l.body}
          </li>
        ))}
      </ul>
      <p>
        If a claim is uncertain, we say so. If two records disagree, we show both. The goal is not to fill every gap; it is to tell the strongest
        accurate story the evidence supports.
      </p>
    </section>
  );
}
