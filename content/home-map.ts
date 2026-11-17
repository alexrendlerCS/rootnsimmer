/**
 * Root & Simmer — Lincolnville Home Map (/preserve-historic-homes/map).
 *
 * The map data is built by scripts/build-home-map.mjs into data/lincolnville-homes.json (members only, served by /api/map-data) from
 * City of St. Augustine GIS layers and Kimberly's Street Files workbook. Same rules as content/site.ts:
 * edit the words between the quotes and save.
 */

export const homeMapHero = {
  label: "Preserve Historic Homes",
  title: "Find your home on the map.",
  lede: "Every lot in Lincolnville, inside the City’s official neighborhood boundary. Search for an address or click a lot to see what the public records say about it. Your own home is outlined in red.",
};

export const homeMapLegend = [
  { kind: "researched", label: "History researched by Root & Simmer" },
  { kind: "historic", label: "Historic: contributing in 1991, or a potential contributor in the State site file" },
  { kind: "lost", label: "Historic building no longer standing" },
  { kind: "other", label: "Other lots" },
] as const;

export const homeMapCard = {
  empty: "Search for an address, or click any lot on the map.",
  historyComingSoon: "History coming soon.",
  mineTitle: "This is your home.",
  mineButton: "Open my home history packet",
  joinTitle: "Know this home’s story?",
  joinBody: "If this is your home, or you have memories, photos or records of it, tell us. Every home known.",
  joinButton: "Share what you know",
  emailSubject: "Lincolnville home map",
  emailBody: (address: string) =>
    `Hello Kimberly,\n\nI found this home on the Lincolnville map: ${address}\n\nWhat I know about it, or why I am writing:\n\nBest way to reach me:`,
};

export const homeMapNote =
  "Lots, building outlines and the neighborhood boundary: City of St. Augustine GIS. Historic records: the 1991 Lincolnville National Register building lists and the Florida Master Site File, as published by the City. Years by decade come from the City’s building age map. Street map © OpenStreetMap contributors. Owner names and property values are never shown. Records can be out of date; the City confirms a property’s current status.";
