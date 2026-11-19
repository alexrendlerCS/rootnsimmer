/**
 * Root & Simmer — Preserve Historic Homes (/preserve-historic-homes), a tab in the top menu.
 * Pages: Overview, Demolition, Historic Recognition, Abandoned Homes and the Home Map (see preservePages).
 * Each page has a free overview; the full packets come with the Lincolnville Connection.
 *
 * Words come from the Lincolnville Connection Member Resource Bundle (sections 2 and 3),
 * "Lincolnville Demolitions at a Glance" (October 30, 2026) and the City's Steering Committee minutes.
 * Same rules as content/site.ts: edit the text between the quotes and save.
 */

export const protectHero = {
  label: "Preserve Historic Homes",
  title: "Preserve Lincolnville’s historic homes.",
  lede: "Lincolnville’s homes carry its history in their walls. Once a historic house or one of its defining features is gone, it cannot be brought back. Here is how demolition review works, how a home can be recognized as historic, how to reach the owner of an abandoned home, and the three member packets that walk you through each.",
};

/** From "Lincolnville Demolitions at a Glance", drawn from the City's own records. */
export const protectFacts = {
  title: "What the City’s own records show",
  facts: [
    { value: "140", label: "Lincolnville addresses where the 2019-2021 survey found a recorded historic building gone, with no permit on the City’s 2019-2025 list" },
    { value: "69", label: "of those were contributing buildings on the 1991 National Register list" },
    { value: "16", label: "contributing addresses received demolition permits in 2019 or later" },
  ],
  note: "Many losses are probably older than 2019, and some permits cover only a shed, garage or part of a building. Sources: City of St. Augustine 2019-2025 demolition permit list; St. Augustine Flood Mitigation Survey Report, Appendix E; 1991 Lincolnville National Register building list.",
};

export const protectQuote = {
  text: "Lincolnville “was not a Historic Preservation District (HP)”; it is “a National Register District.”",
  who: "Jaime Perkins, CRA Manager, Lincolnville CRA Steering Committee, January 5, 2026",
  source: "According to the City’s minutes. Minutes are summaries written by the City Clerk’s staff, not word-for-word transcripts.",
};

export type Step = string;

/** The pages of Preserve Historic Homes, in order (side menu and previous/next). */
export const preservePages = [
  { slug: "", title: "Overview" },
  { slug: "demolition", title: "Demolition" },
  { slug: "historic-recognition", title: "Historic Recognition" },
  { slug: "abandoned-homes", title: "Abandoned Homes" },
  { slug: "map", title: "Lincolnville Home Map" },
] as const;
export type PreserveSlug = (typeof preservePages)[number]["slug"];

/** The overview's four ways in. */
export const preservePaths = [
  { slug: "demolition", title: "Demolition", body: "How the City reviews demolition, how to speak up when one is proposed, and the paperwork an owner files.", packet: "Packet 1" },
  { slug: "historic-recognition", title: "Historic Recognition", body: "The three kinds of recognition, how to seek each one, and the tax relief that can follow.", packet: "Packet 2" },
  { slug: "abandoned-homes", title: "Abandoned Homes", body: "What the City’s plans say about empty homes, and how to reach an owner respectfully.", packet: "Packet 3" },
  { slug: "map", title: "Lincolnville Home Map", body: "Every lot in Lincolnville, sorted three ways: historic homes, demolition watch, and vacant and abandoned.", packet: "" },
] as const;

/** The Demolition page's opening: why Root & Simmer does this work. */
export const preserveIntro = {
  id: "preserving",
  title: "Preserving history and homes",
  mission:
    "Root & Simmer Hospitality Co. preserves Lincolnville’s homes, history and heritage. Independent and rooted in the neighborhood, we research the story of each home, record the voices of the families who made it home, and carry both forward, so 160 years of Lil Africa are known, kept and heard from generation to generation.",
  body: "This page begins with what demolition leaves behind: an empty lot where a century-old house stood, and steps standing alone in a yard. Then it shows how the City reviews demolition, how neighbors can speak up, and what an owner must file, so the next house can stay standing.",
  tagline: "Every home known. Every voice kept. Every generation connected.",
};

/**
 * 103 South Street, before and after. Public facts from the City's HARB order (case 2019-0109), demolition permit
 * PR2020-1652 and the County record; photos by Root & Simmer, October 13, 2026. No owner names.
 */
export const south103 = {
  id: "103-south",
  title: "103 South Street: before and after",
  intro: "A frame house built about 1904 to 1910 stood at 103 South Street, a contributing building in the 1991 Lincolnville Historic District. Today the lot is empty.",
  before: {
    src: "/photos/103-south-st-original-east-elevation.jpg",
    width: 1400,
    height: 711,
    alt: "Architect’s drawing of a one-story frame house with a gabled roof, a chimney, wood siding and a wide front porch.",
    caption: "Before: the house’s original front, from the architect’s drawings filed with the City’s demolition permit (PR2020-1652).",
  },
  after: {
    src: "/photos/103-south-st-lot-2026-10.jpg",
    width: 1000,
    height: 1333,
    alt: "An empty grassy lot with rainwater pooled across it, beside a two-story house, with a low masonry wall at the back.",
    caption: "After: the lot on October 13, 2026. No building stands, and rainwater pools where the house was. Photo: Root & Simmer.",
  },
  wall: {
    src: "/photos/103-south-st-wall-2026-10.jpg",
    width: 1000,
    height: 1333,
    alt: "A weathered, moss-covered masonry block wall along the back of the lot, with palms and a house behind it.",
    caption: "Still standing: the masonry wall along the back of the lot appears to be preserved. Photo: Root & Simmer, October 2026.",
  },
  record: [
    { label: "December 19, 2019", body: "The Historic Architectural Review Board approved a partial demolition with conditions (case 2019-0109). An earlier demolition approval had expired." },
    { label: "December 18, 2020", body: "A licensed contractor filed demolition permit PR2020-1652, the day before the one-year approval ran out. The City lists the permit as closed." },
    { label: "Today", body: "The County lists the parcel as vacant residential. A masonry wall is the only feature it lists, and that wall still stands along the back of the lot." },
  ],
  lesson: "The order in the file approved a partial demolition, yet no building stands today. We have asked the City, plainly and without blame, what approval covered the rest. This is how a contributing house can be lost step by step: an expired approval, a new partial approval, a permit filed at the deadline.",
  mapLink: { label: "See 103 South Street on the home map", href: "/preserve-historic-homes/map" },
};

/**
 * Introduction to the Demolition page: "The Stairs That Remain", from Kimberly's story of the same name (Oct 2026).
 * Public version: records and what anyone can see from the street. Family names and memories (the Wells and
 * Payton families at 145 Twine; Marcus at 101 South) are added only once each family approves the wording.
 */
export const stairs = {
  id: "stairs",
  title: "The stairs that remain",
  paragraphs: [
    "Walk Lincolnville slowly and you will find them: a few concrete or stone steps standing alone in a yard, climbing to a door that is no longer there. The building is gone. The steps stayed.",
    "Each set of stairs marks a threshold someone crossed every day: into a home, a church, a shop, a workshop. They are some of the last physical pieces of buildings that once stood on these lots, and they ask a simple question of anyone passing by: who walked up here, and what were they going to do?",
  ],
  photo: {
    src: "/photos/stairs-145-twine-st.jpg",
    width: 1000,
    height: 1333,
    alt: "Three weathered concrete steps standing alone in a side yard, with C H W 1951 carved into the top step and a small plaque beside it.",
    caption: "The steps at 145 Twine Street, carved “C H W - 1951.” Photo: Root & Simmer, October 2026.",
  },
  sets: [
    {
      place: "145 Twine Street",
      body: "Three concrete steps on a small landing stand alone in the side yard, with a cracked slab at the base. Pressed into the top riser are the initials C H W and the year 1951. The house on the lot today was built in 1986, so the steps belonged to something older. Who C H W was, and what door these steps once reached, is still an open question.",
    },
    {
      place: "101 South Street",
      body: "Steps and a slab remain on a lot where a 1954 house was demolished in 2019, after the Historic Architectural Review Board approved it. The steps may be older than that house. The old Sanborn maps, and the memories of the family who knew the lot, can tell what they once led into.",
    },
  ],
  trail: "Root & Simmer is gathering these stairs into one story, a trail of thresholds across the neighborhood. Each set will be photographed, located, and paired with whatever the records and the families can tell us: who built it, who used it, and why it is the only part left standing. Where the records are silent, the neighbors’ memories will carry the story, labeled clearly as their own words.",
  closing: "The stairs that remain are Lincolnville’s way of saying: we were here, we worked here, and we are still here.",
  ask: { label: "Know of a set of stairs standing alone? Tell us", subject: "The stairs that remain" },
  bridge: "Steps like these are what demolition leaves behind. Below is how the City reviews demolition, and how to speak up before the next building goes.",
};

export const demolition = {
  id: "demolition",
  title: "How the City reviews demolition",
  intro: "St. Augustine reviews demolition before it happens, and owners and neighbors can take part in that review. These rules apply to every building in the city, whatever its zoning.",
  reviews: [
    { label: "Full demolition", body: "A Certificate of Demolition is required before completely demolishing any structure 50 years old or older. The Historic Architectural Review Board (HARB) must approve it before a demolition permit is issued." },
    { label: "Partial demolition", body: "The permanent removal of historic exterior features: roofs, chimneys, exterior walls or finishes, porches, windows, foundations and other visible features, and removing 50% or more of a feature’s appraised value even where it is not visible." },
    { label: "Replacement in kind", body: "Compatible replacements with matching material and design can often be approved by City staff during permit review." },
    { label: "Archaeology", body: "Digging more than 3 inches deep over 100 square feet may need review first. Check with the City Archaeologist before foundation work, additions or trenching." },
  ],
  /** If a demolition is proposed near you. */
  respondTitle: "If a demolition is proposed near you",
  steps: [
    "Check the building on the Lincolnville Home Map: choose “Demolition watch” to see the lots on the City’s 2019-2025 demolition permit list.",
    "Watch the HARB agenda. HARB meets on the third Thursday of each month, and demolition requests are heard in public.",
    "Speak at the hearing, or send a written comment beforehand. Neighbors may comment on any request.",
    "Ask Historic Preservation staff what review applies: harb@citystaug.com.",
  ] as Step[],
};

export const recognition = {
  id: "recognition",
  title: "Getting your home recognized as historic",
  intro: "Lincolnville has been a National Register historic district since 1991, when 548 of its buildings were listed as contributing. Designation honors a building’s history, and some forms of it also protect the building and open the door to preservation help.",
  kinds: [
    { label: "National Register district (1991)", body: "Lists contributing buildings street by street. Status can be lost if a building is heavily altered or demolished." },
    { label: "Florida Master Site File", body: "The State’s official inventory of historic resources. Contact: SiteFile@dos.myflorida.com, 850-245-6440." },
    { label: "Local Historic Landmark", body: "Designated by HARB, with the owner’s consent. It gives a building lasting protection from demolition." },
  ],
  qualify: {
    title: "Does my home qualify as historic?",
    intro: "Four questions show where a Lincolnville home stands. The City, the State and the National Park Service decide what qualifies; we help you gather the answers.",
    checks: [
      { q: "Is it on the 1991 list?", a: "The 1991 National Register nomination listed 548 contributing buildings, every one built before 1930. If your home is one of them, it belongs to the Lincolnville Historic District. Street numbers may have changed since 1991." },
      { q: "Is it 50 years old or older?", a: "The City’s Historic Architectural Review Board (HARB) must approve the full demolition of any building 50 years or older. In 2022 the City’s Historic Preservation Officer said the district was being updated now that civil-rights-era buildings have reached 50 years old, so a home built after 1930 may also be worth documenting." },
      { q: "Has it kept its historic character?", a: "A building that is heavily altered or demolished can lose its contributing status. Keeping its historic form is part of keeping its standing." },
      { q: "Do you want lasting protection or tax relief?", a: "Local Historic Landmark status, designated by HARB with the owner’s consent, gives lasting protection from demolition. Designated or contributing buildings can also qualify for the restoration tax exemption below." },
    ],
  },
  steps: [
    "Find the building on the 1991 list, or on the City’s interactive historic preservation map. Street names and numbers may have changed since 1991.",
    "Request the Florida Master Site File record for the building, if one exists, including survey photographs.",
    "For the National Register, complete the State’s Preliminary Site Information Questionnaire and send it to the Bureau of Historic Preservation, R.A. Gray Building, 500 South Bronough Street, Tallahassee, FL 32399-0250 (850-245-6333). It asks for current and historic photos, a location map and proof of ownership.",
    "For Local Historic Landmark status, contact the City’s Historic Preservation staff (harb@citystaug.com). The owner must consent.",
    "Gather the home’s history. Deeds, permits, maps and family memories strengthen any nomination.",
  ] as Step[],
  tax: {
    title: "Tax relief for restoration",
    body: "For a designated or contributing building, the City and County Ad Valorem Tax Exemption can exempt 100% of the added value of qualifying restoration for 10 years. The work must meet the Secretary of the Interior’s Standards, be worth at least $20,000 or 50% of the structure’s assessed value before improvements, whichever is less, put at least 25% into the exterior or foundation, and be approved before work starts. The owner signs a covenant recorded with the deed.",
  },
};

/** The three members' packets. The PDFs live in Documents\Root & Simmer Member Library\0 Member packets. */
export const packets = [
  {
    id: "packet-1",
    number: "Packet 1",
    title: "Protecting Your Home from Demolition",
    pages: "73 pages",
    contents: [
      "Protecting a historic home from demolition: the plain-words guide, with the City’s 2023 letter to owners of historic buildings and the HARB section of the City Code",
      "Filing for a demolition, step by step: which application, the documents, the Permit Portal, fees, the hearing and appeals",
      "The City’s forms gathered in one place: the HARB Application Agreement, the Undue Economic Hardship Worksheet and the Submittal Checklist",
      "Keeping Your Lincolnville Home: a homeowner’s guide to preservation, repairs and the agreements that come with help",
      "Lincolnville Demolitions at a Glance, 2019-2025",
      "Lincolnville Homes Already Demolished, two lists",
      "Lincolnville Demolition Permits Still Open or Issued",
      "City Demolitions List, 2019 to 2025",
      "Demolished Structures Survey, 2019-2021, in a printable copy and the City original",
    ],
  },
  {
    id: "packet-2",
    number: "Packet 2",
    title: "Getting Your Home Recognized as Historic",
    pages: "114 pages",
    contents: [
      "Seeking historic designation and tax relief: the plain-words guide, with the City’s Ad Valorem Tax Exemption sheet and the 1991 building list",
      "The full National Register of Historic Places nomination for the Lincolnville Historic District",
      "An example Florida Master Site File form with photographs, c. 1979, so you know what to request for your own home",
      "Historic Preservation Officer interview on guidelines and landmarks, with summary and transcript",
    ],
  },
  {
    id: "packet-3",
    number: "Packet 3",
    title: "Abandoned and Vacant Homes: Reaching the Owners",
    pages: "14 pages",
    contents: [
      "Reaching the owners: a plain-words guide, seven steps and a sample letter you can copy",
      "The 2013 Redevelopment Plan pages on abandoned structures, contacting owners and legal help with titles",
      "The 2017 amendment pages on title clearing, the Community Land Trust and rehabilitating vacant homes",
      "Appendix A, the Lincolnville Community Land Trust, and Appendix B, the rehabilitation programs",
    ],
  },
];

/** If a home is abandoned: what the City's own plan says, and where to start. */
export const abandoned = {
  id: "abandoned",
  title: "If a home is abandoned",
  quote:
    "The Community Redevelopment Agency should … compile a database of those abandoned, dilapidated and/or deteriorating structures that contribute to the blight in the Lincolnville CRA. The Agency would then proactively contact the owners of these structures to assess what is preventing them from complying with City code.",
  source: "Lincolnville Redevelopment Plan, adopted April 8, 2013, page 31",
  body: "An empty house is still someone’s family home. Packet 3 shows how to find the owner of record, how to write to them kindly, and the help that may bring the house back: Fix-It-Up repair grants, help clearing titles, and historic preservation tax relief. Root & Simmer does not buy, sell or list homes.",
  mapLink: { href: "/preserve-historic-homes/map?sort=vacant", label: "See vacant lots on the map" },
};

export const protectJoin = {
  title: "Get all three packets",
  body: "The packets come with the Lincolnville Connection, part of the Home Story Package.",
  button: "See the Lincolnville Connection",
  href: "/digital-records#dr-membership",
};

export const protectOwn = {
  title: "Your own home’s history",
  body: "The Home Story Package researches your home from the official records and writes its story down with every source, including its historic status, the State site file record if one exists, and the maps and permits that show how it has changed. See what a finished packet holds.",
  button: "See the Home Story Package",
  href: "/cra-lincolnville/home-story-package#sample",
};

export const protectNote =
  "Root & Simmer Hospitality Co. offers this page as independent community education. It is not an official City of St. Augustine, CRA or Historic Architectural Review Board publication, and it is not legal or tax advice. Rules change; confirm with the office named before you act.";

/** National Register background, after "What the City's own records show" (Website update brief, Phase 1, 4.5). */
export const protectRegister = {
  title: "What the 1991 National Register nomination recorded",
  body: [
    "The Lincolnville Historic District was listed on the National Register of Historic Places on November 29, 1991. Its inventory counted 548 contributing and 130 noncontributing buildings; every contributing building dates before 1930. The nomination drew on a 1979 survey, bird’s-eye views from 1885 and 1894, Sanborn fire insurance maps from 1884 to 1958, deed research and some forty city directories.",
    "These are 1991 counts, not today’s. Lincolnville is a National Register district but not a local preservation district, so protection has to be checked parcel by parcel. Which buildings still stand, and which were altered or lost, is the question our home research answers one address at a time.",
  ],
  quote: "The documents preserve the record. The residents carry the memory.",
  label: "National Register (1991)",
  link: { href: "/library#homes-and-history", label: "The National Register nomination, in the Library" },
};
