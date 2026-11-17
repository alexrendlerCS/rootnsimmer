/**
 * Root & Simmer — Newsletter tab (/newsletter), with "Support Locally".
 *
 * Same rules as content/site.ts: edit the text between the quotes and save.
 *
 * SUPPORT LOCALLY: to add a business or organization, copy one entry in `supportLocally.places`,
 * paste it below the others and change the words. Use only facts from the place itself (its own
 * website or what its owner tells Kimberly). Hours change, so point people to the place's own site.
 */

export const newsletterHero = {
  label: "Newsletter",
  title: "News from Lincolnville, and the neighbors who keep it going.",
  lede: "Plain-language updates on the Lincolnville Community Redevelopment Agency (CRA), historic homes and the places that make Lincolnville home, from Root & Simmer Hospitality Co.",
};

/** The newest issue. To post a new one: put the PDF in public/documents/newsletter/ and change these lines. */
export const latestIssue = {
  label: "Latest issue",
  title: "Issue 1: Support Locally",
  date: "November 2026",
  about: "Meet ACCORD Civil Rights Museum and Freedom Trail, BRADLC Museum & Books and Royal Beets, plus what is new on our website and how to take part.",
  file: "/documents/newsletter/root-and-simmer-newsletter-issue-1-november-2026.pdf",
  size: "PDF, 2 pages",
};

export const newsletterContents = {
  title: "What each issue brings",
  items: [
    { name: "CRA meetings and votes", body: "When the Lincolnville CRA Steering Committee meets, what is on the agenda, and how to comment in person or in writing." },
    { name: "Projects and budgets", body: "Where CRA projects, programs and budgets stand: planned, funded, designed, contracted, underway or completed." },
    { name: "Historic homes", body: "Historic district news, demolition review, and what owners can do to protect a home’s history." },
    { name: "Support Locally", body: "Lincolnville museums, organizations and businesses worth a visit, and the people behind them." },
  ],
};

export type LocalPlace = {
  name: string;
  /** What kind of place it is, in a few words. */
  kind: string;
  /** One or two sentences from the place's own description. */
  about: string;
  /** Street address, if the place lists one. */
  where?: string;
  /** How to visit, if the place lists it. */
  visit?: string;
  website: string;
  websiteLabel: string;
};

export const supportLocally = {
  title: "Support Locally",
  intro: "The first places featured in our newsletter. Each one carries part of Lincolnville’s story forward. Visit them, buy from them, and tell them Root & Simmer sent you.",
  places: [
    {
      name: "ACCORD Civil Rights Museum and Freedom Trail",
      kind: "Civil rights museum and walking trail",
      about:
        "Remembering, recognizing and honoring all those who risked their lives to attain civil rights for all. ACCORD runs the museum and a self-guided Freedom Trail of 31 civil rights markers across St. Augustine.",
      where: "79 Bridge Street, St. Augustine",
      visit: "Open Tuesday to Friday, with Mondays and Saturdays by appointment. Call or text (904) 347-1382.",
      website: "https://www.accordfreedomtrail.org/",
      websiteLabel: "accordfreedomtrail.org",
    },
    {
      name: "BRADLC Museum & Books",
      kind: "Museum, bookstore and gift shop",
      about:
        "The Best Richardson African Diaspora Literature & Culture Museum shares educational artifacts and information on African Diaspora literary and cultural history with youth and adults.",
      where: "83 Washington Street, in the historic Lincolnville community",
      visit: "Tours by reservation, booked at least an hour ahead.",
      website: "https://www.bradlcmuseum.com/",
      websiteLabel: "bradlcmuseum.com",
    },
    {
      name: "Royal Beets",
      kind: "Local food maker",
      about: "Beet relishes, beet honey and beet cookies, made in St. Augustine and connected with the Corner Market of Lincolnville.",
      website: "https://www.royalbeets.com/",
      websiteLabel: "royalbeets.com",
    },
  ] satisfies LocalPlace[],
  note: "Featured places are independent. Root & Simmer Hospitality Co. is not affiliated with or endorsed by the City of St. Augustine or its CRA.",
};

export const newsletterSignup = {
  title: "Get the newsletter",
  body: "Send us your email address and we will add you to the list.",
  button: "Sign me up",
  subject: "Newsletter sign-up",
  emailBody: "Hello Kimberly,\n\nPlease add me to the Root & Simmer newsletter.\n\nMy name:\nMy email:\nMy connection to Lincolnville (optional):",
};

export const newsletterAdvertise = {
  title: "Feature your Lincolnville business",
  body: "Support Locally features Lincolnville museums, organizations and businesses. To be featured in the newsletter, tell us about your place.",
  button: "Ask about being featured",
  subject: "Support Locally: feature my business",
  emailBody: "Hello Kimberly,\n\nI would like my business or organization featured in Support Locally.\n\nName:\nWhat we do:\nAddress:\nWebsite:\nBest way to reach me:",
};
