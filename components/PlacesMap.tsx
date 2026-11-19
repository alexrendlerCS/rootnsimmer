"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { GROUPS, type GroupId, type PlacesData } from "@/lib/places";

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);

export default function PlacesMap({ data }: { data: PlacesData }) {
  const el = useRef<HTMLDivElement>(null);
  const layer = useRef<L.LayerGroup | null>(null);
  const [on, setOn] = useState<Record<GroupId, boolean>>({ parks: true, food: true, faith: true, culture: true, business: true });
  const shown = useMemo(() => data.places.filter((p) => on[p.group]), [data, on]);

  useEffect(() => {
    if (!el.current) return;
    const map = L.map(el.current, { scrollWheelZoom: false, zoomSnap: 0.25 });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors" }).addTo(map);
    const outline = L.polygon(data.boundary.map(([lng, lat]) => [lat, lng] as [number, number]), { color: "#1f3a2c", weight: 2, fillColor: "#c9d6cb", fillOpacity: 0.18, interactive: false }).addTo(map);
    layer.current = L.layerGroup().addTo(map);
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(outline.getBounds().pad(0.02), { animate: false });
    };
    const t = window.setTimeout(fit, 250);
    fit();
    return () => {
      window.clearTimeout(t);
      map.remove();
    };
  }, [data]);

  useEffect(() => {
    const lg = layer.current;
    if (!lg) return;
    lg.clearLayers();
    for (const p of shown) {
      const g = GROUPS.find((x) => x.id === p.group)!;
      L.circleMarker([p.lat, p.lng], { radius: 7, color: "#fff", weight: 2, fillColor: g.color, fillOpacity: 0.95 })
        .bindPopup(`<strong>${esc(p.name)}</strong><br><span>${esc(g.label)}</span>${p.address ? `<br><span>${esc(p.address)}</span>` : ""}`)
        .addTo(lg);
    }
  }, [shown]);

  return (
    <div className="rm">
      <div className="rm-bar" role="group" aria-label="Show on the map">
        {GROUPS.map((g) => (
          <button key={g.id} type="button" aria-pressed={on[g.id]} onClick={() => setOn((v) => ({ ...v, [g.id]: !v[g.id] }))}>
            <span className="rm-dot" style={{ background: g.color }} aria-hidden="true" />
            {g.label} ({data.places.filter((p) => p.group === g.id).length})
          </button>
        ))}
      </div>
      <div ref={el} className="rm-map" role="region" aria-label="Map of places in Lincolnville" />
    </div>
  );
}
