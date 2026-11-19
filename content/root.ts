/**
 * Root & Simmer — ROOT: Lincolnville Community Committee.
 * Shown on the home page directly under the hero (the #root section); the old /root address forwards there.
 * Wording from Kimberly's Mission, Vision and Brand Core (November 2026). Same rules as content/site.ts:
 * edit the text between the quotes and save.
 */

export const rootIntro = {
  name: "ROOT",
  title: "Lincolnville Community Committee",
  lead: "Where Lincolnville’s voice comes together.",
  body:
    "ROOT is an independent, community-led group under Root & Simmer Hospitality Co. We bring our ancestors’ stories to be heard, stand with long-term residents, and keep Lincolnville’s people, place and legacy at the center of every conversation about its future, working alongside the City’s Community Redevelopment Agency (CRA) without speaking for it.",
};

export type Pillar = { letter: string; name: string; subtitle: string; line: string };

/** The four pillars, one card each, with R-O-O-T shown large. */
export const pillars: Pillar[] = [
  {
    letter: "R",
    name: "Residents",
    subtitle: "The Heart of Lincolnville",
    line: "Longtime families and new neighbors, with longtime residents at the center of the neighborhood’s identity.",
  },
  {
    letter: "O",
    name: "Oral History",
    subtitle: "Every Voice Kept",
    line: "Family memories recorded with permission and returned to the families who shared them.",
  },
  {
    letter: "O",
    name: "Ownership",
    subtitle: "Every Home Known",
    line: "Sourced home histories, so every owner knows the story they hold and how to help protect it.",
  },
  {
    letter: "T",
    name: "Tradition",
    subtitle: "Every Generation Connected",
    line: "Faith, family and neighborhood ways carried forward from 1866 to today.",
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
  subject: "ROOT: Lincolnville Community Committee",
  emailBody: "Hello Kimberly,\n\nI would like to learn more about ROOT, the Lincolnville Community Committee.\n\nMy name:\nMy connection to Lincolnville:\nBest way to reach me:",
};

export const rootNote =
  "ROOT is independent and community-led under Root & Simmer Hospitality Co. It is not a City of St. Augustine or CRA body and is not affiliated with or endorsed by either.";
