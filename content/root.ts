/**
 * Root & Simmer — ROOT Member.
 * Full story on the Discover ROOT page (/root); a short version is on the home page (#root).
 * Wording from the Final Website Master Plan (November 2026). Same rules as content/site.ts:
 * edit the text between the quotes and save.
 */

export const rootIntro = {
  name: "ROOT",
  title: "Member",
  tagline: "Rooted in History. Our Stories Unite Us.",
  subtagline: "Where Our Community Connects and Grows.",
  promise: "Every Home Known. Every Voice Heard. Every Generation Connected.",
  lead: "ROOT is Root & Simmer Hospitality Co.’s independent community connection and preservation membership.",
  body: [
    "Lincolnville is more than a collection of streets and historic homes. It is a living community shaped by generations of families, businesses, traditions, and relationships.",
    "Through ROOT, homeowners, longtime residents, descendants, new neighbors, and community supporters come together to discover the history of their homes, preserve family stories, share knowledge, and strengthen connections across Lincolnville.",
    "Our interactive map connects the places. Our history connects the generations. ROOT connects the people.",
    "Together, we preserve what makes Lincolnville special while creating opportunities for its community to grow.",
  ],
};

/** The short ROOT Member section on the home page. The full story is on /root (Discover ROOT). */
export const rootHome = {
  body: "ROOT brings Lincolnville’s homeowners, residents, descendants, and supporters together through shared history, preservation, and community connection.",
  line: "Our interactive map connects the places. Our history connects the generations. ROOT connects the people.",
  primary: { href: "/root", label: "Discover ROOT" },
  homeStory: { href: "/cra-lincolnville/home-story-package", label: "Your Home Story: the Home Story Package" },
};

/** Discover ROOT: the three choices, same as the ROOT Member menu. */
export const rootChoices = [
  { href: "/cra-lincolnville/home-story-package", label: "Your Home Story", body: "Paid homeowner research: the Home Story Package. Joining ROOT is separate from buying the package." },
  { href: "/preserve-historic-homes/map", label: "Explore the Map", body: "The Lincolnville Home Map: streets, homes and the places that make the neighborhood." },
];

export type Pillar = { letter: string; name: string; subtitle: string; line: string };

/** The four pillars, one card each, with R-O-O-T shown large. */
export const pillars: Pillar[] = [
  {
    letter: "R",
    name: "Residents",
    subtitle: "The Heart of Lincolnville",
    line: "Honoring longtime residents, welcoming new neighbors, and strengthening community relationships.",
  },
  {
    letter: "O",
    name: "Oral History",
    subtitle: "Every Voice Heard",
    line: "Preserving memories, experiences, and family stories with permission so future generations can understand the people who shaped Lincolnville.",
  },
  {
    letter: "O",
    name: "Ownership",
    subtitle: "Every Home Known",
    line: "Connecting homeowners with historical research, preservation resources, and their home’s place in Lincolnville’s history.",
  },
  {
    letter: "T",
    name: "Tradition",
    subtitle: "Every Generation Connected",
    line: "Celebrating the traditions, culture, businesses, faith, and family connections that carry Lil Africa’s legacy forward.",
  },
];

/** The gold line under the pillars. */
export const rootMotto = "Preserve • Educate • Unite";

/** Preserve · Educate · Unite: what ROOT does, and where to do it. */
export const rootWork = [
  {
    word: "Preserve",
    body: "Protect Lincolnville’s historic homes and the records that prove their story.",
    href: "/preserve-historic-homes",
    label: "Preserve Historic Homes",
  },
  {
    word: "Educate",
    body: "Read the plans, budgets and meeting records behind the CRA, in plain words.",
    href: "/library",
    label: "Open the Library",
  },
  {
    word: "Unite",
    body: "Show up, be heard and support the neighbors and places that keep Lincolnville whole.",
    href: "/newsletter",
    label: "Get the newsletter",
  },
];

export const rootJoin = {
  title: "Take part",
  body: "The Lincolnville CRA Steering Committee meets at 5:00 PM in the Alcazar Room at City Hall, 75 King Street. Come with one focused question or comment. To join ROOT or learn more, call 760-481-4961 or email rootnsimmer@gmail.com.",
  button: "Ask about ROOT",
  subject: "ROOT Member",
  emailBody: "Hello Kimberly,\n\nI would like to learn more about ROOT Member.\n\nMy name:\nMy connection to Lincolnville:\nBest way to reach me:",
};

export const rootNote =
  "ROOT is an independent Root & Simmer community membership initiative, not a City or CRA committee. It is not affiliated with or endorsed by the City of St. Augustine or its Community Redevelopment Agency (CRA).";
