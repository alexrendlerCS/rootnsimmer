"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { ResidentPlace, ResidentsData } from "@/lib/residents-map";

const ERA = {
  early: { label: "1885–1907", color: "#a8843f" },
  cards: { label: "About 1911–12", color: "#1f3a2c" },
} as const;
type Filter = "all" | "early" | "cards";

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);

function popupHtml(p: ResidentPlace, filter: Filter) {
  const people = p.people.filter((x) => filter === "all" || x.era === filter);
  const where = p.historic.join(" · ");
  const today = p.match === "exact" ? "" : `<p class="rm-pop-note">${p.match === "renamed" ? "Central Avenue is today’s Martin Luther King Avenue. " : ""}Shown at today’s ${esc(p.today)}${p.match === "near" ? " (nearest number)" : ""}.</p>`;
  return `<div class="rm-pop"><p class="rm-pop-where">${esc(where)}</p>${today}<ul>${people
    .map((x) => `<li><strong>${esc(x.name)}</strong><span>${esc(x.work)}</span><em>${esc(x.kind)}${x.year ? ` · ${esc(x.year)}` : ""}${x.note ? ` · ${esc(x.note)}` : ""}</em></li>`)
    .join("")}</ul></div>`;
}

export default function ResidentsMap({ data }: { data: ResidentsData }) {
  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => data.places.filter((p) => filter === "all" || p.people.some((x) => x.era === filter)), [data, filter]);

  useEffect(() => {
    if (!el.current || mapRef.current) return;
    const map = L.map(el.current, { scrollWheelZoom: false, zoomControl: true });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors" }).addTo(map);
    mapRef.current = map;
    layerRef.current = L.layerGroup().addTo(map);
    const b = L.latLngBounds(data.places.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(b.pad(0.02), { maxZoom: 17 });
    // The container can still be settling its size on first paint: measure again, then fit.
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(b.pad(0.02), { maxZoom: 17, animate: false });
    };
    const timer = window.setTimeout(fit, 300);
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(el.current);
    return () => {
      window.clearTimeout(timer);
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, [data]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    layer.clearLayers();
    for (const p of visible) {
      const eras = new Set(p.people.filter((x) => filter === "all" || x.era === filter).map((x) => x.era));
      const color = eras.size > 1 ? "#a32e28" : ERA[[...eras][0] as "early" | "cards"].color;
      const count = p.people.filter((x) => filter === "all" || x.era === filter).length;
      L.circleMarker([p.lat, p.lng], { radius: 7 + Math.min(count, 6), color: "#fff", weight: 2, fillColor: color, fillOpacity: 0.92 })
        .bindPopup(popupHtml(p, filter), { maxWidth: 300 })
        .addTo(layer);
    }
  }, [visible, filter]);

  return (
    <div className="rm">
      <div className="rm-bar" role="group" aria-label="Show people from">
        {(["all", "early", "cards"] as Filter[]).map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f !== "all" && <span className="rm-dot" style={{ background: ERA[f].color }} aria-hidden="true" />}
            {f === "all" ? "All years" : ERA[f].label}
          </button>
        ))}
        <span className="rm-key">
          <span className="rm-dot" style={{ background: "#a32e28" }} aria-hidden="true" /> Both periods at one address
        </span>
      </div>
      <div ref={el} className="rm-map" role="region" aria-label="Map of historic Lincolnville residents" />
    </div>
  );
}
