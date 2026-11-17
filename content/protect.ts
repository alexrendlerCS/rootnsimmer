/**
 * Root & Simmer — Preserve Historic Homes (/preserve-historic-homes), a tab in the top menu.
 * Demolition review and historic recognition: a free overview, plus two members' packets.
 *
 * Words come from the Lincolnville Connection Member Resource Bundle (sections 2 and 3),
 * "Lincolnville Demolitions at a Glance" (October 30, 2026) and the City's Steering Committee minutes.
 * Same rules as content/site.ts: edit the text between the quotes and save.
 */

export const protectHero = {
  label: "Preserve Historic Homes",
  title: "Preserve Lincolnville’s historic homes.",
  lede: "Lincolnville’s homes carry its history in their walls. Once a historic house or one of its defining features is gone, it cannot be brought back. Here is how demolition review works, how a home can be recognized as historic, and the two member packets that walk you through both.",
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

export const demolition = {
  id: "demolition",
  title: "If a demolition is proposed",
  intro: "St. Augustine reviews demolition before it happens, and owners and neighbors can take part in that review.",
  reviews: [
    { label: "Full demolition", body: "Any building 50 years old or older needs a Certificate of Demolition after review by the Historic Architectural Review Board (HARB)." },
    { label: "Partial demolition", body: "On designated or contributing historic buildings, permanently removing or replacing significant features is reviewed: roofs (chimneys, dormers, parapets), windows, exterior finishes, porches and balconies, and foundations. Minor repair, such as re-roofing or matching a few siding boards, is not covered." },
    { label: "Replacement in kind", body: "Compatible replacements with matching material and design can often be approved by City staff during permit review." },
    { label: "Archaeology", body: "Digging more than 3 inches deep over 100 square feet may need review first. Check with the City Archaeologist before foundation work, additions or trenching." },
  ],
  steps: [
    "Check the building’s status. Use the City’s interactive historic preservation map, or the 1991 National Register list, to see whether the building is designated or contributing.",
    "Talk to the Historic Preservation Division first: HARB@citystaug.com, 904-209-4283. Ask what review applies and which application to use.",
    "Prepare the application. For a contributing building, a full-demolition application also needs a condition report by a Florida licensed architect or engineer and proof of undue economic hardship.",
    "Watch the HARB agenda. Demolition requests are heard in public. Neighbors may attend and comment.",
    "Ask about flood exemptions. A 2023 state law, F.S. 553.79(25), can exempt some single-family homes in flood zones from local demolition review, depending on floor elevation. Confirm with the City how it applies.",
  ] as Step[],
};

export const recognition = {
  id: "recognition",
  title: "Getting your home recognized as historic",
  intro: "Lincolnville has been a National Register historic district since 1991, when about 540 of its buildings were listed as contributing. Designation honors a building’s history, and some forms of it also protect the building and open the door to preservation help.",
  kinds: [
    { label: "National Register district (1991)", body: "Lists contributing buildings street by street. Status can be lost if a building is heavily altered or demolished." },
    { label: "Florida Master Site File", body: "The State’s official inventory of historic resources. Contact: SiteFile@dos.myflorida.com, 850-245-6440." },
    { label: "Local Historic Landmark", body: "Designated by HARB, with the owner’s consent. It gives a building lasting protection from demolition." },
  ],
  steps: [
    "Find the building on the 1991 list, or on the City’s interactive historic preservation map. Street names and numbers may have changed since 1991.",
    "Request the Florida Master Site File record for the building, if one exists, including survey photographs.",
    "For the National Register, complete the State’s Preliminary Site Information Questionnaire and send it to the Bureau of Historic Preservation, R.A. Gray Building, 500 South Bronough Street, Tallahassee, FL 32399-0250 (850-245-6333). It asks for current and historic photos, a location map and proof of ownership.",
    "For Local Historic Landmark status, contact the City’s Historic Preservation Division (HARB@citystaug.com, 904-209-4283). The owner must consent.",
    "Gather the home’s history. Deeds, permits, maps and family memories strengthen any nomination.",
  ] as Step[],
  tax: {
    title: "Tax relief for restoration",
    body: "For a designated or contributing building, the City and County Ad Valorem Tax Exemption can exempt 100% of the added value of qualifying restoration for 10 years. The work must meet the Secretary of the Interior’s Standards, be worth at least $20,000 or 50% of the structure’s assessed value, put at least 25% into the exterior or foundation, and be approved before work starts. The owner signs a covenant recorded with the deed.",
  },
};

/** The two members' packets. The PDFs live in Documents\Root & Simmer Member Library\0 Member packets. */
export const packets = [
  {
    id: "packet-1",
    number: "Packet 1",
    title: "Protecting Your Home from Demolition",
    pages: "65 pages",
    contents: [
      "Protecting a historic home from demolition: the plain-words guide, with the City’s 2023 letter to owners of historic buildings and the HARB section of the City Code",
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
];

export const protectJoin = {
  title: "Get both packets",
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
