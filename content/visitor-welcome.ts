/**
 * Root & Simmer — "What if…?" A Lincolnville Visitor Welcome at Ragga Surf Cafe (/what-if/visitor-welcome).
 * Same format as Twine Park and the Stable Bodega.
 *
 * Ragga Surf Cafe is an open, growing business at 134 Riberia Street. The idea is a welcome spot WITH the café, as
 * partners. The owners agreed (Kimberly, Nov 18, 2026). Words from Kimberly's Raggamuffin partnership proposal,
 * her City proposal "Bringing Lincolnville Forward" and public City records. Edit the words between the quotes.
 */
import type { ProjectConcern, ProjectRecord } from "./projects";
import type { WhatIfChoice, WhatIfSignupConfig, WhatIfVoice } from "@/components/WhatIf";

export const visitorWelcome = {
  label: "What if…? · A Root & Simmer vision",
  title: "A Lincolnville Visitor Welcome",
  tagline: "At Ragga Surf Cafe, 134 Riberia Street. The home brings you to Lincolnville. Root & Simmer welcomes you into the community.",
  lede: "St. Augustine welcomes millions of visitors a year, and the City runs its Visitor Information Center downtown. Lincolnville has no front door of its own. What if visitors arriving on the Riberia Street waterfront found one, right beside their coffee: a small Root & Simmer welcome corner at Ragga Surf Cafe, with a Lincolnville map, the stories, and the way to the neighborhood’s own businesses?",
  idea: "An idea in partnership with Ragga Surf Cafe, shared with the owners’ agreement. The café stays the café: Root & Simmer adds a welcome, not a counter.",

  feel: {
    title: "This is how it should feel",
    body: "You stop at Ragga Surf Cafe for coffee on the waterfront. Beside the counter is a small Lincolnville corner: a free map that shows the whole neighborhood, a board of what’s open today on M.L. King Avenue and Washington Street, and a person who can tell you where the Welcoming Walk begins. You leave with a route, a story, and three places to try that you would never have found on your own.",
    promise: "Hospitality can become a bridge between visitors, residents, local businesses, history and preservation. That is the heart of Root & Simmer Hospitality Co.",
  },

  vote: {
    title: "What should the welcome offer?",
    intro: "Tap everything you’d want a Lincolnville visitor welcome to have. Then send your picks, with your own ideas, below.",
  },

  choices: [
    { id: "map", name: "A free Lincolnville map", where: "Take one", body: "The whole neighborhood, with its landmarks where they really stand." },
    { id: "walk", name: "Start the Welcoming Walk", where: "Begins here", body: "A neighborhood stroll to local businesses, historic landmarks and community places visitors usually miss." },
    { id: "open-today", name: "What’s open today", where: "A board", body: "Lincolnville businesses, museums and church concerts, kept current with each owner’s permission." },
    { id: "guide", name: "The Lincolnville business guide", where: "Local first", body: "Referrals to Lincolnville’s own makers, cooks and shops, including the waterfront neighbors at Raggamuffin and Peace & Cream." },
    { id: "trail", name: "The Freedom Trail and the museums", where: "The way to", body: "How to reach the Lincolnville Museum, the ACCORD Civil Rights Museum and the Freedom Trail markers." },
    { id: "greeter", name: "A neighbor to say hello", where: "Weekends", body: "Lincolnville volunteers who can answer questions and point the way." },
    { id: "history", name: "Ask about a home’s history", where: "Home Story", body: "Questions about a house, a family name or a street, answered from the records." },
    { id: "respect", name: "How to visit respectfully", where: "A short card", body: "Lincolnville is a living neighborhood: public places, private homes, and how to tell the difference." },
  ] as WhatIfChoice[],

  voice: {
    title: "Add your voice",
    intro: "Your picks above come with this note. Tell us what a welcome should say, and what worries you.",
    ideaLabel: "What if…? Your idea for the welcome",
    ideaPlaceholder: "What if visitors could…",
    worryLabel: "Anything that worries you?",
    rememberLabel: "How did you first find Lincolnville? Tell us.",
    connections: ["I live in Lincolnville", "I own a business in Lincolnville", "I work on the Riberia waterfront", "I visit Lincolnville", "Other"],
    submit: "Send my picks and ideas",
    fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there. We quote no one without permission.",
  } as WhatIfVoice,

  site: {
    title: "Where things stand",
    facts: [
      { label: "The place", body: "Ragga Surf Cafe, an open café at 134 Riberia Street on the Lincolnville waterfront, beside Raggamuffin and Peace & Cream." },
      { label: "Today", body: "Visitors who stop on the waterfront have no Lincolnville welcome: the City’s Visitor Information Center is downtown." },
      { label: "The idea", body: "A small welcome corner run by Root & Simmer with the café’s agreement, adding referrals to the café and its neighbors, not taking from them." },
      { label: "Next step", body: "Planning the welcome corner together with the café’s owners, and hearing from neighbors on this page about what it should offer." },
    ],
    mapLink: { label: "See 134 Riberia Street on the home map", href: "/preserve-historic-homes/map" },
  },

  records: [
    { title: "City Visitor Information Center Fund, FY2027 budget", source: "City of St. Augustine", href: "/documents/cra/city-visitor-information-center-fund-fy2027.pdf", kind: "PDF", note: "The City budgets $8,186,737 in FY2027 to run its City-owned Visitor Information Center and the Historic Downtown Parking Facility. Both are downtown; Lincolnville has no visitor welcome of its own." },
    { title: "Lincolnville Redevelopment Plan, 2013: tourism", source: "City of St. Augustine, pages 27-28", href: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf#page=27", kind: "PDF", note: "St. Augustine attracts “6.4 million visitors annually,” yet “visitors in general know little or nothing of the history and culture of Lincolnville.” It also looks to Riberia Street for “a small high value tourist-oriented cluster of facilities and activities.”" },
    { title: "Lincolnville Redevelopment Plan Amendment, 2017", source: "City of St. Augustine", href: "/documents/cra/lincolnville-redevelopment-plan-amendment-2017.pdf", kind: "PDF", note: "The CRA’s goals: preserve African American heritage and retain long-term residents, preserve historic character, and make neighborhood improvements." },
    { title: "Lincolnville Pedestrian Connectivity Study, 2020", source: "City of St. Augustine", href: "/documents/cra/lincolnville-pedestrian-connectivity-study-2020.pdf", kind: "PDF", note: "How people walk from the waterfront into Lincolnville, and where the City plans sidewalks and crossings: the route a welcome would point to." },
  ] as ProjectRecord[],

  concerns: [
    { concern: "Visitors miss Lincolnville", help: "A welcome where visitors already stop, with a map of the whole neighborhood and a walk that begins at the door." },
    { concern: "Residents’ privacy", help: "Visitors are pointed to public places and businesses only, with a short card on visiting a living neighborhood respectfully." },
    { concern: "Supporting, not competing", help: "The welcome sells nothing the café sells. It sends customers to the café, its neighbors and Lincolnville businesses, each listed with permission." },
    { concern: "Working with the City", help: "A neighborhood welcome that complements the City’s Visitor Information Center downtown, with verified information kept current." },
  ] as ProjectConcern[],

  signup: {
    title: "Be part of the welcome",
    intro: "Own a Lincolnville business, want to greet visitors, or have a story that belongs on the walk? Tell us. Nothing is listed without your permission.",
    config: {
      subject: "Lincolnville Visitor Welcome: I’d like to take part",
      opening: "I would like to take part in the Lincolnville Visitor Welcome.",
      orgLabel: "Business or group",
      whatLabel: "How would you like to take part?",
      roleLabel: "I’d like to",
      roles: ["List my business", "Greet visitors", "Share history or stories", "Be a stop on the walk", "Not sure yet"],
      whenLabel: "When",
      whens: ["As soon as it starts", "Now and then", "Just interested for now"],
      submit: "Send my interest",
      fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there, and your details are never shared without your permission.",
    } as WhatIfSignupConfig,
  },

  notice:
    "Root & Simmer Hospitality Co. is an independent private business. This is a community vision for discussion, shared in partnership with Ragga Surf Cafe, with its owners’ agreement. It is not a City of St. Augustine or Lincolnville Community Redevelopment Agency (CRA) plan and implies no City endorsement.",
};
