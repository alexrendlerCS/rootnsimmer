/**
 * Root & Simmer — "What if…?" The Stable Bodega (/what-if/stable-bodega). Public page.
 *
 * Words from Kimberly's "The Stable Bodega: Bringing Lincolnville Forward" (Nov 13, 2026) and "Stable Yard concept"
 * (Oct 2026). Same rules as content/site.ts: edit the words between the quotes and save.
 *
 * Kept off this page on purpose: officials' names and contacts, the outreach letter drafts, rents, discounts and
 * any money figures, claims about the former carriage company, and anyone who has not said yes in writing.
 * Back office: Documents\Root & Simmer Member Library\7 Partnerships\Stable Bodega (650 Riberia).
 *
 * Votes, ideas and vendor interest open an email draft to Kimberly (like the site's other forms).
 */

import type { ProjectConcern, ProjectRecord } from "./projects";
import type { WhatIfSignupConfig } from "@/components/WhatIf";

export const whatIfTeaser = {
  label: "What if…?",
  title: "What if the old stables on Riberia opened their gate again?",
  body: "A neighborhood corner store, a makers’ barn behind red doors, a string-lit yard, a market lawn and a free heritage walk, on a City acre that has sat behind a locked fence. It is an idea, and we want yours.",
  link: "See the idea, vote and add yours",
  href: "/what-if/stable-bodega",
};

export const stableBodega = {
  label: "What if…? · A Root & Simmer vision",
  title: "The Stable Bodega",
  tagline: "Lincolnville is the Journey. Little Africa is the Heartbeat. 160 Years of Lil Africa. Welcome In.",
  lede: "At 650 Riberia Street, the south end of Riberia, sits a City-owned acre that has held stables, horses and working hands for most of a century. The carriages are gone now. What if the gate opened again, not as a stable, but as the Stable Bodega: a neighborhood corner store, a makers’ barn behind red doors, a string-lit yard, a market lawn and a free heritage walk? A place to visit. A place to thrive.",
  idea: "An idea for discussion, not a plan. The City owns this land, and only the City Commission can decide its future.",

  barn: {
    src: "/photos/stable-bodega-barn.jpg",
    width: 1200,
    height: 696,
    alt: "A long dark barn with a rusted tin roof behind a grass strip and an old paved drive.",
    caption: "The main barn and tin roofs from the drive, October 2026.",
  },

  feel: {
    title: "This is how it should feel",
    body: "You come down Riberia on a Saturday morning, past the old marsh lots where the oyster factory and the stables stood. Coffee is already going at the bodega counter. The barber has the first chair full. Somebody’s auntie is setting out datil pepper sauce on a folding table, and the kids from the music room are tuning up under the oak. A food truck is firing up the grill for lunch. Along the paver path, the panels tell you whose ground you’re standing on.",
    promise: "We don’t want to build something new on top of Lincolnville. We want to bring what’s already here forward: its makers, its cooks, its history, and its people, on a piece of public land that’s been sitting behind a locked fence.",
  },

  marketDay: {
    src: "/photos/stable-bodega-market-day.jpg",
    width: 1400,
    height: 756,
    alt: "Illustrated bird’s-eye view of the yard on market day: the Bodega barn, the Makers’ Barn, café tables in the yard, tents on the market lawn, a heritage walk, a music corner and a food truck.",
    caption: "A Saturday at the Stable Yard: an illustration for discussion, not to scale.",
  },

  vote: {
    title: "What would you come for?",
    intro: "Tap everything you would use. Then send your picks, with your own ideas, in the box below. Lincolnville neighbors are heard first.",
    picked: (n: number) => (n === 1 ? "1 pick" : `${n} picks`),
  },

  /** The spaces, from Kimberly's vendor portraits. These are kinds of neighbors we picture, not signed tenants. */
  spaces: [
    { id: "bodega", name: "The Bodega counter", where: "Main barn", body: "Coffee strong enough to start a conversation, grab-and-go plates, eggs, bread, a gallon of milk when you ran out. Shelves stocked with things made three blocks away." },
    { id: "makers-shelf", name: "Sauce and snack makers", where: "Bodega shelf", body: "Datil pepper sauce, pound cake by the slice, pralines, pickled okra in mason jars with handwritten labels. Grandma’s recipe finally gets a barcode." },
    { id: "barber", name: "The barber and the braider", where: "Barn studio", body: "Every neighborhood has a chair where the news gets told first. Behind the red barn doors, the clippers run Tuesday through Saturday." },
    { id: "bike", name: "The bike shop", where: "Barn studio", body: "Fixes flats for the kids and rents cruisers to visitors who want to ride the Freedom Trail and up into the Old City." },
    { id: "plants", name: "The plant and flower stall", where: "Barn studio", body: "Ferns, herbs, cut flowers, and the arrangements for every yard event. It fits the farm bones of the place." },
    { id: "print", name: "The print shop", where: "Barn studio", body: "“Lil Africa” tees, Lincolnville prints, posters for the story nights. The neighborhood’s story turned into something you can carry home." },
    { id: "youth", name: "The youth room", where: "Barn studio", body: "Music lessons, art, after-school tutoring. When the string lights come on, you can hear the kids practicing from the lawn." },
    { id: "food-truck", name: "The food truck pad", where: "Rotating", body: "Soul food on Friday, Caribbean on Saturday, tacos for the Sunday crowd. One truck at a time, so the menu keeps changing." },
    { id: "market", name: "The market lawn", where: "10 × 10 stalls", body: "Growers, honey, crafts and jewelry, and room for makers who aren’t ready for a studio: a tent and a Saturday." },
    { id: "story-nights", name: "Story nights and workshops", where: "Lawn and barn", body: "Elders telling it the way it happened. Cooking classes. Family reunions under the oak." },
    { id: "heritage-walk", name: "The free heritage walk", where: "Paver path", body: "Panels on the marsh lots, the stables and Riberia’s Black business history, linked on foot to the Freedom Trail." },
  ],

  voice: {
    title: "Add your voice",
    intro: "Your picks above come with this note. Tell us what you would add, and what worries you. Every idea is read.",
    ideaLabel: "What if…? Your idea for this place",
    ideaPlaceholder: "What if there were…",
    worryLabel: "Anything that worries you?",
    connections: ["I live in Lincolnville", "I grew up in Lincolnville", "I work or own a business nearby", "I visit Lincolnville", "Other"],
    rememberLabel: "Do you remember the stables, the oyster factory or the south end of Riberia? Tell us.",
    submit: "Send my picks and ideas",
    sent: "Your email draft is open. Review it and press send in your email app.",
    fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there. We quote no one without permission.",
  },

  yard: {
    src: "/photos/stable-bodega-yard-today-and-market-day.jpg",
    width: 1200,
    height: 1070,
    alt: "Two views of the grass yard between block barns, looking toward red barn doors: on the left as it is today, on the right drawn on market day with string lights, a striped awning, an umbrella table and neighbors.",
    caption: "The yard today, and the same view drawn on market day. An illustration for discussion, not an engineered design.",
    title: "What changes, and what stays",
    points: [
      { label: "Stays", body: "The block barns, tin roofs, red barn doors and the grass yard: the character people come to see." },
      { label: "Lights", body: "String lights strung barn to barn turn the yard into an evening room." },
      { label: "Makers’ Barn", body: "An awning and market table at the red doors for Lincolnville makers." },
      { label: "Light touch", body: "Almost everything shown can be set up and taken down, with no new building." },
    ],
  },

  history: {
    title: "The history we carry forward",
    intro: "Lincolnville was built by freed people in 1866 and helped win the Civil Rights Act in 1964. Its south end on Riberia Street has been working ground for more than a century. That is the story the heritage walk would tell, and the reason this acre should serve the neighborhood again.",
    walk: [
      { label: "The marsh and the oyster factory", body: "How Lincolnville families worked the creek edge." },
      { label: "The stables and the carriage trade", body: "Who drove, groomed and shod the horses that carried visitors through the Old City." },
      { label: "Riberia’s Black business history", body: "The stores, cooks and tradespeople of the south end." },
      { label: "The road to 1964", body: "This neighborhood’s place on the ACCORD Freedom Trail, linked on foot to the Lincolnville Museum and Twine Park." },
    ],
    research: "Still to research: the barns’ build dates, who worked the stables, the old Sanborn maps of the south end, and the memories of elders who remember the lot. Every panel would be checked with Lincolnville’s keepers of history before it goes up.",
  },

  site: {
    title: "Where things stand",
    facts: [
      { label: "The land", body: "650 Riberia Street. About one acre, owned by the City of St. Augustine, inside the Lincolnville National Register Historic District and the Lincolnville Community Redevelopment Agency (CRA) area." },
      { label: "What stands there", body: "Vacant buildings: painted concrete-block barns with tin roofs and red X-braced doors around a grass yard, with paver walks toward the street." },
      { label: "Today", body: "The City’s carriage stable lease ended September 30, 2026. The acre sits behind a locked fence, with no next use announced." },
      { label: "Still to learn", body: "Whether the barns count as historic buildings, how the lot drains (it is low ground), and what the City has planned. We are asking." },
    ],
    mapLink: { label: "See 650 Riberia Street on the home map", href: "/preserve-historic-homes/map" },
    stance: "Local first. Nothing new built. We are asking for a conversation and a seat at the table, not a lease, money or a promise.",
  },

  vendors: {
    title: "Want a place in the yard?",
    intro: "If you cook, make, grow, cut hair, fix bikes, teach or tell stories, tell us. Lincolnville businesses get first call. No one has been promised space yet, and nothing is decided until the City decides; this list tells the City who is ready.",
    gets: "What every vendor would get: a spot on the yard sign and website, shared restrooms and seating, a place in market-day promotions, and the bodega’s foot traffic.",
    asks: "What we would ask: local first, a business tax receipt, the right permits and insurance, and care for the ground.",
    spaceTypes: ["Bodega shelf or cooler (consignment)", "Barn studio", "Market lawn stall (10 × 10)", "Food truck pad", "Event, class or story night", "Not sure yet"],
    starts: ["As soon as it opens", "Within a year", "Just interested for now"],
    submit: "Send my vendor interest",
    fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there, and your details are never shared without your permission.",
  },

  notice:
    "Root & Simmer Hospitality Co. is an independent private business. The Stable Bodega is a community idea for discussion. It is not a City of St. Augustine or Lincolnville Community Redevelopment Agency (CRA) plan, and it implies no City endorsement. Any use of the site depends on the City’s decision and its review. Photos were taken from public ground; the site is posted No Trespassing.",
};

/** The public records behind the Stable Bodega idea. */
export const stableBodegaRecords: ProjectRecord[] = [
  { title: "Lincolnville Redevelopment Plan, 2013", source: "City of St. Augustine, pages 27-28", href: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf#page=27", kind: "PDF", note: "The plan already looked at this acre: “The City of St. Augustine is considering plans to relocate (and improve) the Riberia Stables facility to City-owned property near the Farmers Market where it may have the potential to become more of a visitor attraction for families and children.”" },
  { title: "Lincolnville Redevelopment Plan, 2013: the waterfront and a community gathering place", source: "City of St. Augustine, page 37", href: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf#page=37", kind: "PDF", note: "The plan pictures “a new signature community gathering place” on City-owned land in the southeast of the CRA, with “the potential relocation of horse stables to pasture area at Riberia Street and Pougeaud Point.”" },
  { title: "Lincolnville Redevelopment Plan Amendment, 2017", source: "City of St. Augustine", href: "/documents/cra/lincolnville-redevelopment-plan-amendment-2017.pdf", kind: "PDF", note: "The CRA’s three goals today: preserve African American heritage and retain long-term residents, preserve Lincolnville’s historic character, and make neighborhood improvements. The Stable Bodega is built around all three." },
  { title: "Property record, parcel 1495900010 (650 Riberia Street)", source: "St. Johns County Property Appraiser", href: "https://www.sjcpa.gov/", kind: "Web page", note: "Owner: the City of St. Augustine. About 1.01 acres, zoned Government Use. The barns are listed only as “extra features,” and their age is not recorded." },
  { title: "Historic Architectural Review Board (HARB) applications", source: "City of St. Augustine", href: "https://www.citystaug.com/195/Historic-Architectural-Review-Board-Appl", kind: "Web page", note: "The site is inside the Lincolnville National Register Historic District. Before any change, HARB staff can say whether the barns are historic and what review applies to reversible changes like lights, tents and signs." },
  { title: "Lincolnville CRA Meeting Booklet, October 2026", source: "Root & Simmer, from the City’s meeting records", href: "/documents/cra/lincolnville-cra-meeting-booklet-october-2026.pdf", kind: "PDF", note: "How the CRA meets, what is on its agenda, and how to speak in public comment." },
];

/** The City's and the CRA's concerns about the acre, and how Root & Simmer can help answer each one. */
export const stableBodegaConcerns: ProjectConcern[] = [
  { concern: "The lot floods", help: "A commissioner said in 2026 that the City’s Riberia property floods. We pull the flood zone, elevation and drainage records, and the idea uses only reversible, take-down setups with no new building." },
  { concern: "Are the barns historic?", help: "We ask HARB staff and the Florida Master Site File, read the Sanborn fire maps for the south end, and write the barns’ history down with every source." },
  { concern: "What the City already planned", help: "The 2013 plan looked at moving the stables and making a family attraction and a community gathering place here. We request the City’s current plans and bring neighbors’ answers from this page." },
  { concern: "Will it serve Lincolnville?", help: "Local first: the vendor list on this page tells the City who in Lincolnville is ready, and a resident listening session comes before any public proposal." },
  { concern: "Telling the history right", help: "Every heritage walk panel is checked with the Lincolnville Museum and Cultural Center and ACCORD before it goes up." },
];

/** Vendor sign-up, in the shared "What if…?" form. */
export const stableBodegaSignup: WhatIfSignupConfig = {
  subject: "The Stable Bodega: vendor interest",
  opening: "I would like a place at the Stable Bodega.",
  orgLabel: "Business or craft name",
  whatLabel: "What do you make, grow, sell or teach?",
  roleLabel: "The space you’d want",
  roles: stableBodega.vendors.spaceTypes,
  whenLabel: "When",
  whens: stableBodega.vendors.starts,
  submit: stableBodega.vendors.submit,
  fine: stableBodega.vendors.fine,
};

/** The "What if…?" ideas, shown as boxes on the home page (newest first). */
export const whatIfTeasers = [
  {
    label: "What if…?",
    title: "What if Washington Street were Lil Africa’s Main Street again?",
    body: "Grocers, barbers, cafés, doctors and dance halls once served the neighborhood that built them. What if local businesses served the community on Washington Street again?",
    link: "See the idea, vote and add yours",
    href: "/what-if/washington-street",
    image: "/photos/washington-street-home.jpg",
    credit: "Photo: w_lemay, Wikimedia Commons, CC BY-SA 2.0",
  },
  {
    label: "What if…?",
    title: "What if Twine Park honored the Twines the way they deserve?",
    body: "A Twine Grove around the memorial trees, a new history panel, dry benches and a history walk at the corner of Riberia and Lovett. The design is under way: add your voice.",
    link: "See the idea, vote and add yours",
    href: "/what-if/twine-park",
    image: "/photos/twine-park-corner-2026-10.jpg",
  },
  {
    label: whatIfTeaser.label,
    title: whatIfTeaser.title,
    body: whatIfTeaser.body,
    link: whatIfTeaser.link,
    href: whatIfTeaser.href,
    image: "/photos/stable-bodega-market-day.jpg",
  },
];
