"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { demolishedLots, homeMapCard, homeMapKey, homeMapLegend, homeMapPackets, homeMapSorts, homeStatus, homeStatusCards, type HomeStatus } from "@/content/home-map";
import { openEmailDraft } from "@/lib/email";

type Ring = [number, number][];
type Kind = "researched" | "historic" | "lost" | "other";
type Home = {
  id: string;
  address: string;
  c: [number, number];
  g: Ring[][];
  decade: string | null;
  site: { id: string; year: string | null; style: string | null; eval: string; destroyed: boolean }[];
  nr1991?: { status: string | null; date: string | null; style: string | null; lost: boolean };
  research?: { address: string; built: string | null; builtSource: string | null; sources: { label: string; url?: string }[] }[];
  kind: Kind;
  historic?: boolean;
  vacant?: boolean;
  watch?: string;
};
/** "2075600000-2" -> "2075600000": a map lot back to its City parcel number. */
const parcelOf = (id: string) => id.replace(/-\d+$/, "");
const statusOf = (h: Home) => homeStatus[parcelOf(h.id)];
const searching = (h: Home) => statusOf(h)?.status === "owners";
type Sort = (typeof homeMapSorts)[number]["id"];
const SORT_COLORS: Record<Exclude<Sort, "all">, string> = { historic: "#a8843f", watch: "#a32e28", vacant: "#4f7f78" };
const inSort = (h: Home, sort: Sort) =>
  sort === "all" ||
  (sort === "historic" && !!h.historic && h.kind !== "lost") ||
  (sort === "watch" && (!!h.watch || h.kind === "lost")) ||
  (sort === "vacant" && (!!h.vacant || searching(h)));
type MapData = { built: string; boundary: Ring; homes: Home[]; buildings: Ring[][][]; mine?: string[] };

const COLORS: Record<Kind, { fill: string; opacity: number }> = {
  researched: { fill: "#a32e28", opacity: 0.6 },
  historic: { fill: "#a8843f", opacity: 0.5 },
  lost: { fill: "#6e4466", opacity: 0.5 },
  other: { fill: "#c9d6cb", opacity: 0.45 },
};
// GeoJSON is [lng, lat]; Leaflet wants [lat, lng].
const flip = (r: Ring) => r.map(([x, y]) => [y, x] as [number, number]);
const toLatLngs = (g: Ring[][]) => g.map((poly) => poly.map(flip));
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

function lotStyle(kind: Kind, selected = false, sort: Sort = "all", home?: Home): L.PathOptions {
  // Homes Root & Simmer is working with stand out in their own solid color: abandoned homes (teal) in
  // "All lots" and "Vacant and abandoned"; homes that welcome guests (dark green) in "All lots".
  const st = home && statusOf(home);
  if (st && (sort === "all" || (sort === "vacant" && st.status === "owners"))) {
    const color = homeStatusCards[st.status].color;
    return { color: selected ? "#a32e28" : color, weight: selected ? 3 : 2, opacity: 1, fillColor: color, fillOpacity: 0.85, dashArray: undefined };
  }
  if (sort !== "all" && home && !selected) {
    const on = inSort(home, sort);
    return {
      color: on ? SORT_COLORS[sort] : "#1f3a2c",
      weight: on ? 1.5 : 0.4,
      opacity: on ? 0.95 : 0.25,
      fillColor: on ? SORT_COLORS[sort] : "#c9d6cb",
      fillOpacity: on ? 0.55 : 0.08,
      dashArray: undefined,
    };
  }
  return {
    color: selected ? "#a32e28" : "#1f3a2c",
    weight: selected ? 3 : 0.6,
    opacity: selected ? 1 : 0.55,
    fillColor: COLORS[kind].fill,
    fillOpacity: COLORS[kind].opacity,
    dashArray: undefined,
  };
}

function Packets({ home }: { home: Home }) {
  const list: { label: string; href: string }[] = [];
  if (home.historic && home.kind !== "lost") list.push(homeMapPackets.recognize, homeMapPackets.protect);
  else if (home.watch || home.kind === "lost") list.push(homeMapPackets.protect);
  if (home.vacant || searching(home)) list.push(homeMapPackets.owners);
  if (!list.length) return null;
  return (
    <section className="home-packets" aria-label={homeMapPackets.title}>
      <h3>{homeMapPackets.title}</h3>
      <ul>
        {list.map((p) => (
          <li key={p.href}>
            <a href={p.href}>{p.label}</a>
          </li>
        ))}
      </ul>
      <p className="home-source">{homeMapPackets.note}</p>
    </section>
  );
}

function HomeCard({ home, isMine }: { home: Home; isMine: boolean }) {
  const built =
    home.research?.find((r) => r.built)?.built ??
    home.site.find((s) => s.year)?.year ??
    home.nr1991?.date ??
    (home.decade ? `the ${home.decade}` : null);
  const builtFrom = home.research?.find((r) => r.built)
    ? home.research.find((r) => r.built)?.builtSource
    : home.site.find((s) => s.year)
      ? "Florida Master Site File"
      : home.nr1991?.date
        ? "1991 National Register list"
        : home.decade
          ? "City building age map"
          : null;

  const st = statusOf(home);
  const card = st && homeStatusCards[st.status];

  return (
    <article className="home-card" aria-live="polite">
      {card ? (
        <p className={`home-kind home-kind-${st.status}`}>{card.label}</p>
      ) : (
        <p className={`home-kind home-kind-${home.kind}`}>{homeMapLegend.find((l) => l.kind === home.kind)?.label}</p>
      )}
      <h2 className="home-address">{home.address || "Lot without a street number"}</h2>

      <dl className="home-facts">
        {built && (
          <div>
            <dt>Built</dt>
            <dd>
              {built}
              {builtFrom && <span className="home-source">{builtFrom}</span>}
            </dd>
          </div>
        )}
        {home.nr1991?.status && (
          <div>
            <dt>1991 National Register</dt>
            <dd>
              {home.nr1991.status}
              {[home.nr1991.style, home.nr1991.date].filter(Boolean).length > 0 && (
                <> ({[home.nr1991.style, home.nr1991.date].filter(Boolean).join(", ")})</>
              )}
              {home.nr1991.lost && <span className="home-source">Our research: no longer standing.</span>}
            </dd>
          </div>
        )}
        {home.site.map((s) => (
          <div key={s.id}>
            <dt>Florida Master Site File</dt>
            <dd>
              {s.id}
              {s.style ? `: ${s.style}` : ""}
              {s.year ? `, built ${s.year}` : ""}.
              <span className="home-source">
                {s.destroyed ? "Recorded as no longer standing. " : ""}
                {s.eval}.
              </span>
            </dd>
          </div>
        ))}
      </dl>

      {st && card && (
        <section className={`home-status home-status-${st.status}`} aria-label={card.title}>
          <h3>{card.title}</h3>
          <p>{st.note}</p>
          {card.button && card.emailSubject && card.emailBody && (
            <button type="button" className="button" onClick={() => openEmailDraft(card.emailSubject!, card.emailBody!(home.address))}>
              {card.button}
            </button>
          )}
        </section>
      )}

      {demolishedLots[parcelOf(home.id)] && (
        <p className="home-demolished">
          <strong>Demolished:</strong> {demolishedLots[parcelOf(home.id)].note}
          <span className="home-source">From the City’s HARB and permit records.</span>
        </p>
      )}

      {home.watch && (
        <p className="home-watch">
          <strong>Demolition watch:</strong> {home.watch}.
          <span className="home-source">From the City’s 2019-2025 demolition permit list. Confirm with Planning &amp; Building, 904-825-1065.</span>
        </p>
      )}

      {home.research ? (
        <section className="home-research" aria-label="Root & Simmer research">
          <h3>From our research</h3>
          {home.research.map((r) => (
            <div key={r.address} className="home-research-item">
              {home.research!.length > 1 && <p className="home-research-address">{r.address}</p>}
              {r.built && (
                <p>
                  Built: {r.built}
                  {r.builtSource && <span className="home-source">Source: {r.builtSource}</span>}
                </p>
              )}
              {r.sources.length > 0 && (
                <ul className="home-sources">
                  {r.sources.map((s) => (
                    <li key={s.label + (s.url ?? "")}>
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noopener noreferrer">
                          {s.label}
                        </a>
                      ) : (
                        s.label
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="home-source">Full history coming soon.</p>
        </section>
      ) : (
        <p className="home-coming">{homeMapCard.historyComingSoon}</p>
      )}

      <Packets home={home} />

      {isMine ? (
        <div className="home-join home-mine">
          <h3>{homeMapCard.mineTitle}</h3>
          <a className="button button-red" href="/members#my-home">
            {homeMapCard.mineButton}
          </a>
        </div>
      ) : (
        <div className="home-join">
          <h3>{homeMapCard.joinTitle}</h3>
          <p>{homeMapCard.joinBody}</p>
          <button
            type="button"
            className="button"
            onClick={() => openEmailDraft(homeMapCard.emailSubject, homeMapCard.emailBody(home.address))}
          >
            {homeMapCard.joinButton}
          </button>
        </div>
      )}
    </article>
  );
}

export default function HomeMap() {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layers = useRef(new Map<string, L.Polygon>());
  const [data, setData] = useState<MapData | null>(null);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<Home | null>(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("all");
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("sort");
    if (homeMapSorts.some((s) => s.id === wanted)) setSort(wanted as Sort);
  }, []);
  const sortRef = useRef<Sort>("all");
  const [notFound, setNotFound] = useState(false);
  const selectedId = useRef<string | null>(null);

  useEffect(() => {
    fetch("/data/lincolnville-homes.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      // Lots in demolishedLots count as demolished everywhere: color, key, sorts and card.
      .then((d: MapData) => {
        for (const h of d.homes) if (demolishedLots[parcelOf(h.id)]) h.kind = "lost";
        setData(d);
      })
      .catch(() => setError(true));
  }, []);

  const select = (home: Home, fly = false) => {
    const prev = selectedId.current && layers.current.get(selectedId.current);
    const prevHome = prev && data?.homes.find((h) => h.id === selectedId.current);
    if (prev && prevHome) prev.setStyle(lotStyle(prevHome.kind, false, sortRef.current, prevHome));
    const layer = layers.current.get(home.id);
    layer?.setStyle(lotStyle(home.kind, true, sortRef.current, home)).bringToFront();
    selectedId.current = home.id;
    setSelected(home);
    if (fly && layer && mapRef.current) mapRef.current.flyToBounds(layer.getBounds(), { maxZoom: 19, duration: 0.6 });
    // On phones the card sits under the map: bring it into view.
    if (window.matchMedia("(max-width: 960px)").matches) {
      requestAnimationFrame(() => document.querySelector(".home-card-wrap")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };
  const selectRef = useRef(select);
  selectRef.current = select;

  useEffect(() => {
    if (!data || !mapEl.current || mapRef.current) return;
    const map = L.map(mapEl.current, { preferCanvas: true, zoomControl: true, scrollWheelZoom: false });
    mapRef.current = map;
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors · Lots and buildings: City of St. Augustine',
    }).addTo(map);

    const boundary = L.polygon(flip(data.boundary), { color: "#1f3a2c", weight: 2.5, dashArray: "8 6", fill: false, interactive: false }).addTo(map);
    for (const home of data.homes) {
      const poly = L.polygon(toLatLngs(home.g), lotStyle(home.kind, false, "all", home)).addTo(map);
      poly.on("click", () => selectRef.current(home));
      if (data.mine?.includes(home.id)) poly.setStyle({ color: "#a32e28", weight: 2.5, opacity: 1 });
      layers.current.set(home.id, poly);
    }
    const buildings = L.layerGroup(
      data.buildings.map((g) => L.polygon(toLatLngs(g), { color: "#2a2019", weight: 0.5, fillColor: "#2a2019", fillOpacity: 0.35, interactive: false })),
    ).addTo(map);
    buildings.eachLayer((l) => (l as L.Polygon).bringToBack());
    map.fitBounds(boundary.getBounds(), { padding: [12, 12] });
    map.on("focus", () => map.scrollWheelZoom.enable());
    map.on("blur", () => map.scrollWheelZoom.disable());
    return () => {
      map.remove();
      mapRef.current = null;
      layers.current.clear();
    };
  }, [data]);

  // Restyle every lot when the sort changes.
  useEffect(() => {
    sortRef.current = sort;
    if (!data) return;
    for (const h of data.homes) {
      const layer = layers.current.get(h.id);
      if (!layer) continue;
      layer.setStyle(lotStyle(h.kind, h.id === selectedId.current, sort, h));
      if (sort !== "all" && inSort(h, sort)) layer.bringToFront();
    }
    const sel = selectedId.current && layers.current.get(selectedId.current);
    if (sel) sel.bringToFront();
  }, [sort, data]);

  const index = useMemo(() => (data ? data.homes.filter((h) => h.address).map((h) => ({ h, k: norm(h.address) })) : []), [data]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = norm(query).replace(/\b(street|st)\b/g, "st").replace(/\bmlk\b/g, "martin luther king");
    if (!q) return;
    const hit = index.find((x) => x.k === q) ?? index.find((x) => x.k.startsWith(q)) ?? index.find((x) => x.k.includes(q));
    setNotFound(!hit);
    if (hit) select(hit.h, true);
  };

  if (error) return <p className="placeholder">The map could not load. Please refresh the page.</p>;

  return (
    <div className="home-map">
      <form className="home-search" role="search" onSubmit={onSearch}>
        <label htmlFor="home-search-input">Find an address</label>
        <div className="home-search-row">
          <input
            id="home-search-input"
            type="search"
            list="home-addresses"
            autoComplete="off"
            placeholder="For example, 90 DeHaven St"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setNotFound(false);
            }}
          />
          <button type="submit" className="button">
            Find
          </button>
        </div>
        <datalist id="home-addresses">
          {index.map(({ h }) => (
            <option key={h.id} value={h.address} />
          ))}
        </datalist>
        {notFound && <p className="home-search-miss">No Lincolnville lot matches that address. Try the house number and street name.</p>}
      </form>

      <div className="home-sorts" role="group" aria-label="Sort the map">
        {homeMapSorts.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`home-sort home-sort-${s.id}`}
            aria-pressed={sort === s.id}
            onClick={() => setSort(s.id)}
          >
            {s.label}
            {data && s.id !== "all" && <span className="home-sort-count">{data.homes.filter((h) => inSort(h, s.id)).length}</span>}
          </button>
        ))}
      </div>
      {sort !== "all" && <p className="home-sort-hint">{homeMapSorts.find((s) => s.id === sort)?.hint}</p>}

      <div className="home-map-layout">
        <div className="home-map-frame">
          <div ref={mapEl} className="home-map-canvas" aria-label="Map of Lincolnville lots" role="region" tabIndex={0} />
          {!data && <p className="home-map-loading">Loading the map…</p>}
          <section className="home-key" aria-labelledby="home-key-title">
            <h2 id="home-key-title" className="home-key-title">{homeMapKey.title}</h2>
            <div className="home-key-groups">
              <div>
                <h3 className="home-key-group">{homeMapKey.ourWork}</h3>
                <ul className="home-legend">
                  {homeMapLegend
                    .filter((l) => l.kind === "researched")
                    .map((l) => (
                      <li key={l.kind}>
                        <span className={`swatch swatch-${l.kind}`} aria-hidden="true" />
                        {l.label}
                        {data && <span className="legend-count">{data.homes.filter((h) => h.kind === l.kind).length}</span>}
                      </li>
                    ))}
                  {(Object.keys(homeStatusCards) as HomeStatus[]).map((k) => (
                    <li key={k}>
                      <span className={`swatch swatch-${k}`} aria-hidden="true" />
                      {homeStatusCards[k].legend}
                      {data && <span className="legend-count">{new Set(data.homes.filter((h) => statusOf(h)?.status === k).map((h) => parcelOf(h.id))).size}</span>}
                    </li>
                  ))}
                  {!!data?.mine?.length && (
                    <li>
                      <span className="swatch swatch-mine" aria-hidden="true" />
                      {homeMapKey.yourHome}
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="home-key-group">{homeMapKey.records}</h3>
                <ul className="home-legend">
                  {homeMapLegend
                    .filter((l) => l.kind !== "researched")
                    .map((l) => (
                      <li key={l.kind}>
                        <span className={`swatch swatch-${l.kind}`} aria-hidden="true" />
                        {l.label}
                        {data && <span className="legend-count">{data.homes.filter((h) => h.kind === l.kind).length}</span>}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <p className="home-key-sorts">{homeMapKey.sorts}</p>
          </section>
        </div>
        <div className="home-card-wrap">{selected ? <HomeCard home={selected} isMine={!!data?.mine?.includes(selected.id)} /> : <p className="home-card-empty">{homeMapCard.empty}</p>}</div>
      </div>
    </div>
  );
}
