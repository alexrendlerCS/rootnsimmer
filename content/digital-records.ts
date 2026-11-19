/**
 * Root & Simmer — Digital Records page content (/digital-records).
 *
 * Same rules as content/site.ts: edit the text between the quotes and save.
 * Keep the quotes and commas in place.
 *
 * Digital Records are not sold on their own. They come with the Home Story Package,
 * together with the digital welcome packet and a one-year Root & Simmer Hospitality Exclusively for Lincolnville Community Connection membership.
 */

export const drHero = {
  label: "Digital Records",
  title: "Lincolnville’s records, gathered and made readable.",
  lede: "City plans, preservation records, district building lists and recorded City interviews are scattered across offices and archives. Root & Simmer gathers them, writes a plain-language guide to each, and keeps every source named, so you can follow Lincolnville’s story and your home’s place in it.",
  subnav: [
    { href: "#dr-collection", label: "The member documents" },
    { href: "#dr-membership", label: "Lincolnville Connection" },
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
  label: "The member documents",
  title: "Three documents for members.",
  intro:
    "Digital Records come with the Home Story Package, together with your digital welcome packet and a one-year membership in the Root & Simmer Hospitality Exclusively for Lincolnville Community Connection.",
  note: "Public records stay public. Anyone can request them from the City directly; the City may charge for copies. Our guides describe what the records said on their dates; the City confirms a property’s current status. Family stories are never sold, and nothing a family shares appears in a guide without their written permission.",
};

/** Only these three documents are shown. Homes Not Hotels comes first. */
export const recordGuides: RecordGuide[] = [
  {
    id: "homes-not-hotels",
    artTitle: "Homes Not Hotels",
    kind: "Homes and vacation rentals",
    title: "Homes Not Hotels: A Lincolnville Proposal",
    description:
      "The full proposal: Lincolnville by the numbers, the one-week rule, the problems we share, where current trends point, and ways to raise resident attendance and participation.",
  },
  {
    id: "homes-lost",
    artTitle: "Why Homes Are Lost",
    kind: "Historic preservation",
    title: "Why Lincolnville Homes Are Lost: Risks and Protections",
    description:
      "What puts Lincolnville homes at risk and what protects them: repair help, demolition review, historic status, owner-requested landmark status, incentives, and the risks residents named in 2016.",
  },
  {
    id: "places",
    artTitle: "Places & People",
    kind: "Self-guided discovery",
    title: "Lincolnville Places and People Guide",
    description:
      "The people behind Lincolnville’s named parks and streets, its historic institutions and civil rights sites, drawn from City records and the Redevelopment Plan.",
  },
];

export const drMembership = {
  label: "All-inclusive package and membership",
  title: "Join the Root & Simmer Hospitality Exclusively for Lincolnville Community Connection.",
  intro: "Membership comes only with a Home Story Package.",
  included: [
    { title: "Digital welcome packet", body: "A sourced history of your home: records gathered in one place, historical context, and your family’s memories in your own words. Scope agreed together." },
    { title: "Electronic documents", body: "The three member documents above: Homes Not Hotels, Why Lincolnville Homes Are Lost, and the Lincolnville Places and People Guide." },
    { title: "Membership", body: "One year in the Root & Simmer Hospitality Exclusively for Lincolnville Community Connection. Updates on events and CRA votes, a voice, and knowing what is happening in Lincolnville." },
    { title: "Your home’s records, requested and kept", body: "Root & Simmer requests the City, County and State records behind your home: deeds, permits, Historic Architectural Review Board files, site files and more. We track each one until it arrives, then add it to your home file with a plain-words note on what it means. Members can also open the records behind demolished and threatened Lincolnville homes, such as 103 South Street.", href: "/preserve-historic-homes/demolition#103-south", linkLabel: "See a records trail" },
    { title: "Three Friend of Lincolnville invitations", body: "Each year, give three family members or friends an invitation code to join as a Friend of Lincolnville for $50 a year, with the Mohlman Research, the Historic Residents Map, the newsletter and the self-guided walk guide.", href: "/support#friend", linkLabel: "About Friend membership" },
    { title: "Three self-guided walk codes", body: "Each year, three codes for the self-guided walk guide to give to family, friends or guests.", href: "/support#walk", linkLabel: "About the walk guide" },
    { title: "The full Library", body: "Every plan, budget, meeting record and City interview in the Library, including the members-only documents, with new ones added as they come in.", href: "/library", linkLabel: "See what is in the Library" },
  ],
  votes: {
    title: "How member votes work",
    body: "Member votes guide Root & Simmer’s own research and storytelling. They are not official decisions and are not votes of the City or the CRA. To speak directly to the CRA, attend a public Steering Committee meeting; members receive the meeting dates and how to give public comment.",
  },
  packageLink: { href: "/cra-lincolnville/home-story-package", label: "See the Home Story Package" },
  button: "Ask about the Home Story Package",
  emailSubject: "Home Story Package",
  emailBody:
    "Hello Kimberly,\n\nI’d like to learn about the Home Story Package, including the digital welcome packet, the electronic documents and the one-year Root & Simmer Hospitality Exclusively for Lincolnville Community Connection membership.\n\nMy home or family connection to Lincolnville:\n\nBest way to reach me:",
  fine: "Root & Simmer is independent and not affiliated with or endorsed by the City of St. Augustine or its Community Redevelopment Agency (CRA).",
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
