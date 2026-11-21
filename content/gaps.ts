/**
 * Root & Simmer — the big picture: the gaps the City's own records name in Lincolnville,
 * and Root & Simmer's four lines of work that answer them. Used on the home page, /our-work,
 * and the "The gap this answers" note on each line's main page.
 * Every gap quotes or reports a City record that is already on this site (see `source`).
 * Same rules as content/site.ts: edit the words between the quotes and save.
 */

export type LineId = "homes" | "history" | "community" | "partners";

export type Gap = {
  id: string;
  title: string;
  /** What the City's own records say. */
  record: string;
  source: { label: string; href: string };
  /** How Root & Simmer fills it, in one sentence. */
  answer: string;
  lines: LineId[];
  links: { href: string; label: string }[];
};

export const gapsIntro = {
  label: "What’s missing in Lincolnville",
  title: "The City’s own plans name what’s missing. Our work fills it.",
  lede: "Six gaps appear again and again in the City of St. Augustine’s Lincolnville plans and records, and the Lincolnville Community Redevelopment Agency (CRA) has until December 31, 2033 to close them. Each one is answered by Root & Simmer’s work.",
  more: "See our four lines of work",
};

export const gaps: Gap[] = [
  {
    id: "overlooked",
    title: "Visitors overlook Lincolnville",
    record: "The 2013 Lincolnville Redevelopment Plan calls Lincolnville “an overlooked experience to the vast majority of visitors.” Visitor maps lead down King Street, not into Lincolnville.",
    source: { label: "2013 Redevelopment Plan, p. 28", href: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf#page=28" },
    answer: "Self-guided walks, the Locator Map and verified visitor-map content bring guests into the neighborhood with respect.",
    lines: ["history", "partners"],
    links: [
      { href: "/walks", label: "Self-guided walks" },
      { href: "/visitor-map", label: "Lincolnville on the Visitor Map" },
    ],
  },
  {
    id: "stories",
    title: "Stories are not being recorded",
    record: "At the City’s 2016 preservation forums, residents asked for oral histories to be recorded, for neighborhoods to tell their own story, and for buildings to be documented before demolition.",
    source: { label: "Historic Preservation Master Plan forums, 2016", href: "/cra-lincolnville/historic-district" },
    answer: "Home histories, family memories recorded with permission, and Lincolnville’s research gathered for members.",
    lines: ["homes", "history"],
    links: [
      { href: "/cra-lincolnville/home-story-package", label: "The Home Story Package" },
      { href: "/lincolnville-history/mohlman-research", label: "Mohlman Research" },
    ],
  },
  {
    id: "homes-lost",
    title: "Historic homes are disappearing, and no one keeps count",
    record: "The 1991 National Register listed 548 contributing buildings. A City survey of 2019–2021 found 140 Lincolnville addresses where a recorded historic building was gone, 69 of them contributing, and no public, up-to-date count of what still stands was found.",
    source: { label: "City demolition list and 2019–2021 survey", href: "/preserve-historic-homes#records" },
    answer: "We track Lincolnville’s historic homes one address at a time on the Home Map, explain how a home qualifies as historic and how demolition review works, and request and keep each home’s records.",
    lines: ["homes"],
    links: [
      { href: "/preserve-historic-homes/historic-recognition#qualify", label: "Does my home qualify?" },
      { href: "/preserve-historic-homes/map", label: "The Home Map" },
    ],
  },
  {
    id: "residents",
    title: "Long-term residents are leaving",
    record: "Black-owned homes fell 45%, from 349 to 192, between 2009 and 2014. As of October 22, 2026, 175 of 685 residential properties (25.5%) held a registered vacation rental. The CRA’s first goal is to retain long-term residents.",
    source: { label: "Homes Not Hotels", href: "/homes-not-hotels" },
    answer: "Help for homeowners with Fix-It-Up and historic tax relief, records that prove a home’s history, and the case for Homes Not Hotels.",
    lines: ["homes", "community"],
    links: [
      { href: "/homeowner-help", label: "Help for homeowners" },
      { href: "/homes-not-hotels", label: "Homes Not Hotels" },
    ],
  },
  {
    id: "daily-needs",
    title: "Residents leave for daily needs",
    record: "The 2013 plan found that “residents have to leave Lincolnville for nearly all goods and services.”",
    source: { label: "2013 Redevelopment Plan, pp. 24–25", href: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf#page=24" },
    answer: "Visions for Washington Street and the Stable Bodega, Support Locally, and sponsors that bring visitors to Lincolnville’s own businesses.",
    lines: ["community", "partners"],
    links: [
      { href: "/what-if/washington-street", label: "What if…? Washington Street" },
      { href: "/newsletter#support-locally", label: "Support Locally" },
    ],
  },
  {
    id: "voice",
    title: "Residents’ voices are not counted",
    record: "The Lincolnville CRA Steering Committee has five members, and no public count of resident attendance or comment was found.",
    source: { label: "Homes Not Hotels", href: "/homes-not-hotels" },
    answer: "A plain-words CRA guide, meeting guides, the newsletter and ROOT help residents show up and be heard.",
    lines: ["community"],
    links: [
      { href: "/cra-lincolnville", label: "Understanding the Lincolnville CRA" },
      { href: "/cra-lincolnville/take-part", label: "How to take part" },
    ],
  },
];

export type Line = { id: LineId; number: string; title: string; who: string; body: string; pages: { href: string; label: string }[]; earns: string };

export const lines: Line[] = [
  {
    id: "homes",
    number: "1",
    title: "Home histories and preservation documentation",
    who: "For Lincolnville homeowners",
    body: "Sourced home histories and Home Story Packages that organize each home’s property records, maps, archival sources and family memories shared with permission, and plain-words help with preservation resources such as Fix-It-Up and historic tax relief, without promising eligibility, approval or outcomes.",
    pages: [
      { href: "/cra-lincolnville/home-story-package", label: "The Home Story Package" },
      { href: "/homeowner-help", label: "Help for homeowners" },
      { href: "/preserve-historic-homes", label: "Preserve Historic Homes" },
      { href: "/preserve-historic-homes/map", label: "The Home Map" },
    ],
    earns: "Homeowner membership with the Home Story Package, $1,200 a year",
  },
  {
    id: "history",
    number: "2",
    title: "Lil Africa history and self-guided discovery",
    who: "For visitors, descendants, historians and members",
    body: "The Land Beneath Our Feet, a living-history journey from African and Gullah Geechee roots through Spanish Florida, Fort Mose and emancipation to Lil Africa and Lincolnville, with Washington Street, Riberia and Civil Rights self-guided discovery, the Locator Map and the Lil Africa Directory. The Mohlman Research and the Historic Residents Map are for members.",
    pages: [
      { href: "/walks", label: "Self-guided walks" },
      { href: "/lincolnville-history/tracts", label: "The Land Beneath Our Feet" },
      { href: "/lincolnville-history/directory", label: "The Lil Africa Directory" },
      { href: "/locator-map", label: "Lincolnville Locator Map" },
      { href: "/lincolnville-history/mohlman-research", label: "Mohlman Research" },
    ],
    earns: "Walk access for members; Friend of Lincolnville and Supporters",
  },
  {
    id: "community",
    number: "3",
    title: "Community information and participation",
    who: "For residents and neighbors",
    body: "The Lincolnville newsletter, plain-words meeting and CRA explainers, the Library, historical directories and maps that invite residents to add, correct and shape the story, Homes Not Hotels, and the What if…? ideas for Washington Street, Twine Park, the Stable Bodega and a visitor welcome.",
    pages: [
      { href: "/cra-lincolnville", label: "Understanding the Lincolnville CRA" },
      { href: "/newsletter", label: "Newsletter" },
      { href: "/library", label: "Library" },
      { href: "/root", label: "ROOT Member" },
      { href: "/what-if/washington-street", label: "What if…? Washington Street" },
    ],
    earns: "Lincolnville Partners at $1,500 a year; sponsorship inquiries for the newsletter, walk stops and Locator Map",
  },
  {
    id: "partners",
    number: "4",
    title: "Contracted research and partnerships",
    who: "For the City, the CRA, museums, churches and schools",
    body: "Independently contracted archival research, oral-history documentation, interpretive writing, wayfinding proposals, resident outreach and preservation content for institutions, community groups and public bodies, each with a written scope, fee, permissions and independence disclosure.",
    pages: [
      { href: "/work-with-us", label: "Work with Root & Simmer" },
      { href: "/visitor-map", label: "Bringing Lincolnville onto the Visitor Map" },
    ],
    earns: "Contracted projects under written agreements; proposals are not contracts until signed",
  },
];

export const ourWorkPage = {
  label: "Our work",
  title: "Four lines of work, one neighborhood",
  lede: "Root & Simmer Hospitality Co. is an independent preservation and community-connection business rooted in Lincolnville. It brings historical records, neighborhood voices and community partnerships together so the history of Lil Africa, and of the African American people who built and shaped Lincolnville, is visible, accurately told and passed forward. It is a bridge, not a City or Community Redevelopment Agency (CRA) program. Its work runs in four lines, and together they answer every gap the City’s own Lincolnville plans name.",
  matrixTitle: "Every gap has an answer",
  matrixNote: "A filled dot means that line of work answers that gap.",
};
