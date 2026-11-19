/**
 * Homes Not Hotels: the numbers, the one-week snapshot, problems, trends and protections.
 * Once a chapter of the CRA guide; since Nov 19, 2026 it lives on the one Homes Not Hotels page (/homes-not-hotels),
 * and /cra-lincolnville/homes-not-hotels redirects there.
 */
import { craHomesNotHotels } from "@/content/cra";
import { GuideSection, Sources } from "@/components/CraGuide";

type Point = { title: string; body: string };

function Points({ points }: { points: Point[] }) {
  return (
    <ul className="entries">
      {points.map((p) => (
        <li key={p.title}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </li>
      ))}
    </ul>
  );
}

function Table({ columns, rows, numeric = false }: { columns: string[]; rows: string[][]; numeric?: boolean }) {
  return (
    <div className="table-wrap">
      <table className={`record-table ${numeric ? "numbers-table" : "rule-table"}`}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={i}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function HomesNotHotelsGuide() {
  const c = craHomesNotHotels;
  return (
    <section className="page-section" aria-labelledby="hnh-guide-title">
      <div className="wrap">
        <div className="guide-main">
          <h2 id="hnh-guide-title" className="guide-h2">
            Homes Not Hotels, in numbers
          </h2>
          <p className="page-lede">{c.lede}</p>
          <div className="guide-section">
            <p>{c.spirit}</p>
            <p className="aside-note">{c.independence}</p>
          </div>

          <GuideSection id="numbers" title={c.numbers.title}>
            <p className="stat-lead">{c.numbers.intro}</p>
            <Table columns={c.numbers.columns} rows={c.numbers.rows} numeric />
            <p className="table-after">{c.numbers.streets}</p>
            <p className="fine">{c.numbers.method}</p>
          </GuideSection>

          <GuideSection id="one-week" title={c.oneWeek.title}>
            <p>{c.oneWeek.intro}</p>
            <Table columns={c.oneWeek.columns} rows={c.oneWeek.rows} />
            <Points points={c.oneWeek.points} />
            <p className="fine guide-sources">{c.oneWeek.background}</p>
          </GuideSection>

          <GuideSection id="problems" title={c.problems.title}>
            <p>{c.problems.intro}</p>
            <Points points={c.problems.points} />
          </GuideSection>

          <GuideSection id="trends" title={c.trends.title}>
            <p>{c.trends.intro}</p>
            <Points points={c.trends.points} />
          </GuideSection>

          <GuideSection id="protections" title={c.protections.title}>
            <Points points={c.protections.points} />
            <p className="aside-note">{c.protections.residents}</p>
          </GuideSection>

          <div className="guide-section">
            <Sources text={c.sources} />
            <p className="fine">{c.legal}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
