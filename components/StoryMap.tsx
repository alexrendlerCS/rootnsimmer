"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { ResidentPlace, ResidentsData } from "@/lib/residents-map";
import { STORY_GROUPS, groupOf, kindWords, type GroupId } from "@/lib/story-groups";

type Partner = { name: string; where: string; lat: number; lng: number };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);
const colorOf = (id: GroupId) => STORY_GROUPS.find((g) => g.id === id)!.color;

/** The kind of work most people at an address did (ties go to the first listed). */
function mainGroup(p: ResidentPlace, on: Set<GroupId>): GroupId {
  const counts = new Map<GroupId, number>();
  for (const x of p.people) {
    const g = groupOf(x.work);
    if (on.has(g)) counts.set(g, (counts.get(g) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

function popupHtml(p: ResidentPlace) {
  const where = p.historic.join(" · ");
  const today = p.match === "exact" ? "" : `<p class="rm-pop-note">${p.match === "renamed" ? "Central Avenue is today’s Martin Luther King Avenue. " : ""}Shown at today’s ${esc(p.today)}${p.match === "near" ? " (nearest number)" : ""}.</p>`;
  return `<div class="rm-pop"><p class="rm-pop-where">${esc(where)}</p>${today}<ul>${p.people
    .map((x) => `<li><strong>${esc(x.name)}</strong><span>${esc(x.work)}</span><em>${esc(kindWords(x.kind))}${x.year ? ` · ${esc(x.year)}` : ""}${x.note ? ` · ${esc(x.note)}` : ""}</em></li>`)
    .join("")}</ul><p class="rm-pop-note">Directory entry</p></div>`;
}

export default function StoryMap({ data, partners, todayLabel }: { data: ResidentsData; partners: Partner[]; todayLabel: string }) {
  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const present = useMemo(() => STORY_GROUPS.filter((g) => data.places.some((p) => p.people.some((x) => groupOf(x.work) === g.id))), [data]);
  const [on, setOn] = useState<Set<GroupId>>(() => new Set(STORY_GROUPS.map((g) => g.id)));
  const [today, setToday] = useState(true);

  useEffect(() => {
    if (!el.current || mapRef.current) return;
    const map = L.map(el.current, { scrollWheelZoom: false, zoomSnap: 0.25 });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors" }).addTo(map);
    mapRef.current = map;
    layerRef.current = L.layerGroup().addTo(map);
    const b = L.latLngBounds([...data.places.map((p) => [p.lat, p.lng] as [number, number]), ...partners.map((p) => [p.lat, p.lng] as [number, number])]);
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(b.pad(0.04), { maxZoom: 17, animate: false });
    };
    fit();
    const timer = window.setTimeout(fit, 300);
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(el.current);
    return () => {
      window.clearTimeout(timer);
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, [data, partners]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    layer.clearLayers();
    for (const p of data.places) {
      const shown = p.people.filter((x) => on.has(groupOf(x.work)));
      if (!shown.length) continue;
      L.circleMarker([p.lat, p.lng], { radius: 7 + Math.min(p.people.length, 6), color: "#fff", weight: 2, fillColor: colorOf(mainGroup(p, on)), fillOpacity: 0.92 })
        .bindPopup(popupHtml(p), { maxWidth: 300 })
        .addTo(layer);
    }
    if (today) {
      for (const pt of partners) {
        L.marker([pt.lat, pt.lng], {
          icon: L.divIcon({ className: "story-partner-pin", html: "<span>★</span>", iconSize: [26, 26], iconAnchor: [13, 13] }),
          title: pt.name,
        })
          .bindPopup(`<div class="rm-pop"><p class="rm-pop-where">${esc(pt.name)}</p><p class="rm-pop-note">Partner · ${esc(pt.where)} · today</p></div>`)
          .addTo(layer);
      }
    }
  }, [data, partners, on, today]);

  const toggle = (id: GroupId) => setOn((s) => {
    const n = new Set(s);
    if (n.has(id)) n.delete(id);
    else n.add(id);
    return n.size ? n : s;
  });

  return (
    <div className="rm">
      <div className="rm-bar" role="group" aria-label="Show on the map">
        {present.map((g) => (
          <button key={g.id} type="button" aria-pressed={on.has(g.id)} onClick={() => toggle(g.id)}>
            <span className="rm-dot" style={{ background: g.color }} aria-hidden="true" />
            {g.label}
          </button>
        ))}
        <button type="button" aria-pressed={today} onClick={() => setToday((v) => !v)}>
          <span className="story-partner-key" aria-hidden="true">★</span>
          {todayLabel}
        </button>
      </div>
      <div ref={el} className="rm-map" role="region" aria-label="Lil Africa Neighborhood Story Map" />
    </div>
  );
}
