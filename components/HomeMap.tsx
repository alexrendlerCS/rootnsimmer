"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { homeMapCard, homeMapLegend } from "@/content/home-map";
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
};
type MapData = { built: string; boundary: Ring; homes: Home[]; buildings: Ring[][][]; mine?: string[] };

const COLORS: Record<Kind, { fill: string; opacity: number }> = {
  researched: { fill: "#a32e28", opacity: 0.6 },
  historic: { fill: "#a8843f", opacity: 0.5 },
  lost: { fill: "#5b584e", opacity: 0.22 },
  other: { fill: "#c9d6cb", opacity: 0.45 },
};
// GeoJSON is [lng, lat]; Leaflet wants [lat, lng].
const flip = (r: Ring) => r.map(([x, y]) => [y, x] as [number, number]);
const toLatLngs = (g: Ring[][]) => g.map((poly) => poly.map(flip));
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

function lotStyle(kind: Kind, selected = false): L.PathOptions {
  return {
    color: selected ? "#a32e28" : "#1f3a2c",
    weight: selected ? 3 : 0.6,
    opacity: selected ? 1 : 0.55,
    fillColor: COLORS[kind].fill,
    fillOpacity: COLORS[kind].opacity,
    dashArray: kind === "lost" && !selected ? "3 3" : undefined,
  };
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

  return (
    <article className="home-card" aria-live="polite">
      <p className={`home-kind home-kind-${home.kind}`}>{homeMapLegend.find((l) => l.kind === home.kind)?.label}</p>
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
  const [notFound, setNotFound] = useState(false);
  const selectedId = useRef<string | null>(null);

  useEffect(() => {
    fetch("/data/lincolnville-homes.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(setData)
      .catch(() => setError(true));
  }, []);

  const select = (home: Home, fly = false) => {
    const prev = selectedId.current && layers.current.get(selectedId.current);
    const prevHome = prev && data?.homes.find((h) => h.id === selectedId.current);
    if (prev && prevHome) prev.setStyle(lotStyle(prevHome.kind));
    const layer = layers.current.get(home.id);
    layer?.setStyle(lotStyle(home.kind, true)).bringToFront();
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
      const poly = L.polygon(toLatLngs(home.g), lotStyle(home.kind)).addTo(map);
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

      <div className="home-map-layout">
        <div className="home-map-frame">
          <div ref={mapEl} className="home-map-canvas" aria-label="Map of Lincolnville lots" role="region" tabIndex={0} />
          {!data && <p className="home-map-loading">Loading the map…</p>}
          <ul className="home-legend">
            {homeMapLegend.map((l) => (
              <li key={l.kind}>
                <span className={`swatch swatch-${l.kind}`} aria-hidden="true" />
                {l.label}
                {data && <span className="legend-count">{data.homes.filter((h) => h.kind === l.kind).length}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="home-card-wrap">{selected ? <HomeCard home={selected} isMine={!!data?.mine?.includes(selected.id)} /> : <p className="home-card-empty">{homeMapCard.empty}</p>}</div>
      </div>
    </div>
  );
}
