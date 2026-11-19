/**
 * Root & Simmer — site content.
 *
 * Almost every word on the website lives in this file. Edit the text between
 * the quotes and save; the page updates automatically. Keep the quotes and
 * commas in place.
 */

export const contactEmail = "rootnsimmer@gmail.com";

export const site = {
  name: "Root & Simmer",
  fullName: "Root & Simmer Hospitality Co.",
  place: "Lincolnville · St. Augustine, Florida",
  title: "Root & Simmer Hospitality Co. | Lincolnville, St. Augustine",
  description:
    "Root & Simmer documents Lincolnville home and family histories, supports preservation, and welcomes guests to learn and respect the community.",
};

/**
 * Top menu. Links starting with "/#" jump to a section of the home page.
 * Everything else is its own page. "Membership" is the Digital Records page, where the Lincolnville Connection is.
 * "Our Story" is a small drop-down; its links are listed under `items`.
 */
export type NavLink = { href: string; label: string };
export type NavItem = NavLink & { items?: NavLink[] };

export const nav: NavItem[] = [
  {
    href: "/#mission",
    label: "Our Story",
    items: [
      { href: "/#mission", label: "About Root & Simmer" },
      { href: "/our-work", label: "Our four lines of work" },
      { href: "/documents/root-simmer-public-prospectus-and-interest-form.pdf", label: "Public Prospectus and Interest Form (PDF)" },
      { href: "/#gaps", label: "What’s missing in Lincolnville, and how we fill it" },
      { href: "/#root", label: "ROOT: Lincolnville Community Committee" },
      { href: "/#kimberly", label: "Meet Kimberly" },
    ],
  },
  { href: "/homes-not-hotels", label: "Homes Not Hotels" },
  {
    href: "/homeowner-help",
    label: "For Homeowners",
    items: [
      { href: "/cra-lincolnville/home-story-package", label: "The Home Story Package" },
      { href: "/homeowner-help", label: "Help for homeowners: City and CRA programs" },
      { href: "/preserve-historic-homes", label: "Preserve Historic Homes" },
      { href: "/preserve-historic-homes/map", label: "The Lincolnville Home Map" },
    ],
  },
  {
    href: "/walks",
    label: "Explore History",
    items: [
      { href: "/walks", label: "Self-guided walks" },
      { href: "/lincolnville-history/tracts", label: "The Land Beneath Our Feet" },
      { href: "/lincolnville-history/directory", label: "The Lil Africa Directory · Members" },
      { href: "/locator-map", label: "Lincolnville Locator Map" },
      { href: "/places-map", label: "Lincolnville Places Map: parks, food, churches, businesses" },
      { href: "/visitor-map", label: "Bringing Lincolnville onto the Visitor Map" },
      { href: "/lincolnville-history/mohlman-research", label: "Mohlman Research · Members" },
      { href: "/lincolnville-history/residents-map", label: "Historic Residents Map · Members" },
    ],
  },
  {
    href: "/cra-lincolnville",
    label: "Community",
    items: [
      { href: "/cra-lincolnville", label: "CRA – Lincolnville, in plain words" },
      { href: "/cra-lincolnville/take-part", label: "How to take part" },
      { href: "/cra-lincolnville/requests", label: "Community requests for the CRA" },
      { href: "/newsletter", label: "Newsletter" },
      { href: "/library", label: "Library" },
      { href: "/what-if/washington-street", label: "What if…? Washington Street" },
      { href: "/what-if/visitor-welcome", label: "What if…? A Visitor Welcome" },
      { href: "/what-if/twine-park", label: "What if…? Twine Park" },
      { href: "/what-if/stable-bodega", label: "What if…? The Stable Bodega" },
    ],
  },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/partners", label: "Partners" },
  {
    href: "/digital-records",
    label: "Membership",
    items: [
      { href: "/digital-records#dr-membership", label: "Homeowner membership: the Home Story Package" },
      { href: "/support#friend", label: "Friend of Lincolnville: three invitations with each membership" },
      { href: "/support", label: "Support Lincolnville’s History" },
    ],
  },
  { href: "/#records", label: "Contact" },
];

/** Home page hero (top of /). Wording from Kimberly's Mission, Vision and Brand Core. */
export const homeHero = {
  eyebrow: "Root & Simmer Hospitality Co. · Lincolnville, St. Augustine",
  headline: ["Every home known.", "Every voice kept.", "Every generation connected."],
  body:
    "Root & Simmer Hospitality Co. preserves Lincolnville’s homes, history and community. We research the story of each home, record the voices of the families who made it home, and carry both forward, so that 160 years of Lil Africa are known, kept and heard from generation to generation.",
  signature: "Know your home’s story. Add yours before you go.",
  primary: { href: "#root", label: "Meet ROOT" },
  secondary: { href: "/homes-not-hotels", label: "Homes Not Hotels" },
  fine: "Independent preservation research and family story recording. Not real estate listing, sales, rentals or property management.",
};

/** Hero of the Homes Not Hotels page (/homes-not-hotels), formerly the home page hero. */
export const hero = {
  title: "Homes Not Hotels.",
  subtitle: "Preserve Lincolnville’s homes. Share its history. Respect its community.",
  lede:
    "Root & Simmer brings historical records and family memories together, helps homeowners document the stories behind their homes, and connects guests to Lincolnville with understanding and respect.",
  primary: { href: "/#work", label: "Explore our work" },
  secondary: { href: "/#kimberly", label: "Meet Kimberly" },
  /** Directly under the hero. */
  hope: {
    line: "Preserve Lincolnville’s homes. Share its history. Respect its community.",
    label: "What we hope to see:",
    body: "Homes remain homes. Residents remain at the heart. Guests leave with understanding and respect.",
    link: { href: "/digital-records#homes-not-hotels", label: "Read the proposal: Homes Not Hotels" },
  },
  photoAlt: "A Lincolnville cottage with a screened front porch and a red iron handrail",
  caption: "A home is a doorway into history.",
  /** The same house about 1979, set beside today's photo. */
  then: {
    alt: "The same house about 1979: a black-and-white photograph of the frame cottage with its screened porch behind a row of hedges",
    label: "Same home, about 1979",
    credit: "Courtesy Florida Master Site File",
  },
};

/** The three-line promise shown on the haint-blue band under the hero. */
export const threshold = [
  "A home is a doorway into history.",
  "A guest discovers Lincolnville’s roots.",
  "A community is respected.",
];

export const mission = {
  title: "Homes remain homes. History stays in community hands.",
  missionHeading: "Our mission",
  mission:
    "Root & Simmer Hospitality Co. supports the preservation of Lincolnville’s homes and history through research into the homes, families and community that shaped it. We bring historical records and family memories together, return those stories to the people who shaped them, and help guests discover Lincolnville’s roots with respect for the community.",
  visionHeading: "Our vision",
  vision:
    "We envision Lincolnville remaining a neighborhood of homes, with family voices and local history kept visible and residents central to its future. Guests arrive ready to discover Lincolnville’s deep-rooted history and leave with respect for the people and community that make it home.",
  independence: {
    heading: "Independent work, shared priorities",
    body:
      "Root & Simmer’s work complements preservation and neighborhood priorities reflected in City and CRA records: documenting places, sharing local history, and helping homeowners understand the stories and features of their homes.",
    disclaimer:
      "Root & Simmer is an independent business. It is not affiliated with, operated by, or endorsed by the City of St. Augustine or the Lincolnville CRA.",
  },
};

export const why = {
  title: "Residents asked for their stories to be kept. We are answering with care.",
  year: "2016",
  body: [
    "At the City’s 2016 Historic Preservation Master Plan forums, residents called for neighborhoods to tell their own stories, oral histories to be recorded, places beyond downtown to be documented, buildings to be photographed before demolition, and introductory guidance for new historic property owners. Lincolnville was named in that public input.",
    "Root & Simmer’s research, home histories and documentation respond to those community requests. The forum record is community input; it does not mean the City or CRA directs, sponsors or endorses Root & Simmer.",
  ],
  link: { href: "#records", label: "Ask about a home or family history" },
};

/** How a home history comes together. These are real steps, in order. */
export const method = [
  {
    title: "Follow the records",
    body: "Deeds, directories, plats, maps and photographs help us trace a home’s story. We name our sources and say when a question remains open.",
  },
  {
    title: "Honor the voices",
    body: "Families share what they choose. Memories are kept in their own words, with permission and care for what stays private.",
  },
  {
    title: "Carry it forward",
    body: "A history packet, a print, a guest card: thoughtful ways to keep a home’s story connected to the people who come next.",
  },
];

export const values = {
  title: "Know. Learn. Respect. Let’s evolve together.",
  lede: "These values guide our work with homeowners, families, guests, residents and local partners.",
  items: [
    {
      title: "Hospitality with appreciation",
      body: "Every person deserves to feel seen, heard, respected and appreciated. We lead with warmth, gratitude and genuine care for homeowners, guests, residents and community partners.",
    },
    {
      title: "Respect the roots",
      body: "Every home is part of a larger story. We care for the property, honor Lincolnville’s history and respect the community that gives this neighborhood its character.",
    },
    {
      title: "Neighbors keep the heartbeat",
      body: "Residents carry Lincolnville’s history, character and community. We respect their privacy, property and daily lives, and keep residents central to how stories are gathered and shared.",
    },
    {
      title: "Share a deeper-rooted history",
      body: "Lincolnville’s history reaches beyond what appears on a visitor map. We connect documented records, family voices and living community knowledge with care and clear sourcing.",
    },
    {
      title: "Support locally. Thrive together.",
      body: "We connect guests to locally rooted businesses, cultural organizations and community experiences so visitors can support the people and places that make Lincolnville home.",
    },
  ],
};

export type Category = "research" | "keepsakes" | "welcome";
export type ArtStyle = "paper" | "voice" | "print" | "guide";

export type Offering = {
  id: string;
  category: Category;
  tagline: string;
  title: string;
  short: string;
  description: string;
  includes: string[];
  art: ArtStyle;
  artTitle?: string;
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "research", label: "Home & family stories" },
  { id: "keepsakes", label: "Prints & keepsakes" },
  { id: "welcome", label: "Thoughtful hospitality" },
];

export const work = {
  title: "Preserve the record. Carry the story forward.",
  intro:
    "Every project begins with a conversation. We agree on scope and fee before any work starts. Online ordering is coming soon.",
  note: "Choose the offerings you’re curious about and send them as one inquiry. There’s no payment or commitment, and scope, availability and fees are confirmed together.",
  recordsPrompt: "Looking for City records or membership?",
  recordsLink: "See Digital Records",
};

export const offerings: Offering[] = [
  {
    id: "home",
    category: "research",
    tagline: "The signature package",
    title: "The Home Story Package",
    short: "Your home’s story, thoughtfully researched, written and gathered in one place.",
    description:
      "A sourced narrative that connects your home to the families, records and neighborhood around it. We begin with what you know and follow the evidence, keeping unanswered questions visible.",
    includes: [
      "A written home history with source references",
      "Family and ownership research where records allow",
      "Historic maps, records and photographs as available",
      "A guest and family FAQ and a one-page story flyer",
      "An organized digital records packet and owner-folder checklist",
    ],
    art: "paper",
    artTitle: "The Home Story",
  },
  {
    id: "family",
    category: "research",
    tagline: "Family voices",
    title: "Family Story Recording",
    short: "Memories in their own words. A record for the people who come next.",
    description:
      "A thoughtful conversation to preserve the stories your family wishes to share. You decide what is recorded, what stays private and what may be carried forward.",
    includes: [
      "A conversation about your recording goals",
      "Family memories recorded with permission",
      "Sharing boundaries agreed with participants",
      "A keepsake recording in the agreed format",
    ],
    art: "voice",
  },
  {
    id: "site",
    category: "research",
    tagline: "Document & preserve",
    title: "Preservation Record",
    short: "Bring together the details that help document a historic home.",
    description:
      "Research and owner collaboration to help prepare a Florida Master Site File form for submission. Documentation gives a home a fuller record; submission itself does not establish historic designation or protection.",
    includes: [
      "Review of available property documentation",
      "An organized record of relevant findings",
      "Help preparing the site-file form with the owner",
      "Unresolved questions clearly identified",
    ],
    art: "paper",
    artTitle: "A Record of Home",
  },
  {
    id: "print",
    category: "keepsakes",
    tagline: "History to keep",
    title: "Framed Home History",
    short: "A carefully written piece of your home’s story, made for the wall.",
    description:
      "A framed history print drawn from an agreed, sourced narrative. A quiet reminder of the people and place behind a home.",
    includes: [
      "A concise home-history narrative",
      "Layout drawn from the Root & Simmer visual family",
      "Your review of the story before production",
      "Print size, framing and delivery agreed in advance",
    ],
    art: "print",
    artTitle: "A Place Called Home",
  },
  {
    id: "copies",
    category: "keepsakes",
    tagline: "Share the story",
    title: "Printed Story Copies",
    short: "Keep a copy close. Share one with family or the next caretaker.",
    description:
      "Printed copies of your completed history packet, prepared to the format and quantity you need. Printing is arranged after the content and production details are agreed.",
    includes: [
      "Copies of an approved, completed packet",
      "Quantity and print format of your choice",
      "Production cost confirmed before printing",
    ],
    art: "paper",
    artTitle: "Carry History Forward",
  },
  {
    id: "card",
    category: "welcome",
    tagline: "Respect the roots",
    title: "Guest History Card",
    short: "A warm introduction to the home, the neighborhood and its living history.",
    description:
      "A concise, sourced introduction that helps guests discover Lincolnville’s roots and appreciate the community they are visiting.",
    includes: [
      "A short introduction to the home’s documented story",
      "Neighborhood context and respectful guest guidance",
      "A clear card layout for print or digital sharing",
    ],
    art: "guide",
    artTitle: "Welcome to the Roots",
  },
  {
    id: "map",
    category: "keepsakes",
    tagline: "Self-guided discovery",
    title: "Neighborhood Story Map",
    short: "Follow the ground beneath your feet, with context and care.",
    description:
      "A printed map and neighborhood narrative developed from verified research. The scope and stops are agreed together, with care for residents’ privacy and daily life.",
    includes: [
      "A self-guided map with agreed streets and stops",
      "Short narratives with source references",
      "Respectful wayfinding and visitor guidance",
      "A print-ready layout",
    ],
    art: "guide",
    artTitle: "Follow the Story",
  },
  {
    id: "welcome",
    category: "welcome",
    tagline: "Hospitality with appreciation",
    title: "Readiness & Welcome",
    short: "Thoughtful details that help a guest arrive with appreciation.",
    description:
      "A personal hospitality service supporting a respectful arrival and a deeper connection to Lincolnville.",
    includes: [
      "Readiness checks within an agreed scope",
      "Local wayfinding and neighborhood guidance",
      "Respect Thy Neighbor information",
      "A welcome shaped around the home and community",
    ],
    art: "guide",
    artTitle: "Welcome In",
  },
];

export const kimberly = {
  title: "A personal welcome. A lasting impact.",
  quote:
    "Lincolnville does not need someone to give it a story. Visitors need a better way to see it, support it and respect it.",
  name: "Kimberly Joyce",
  role: "Founder & Director of Community Partnerships",
  letter: [
    "For more than 30 years, my work has required me to listen closely, anticipate needs, solve problems, advocate for others and build trust. I have learned that people remember how they were welcomed, whether they felt supported and whether someone cared enough to notice what they needed.",
    "As a former Airbnb host and world traveler, I have experienced both sides of the front door: the care a homeowner puts into a stay and the sense of belonging a guest remembers.",
    "When I arrived in St. Augustine, I explored the city the way many visitors do, with a sightseeing map and visitor guide. The map directed me toward downtown, but it never led me to Sweet Mama’s Peach Cobbler at The Corner Market or into the deeper history of Lincolnville.",
    "One-way streets and Do Not Enter signs kept me circling without a clear route back. The visitor guide showed me where tourists go. The people of Lincolnville helped me understand where I was.",
    "I began talking with residents and business owners, asking questions and listening. Those conversations introduced me to Lincolnville’s history, businesses, relationships, challenges and living community.",
    "As I listened and began researching the homes and families of Lincolnville, I saw how easily important history can be scattered across records, photographs and memories, or lost altogether. Today, Root & Simmer brings that research together for homeowners and families, documents the stories behind places, and connects guests to the neighborhood with greater understanding and respect. Preservation is the foundation of the work; relationships are how we carry it forward.",
    "Root & Simmer Hospitality Co. grew from my belief that a personal welcome can do more than help someone find the door. It can invite guests to slow down, meet new friends, understand the community’s history and challenges, support locally rooted businesses, fall in love with Lincolnville and want to return. It can help a homeowner stand apart, bring a new customer to a local business and carry the community’s story, both past and present, forward so Lincolnville can thrive.",
    "I am here to listen, build trusted partnerships and use hospitality to support and strengthen what is already here.",
  ],
};

export const connection = {
  title: "Learn the history. Respect the community.",
  body: [
    "Lincolnville is a living neighborhood of homes, families, businesses and community institutions. Guests are invited to learn its deep-rooted history with respect for residents’ privacy, property and everyday life. We share public places and researched stories; private homes are included only with permission.",
    "Live here, grew up here, or carry a family connection? There is room for your voice. Root & Simmer listens to residents, descendants, former residents and friends as research grows.",
  ],
  invitations: [
    "Share memories and photographs, with permission.",
    "Hear about neighborhood stories and community gatherings.",
    "Help shape the stories we research next.",
  ],
  fine: "Participation is voluntary. Root & Simmer is independent; community conversations are not official City or CRA processes.",
  form: {
    title: "Join the conversation",
    intro: "Let Kimberly know you’d like to hear about the Root & Simmer Hospitality Exclusively for Lincolnville Community Connection.",
    connections: ["Resident", "Descendant", "Former resident", "Friend of Lincolnville", "Community partner"],
    consent: "I’d like to be contacted about the Root & Simmer Hospitality Exclusively for Lincolnville Community Connection.",
    submit: "Write my introduction",
    fine: "This opens a draft in your email app. Nothing is sent until you press send there.",
  },
};

export const respect = {
  title: "Homes remain homes. Residents remain at the heart.",
  body: "We preserve the home’s story. We share Lincolnville’s history. We welcome guests with respect for the people who call it home.",
};

export const records = {
  title: "A name. A street. A place to begin.",
  intro:
    "Looking for a home or family history? Tell us what you are looking for and what you already know. We can discuss a focused records search or a more complete home history.",
  faq: [
    {
      q: "How we care for your story",
      a: "Your contact details are used to respond to your inquiry. Public sharing of family material requires separate permission. We distinguish documented records, oral histories and questions that still need research.",
    },
    {
      q: "What a home history can tell us",
      a: "Depending on available records, research can explore ownership, families, changes to a building and its place in the neighborhood. Findings depend on the evidence; an exact construction date or first family cannot always be established.",
    },
    {
      q: "Our independent preservation work",
      a: "Root & Simmer provides home-history research, family-story preservation and thoughtful hospitality. We do not appraise, list, show or sell properties, and take no share of a property sale. Research and site-file preparation do not confer historic designation. Our independent work complements public preservation and neighborhood priorities; Root & Simmer is not affiliated with or endorsed by the City or CRA.",
    },
  ],
  form: {
    roles: ["Homeowner", "Resident", "Descendant", "Researcher", "Other"],
    topics: ["House history", "Family history", "A photograph", "A document", "Other"],
    consent: "I’d like Root & Simmer to reply about this request.",
    submit: "Write my records request",
    fine: `This opens a draft to ${contactEmail} in your email app. Nothing is sent until you press send there.`,
  },
};

export const closing = {
  quote: "Know your home’s story. Add yours before you go.",
  link: "Start a conversation",
};
