"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import directory from "@/content/locator/businesses.json";

type Pin = { cat: string; n: number; x: number; y: number; key: string; inDistrict: boolean; source: string };
type MapData = {
  width: number;
  height: number;
  district: string;
  water: string[];
  marsh: string[];
  parks: { name: string; d: string }[];
  streets: { name: string; kind: string; d: string }[];
  labels: { name: string; x: number; y: number; angle: number }[];
  pins: Pin[];
  landmarks: { name: string; kind: string; x: number; y: number; side?: string }[];
};
type Entry = { name: string; address: string; phone: string };
type Category = { id: string; name: string; color: string; entries: Entry[] };

const CATS = directory.categories as Category[];
const ROWS = ["A", "B", "C", "D", "E", "F"];
const COLS = [1, 2, 3];

/** Streets named on the map (others are drawn but not labeled), with the short form used on the map. */
const SHOWN: Record<string, string> = {
  "Riberia Street": "Riberia St.",
  "Weeden Street": "Weeden St.",
  "Sanford Street": "Sanford St.",
  "M L King Avenue": "Martin Luther King Jr. Ave.",
  "Martin Luther King Jr Avenue": "Martin Luther King Jr. Ave.",
  "Dumas Street": "Dumas St.",
  "Oneida Street": "Oneida St.",
  "Washington Street": "Washington St.",
  "Park Place": "Park Pl.",
  "Twine Street": "Twine St.",
  "Blanco Street": "Blanco St.",
  "King Street": "King St.",
  "Cedar Street": "Cedar St.",
  "Desoto Place": "DeSoto Pl.",
  "Bridge Street": "Bridge St.",
  "Bravo Street": "Bravo St.",
  "Saint Francis Street": "St. Francis St.",
  "De Haven Street": "DeHaven St.",
  "Moore Street": "Moore St.",
  "Pomar Street": "Pomar St.",
  "Kings Ferry Way": "Kings Ferry Way",
  "Lincoln Street": "Lincoln St.",
  "Lovett Street": "Lovett St.",
  "Keith Street": "Keith St.",
  "South Street": "South St.",
  "Duero Street": "Duero St.",
  "Cerro Street": "Cerro St.",
};

const gridRef = (x: number, y: number, w: number, h: number) =>
  `${ROWS[Math.min(5, Math.floor((y / h) * 6))]}${COLS[Math.min(2, Math.floor((x / w) * 3))]}`;

export function LocatorMap() {
  const [data, setData] = useState<MapData | null>(null);
  const [hover, setHover] = useState<string | null>(null); // pin group key
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState({ s: 1, x: 0, y: 0 });
  const stage = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{ d: number; s: number; cx: number; cy: number; x: number; y: number } | null>(null);
  const moved = useRef(false);

  useEffect(() => {
    fetch("/data/locator-map.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  /** Pins grouped by address: a group with more than one entry is a cluster pin. */
  const groups = useMemo(() => {
    if (!data) return [];
    const m = new Map<string, { key: string; x: number; y: number; items: { cat: Category; n: number; e: Entry }[] }>();
    for (const p of data.pins) {
      const cat = CATS.find((c) => c.id === p.cat)!;
      const e = cat.entries[p.n - 1];
      const g = m.get(p.key) ?? { key: p.key, x: p.x, y: p.y, items: [] };
      g.items.push({ cat, n: p.n, e });
      m.set(p.key, g);
    }
    return [...m.values()];
  }, [data]);
  const groupOf = (catId: string, n: number) => groups.find((g) => g.items.some((i) => i.cat.id === catId && i.n === n));
  const pinFor = (catId: string, n: number) => data?.pins.find((p) => p.cat === catId && p.n === n);

  // ---- pinch / drag / zoom ----
  const clampView = (v: { s: number; x: number; y: number }) => {
    const el = stage.current;
    if (!el) return v;
    const s = Math.min(4, Math.max(1, v.s));
    const w = el.clientWidth, h = el.clientHeight;
    return { s, x: Math.min(0, Math.max(w - w * s, v.x)), y: Math.min(0, Math.max(h - h * s, v.y)) };
  };
  const zoomBy = (f: number, cx?: number, cy?: number) => {
    const el = stage.current;
    if (!el) return;
    const px = cx ?? el.clientWidth / 2, py = cy ?? el.clientHeight / 2;
    setView((v) => {
      const s = Math.min(4, Math.max(1, v.s * f));
      return clampView({ s, x: px - ((px - v.x) * s) / v.s, y: py - ((py - v.y) * s) / v.s });
    });
  };
  function onPointerDown(e: React.PointerEvent) {
    // Pins, the card and the zoom buttons handle their own clicks.
    if ((e.target as HTMLElement).closest("button, .locator-card")) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved.current = false;
    const pts = [...pointers.current.values()];
    const rect = stage.current!.getBoundingClientRect();
    if (pts.length === 2) {
      const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      gesture.current = { d, s: view.s, cx: (pts[0].x + pts[1].x) / 2 - rect.left, cy: (pts[0].y + pts[1].y) / 2 - rect.top, x: view.x, y: view.y };
    } else {
      gesture.current = { d: 0, s: view.s, cx: e.clientX, cy: e.clientY, x: view.x, y: view.y };
    }
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!pointers.current.has(e.pointerId) || !gesture.current) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = [...pointers.current.values()];
    const g = gesture.current;
    if (pts.length === 2 && g.d) {
      const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const s = Math.min(4, Math.max(1, (g.s * d) / g.d));
      moved.current = true;
      setView(clampView({ s, x: g.cx - ((g.cx - g.x) * s) / g.s, y: g.cy - ((g.cy - g.y) * s) / g.s }));
    } else if (pts.length === 1 && view.s > 1) {
      const dx = e.clientX - g.cx, dy = e.clientY - g.cy;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved.current = true;
      setView(clampView({ s: view.s, x: g.x + dx, y: g.y + dy }));
    }
  }
  function onPointerUp(e: React.PointerEvent) {
    pointers.current.delete(e.pointerId);
    gesture.current = pointers.current.size === 1 ? { d: 0, s: view.s, cx: [...pointers.current.values()][0].x, cy: [...pointers.current.values()][0].y, x: view.x, y: view.y } : null;
  }

  const active = selected ?? hover;
  const selGroup = groups.find((g) => g.key === selected);
  const pct = (v: number, of: number) => `${(v / of) * 100}%`;

  return (
    <div className="locator">
      <header className="locator-head">
        <div className="locator-logo">
          {/* The approved Root & Simmer logo file, unchanged. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpeg" alt="Root & Simmer Hospitality Co." />
        </div>
        <div>
          <p className="locator-badge">Locator map</p>
          <h1 className="locator-title">Historic Lincolnville</h1>
          <p className="locator-sub">Businesses and community places in the Lincolnville Historic District, St. Augustine</p>
        </div>
        <button type="button" className="button locator-print" onClick={() => window.print()}>
          Print
        </button>
      </header>

      <div className="locator-body">
        <nav className="locator-list" aria-label="Directory">
          {CATS.map((c) => (
            <section key={c.id} className="locator-cat">
              <h2 style={{ color: c.color }}>{c.name}</h2>
              <ol>
                {c.entries.map((e, i) => {
                  const g = groupOf(c.id, i + 1);
                  const pin = pinFor(c.id, i + 1);
                  const on = !!g && active === g.key;
                  return (
                    <li key={e.name}>
                      <button
                        type="button"
                        className={`locator-item${on ? " is-on" : ""}`}
                        onMouseEnter={() => g && setHover(g.key)}
                        onMouseLeave={() => setHover(null)}
                        onFocus={() => g && setHover(g.key)}
                        onBlur={() => setHover(null)}
                        onClick={() => g && setSelected(selected === g.key ? null : g.key)}
                      >
                        <span className="locator-num" style={{ background: c.color }}>
                          {i + 1}
                        </span>
                        <span className="locator-item-text">
                          <span className="locator-item-name">{e.name}</span>
                          <span className="locator-item-addr">
                            {e.address}
                            {e.phone ? ` · ${e.phone}` : ""}
                            {pin && data ? ` · ${gridRef(pin.x, pin.y, data.width, data.height)}` : ""}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </nav>

        <div className="locator-mapcol">
          <div className="locator-frame">
            <div className="locator-cols locator-cols-top" aria-hidden="true">
              {COLS.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            <div className="locator-rows locator-rows-left" aria-hidden="true">
              {ROWS.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
            <div
              ref={stage}
              className="locator-stage"
              style={{ aspectRatio: data ? `${data.width} / ${data.height}` : "1000 / 1357" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onClick={(e) => {
                if (!moved.current && e.target === e.currentTarget.firstChild) setSelected(null);
              }}
            >
              <div className={`locator-zoom${view.s > 1.4 ? " is-zoomed" : ""}`} style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.s})` }}>
                {data && (
                  <svg viewBox={`0 0 ${data.width} ${data.height}`} className="locator-svg" aria-hidden="true">
                    <rect width={data.width} height={data.height} fill="var(--loc-land)" />
                    {data.marsh.map((d, i) => (
                      <path key={`m${i}`} d={d} fill="var(--loc-marsh)" />
                    ))}
                    {data.water.map((d, i) => (
                      <path key={`w${i}`} d={d} fill="var(--loc-water)" />
                    ))}
                    <path d={data.district} fill="var(--loc-district)" stroke="var(--loc-district-line)" strokeWidth="3" strokeDasharray="10 6" />
                    {data.parks.map((p, i) => (
                      <path key={`p${i}`} d={p.d} fill="var(--loc-park)" />
                    ))}
                    {COLS.slice(1).map((n) => (
                      <line key={`gc${n}`} x1={((n - 1) / 3) * data.width} x2={((n - 1) / 3) * data.width} y1="0" y2={data.height} className="locator-gridline" />
                    ))}
                    {ROWS.slice(1).map((r, i) => (
                      <line key={`gr${r}`} y1={((i + 1) / 6) * data.height} y2={((i + 1) / 6) * data.height} x1="0" x2={data.width} className="locator-gridline" />
                    ))}
                    {data.streets.map((s, i) => (
                      <path key={`sc${i}`} d={s.d} className={`locator-street-case${SHOWN[s.name] ? " is-main" : ""}`} />
                    ))}
                    {data.streets.map((s, i) => (
                      <path key={`s${i}`} d={s.d} className={`locator-street${SHOWN[s.name] ? " is-main" : ""}`} />
                    ))}
                  </svg>
                )}

                {data &&
                  data.labels
                    .filter((l, i, all) => SHOWN[l.name] && all.findIndex((o) => SHOWN[o.name] === SHOWN[l.name]) === i)
                    .map((l) => (
                      <span
                        key={l.name}
                        className="locator-street-label"
                        style={{ left: pct(Math.min(Math.max(l.x, 90), data.width - 90), data.width), top: pct(Math.min(Math.max(l.y, 40), data.height - 40), data.height), transform: `translate(-50%, -50%) rotate(${l.angle}deg) scale(${1 / view.s})` }}
                      >
                        {SHOWN[l.name]}
                      </span>
                    ))}

                {data &&
                  data.landmarks.map((l) => (
                    <span key={l.name} className={`locator-landmark is-${l.kind} side-${l.side ?? "right"}`} style={{ left: pct(l.x, data.width), top: pct(l.y, data.height), transform: `translate(-6px, -6px) scale(${1 / view.s})` }}>
                      <i aria-hidden="true" />
                      <b>{l.name}</b>
                    </span>
                  ))}

                <span className="locator-water-label" style={{ transform: `rotate(-78deg) scale(${1 / view.s})` }}>
                  San Sebastian River
                </span>

                {data &&
                  groups.map((g) => {
                    const one = g.items.length === 1 ? g.items[0] : null;
                    const on = active === g.key;
                    return (
                      <button
                        key={g.key}
                        type="button"
                        className={`locator-pin${one ? "" : " is-cluster"}${on ? " is-on" : ""}`}
                        style={{ left: pct(g.x, data.width), top: pct(g.y, data.height), background: one ? one.cat.color : undefined, transform: `translate(-50%, -50%) scale(${(on ? 1.25 : 1) / view.s})` }}
                        onMouseEnter={() => setHover(g.key)}
                        onMouseLeave={() => setHover(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!moved.current) setSelected(selected === g.key ? null : g.key);
                        }}
                        aria-label={one ? `${one.n}. ${one.e.name}` : `${g.items.length} places at ${g.key}`}
                      >
                        {one ? one.n : g.items.length}
                      </button>
                    );
                  })}

                {data && selGroup && (
                  <div
                    className="locator-card"
                    style={{ left: pct(selGroup.x, data.width), top: pct(selGroup.y, data.height), transform: `translate(${selGroup.x > data.width * 0.55 ? "-100%" : "0"}, 14px) scale(${1 / view.s})`, transformOrigin: selGroup.x > data.width * 0.55 ? "top right" : "top left" }}
                    role="dialog"
                    aria-label={selGroup.key}
                    onClick={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    <button type="button" className="locator-card-close" onClick={() => setSelected(null)} aria-label="Close">
                      ×
                    </button>
                    {selGroup.items.length > 1 && <p className="locator-card-group">{selGroup.items.length} places at {selGroup.key}</p>}
                    {selGroup.items.map((i) => (
                      <div key={i.cat.id + i.n} className="locator-card-item">
                        <p className="locator-card-name">
                          <span className="locator-num" style={{ background: i.cat.color }}>
                            {i.n}
                          </span>
                          {i.e.name}
                        </p>
                        <p>{i.e.address}</p>
                        {i.e.phone && (
                          <p>
                            <a href={`tel:${i.e.phone.replace(/[^0-9]/g, "")}`}>{i.e.phone}</a>
                          </p>
                        )}
                        <p className="locator-card-cat" style={{ color: i.cat.color }}>
                          {i.cat.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="locator-compass" aria-hidden="true">
                <svg viewBox="0 0 40 40" width="40" height="40">
                  <circle cx="20" cy="20" r="18" fill="var(--paper)" stroke="var(--oak)" strokeWidth="1.5" />
                  <path d="M20 4 L25 20 L20 17 L15 20 Z" fill="var(--rail)" />
                  <path d="M20 36 L25 20 L20 23 L15 20 Z" fill="var(--oak)" />
                </svg>
                <span>N</span>
              </div>
              <div className="locator-zoom-buttons">
                <button type="button" onClick={() => zoomBy(1.4)} aria-label="Zoom in">
                  +
                </button>
                <button type="button" onClick={() => zoomBy(1 / 1.4)} aria-label="Zoom out">
                  −
                </button>
              </div>
            </div>
            <div className="locator-rows locator-rows-right" aria-hidden="true">
              {ROWS.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
            <div className="locator-cols locator-cols-bottom" aria-hidden="true">
              {COLS.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </div>

          <div className="locator-key">
            <p className="locator-key-title">Key</p>
            <ul>
              <li>
                <i className="k-district" aria-hidden="true" /> Lincolnville Historic District
              </li>
              <li>
                <i className="k-church" aria-hidden="true" /> Churches and landmarks
              </li>
              <li>
                <i className="k-park" aria-hidden="true" /> Parks
              </li>
              <li>
                <i className="k-water" aria-hidden="true" /> San Sebastian River
              </li>
              <li>
                <i className="k-cluster" aria-hidden="true">
                  6
                </i>{" "}
                Several places at one address
              </li>
            </ul>
          </div>
          <p className="locator-credit">Streets, water and parks © OpenStreetMap contributors. District shading: City of St. Augustine.</p>
        </div>
      </div>

      <footer className="locator-foot">
        <p>
          <strong>Root & Simmer Hospitality Co.</strong> · Lincolnville, St. Augustine ·{" "}
          <a href="mailto:rootnsimmer@gmail.com">rootnsimmer@gmail.com</a>
        </p>
        <p>Map not to scale. Confirm hours and details with each business before visiting.</p>
        <p>Root & Simmer Hospitality Co. is independent. This map is not a City of St. Augustine publication and implies no City endorsement.</p>
      </footer>
    </div>
  );
}
