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

/**
 * THIS MONTH: the short article at the top of the Newsletter page. To refresh it each month,
 * change `month`, `title` and `body`, swap the photos in `gallery` (files go in public/photos/newsletter/),
 * and add dated items to `updates` (newest first). Leave `updates` empty ([]) if there is nothing to add.
 * Keep private contact details (for example City staff cards) out of this section.
 */
export type GalleryPhoto = { src: string; alt: string; title: string; caption: string };
export type NewsUpdate = { date: string; title: string; body: string; link?: { href: string; label: string } };

export const thisMonth = {
  label: "This month",
  month: "November 2026",
  title: "Lincolnville: History, Culture, and Community",
  body: [
    "Lincolnville’s story reaches from the six African American leaseholders who helped establish the community in 1866—Matilda Pappy, Aaron Dupont, Harriet Weidman, Miles Hancock, Tom Solana, and Peter Sanks—to the neighborhood’s living culture today. Gigi Onyinye Best’s From Liberation Lot to Lincolnville explores this history and the Gullah connections that shaped St. Augustine.",
    "Explore local history at the Best Richardson African Diaspora Literature & Culture Museum and the ACCORD Civil Rights Museum and Freedom Trail. The Corner Market, established in 1920, is preparing for a new chapter, with a café and community gathering place announced as part of its plans. Its mural project highlights African American history in Lincolnville.",
    "This month, we’re sharing the people, places, museums, businesses, and events that keep Lincolnville’s heritage visible and its community connected. Check back for updates and ways to take part.",
  ],
  galleryTitle: "From around the neighborhood",
  galleryNote: "Photos of materials shared by local organizations and businesses. Event dates, hours and openings change: confirm them with each place before you go. Including them does not imply City or Community Redevelopment Agency (CRA) endorsement.",
  gallery: [
    { src: "/photos/newsletter/liberation-lot-book.jpg", alt: "Cover of the book From Liberation Lot to Lincolnville by Gigi Onyinye Best", title: "From Liberation Lot to Lincolnville", caption: "Gigi Onyinye Best’s book on the six freedmen and women leaseholders and the Gullah heritage that helped shape Lincolnville." },
    { src: "/photos/newsletter/leaseholders-bookmark.jpg", alt: "Bookmark listing the 1866 Lincolnville leaseholders, with historic views of Maria Sanchez Creek", title: "The six 1866 leaseholders", caption: "A bookmark from the BRADLC Museum and Books naming the six leaseholders, with a view of Maria Sanchez Creek around 1885." },
    { src: "/photos/newsletter/corner-market-flyer.jpg", alt: "Corner Market Lincolnville flyer: Historic Corner Market, established 1920, coming soon", title: "The Corner Market’s next chapter", caption: "The historic Corner Market at 97 M.L. King Avenue, established 1920, announces a café and reopening. Check with the market for current details." },
    { src: "/photos/newsletter/first-friday-art-walk.jpg", alt: "Flyer for the First Friday Art Walk at the BRADLC Museum, showcasing Gullah, folk, multicultural art and jazz", title: "First Friday Art Walk", caption: "Gullah, folk and multicultural art and jazz at the Best Richardson museum, 83 Washington Street. The flyer lists 4 to 7 p.m.; confirm the date with the museum." },
    { src: "/photos/newsletter/corner-market-mural-brochure.jpg", alt: "Brochure for the Corner Market Mural Project on the African American history of Lincolnville", title: "The Corner Market Mural Project", caption: "A mural project on the African American history of Lincolnville at 97 M.L. King Avenue." },
    { src: "/photos/newsletter/mural-history-panel-1.jpg", alt: "Brochure panel: Lincolnville history depicted on the mural, with historic photographs", title: "History on the mural, panel one", caption: "The brochure’s background on the people, places and businesses the mural remembers." },
    { src: "/photos/newsletter/mural-history-panel-2.jpg", alt: "Brochure panel continuing the history depicted on the Corner Market mural", title: "History on the mural, panel two", caption: "The story continues through family life, community institutions and local history." },
    { src: "/photos/newsletter/accord-brochure.jpg", alt: "ACCORD Civil Rights Museum and Freedom Trail brochure", title: "ACCORD Civil Rights Museum and Freedom Trail", caption: "The museum at 79 Bridge Street and the Freedom Trail, a self-guided audio walk past markers of St. Augustine’s 1960s Civil Rights Movement." },
    { src: "/photos/newsletter/accord-brochure-inside.jpg", alt: "Inside of the ACCORD brochure describing the museum, the restored cabin and the Freedom Trail", title: "ACCORD’s museum, cabin and trail", caption: "ACCORD’s museum, the restored cabin at 94 South Street, and the Freedom Trail. Check ACCORD’s own site for current hours." },
  ] as GalleryPhoto[],
  updatesTitle: "Updates and events",
  updatesEmpty: "New dates and ways to take part will be posted here. Check back soon.",
  updates: [] as NewsUpdate[],
};
