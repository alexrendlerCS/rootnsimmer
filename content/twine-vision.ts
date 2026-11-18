/**
 * Root & Simmer — "What if…?" Twine Park (/what-if/twine-park). Public page, same format as the Stable Bodega.
 *
 * Words from Kimberly's Twine Park Project Proposal (Nov 12, 2026; the full proposal is the members-only page
 * /cra-lincolnville/twine-park) and public City records. Same rules as content/site.ts: edit the words between the
 * quotes and save. The Twine family's own photos and words are used only with the family's consent, through the City.
 */
import type { ProjectConcern, ProjectRecord } from "./projects";
import type { WhatIfChoice, WhatIfSignupConfig, WhatIfVoice } from "@/components/WhatIf";

export const twineVision = {
  label: "What if…? · A Root & Simmer vision",
  title: "Twine Park",
  tagline: "Honoring the Twines at the corner where it began.",
  lede: "At the corner of Riberia and Lovett Streets, a small City park carries the names of Henry L. Twine and Katherine “Kat” Twine, Lincolnville civil rights leaders whose work helped lead to the Civil Rights Act of 1964. The City owns the park, the Lincolnville Community Redevelopment Agency (CRA) funds its improvement, and a design is under way. What if the whole corner became a place of welcome, rest and reflection worthy of the Twines’ names?",
  idea: "Root & Simmer is offering to help, not bidding. We ask the City for no money, no fee and no contract: our offer is listening, verified history and volunteer care.",

  hero: {
    src: "/photos/twine-park-corner-2026-10.jpg",
    width: 1200,
    height: 900,
    alt: "The corner of Twine Park: green lawn, tall trees, the Twine Park marker on its post, and a crosswalk at the street.",
    caption: "Twine Park at Riberia and Lovett, October 13, 2026. Photo: Root & Simmer.",
  },

  feel: {
    title: "This is how it should feel",
    body: "You come to the corner of Riberia and Lovett and the Twines are there to meet you: a clear new panel telling their story, Henry’s evergreen and Kat’s oak standing as a grove, benches on dry ground under the shade. Across Riberia, the century-old paving bricks become a stop on a short history walk that leads past Bethel Baptist, where Dr. King’s 1964 mass meetings were held. Neighbors keep the park on planting days, and families come back to it for small gatherings and stories.",
    promise: "This proposal treats the park and its neighbors as one corner, so each small project adds to a place of welcome, rest and reflection worthy of the Twines’ names.",
  },

  vote: {
    title: "What would you like to see?",
    intro: "Tap everything you would want for the park and its corner. Then send your picks, with your own ideas, in the box below. Your answers go to City staff as neighbors’ input before design review, never with your name unless you say so.",
  },

  choices: [
    { id: "grove", name: "A Twine Grove", where: "The memorial trees", body: "Henry’s evergreen and Katherine’s oak anchoring a grove, with native, low-maintenance plants around them." },
    { id: "panel", name: "A new history panel", where: "At the marker", body: "Clear text on the Twines from verified sources, reviewed by the Twine family and City staff. Today’s marker is weathered and its post is rusting." },
    { id: "drainage", name: "Dry benches", where: "The bench area", body: "Drainage fixed as part of the design, so the benches and picnic table aren’t standing in water after rain." },
    { id: "walk", name: "A short history walk", where: "Around the corner", body: "A self-guided walk linking the park, the Riberia bricks, Bethel Baptist and the ACCORD Freedom Trail." },
    { id: "bricks", name: "The story of the bricks", where: "Riberia sidewalk", body: "A stop telling where the century-old paving bricks came from: Robbins Paver, Southern Clay, Graves and more." },
    { id: "planting", name: "Planting and clean-up days", where: "Volunteer care", body: "Neighbors keeping the park: picking up fallen limbs, re-mulching under the benches, edging the walk." },
    { id: "gatherings", name: "Small gatherings", where: "With City approval", body: "A history walk, a story afternoon or a small gathering in the Twines’ honor." },
    { id: "trees", name: "Protect the old trees", where: "The live oak and memorial trees", body: "No trenching or heavy equipment in the root zones, and an arborist’s check on the trees." },
  ] as WhatIfChoice[],

  voice: {
    title: "Add your voice",
    intro: "Your picks above come with this note. Tell us what you would add, what worries you, and what you remember. Every idea is read.",
    ideaLabel: "What if…? Your idea for Twine Park",
    ideaPlaceholder: "What if the park had…",
    worryLabel: "Anything that worries you?",
    rememberLabel: "Do you remember Henry or Kat Twine, the park, or this corner? Tell us.",
    connections: ["I live in Lincolnville", "I grew up in Lincolnville", "I live or work near the park", "I visit Lincolnville", "Other"],
    submit: "Send my picks and ideas",
    fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there. We quote no one without permission.",
  } as WhatIfVoice,

  marker: {
    src: "/photos/twine-park-marker-2026-10.jpg",
    width: 1200,
    height: 900,
    alt: "The weathered Twine Park marker with portraits of Henry Twine and Kat Twine, on a rusting post above a puddle.",
    caption: "The Twine Park marker today: weathered, with its post rusting at the base and water at its foot. Photo: Root & Simmer, October 2026.",
  },

  history: {
    title: "The Twines and the corner",
    paragraphs: [
      "Henry L. Twine (1923-1994) served for years as president of the local NAACP, spent a decade as a City Commissioner, and became St. Augustine’s first Black Vice Mayor. Katherine “Kat” Twine (1925-2002) received the City’s de Avilés Award for her civil rights work.",
      "After Katherine’s funeral in December 2002, neighbors formed ACCORD, which went on to create Lincolnville’s Freedom Trail. An evergreen for Henry and an oak for Katherine already grow in the park.",
      "Bethel Baptist Church at 222 Riberia, within sight of the park, was built in 1943. It hosted the NAACP Youth Council in 1963, Dr. King’s SCLC mass meetings in 1964, and Rev. Andrew Young’s Freedom School.",
    ],
    cottage: {
      src: "/photos/riberia-cottage-and-bethel-2026-10.jpg",
      width: 1200,
      height: 900,
      alt: "A small vacant frame cottage with a screened porch beside Bethel Baptist Church, with its stucco tower and red doors, on Riberia Street.",
      caption: "Riberia Street by the park: the historic cottage beside Bethel Baptist Church. Photo: Root & Simmer, October 2026.",
    },
  },

  site: {
    title: "Where things stand",
    facts: [
      { label: "The park", body: "Twine Park, 57 Lovett Street, at Riberia and Lovett. City owned, with the Twine marker, a memorial evergreen and oak, four benches and a picnic table." },
      { label: "The money", body: "“Twine Park Improvements Design & Construction” in the Lincolnville CRA budget: $232,520 in 2025-26 ($200,000 new and $32,520 already committed), and $200,000 committed in the adopted 2026-27 budget." },
      { label: "The design", body: "The City’s design consultant, Castle Bay Design Studio, holds the design. Whether the project is on hold is not confirmed." },
      { label: "Next public meeting", body: "Lincolnville CRA, January 5, 2027, 5 p.m., Alcazar Room, City Hall. Anyone may speak in public comment." },
    ],
    stance: "We do not claim the project is on hold or that any design is approved. We do not speak for Lincolnville, the Twine family or the City. We will not approach the Twine family on our own: any contact goes through the City, and only with the family’s consent.",
    mapLink: { label: "See Twine Park on the home map", href: "/preserve-historic-homes/map" },
  },

  records: [
    { title: "Lincolnville CRA adopted budget, Fiscal Year 2026-2027", source: "City of St. Augustine, October 5, 2026 agenda packet, pages 9-10", href: "/documents/cra/lincolnville-cra-agenda-packet-2026-10-05-adopted-budget.pdf#page=9", kind: "PDF", note: "“Twine Park Improvements Design & Construction”: $200,000 committed, under the CRA’s improvements, beautification and infrastructure projects." },
    { title: "Lincolnville CRA Budget, Fiscal Year 2025-2026", source: "City of St. Augustine, page 2", href: "/documents/cra/lincolnville-cra-budget-fy2025-26.pdf#page=2", kind: "PDF", note: "The same line the year before: $200,000 new and $32,520 already committed, $232,520 in all." },
    { title: "Lincolnville Redevelopment Plan Amendment, 2017", source: "City of St. Augustine, page 27", href: "/documents/cra/lincolnville-redevelopment-plan-amendment-2017.pdf#page=27", kind: "PDF", note: "The plan the CRA works from: “Other improvements recommended by the LCRA include improving and expanding Twine Park.”" },
    { title: "Lincolnville Pedestrian Connectivity Study, 2020", source: "City of St. Augustine", href: "/documents/cra/lincolnville-pedestrian-connectivity-study-2020.pdf#page=3", kind: "PDF", note: "The City’s sidewalk study for the neighborhood, including new sidewalk along Twine Street, which borders the park’s block." },
    { title: "Twine Park historical marker", source: "City of St. Augustine marker, Historical Marker Database no. 77261", href: "https://www.hmdb.org/m.asp?m=77261", kind: "Web page", note: "The marker’s full text: the Twines’ lives, the naming of the park, and the trees planted in their memory." },
    { title: "Lincolnville CRA Meeting Booklet, October 2026", source: "Root & Simmer, from the City’s meeting records", href: "/documents/cra/lincolnville-cra-meeting-booklet-october-2026.pdf", kind: "PDF", note: "How the CRA meets, what is on its agenda, and how to speak in public comment." },
  ] as ProjectRecord[],

  concerns: [
    { concern: "Water standing in the park", help: "Our October 13 photos and video show the bench and table area under water. We ask that drainage be fixed as part of the design, and we document conditions for City staff." },
    { concern: "A weathered marker", help: "We write interpretive panel text from verified sources, with every fact sourced, for the Twine family and City staff to review." },
    { concern: "Protecting the memorial trees", help: "We ask in writing for no trenching, grade changes or heavy equipment in the root zones, and an arborist’s check on both trees and the old live oak." },
    { concern: "Digging on a historic block", help: "British Redoubt No. 4 (1777) stood on this block. We ask for the City’s archaeological review before any digging, and pull the records for it." },
    { concern: "Hearing from neighbors", help: "This page, a five-question survey through the Lincolnville Neighborhood Association, and porch conversations, each quoted only with permission. Results go to City staff before design review." },
    { concern: "Care after it is built", help: "Volunteer planting days and clean-ups under a City adopt-a-park or volunteer agreement, with insurance settled first. City staff have said they are “happy to explore” that." },
  ] as ProjectConcern[],

  signup: {
    title: "Lend a hand",
    intro: "Twine Park will need neighbors: on planting days, on clean-ups, with stories and photos, and on history walks. Tell us how you’d like to help. Nothing starts until the City approves a volunteer agreement.",
    config: {
      subject: "Twine Park: I’d like to help",
      opening: "I would like to help with Twine Park.",
      orgLabel: "Church, school or group",
      whatLabel: "How would you like to help?",
      roleLabel: "I’d most like to",
      roles: ["Plant and clean up", "Share stories or photos", "Help with history walks", "Speak at a CRA meeting", "Not sure yet"],
      whenLabel: "When",
      whens: ["As soon as it starts", "Now and then", "Just interested for now"],
      submit: "Send my offer to help",
      fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there, and your details are never shared without your permission.",
    } as WhatIfSignupConfig,
  },

  more: { label: "Members: read the full Twine Park Proposal", href: "/cra-lincolnville/twine-park" },

  notice:
    "Root & Simmer Hospitality Co. is an independent private business. This is a community vision for discussion. It is not a City of St. Augustine or Lincolnville Community Redevelopment Agency (CRA) plan, and it implies no City endorsement. The City owns Twine Park and decides its design.",
};
