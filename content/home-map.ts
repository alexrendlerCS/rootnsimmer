/**
 * Root & Simmer — Lincolnville Home Map (/preserve-historic-homes/map).
 *
 * The map data is built by scripts/build-home-map.mjs into public/data/lincolnville-homes.json from
 * City of St. Augustine GIS layers and Kimberly's Street Files workbook. Same rules as content/site.ts:
 * edit the words between the quotes and save.
 */

export const homeMapHero = {
  label: "Preserve Historic Homes",
  title: "Find your home on the map.",
  lede: "Every lot in Lincolnville, inside the City’s official neighborhood boundary. Search for an address or click a lot to see what the public records say about it, then join the Lincolnville Connection to keep your home’s story.",
};

/**
 * THE MAP'S COLORS, in one place (the key under the map is built from this).
 *   Our work (Root & Simmer):
 *     red          History researched by Root & Simmer               (kind "researched")
 *     teal         Abandoned home: we are looking for the owners      (homeStatus "owners")
 *     dark green   Family home welcoming guests: vacation and long-term stays (homeStatus "guests")
 *     amber        What if…? A vacant place we picture a new life for       (homeStatus "vision")
 *     red outline  Your own home (members only, after signing in)
 *   From the public records:
 *     gold         Historic: contributing in 1991, or a potential contributor (kind "historic")
 *     plum         Demolished: a building here is no longer standing (kind "lost", plus demolishedLots below)
 *     pale green   Other lots                                         (kind "other")
 *   Sort buttons light up one group: Historic homes = gold, Demolition watch = red, Vacant and abandoned = teal.
 *   A lot you click gets a thick red outline.
 */
export const homeMapKey = {
  title: "Map key",
  ourWork: "Our work",
  records: "From the public records",
  yourHome: "Your home (outlined in red)",
  sorts: "The buttons above the map light up one group at a time: Historic homes in gold, Demolition watch in red, Vacant and abandoned in teal (with our What if…? places in amber). The lot you click is outlined in red.",
};

/**
 * Lots where the City's records show a building was demolished but the map data does not already mark it
 * (it was not on the 1991 contributing list), or that need a note on what happened. Shown in the demolished color.
 * Public facts from City records only: no owner names.
 */
export const demolishedLots: Record<string, { note: string; photo?: { src: string; alt: string; caption: string }; link?: { label: string; href: string } }> = {
  "2120400000": {
    note: "A frame house built about 1904-1910 stood here, a contributing building in the 1991 Lincolnville Historic District. In December 2019 the Historic Architectural Review Board approved a partial demolition with conditions (case 2019-0109), and a demolition permit (PR2020-1652) was filed in December 2020. No building stands today; the lot is empty. A masonry wall along the back of the lot still stands.",
    photo: {
      src: "/photos/103-south-st-lot-2026-10.jpg",
      alt: "An empty grassy lot with rainwater pooled across it, with a low masonry wall at the back.",
      caption: "The lot on October 13, 2026. Photo: Root & Simmer.",
    },
    link: { label: "Before and after", href: "/preserve-historic-homes/demolition#103-south" },
  },
  "2120700000": {
    note: "A 1954 concrete block house at 101 South St was demolished in 2019, after the Historic Architectural Review Board approved it in November 2018 (City permit PR2019-0244). Steps and a slab remain on the lot.",
  },
};

export const homeMapLegend = [
  { kind: "researched", label: "History researched by Root & Simmer" },
  { kind: "historic", label: "Historic: contributing in 1991, or a potential contributor in the State site file" },
  { kind: "lost", label: "Demolished: a building here is no longer standing" },
  { kind: "other", label: "Other lots" },
] as const;

/**
 * Homes Root & Simmer is working with, by City parcel number, each in its own color on the map:
 *   owners = an abandoned home we are trying to reach the owners of (teal, the "Vacant and abandoned" color)
 *   guests = a family home that welcomes guests for vacation and long-term stays (dark green)
 *   vision = a vacant place with a Root & Simmer "What if…?" idea (amber), linked to its idea page
 * Public words only: never owners' names, trust names, mailing addresses, prices, bedrooms or booking details.
 * Each home's papers stay private: in the members' area for members, or in the back office.
 * To add a home, copy a line and change the parcel number (shown in the County's records) and the note.
 */
export type HomeStatus = "owners" | "guests" | "vision";
export const homeStatus: Record<string, { status: HomeStatus; note: string; title?: string; photo?: { src: string; alt: string; caption: string }; link?: { label: string; href: string } }> = {
  "2102200000": {
    status: "vision",
    title: "What if…? Twine Park",
    note: "Twine Park, 57 Lovett Street, named for Henry L. Twine and Katherine “Kat” Twine, Lincolnville civil rights leaders. The City owns the park and the CRA funds its improvement, with a design under way. What if the whole corner honored the Twines the way they deserve?",
    photo: {
      src: "/photos/twine-park-marker-2026-10.jpg",
      alt: "The weathered Twine Park marker with portraits of Henry Twine and Kat Twine.",
      caption: "The Twine Park marker, October 2026. Photo: Root & Simmer.",
    },
    link: { label: "See the idea, vote and add yours", href: "/what-if/twine-park" },
  },
  "1495900010": {
    status: "vision",
    title: "What if…? The Stable Bodega",
    note: "The City’s former carriage stables: about one acre of painted concrete-block barns with tin roofs and red barn doors around a grass yard. The buildings are vacant, and the acre has sat behind a locked fence since the stable lease ended on September 30, 2026. What if the gate opened again as the Stable Bodega?",
    photo: {
      src: "/photos/stable-bodega-barn.jpg",
      alt: "A long dark barn with a rusted tin roof behind a grass strip and an old paved drive.",
      caption: "The main barn from the drive, October 2026. Photo: Root & Simmer.",
    },
    link: { label: "See the idea, vote and add yours", href: "/what-if/stable-bodega" },
  },
  "2105700000": {
    status: "owners",
    photo: {
      src: "/photos/56-lovett-st-2026-10.jpg",
      alt: "A small light blue house with boarded windows and an overgrown front yard.",
      caption: "56 Lovett St, October 2026. Photo: Root & Simmer.",
    },
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
  vision: {
    color: "#e8a33d",
    label: "What if…?",
    legend: "What if…? A vacant place we picture a new life for",
    title: "What if…? The Stable Bodega",
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
  mineButton: "Open my home history packet",
  joinTitle: "Is this your home?",
  joinBody: "Join the Lincolnville Connection with the Home Story Package, and we will research your home’s history from the official records.",
  joinButton: "Join with this address",
  emailSubject: "Lincolnville Connection: my home",
  emailBody: (address: string) =>
    `Hello Kimberly,\n\nI found my home on the Lincolnville map and would like to join the Lincolnville Connection.\n\nMy address: ${address}\n\nBest way to reach me:`,
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
