/**
 * Root & Simmer — "Bringing Lincolnville onto the Visitor Map" (/visitor-map). Public page: where Root & Simmer began.
 *
 * Kimberly's own words, from her City proposal "Bringing Lincolnville Forward" (October 2026), her letter to the
 * map's artist (Oct 26, 2026) and the "Lincolnville Today" directory. Same rules as content/site.ts: edit the
 * words between the quotes and save.
 *
 * Henry E. Hird III is named only as the artist of the published map. Their private conversation and her
 * letter stay in the back office (7 Partnerships\Visitor Map). Landmarks are public places at public addresses.
 */
import type { ProjectConcern, ProjectRecord } from "./projects";
import type { WhatIfChoice, WhatIfVoice } from "@/components/WhatIf";

export const visitorMapTeaser = {
  label: "Where it began",
  title: "The visitor map didn’t show me Lincolnville.",
  body: "I was a newcomer holding the St. Augustine visitor map, looking for my friend at the Corner Market. The map sent me toward King Street and Flagler, not into Lincolnville. That walk became Root & Simmer.",
  link: "Read the story and help draw the map",
  href: "/visitor-map",
};

export const visitorMap = {
  label: "Where it began · My first passion with a purpose",
  title: "Bringing Lincolnville onto the Visitor Map",
  tagline: "Root & Simmer Hospitality Co. · Exclusively for Lincolnville, historically known as “Lil Africa”",
  lede: "When I arrived in St. Augustine, I did what so many visitors do. I picked up the visitor map and began exploring the beautiful streets, historic landmarks, attractions and businesses that make America’s oldest city such a remarkable destination. The map was introducing me to St. Augustine, but it wasn’t introducing me to the whole story.",

  hero: {
    src: "/photos/lincolnville-historic-district-marker.jpg",
    alt: "The Lincolnville Historic District marker.",
    caption: "The Lincolnville Historic District marker.",
  },

  walk: {
    title: "The walk that changed everything",
    paragraphs: [
      "One afternoon I set out to find my friend Nyk Smith at the Corner Market Boutique, and a taste of Sweet Mama’s Peach Cobbler, at The Corner Market on M.L. King Avenue. The map led me down King Street toward Flagler, not through Lincolnville toward Riberia Street. One-way streets and Do Not Enter signs kept me circling without a clear route.",
      "I didn’t know what I was missing because I didn’t yet know what was there to discover. I didn’t know the deeper history of Lincolnville, the generations of African American families who built and sustained this neighborhood, or their extraordinary contributions to St. Augustine.",
      "So I walked. I walked its streets, met residents, visited neighborhood businesses, attended community meetings, listened to Living Historians, studied maps, and learned about the families, homes, churches, schools and institutions that shaped this community. The visitor guide showed me where tourists go. The people of Lincolnville helped me understand where I was.",
    ],
    quote: "The Lincolnville Corridor is the journey. Little Africa is the heartbeat.",
  },

  roots: {
    title: "Lil Africa",
    paragraphs: [
      "Lincolnville was settled by freedpeople in 1866, near Maria Sanchez Creek, in the settlement first known as Africa, or Little Africa. On November 29, 1991, the Lincolnville Historic District joined the National Register of Historic Places with 548 contributing buildings. Dr. Martin Luther King Jr. and the 1964 St. Augustine Movement gathered in its churches.",
      "As I researched the places I wanted visitors to discover, I found history that reached far beyond the Civil Rights movement: the African presence in Spanish St. Augustine, slavery and freedom, Fort Mose, emancipation, and the settlement of Little Africa. That walk became Root & Simmer Hospitality Co., exclusively for Lincolnville.",
    ],
  },

  map: {
    title: "The map today",
    paragraphs: [
      "Visitors find their way with the City’s visitor map and with the St. Augustine Sightseeing Map & Guide, drawn by artist Henry E. Hird III, whose maps of the city go back to the early 1980s. They are beautiful maps, and they have welcomed millions of people to St. Augustine.",
      "Yet a visitor using them today is led down King Street toward Flagler, not through Lincolnville toward Riberia Street, and several of the neighborhood’s landmarks are not shown where they stand on the ground. The City’s own 2013 Lincolnville Redevelopment Plan says it plainly: Lincolnville is “an overlooked experience to the vast majority of visitors.”",
    ],
  },

  asks: {
    title: "What we are asking for",
    intro: "Not a favor: a partnership, offered in a spirit of fairness and accuracy. Root & Simmer will send verified addresses and dates whenever they change.",
    items: [
      { title: "Lincolnville, whole", body: "Lincolnville fully represented on the official visitor map: not only its Civil Rights landmarks, but its historic homes, churches, schools, cultural institutions, businesses, and significant places where buildings no longer stand." },
      { title: "Landmarks where they stand", body: "Each landmark placed at its true location, so the neighborhood appears whole." },
      { title: "Its museums listed", body: "The Lincolnville Museum and Cultural Center, the ACCORD Civil Rights Museum and the Best Richardson African Diaspora Literature & Culture Museum listed as places to visit, at their own locations." },
      { title: "A Lincolnville route", body: "Even a short dotted line inviting visitors from the Plaza down to M.L. King Avenue and Washington Street, with a review of wayfinding signs and street access into the neighborhood." },
      { title: "History woven in", body: "A review of the City’s 2009 Official Handbook for Sightseeing Tour Guides, so that Black history is woven into St. Augustine’s history itself, from Spanish St. Augustine and Fort Mose through emancipation, Reconstruction, the Flagler era, segregation and Civil Rights." },
    ],
    purpose: "My purpose is not simply to increase visitor numbers. It is to encourage thoughtful discovery that supports local businesses, respects residents, and creates a deeper appreciation for the community.",
  },

  vote: {
    title: "Help us draw Lincolnville onto the map",
    intro: "Which places should every visitor’s map show? Tap the ones you’d put on it, then tell us what’s missing. Your picks help us make the list we bring to the City and the mapmakers.",
  },

  /** Public landmarks at public addresses (from the "Lincolnville Today" directory and the enclosure list). */
  landmarks: [
    { id: "museum", name: "Lincolnville Museum and Cultural Center", where: "102 M.L. King Ave", body: "In the 1925 Excelsior School, the city’s first public high school for Black students." },
    { id: "corner-market", name: "The Corner Market", where: "97 M.L. King Ave", body: "A neighborhood market with a story to tell, home of Sweet Mama’s Peach Cobbler and the Corner Market Boutique." },
    { id: "accord", name: "ACCORD Civil Rights Museum", where: "79 Bridge St", body: "The courage and organizing of the local people who shaped the Civil Rights Movement." },
    { id: "best-richardson", name: "Best Richardson African Diaspora Literature & Culture Museum", where: "83 Washington St", body: "African Diaspora books and genealogy; a First Friday Art Walk host." },
    { id: "st-paul", name: "St. Paul AME Church", where: "85 M.L. King Ave", body: "Founded 1873; a gathering place of the 1964 St. Augustine Movement." },
    { id: "st-benedict", name: "St. Benedict the Moor Catholic Church", where: "86 M.L. King Ave", body: "Historic Black Catholic parish." },
    { id: "first-baptist", name: "First Baptist Church", where: "89 St. Francis St", body: "A 1964 civil rights meeting site." },
    { id: "st-marys", name: "St. Mary’s Missionary Baptist Church", where: "69 Washington St", body: "Historic Washington Street congregation." },
    { id: "st-cyprians", name: "St. Cyprian’s Episcopal Church", where: "37 Lovett St", body: "Historic Lincolnville congregation, built 1900." },
    { id: "bethel", name: "Bethel Baptist Church", where: "222 Riberia St", body: "Home of 1964 mass meetings and Rev. Andrew Young’s Freedom School." },
    { id: "odd-fellows", name: "Odd Fellows Hall, the former Lincolnville Theatre", where: "92 Washington St", body: "A three-story hall built in 1908; its first floor became the Lincolnville Theatre." },
    { id: "palace-market", name: "Palace Market site", where: "87 Washington St", body: "Opened by Frank B. Butler in 1914: a place where a building’s story outlives the building." },
    { id: "elks", name: "Fountain of Youth Elks Lodge", where: "100 Washington St", body: "Fellowship, Black community leadership and Lincolnville’s civil rights legacy." },
    { id: "twine-park", name: "Twine Park", where: "57 Lovett St", body: "Named for Henry and Kat Twine, Lincolnville civil rights leaders." },
  ] as WhatIfChoice[],

  voice: {
    title: "What’s missing from the map?",
    intro: "Your picks above come with this note. Tell us the places, people and stories the visitor map should show.",
    ideaLabel: "A place, business or story the map should show",
    ideaPlaceholder: "The map should show…",
    worryLabel: "Anything we should be careful about?",
    rememberLabel: "Do you remember how visitors found, or missed, Lincolnville? Tell us.",
    connections: ["I live in Lincolnville", "I grew up in Lincolnville", "I own a business in Lincolnville", "I visit Lincolnville", "Other"],
    submit: "Send my picks and ideas",
    fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there. We quote no one without permission.",
  } as WhatIfVoice,

  landBeneath: {
    title: "The Land Beneath Our Feet",
    body: "A proposed historical experience connecting the city’s familiar landmarks with people, communities and stories that are less visible: African presence, slavery, freedom, emancipation, Little Africa, Lincolnville, Reconstruction, education, faith, entrepreneurship, community life, Civil Rights and preservation. History lives not only in surviving buildings, but in the land, the former locations of homes and institutions, the streets, the records, and the memories of those who lived here. It would be developed with historians, educators, community members and Living Historians, within the City’s sightseeing rules.",
  },

  records: [
    { title: "Lincolnville Redevelopment Plan, 2013: tourism needs and opportunities", source: "City of St. Augustine, page 28", href: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf#page=28", kind: "PDF", note: "“St. Augustine visitors in general know little or nothing of the history and culture of Lincolnville… Lincolnville is an overlooked experience to the vast majority of visitors.” The plan calls on the City and the visitors bureau to make visitors aware of Lincolnville’s distinctive history." },
    { title: "Lincolnville Redevelopment Plan Amendment, 2017", source: "City of St. Augustine", href: "/documents/cra/lincolnville-redevelopment-plan-amendment-2017.pdf", kind: "PDF", note: "The CRA’s first goal: preserve African American heritage and retain long-term residents." },
    { title: "Lincolnville Pedestrian Connectivity Study, 2020", source: "City of St. Augustine", href: "/documents/cra/lincolnville-pedestrian-connectivity-study-2020.pdf", kind: "PDF", note: "How people walk into and around Lincolnville today, and where the City plans new sidewalks and crossings: the ground a visitor route would follow." },
    { title: "Lincolnville Home Map", source: "Root & Simmer, from City of St. Augustine GIS records", href: "/preserve-historic-homes/map", kind: "Web page", note: "Every lot in Lincolnville inside the City’s official boundary, with what the public records say about each one: a start on the map visitors deserve." },
  ] as ProjectRecord[],

  concerns: [
    { concern: "Visitors miss Lincolnville", help: "We give the City and the mapmakers a verified list of landmarks with addresses and dates, and keep it current." },
    { concern: "Residents’ privacy and everyday life", help: "Only public places and businesses go on a visitor map. Private homes appear only with the owner’s permission." },
    { concern: "Getting the history right", help: "Every fact is sourced and checked with Lincolnville’s Living Historians, the Lincolnville Museum and ACCORD before it is printed." },
    { concern: "Supporting local business", help: "A route that brings visitors past Lincolnville’s own businesses, so tourism creates value where people live." },
  ] as ProjectConcern[],

  heart: {
    title: "From my heart",
    paragraphs: [
      "I understand that I am a newcomer to a community whose roots extend back generations. I do not claim those roots as my own. But I feel a responsibility to honor what I have learned and use my time, energy and business to support the people and places that have made this journey so meaningful.",
      "I want Lincolnville’s long-term residents to know their voices matter. I want its historic homes and landmarks to remain part of the landscape. I want its businesses to be discovered and supported. And I want the next newcomer who picks up a St. Augustine visitor map to find the Lincolnville that I almost missed.",
    ],
    closing: "There is more to this city than what we see on the surface. There is history beneath our feet. There are generations of stories waiting to be heard. And there is a heartbeat in Lincolnville that deserves to be preserved.",
    sign: "Together, we create the experience.",
    name: "Kimberly Joyce",
    role: "Founder & Director of Community Partnerships, Root & Simmer Hospitality Co.",
  },

  notice:
    "Root & Simmer Hospitality Co. is an independent private business. This page shares our story and our request. It is not a City of St. Augustine or Lincolnville Community Redevelopment Agency (CRA) publication and implies no endorsement by the City or by any mapmaker. Addresses and hours change: confirm before you visit.",
};
