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

/**
 * THE MAP'S COLORS, in one place (the key under the map is built from this).
 *   Our work (Root & Simmer):
 *     red          History researched by Root & Simmer               (kind "researched")
 *     teal         Abandoned home: we are looking for the owners      (homeStatus "owners")
 *     dark green   Family home welcoming guests: vacation and long-term stays (homeStatus "guests")
 *     red outline  Your own home (members only, after signing in)
 *   From the public records:
 *     gold         Historic: contributing in 1991, or a potential contributor (kind "historic")
 *     grey dashed  Historic building no longer standing              (kind "lost")
 *     pale green   Other lots                                         (kind "other")
 *   Sort buttons light up one group: Historic homes = gold, Demolition watch = red, Vacant and abandoned = teal.
 *   A lot you click gets a thick red outline.
 */
export const homeMapKey = {
  title: "Map key",
  ourWork: "Our work",
  records: "From the public records",
  yourHome: "Your home (outlined in red)",
  sorts: "The buttons above the map light up one group at a time: Historic homes in gold, Demolition watch in red, Vacant and abandoned in teal. The lot you click is outlined in red.",
};

export const homeMapLegend = [
  { kind: "researched", label: "History researched by Root & Simmer" },
  { kind: "historic", label: "Historic: contributing in 1991, or a potential contributor in the State site file" },
  { kind: "lost", label: "Historic building no longer standing" },
  { kind: "other", label: "Other lots" },
] as const;

/**
 * Homes Root & Simmer is working with, by City parcel number, each in its own color on the map:
 *   owners = an abandoned home we are trying to reach the owners of (teal, the "Vacant and abandoned" color)
 *   guests = a family home that welcomes guests for vacation and long-term stays (dark green)
 * Public words only: never owners' names, trust names, mailing addresses, prices, bedrooms or booking details.
 * Each home's papers stay private: in the members' area for members, or in the back office.
 * To add a home, copy a line and change the parcel number (shown in the County's records) and the note.
 */
export type HomeStatus = "owners" | "guests";
export const homeStatus: Record<string, { status: HomeStatus; note: string }> = {
  "2105700000": {
    status: "owners",
    note: "This house is standing but empty, and its 2019 demolition approval has lapsed. It was listed as contributing to the Lincolnville Historic District in 1991, and it faces Twine Park across Lovett Street. We are trying to reach the owners about its history and its future.",
  },
  "2104200000": {
    status: "guests",
    note: "A family home that welcomes guests for vacation and long-term stays. Its history, on the street once called Palmo, now Twine Street, goes with every stay.",
  },
};

export const homeStatusCards: Record<HomeStatus, { color: string; label: string; legend: string; title: string; button?: string; emailSubject?: string; emailBody?: (address: string) => string }> = {
  owners: {
    color: "#4f7f78",
    label: "Abandoned: we are looking for the owners",
    legend: "Abandoned home: we are looking for the owners",
    title: "Help us reach the owners",
    button: "I know this family",
    emailSubject: "Lincolnville home map: reaching the owners",
    emailBody: (address: string) =>
      `Hello Kimberly,\n\nI may be able to help you reach the owners of ${address}.\n\nWhat I know:\n\nBest way to reach me:`,
  },
  guests: {
    color: "#1f3a2c",
    label: "A family home that welcomes guests",
    legend: "Family home welcoming guests: vacation and long-term stays",
    title: "A home that welcomes guests",
  },
};

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
  { id: "vacant", label: "Vacant and abandoned", hint: "Lots the County lists as vacant, and abandoned homes we are looking for the owners of (solid teal). Know of an abandoned house? Tell us, and we will help reach the owner." },
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
