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
  mineButton: "See my whole home file",
  openLabel: "PDF",
  downloadLabel: "Download, ZIP",
  joinTitle: "Know this home’s story?",
  joinBody: "If this is your home, or you have memories, photos or records of it, tell us. Every home known.",
  joinButton: "Share what you know",
  emailSubject: "Lincolnville home map",
  emailBody: (address: string) =>
    `Hello Kimberly,\n\nI found this home on the Lincolnville map: ${address}\n\nWhat I know about it, or why I am writing:\n\nBest way to reach me:`,
};

/**
 * Three ways to sort the map, each matched to a member packet.
 * Groups: historic = contributing in 1991 or a potential contributor in the State site file, still standing;
 * watch = on the City's 2019-2025 demolition permit list, or a historic building no longer standing;
 * vacant = vacant under the County's land-use code.
 */
export const homeMapSorts = [
  { id: "all", label: "All lots", hint: "" },
  { id: "historic", label: "Historic homes", hint: "Standing homes that were contributing in 1991 or are potential contributors in the State site file. Get them recognized and protected." },
  { id: "watch", label: "Demolition watch", hint: "Lots on the City’s 2019-2025 demolition permit list, and historic buildings no longer standing. Some permits may have lapsed: confirm with Planning & Building, 904-825-1065." },
  { id: "vacant", label: "Vacant and abandoned", hint: "Lots the County lists as vacant. Know of an abandoned house? Tell us, and we will help reach the owner." },
] as const;

/** The member packets, by what each one is for. All three are on the Preserve Historic Homes page. */
export const homeMapPackets = {
  title: "Packets for this home",
  recognize: { label: "Packet 2: Getting Your Home Recognized as Historic", href: "/preserve-historic-homes/historic-recognition#packets" },
  protect: { label: "Packet 1: Protecting Your Home from Demolition", href: "/preserve-historic-homes/demolition#packets" },
  owners: { label: "Packet 3: Abandoned and Vacant Homes: Reaching the Owners", href: "/preserve-historic-homes/abandoned-homes#packets" },
  note: "Members’ packets come with the Lincolnville Connection.",
};

export const homeMapNote =
  "Lots, building outlines and the neighborhood boundary: City of St. Augustine GIS. Historic records: the 1991 Lincolnville National Register building lists and the Florida Master Site File, as published by the City. Years by decade come from the City’s building age map. Street map © OpenStreetMap contributors. Owner names and property values are never shown. Records can be out of date; the City confirms a property’s current status.";
