/**
 * Root & Simmer — ROOT: Lincolnville Community Committee (/root).
 * Wording from Kimberly's ROOT poster (November 2026). Same rules as content/site.ts:
 * edit the text between the quotes and save.
 *
 * Each pillar links to the part of the site that does that work, so the site reads as one whole:
 * Residents -> the home map, Oral History -> the Home Story Package and City interviews,
 * Ownership -> Preserve Historic Homes, Tradition -> the CRA guide, landmarks and Support Locally.
 */

export const rootHero = {
  name: "ROOT",
  title: "Lincolnville Community Committee",
  about:
    "An independent, community-led group under Root & Simmer Hospitality Co. working to preserve Lincolnville’s culture, history, traditions and community while co-existing and collaborating with the City’s Community Redevelopment Area (CRA).",
  promise:
    "We bring our ancestors’ stories to be heard, advocate for long-term residents and work to ensure Lincolnville’s people, place and legacy remain at the center of the conversation.",
};

export type Pillar = {
  name: string;
  tagline: string;
  body: string;
  links: { href: string; label: string }[];
};

export const pillars: Pillar[] = [
  {
    name: "Residents",
    tagline: "The People of Lincolnville",
    body: "Every home in Lincolnville is on our map. Find yours, see what the public records say about it, and join the neighbors keeping its story.",
    links: [
      { href: "/preserve-historic-homes/map", label: "Find your home on the map" },
      { href: "/digital-records#dr-membership", label: "Join the Lincolnville Connection" },
    ],
  },
  {
    name: "Oral History",
    tagline: "The Stories That Live Here",
    body: "Family memories in your own words, kept with your home’s history, and City staff on the record about Lincolnville.",
    links: [
      { href: "/cra-lincolnville/home-story-package", label: "The Home Story Package" },
      { href: "/library#voices", label: "Voices from City Hall" },
    ],
  },
  {
    name: "Ownership",
    tagline: "The Knowledge We Protect",
    body: "What owners need to know: how demolition review works, how a home is recognized as historic, and the tax relief that can follow.",
    links: [
      { href: "/preserve-historic-homes", label: "Preserve Historic Homes" },
      { href: "/preserve-historic-homes/map?sort=historic", label: "Historic homes on the map" },
    ],
  },
  {
    name: "Tradition",
    tagline: "The Legacy We Carry Forward",
    body: "The landmarks, parks and named places that hold Lincolnville’s story, and the local places that carry it on today.",
    links: [
      { href: "/cra-lincolnville/institutional-landmarks", label: "Lincolnville’s landmarks" },
      { href: "/newsletter#support-locally", label: "Support Locally" },
    ],
  },
];

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
  subject: "ROOT: Lincolnville Community Committee",
  emailBody: "Hello Kimberly,\n\nI would like to learn more about ROOT, the Lincolnville Community Committee.\n\nMy name:\nMy connection to Lincolnville:\nBest way to reach me:",
};

export const rootNote =
  "ROOT is independent and community-led under Root & Simmer Hospitality Co. It is not a City of St. Augustine or CRA body and is not affiliated with or endorsed by either.";
