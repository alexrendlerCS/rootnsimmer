/**
 * Root & Simmer — "What if…?" Washington Street, Lil Africa's Main Street (/what-if/washington-street).
 * Same format as Twine Park, the Stable Bodega and the Visitor Welcome.
 *
 * History from Kimberly's "Washington Street: Homes, History & Heartbeat" (Oct 10, 2026, sourced to the 1991
 * National Register nomination, ACCORD marker texts, Florida Memory and the Florida Master Site File) and
 * "Washington Street: Ten Story Moments". Kept off on purpose (her project file says so): unconfirmed details about
 * Ms. GiGi, Ms. Nyk and the Corner Market; the shelter notes; homes and buildings for sale; storefront buying plans.
 * Back office: 7 Partnerships\Washington Street. Edit the words between the quotes and save.
 */
import type { ProjectConcern, ProjectRecord } from "./projects";
import type { WhatIfChoice, WhatIfSignupConfig, WhatIfVoice } from "@/components/WhatIf";

export const washingtonVision = {
  label: "What if…? · A Root & Simmer vision",
  title: "Washington Street, Lil Africa’s Main Street",
  tagline: "Washington Street is our spine. Little Africa is our heartbeat. And the people of Lincolnville are its living story.",
  lede: "A century ago, Washington Street was Lincolnville’s Main Street. Residences shared the street with shops, churches and fraternal halls, and many buildings joined home and livelihood under one roof: the business downstairs, the family upstairs. Grocers, barbers, cafés, druggists, doctors and dentists served the neighborhood that built them. What if Washington Street, and the blocks around it, did that again?",
  idea: "A vision for local businesses that serve the community first, the way Lil Africa’s did. Root & Simmer helps neighbors start and grow them: we take no part in buying, selling or leasing property.",

  hero: {
    src: "/photos/washington-street-home.jpg",
    width: 1400,
    height: 1050,
    alt: "A blue Lincolnville cottage with a red tile roof, white columned entry and a brick front walk.",
    caption: "A Lincolnville home on Washington Street. Photo: w_lemay, Wikimedia Commons, CC BY-SA 2.0.",
  },

  feel: {
    title: "This is how it should feel",
    body: "You walk Washington Street on a weekday morning and the neighborhood is open for business. The barber has the chair turned toward the window. The grocer on the corner has fresh bread and the things you ran out of, so nobody has to drive across town. There’s a café with a table for the elders and a counter for the young people, a small office where someone will help you with your insurance or your taxes, and upstairs, families who live above the shops they run. On Friday night the old hall fills again for music and dancing, the way it did in the 1920s.",
    promise: "We don’t want to build something new on top of Lincolnville. We want to bring back the kinds of businesses that once served it, owned by and serving the people who live here.",
  },

  vote: {
    title: "What should open on the street?",
    intro: "Each card is a business Lil Africa once had. Tap the ones you would use today, then tell us what else is missing. Your picks tell would-be owners what the neighborhood will support.",
  },

  choices: [
    { id: "grocer", name: "A corner grocer and market", where: "Once: the Palace Market, 1914", body: "Fresh food and everyday basics close to home. Frank B. Butler opened the Palace Market on Washington Street in 1914." },
    { id: "barber", name: "A barber shop and salon", where: "Once: the Royal Palm Barber Shop", body: "The chair where the news gets told first. Ernest Wells ran the Royal Palm Barber Shop at 64 Washington." },
    { id: "cafe", name: "A café or luncheonette", where: "Once: Martin’s restaurant", body: "Coffee, a plate lunch and a table to sit at. Restaurants appear on the street in the 1899 and 1911-12 directories, and at 70 Washington." },
    { id: "bakery", name: "A bakery", where: "Called for in the City’s plan", body: "Bread, cakes and a reason to stop. The City’s 2013 plan names a bakery or coffee shop among the businesses residents need." },
    { id: "dry-goods", name: "An everyday goods store", where: "Once: dry goods at 70 Washington", body: "Clothes, household goods and the things a family needs. Merchants Moses and Ike Kukowsky sold dry goods at 70 Washington in 1904, and lived upstairs." },
    { id: "health", name: "A doctor’s or dentist’s office", where: "Once: Dr. Freeland, Dr. Welters", body: "Care close to home. Dr. Thomas G. Freeland had a medical office at 70 Washington; dentist Dr. Edward A. Welters practiced at 65." },
    { id: "offices", name: "Small professional offices", where: "Once: insurance, real estate, notary", body: "Insurance, taxes, legal help and notary services from neighbors. John W. Jones offered real estate and insurance at 89 Washington." },
    { id: "hall", name: "A hall for music and gatherings", where: "Once: the Odd Fellows Hall, 1908", body: "A place for dances, meetings and celebrations. Richard Twine photographed neighbors after a dance at the Odd Fellows Hall in the 1920s." },
    { id: "makers", name: "Makers’ shops", where: "Once: the cigar makers", body: "Things made by hand on the street where they’re sold. Early Washington Street had cigar makers and a shoe shop." },
    { id: "upstairs", name: "Homes above the shops", where: "The Main Street way", body: "Families living above the businesses they run, keeping the street lived-in day and night." },
  ] as WhatIfChoice[],

  voice: {
    title: "Add your voice",
    intro: "Your picks above come with this note. Tell us what business you wish were here, what worries you, and what your family remembers.",
    ideaLabel: "What if…? The business you wish were on Washington Street",
    ideaPlaceholder: "What if there were a…",
    worryLabel: "Anything that worries you?",
    rememberLabel: "Did your family run a business in Lincolnville, or shop on Washington Street? Tell us.",
    connections: ["I live in Lincolnville", "I grew up in Lincolnville", "My family had a business here", "I own a business nearby", "Other"],
    submit: "Send my picks and ideas",
    fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there. We quote no one without permission.",
  } as WhatIfVoice,

  history: {
    title: "Washington Street then",
    places: [
      { label: "70 Washington", body: "Built 1885-1893. A dry-goods store with a two-story front porch on the 1893 Sanborn map. Merchants Moses and Ike Kukowsky worked and lived here in 1904; later came Albert Natiel’s restaurant, Dr. Thomas G. Freeland’s medical office, Holmes and Johnson Funeral Home and Judson Ayers’s dry goods." },
      { label: "64 Washington", body: "Ernest Wells’s Royal Palm Barber Shop and Chris Lightburn’s grocery. During and after the 1964 demonstrations, the Florida headquarters of the Southern Christian Leadership Conference, run by nurse Loucille Plummer (ACCORD)." },
      { label: "92 Washington", body: "The Odd Fellows Hall, 1908. Its first floor became the Lincolnville Theatre. A Richard Twine photograph shows residents gathered after a dance there in the 1920s." },
      { label: "87 Washington", body: "Frank B. Butler opened the Palace Market here in 1914." },
      { label: "76 Washington", body: "The local NAACP office, from the 1970s until the early 1990s (ACCORD)." },
      { label: "93 Washington", body: "Built 1871-1885 by the 1991 National Register inventory: among the oldest buildings on the street." },
    ],
    note: "Addresses are today’s. Historic directories used older numbers in places, so each early business is matched to a building only when the records agree.",
  },

  site: {
    title: "Where things stand",
    facts: [
      { label: "What residents need", body: "The City’s 2013 Lincolnville Redevelopment Plan found that “residents have to leave Lincolnville for nearly all goods and services,” and that they favor businesses “of neighborhood type and scale.”" },
      { label: "What the City recommends", body: "A neighborhood business and service center along M.L. King Avenue from about Bridge Street to Lovett Street, centered on the Excelsior building, with a section of Washington Street designated for commercial land use." },
      { label: "What stands", body: "Washington Street’s historic buildings: homes, churches, the Odd Fellows Hall and the old storefronts of the Lincolnville Historic District." },
      { label: "What’s next", body: "Listening first: asking Washington Street residents and business owners what they want and where they need support." },
    ],
    stance: "Local first. Neighborhood scale. Historic buildings kept. Owners decide what happens to their own property; Root & Simmer takes no part in any sale or lease.",
    mapLink: { label: "See Washington Street on the home map", href: "/preserve-historic-homes/map" },
  },

  records: [
    { title: "Lincolnville Redevelopment Plan, 2013: neighborhood businesses and services", source: "City of St. Augustine, pages 24-25", href: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf#page=24", kind: "PDF", note: "“Residents have to leave Lincolnville for nearly all goods and services.” The plan names a small grocer, bakery or coffee shop, deli, beauty or barber shop, and “shops and service establishments representative of those in Lincolnville in the past.”" },
    { title: "Lincolnville Redevelopment Plan, 2013: Washington Street’s commercial section", source: "City of St. Augustine, page 28", href: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf#page=28", kind: "PDF", note: "The plan points to “the section of Washington Street designated for commercial land use” for new uses of large historic buildings." },
    { title: "Lincolnville Redevelopment Plan Amendment, 2017", source: "City of St. Augustine", href: "/documents/cra/lincolnville-redevelopment-plan-amendment-2017.pdf", kind: "PDF", note: "The CRA’s goals: preserve African American heritage and retain long-term residents, preserve historic character, and make neighborhood improvements." },
    { title: "Historic Architectural Review Board (HARB) applications", source: "City of St. Augustine", href: "https://www.citystaug.com/195/Historic-Architectural-Review-Board-Appl", kind: "Web page", note: "Washington Street is inside the Lincolnville National Register Historic District. Storefront changes, signs and new buildings may need HARB review; we help owners find the right application." },
  ] as ProjectRecord[],

  concerns: [
    { concern: "Residents leave the neighborhood for everything", help: "A list of the businesses neighbors say they would use, from this page, for anyone ready to open one, so the first shops are the ones Lincolnville needs." },
    { concern: "Keeping it neighborhood scale", help: "The City’s plan favors businesses “of neighborhood type and scale.” We point new owners to small, local, home-and-shop models, not chains." },
    { concern: "Protecting historic buildings", help: "We pull each building’s records, explain the HARB rules, and help owners with the forms before any change." },
    { concern: "Forms and permits for new businesses", help: "We gather what a new owner needs: zoning, business tax receipts, permits and HARB applications, explained in plain words." },
    { concern: "Telling the street’s history right", help: "Every business named comes from a record: the 1991 National Register, ACCORD’s markers, Sanborn maps and the city directories." },
  ] as ProjectConcern[],

  signup: {
    title: "Open, grow or remember a business",
    intro: "Dreaming of a shop, already running one, or carrying your family’s business story? Tell us. We help with the forms, the records and the story.",
    config: {
      subject: "Washington Street: business interest",
      opening: "I would like to be part of bringing businesses back to Washington Street.",
      orgLabel: "Business name",
      whatLabel: "What does (or would) your business do?",
      roleLabel: "I’d like to",
      roles: ["Start a business", "Grow my Lincolnville business", "Share my family’s business history", "Mentor a new business owner", "Not sure yet"],
      whenLabel: "When",
      whens: ["Within a year", "Someday", "Just interested for now"],
      submit: "Send my interest",
      fine: "This opens a draft to Root & Simmer in your email app. Nothing is sent until you press send there, and your details are never shared without your permission.",
    } as WhatIfSignupConfig,
  },

  notice:
    "Root & Simmer Hospitality Co. is an independent private business. This is a community vision for discussion. It is not a City of St. Augustine or Lincolnville Community Redevelopment Agency (CRA) plan and implies no City endorsement. Root & Simmer takes no part in buying, selling, renting or leasing property.",
};
