/**
 * Root & Simmer — Digital Records & Lincolnville Love Membership page content
 * (/digital-records).
 *
 * Same rules as content/site.ts: edit the text between the quotes and save.
 * Keep the quotes and commas in place.
 */

export const drHero = {
  label: "Digital Records",
  title: "Lincolnville’s records, gathered and made readable.",
  lede: "City plans, preservation records, district building lists and recorded City interviews are scattered across offices and archives. Root & Simmer gathers them, writes a plain-language guide to each, and keeps every source named, so you can follow Lincolnville’s story and your home’s place in it.",
  subnav: [
    { href: "#dr-collection", label: "The collection" },
    { href: "#dr-membership", label: "Membership" },
    { href: "#dr-order", label: "Request records" },
  ],
};

export type RecordGuide = {
  id: string;
  /** Short title printed on the little paper illustration. */
  artTitle: string;
  kind: string;
  title: string;
  description: string;
};

export const drCollection = {
  label: "The collection",
  title: "Record guides you can keep.",
  intro:
    "Each guide is a digital PDF: our summary first, with sources and dates, followed by the original public document where it can be shared.",
  note: "Public records stay public. Anyone can request them from the City directly; the City may charge for copies. Root & Simmer charges for the work of finding, organizing and explaining them. Our guides describe what the records said on their dates; the City confirms a property’s current status. Family stories are never sold, and nothing a family shares appears in a guide without their written permission.",
};

export const recordGuides: RecordGuide[] = [
  {
    id: "district",
    artTitle: "1991 District Guide",
    kind: "Historic district",
    title: "Lincolnville Historic District Building Guide",
    description:
      "The 1991 National Register building list, street by street: about 540 contributing buildings with dates and styles, and the noncontributing addresses.",
  },
  {
    id: "plan",
    artTitle: "The Redevelopment Plan",
    kind: "CRA records",
    title: "Lincolnville Redevelopment Plan Guide",
    description:
      "The 2013 plan and its June 20, 2017 amendment in plain language: why the CRA began, what residents asked for, the three goals and every action step.",
  },
  {
    id: "briefs",
    artTitle: "CRA Record Briefs",
    kind: "CRA records",
    title: "CRA Budget and Meeting Briefs",
    description:
      "Highlights from Lincolnville CRA budgets, annual reports and Steering Committee meetings, from the 2019 budget to the latest meeting, each dated and sourced.",
  },
  {
    id: "preservation",
    artTitle: "Preservation Records",
    kind: "Historic preservation",
    title: "City Preservation Records Collection",
    description:
      "Public input to the Historic Preservation Master Plan (2016) and the City’s 2023 letter to historic property owners, each with a summary and the original.",
  },
  {
    id: "interviews",
    artTitle: "On the Record",
    kind: "City interviews",
    title: "City Interview Summaries",
    description:
      "Summaries of recorded City interviews with the Historic Preservation Officer, the City Archaeologist, the City Clerk and the CRA manager, 2022 to 2026, with transcripts.",
  },
  {
    id: "places",
    artTitle: "Places & People",
    kind: "Self-guided discovery",
    title: "Lincolnville Places and People Guide",
    description:
      "The people behind Lincolnville’s named parks and streets, its historic institutions and civil rights sites, drawn from City records and the Redevelopment Plan.",
  },
  {
    id: "address",
    artTitle: "Your Address",
    kind: "Custom",
    title: "Address Records Starter",
    description:
      "For one Lincolnville address: its 1991 district entry, what City permit records show, the historic maps to check, and where to request more. Scope agreed first.",
  },
];

/** The guide that needs an address. Must match an id above. */
export const addressGuideId = "address";

export const drMembership = {
  label: "Lincolnville Love Membership",
  title: "Your home’s story, Lincolnville’s records, and a voice in what we research next.",
  intro:
    "Membership brings the work together for homeowners and families who want to keep close to Lincolnville’s history.",
  included: [
    { title: "Your Home History Packet", body: "A sourced history of your home: records gathered in one place, historical context, and your family’s memories in your own words. Scope agreed together." },
    { title: "The Digital Records library", body: "Every record guide in the collection, with new guides and updates as records are added." },
    {
      title: "Full CRA access",
      body: "Summaries of every Lincolnville CRA Steering Committee meeting with the minutes attached, budgets explained, a project tracker, and answers to your specific questions.",
      link: { href: "/cra-lincolnville#cra-members", label: "See full CRA access" },
    },
    { title: "Your vote and your voice", body: "Members vote on which homes, families, places and records we research next, and share what they want Lincolnville’s story to hold. Results go back to members." },
  ] as { title: string; body: string; link?: { href: string; label: string } }[],
  votes: {
    title: "How member votes work",
    body: "Member votes guide Root & Simmer’s own research and storytelling. They are not official decisions and are not votes of the City or the CRA. To speak directly to the CRA, attend a public Steering Committee meeting; members receive the meeting dates and how to give public comment.",
  },
  free: {
    title: "What stays free",
    body: "Lincolnville Connection stays free for residents, descendants, former residents and friends, and the CRA – Lincolnville page stays open to everyone. Membership adds the packet, the library, full CRA access and the vote.",
  },
  button: "Ask about Lincolnville Love Membership",
  emailSubject: "Lincolnville Love Membership",
  emailBody:
    "Hello Kimberly,\n\nI’d like to learn about Lincolnville Love Membership: the Home History Packet, the Digital Records library, full CRA access and member votes.\n\nMy home or family connection to Lincolnville:\n\nBest way to reach me:\n\nI understand fees and terms are confirmed before I join.",
  fine: "Membership fees and terms are confirmed with you before you join. Root & Simmer is independent and not affiliated with or endorsed by the City of St. Augustine or its Community Redevelopment Agency (CRA).",
};

export const drOrder = {
  label: "Request records",
  title: "Choose the guides you’d like.",
  intro: "Select one or more guides and we’ll reply with availability and the price of each. Nothing is charged until you agree.",
  form: {
    legend: "Record guides",
    addressLabel: "Address, if you chose the Address Records Starter",
    consent: "I’d like Root & Simmer to reply with availability and prices.",
    submit: "Write my records request",
    pickOne: "Please choose at least one record guide.",
    fine: "This opens a draft in your email app. Nothing is sent until you press send there, and no payment is taken on this page.",
  },
};

/**
 * Photos on the Digital Records page. The image files are in public/photos.
 * Credits are required by each photo's free license; keep them with the photo.
 */
export const drPhotos = {
  hero: {
    alt: "A blue Lincolnville cottage with a red tile roof, white columned entry and a brick front walk",
    caption: "A Lincolnville home on Washington Street.",
    credit: {
      by: "w_lemay",
      source: "https://commons.wikimedia.org/wiki/File:Washington_Street,_Lincolnville,_St._Augustine,_FL.jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    },
  },
  membership: {
    alt: "A two-story yellow Lincolnville home with a bay window, diamond-pane windows and a columned front porch",
    caption: "Every Lincolnville home has a story in the records.",
    credit: {
      by: "Ebyabe",
      source: "https://commons.wikimedia.org/wiki/File:St_Aug_Lincolnville_house01.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    },
  },
};
