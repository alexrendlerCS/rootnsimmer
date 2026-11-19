/**
 * Root & Simmer — Support Lincolnville's History (/support) and the thank-you page (/support/thank-you).
 * Decisions by Kimberly (November 2026): Homeowner $1,200; Friend of Lincolnville $50 a year, by invitation code
 * from a homeowner member (3 codes a year); Supporter = any amount the giver chooses; self-guided walk guide $15,
 * free with any membership; sponsors "ask us" (no prices on the site).
 * Payment for now: every button opens an email draft and Kimberly replies with an invoice. When card payment is
 * set up, the buttons will point to the checkout instead. Same rules as content/site.ts: edit the words between the quotes.
 */

export const supportPage = {
  label: "Support",
  title: "Support Lincolnville’s History",
  lede: "Every membership, gift, story and sponsorship helps Root & Simmer Hospitality Co. bring Lincolnville’s homes, families and history back into view: digitizing records, adding new narratives, and keeping the people who built this neighborhood where everyone can find them.",
  payNote: "For now, each button opens an email to Root & Simmer. We reply with the details and a secure way to pay.",
  taxNote: "Root & Simmer Hospitality Co. is an independent business. Gifts and memberships are not tax-deductible.",
};

export type Tier = { id: string; name: string; price: string; who: string; gets: string[]; button: string; subject: string; body: string; href?: string; hrefLabel?: string };

export const tiers: Tier[] = [
  {
    id: "homeowner",
    name: "Homeowner",
    price: "$1,200 a year",
    who: "For Lincolnville homeowners. Comes with the Home Story Package.",
    gets: [
      "Your home’s history file, records and packets",
      "Your home’s records requested and kept",
      "Three Friend of Lincolnville invitations a year for your family",
      "Three self-guided walk codes a year to share with guests",
      "Mohlman Research and the Historic Residents Map",
      "The newsletter and the self-guided walk guide",
    ],
    button: "Ask about the Home Story Package",
    subject: "Home Story Package and membership",
    body: "Hello Kimberly,\n\nI would like to learn about the Home Story Package and the homeowner membership.\n\nMy name:\nMy Lincolnville street (no house number needed yet):\nBest way to reach me:",
    href: "/digital-records#dr-membership",
    hrefLabel: "What the package includes",
  },
  {
    id: "friend",
    name: "Friend of Lincolnville",
    price: "$50 a year · by invitation",
    who: "For family and friends of a homeowner member, with an invitation code from that member.",
    gets: ["Mohlman Research and the Historic Residents Map", "The newsletter", "The self-guided walk guide", "Three self-guided walk codes a year to share with guests"],
    button: "I have an invitation code",
    subject: "Friend of Lincolnville membership",
    body: "Hello Kimberly,\n\nI would like to join as a Friend of Lincolnville.\n\nMy invitation code:\nMy name:\nWho invited me:\nBest way to reach me:",
  },
  {
    id: "supporter",
    name: "Supporter",
    price: "Any amount you choose, each year",
    who: "For anyone who cares about Lincolnville: descendants, visitors, historians and neighbors. No code needed.",
    gets: ["Mohlman Research and the Historic Residents Map", "The newsletter", "The self-guided walk guide", "Three self-guided walk codes a year to share with guests", "A thank-you from Root & Simmer"],
    button: "Become a Supporter",
    subject: "Becoming a Supporter",
    body: "Hello Kimberly,\n\nI would like to become a Supporter of Lincolnville’s history.\n\nMy name:\nThe amount I would like to give each year:\nMy connection to Lincolnville (optional):\nBest way to reach me:",
  },
];

export type Way = { id: string; title: string; body: string; button: string; subject: string; emailBody: string; note?: string };

export const ways: Way[] = [
  {
    id: "gift",
    title: "Give a gift",
    body: "A one-time gift in any amount helps digitize records and add new narratives. Every giver receives a thank-you from Root & Simmer.",
    button: "Give a gift",
    subject: "A gift for Lincolnville’s history",
    emailBody: "Hello Kimberly,\n\nI would like to give a gift to support Lincolnville’s history.\n\nMy name:\nThe amount I would like to give:\nIn honor or memory of (optional):\nBest way to reach me:",
  },
  {
    id: "share",
    title: "Share a document, photo or family story",
    body: "Old photographs, letters and memories keep Lincolnville’s story whole. With your written permission, what you share is credited to you: “Shared by the ___ family.” Nothing is published without your OK.",
    button: "Share something",
    subject: "Sharing a Lincolnville photo, document or story",
    emailBody: "Hello Kimberly,\n\nI have something to share about Lincolnville’s history.\n\nWhat it is (photo, letter, document, family story):\nWho or what it shows, and about when:\nMy name:\nBest way to reach me:",
  },
  {
    id: "historians",
    title: "Historians and researchers",
    body: "Send research, corrections or sources and you are credited on the document you helped with. Researchers can also ask for Supporter access to the directories, maps and original documents.",
    button: "Contact us as a researcher",
    subject: "Research and Lincolnville’s history",
    emailBody: "Hello Kimberly,\n\nI am a historian or researcher interested in Lincolnville.\n\nMy name and affiliation (if any):\nWhat I am researching, or what I would like to share:\nBest way to reach me:",
  },
  {
    id: "walk",
    title: "Visitors and guests: the self-guided walk",
    body: "Staying in Lincolnville? The self-guided walk guide brings its streets, homes and history to life on your phone, at your own pace, from the public sidewalk. $15 per guest. Every membership includes the walk guide, plus three walk codes a year to share with guests.",
    button: "Request the walk guide",
    subject: "Self-guided walk guide",
    emailBody: "Hello Kimberly,\n\nI would like the self-guided walk guide.\n\nMy name:\nNumber of guests:\nDates of my visit:\nBest way to reach me:",
    note: "Each guide is for one guest, for the length of the visit. See the walks at rootnsimmer.vercel.app/walks. © Root & Simmer Hospitality Co. All rights reserved.",
  },
  {
    id: "partners",
    title: "The City and community partners",
    body: "Root & Simmer offers research, oral history, visitor-map and walk content, marker text and community outreach to the City, the CRA, museums, churches and schools, under a written agreement.",
    button: "Request a proposal",
    subject: "A project with Root & Simmer",
    emailBody: "Hello Kimberly,\n\nWe would like to talk about a project with Root & Simmer.\n\nOrganization or department:\nWhat the project is about:\nContact name:\nBest way to reach us:",
  },
  {
    id: "sponsors",
    title: "Sponsors",
    body: "Businesses and organizations can sponsor a stop on the self-guided walk, a newsletter issue or the Lincolnville Locator Map. Sponsors are thanked by name on what they support. Ask us for the details.",
    button: "Ask about sponsoring",
    subject: "Sponsoring Lincolnville’s history",
    emailBody: "Hello Kimberly,\n\nWe would like to learn about sponsoring with Root & Simmer.\n\nBusiness or organization:\nWhat we would like to sponsor (walk stop, newsletter, Locator Map, not sure):\nContact name:\nBest way to reach us:",
  },
];

export const thankYou = {
  title: "Thank you for keeping Lincolnville’s story alive.",
  body: [
    "Your gift helps Root & Simmer Hospitality Co. bring Lincolnville’s homes, families and history back into view: digitizing records, adding new narratives, and keeping the stories of the people who built this neighborhood where everyone can find them.",
    "From all of us, and from the generations whose names you’re helping keep: thank you.",
  ],
  name: "Kimberly Joyce",
  role: "Founder & Director of Community Partnerships",
};
