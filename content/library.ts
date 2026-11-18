/**
 * Root & Simmer — Member Library (/library), the Library tab in the top menu.
 *
 * HOW TO ADD A DOCUMENT
 * 1. Free documents: put the PDF in public/documents/cra/ with a short name in lowercase-with-dashes,
 *    then add an entry with access: "open" and file: "/documents/cra/<name>.pdf".
 * 2. Members-only documents: list them here with access: "members" (no file). Visitors see the
 *    title with a lock; clicking it takes them to the membership section.
 *    The files themselves are NOT put in public/ (anyone can open what is in there). They are kept
 *    on Kimberly's laptop in Documents\Root & Simmer Member Library and sent to members directly.
 * 3. To change the "Latest update" at the top, edit `latestUpdate`.
 *
 * Same rules as content/site.ts: keep the quotes and commas in place.
 */

export type LibraryDoc = {
  title: string;
  /** Who made it, and when. */
  source: string;
  /** One or two plain sentences: what it is and why it helps. */
  about?: string;
  access: "open" | "members";
  /** File in public/ (only for "open" documents). */
  file?: string;
  /** Shown next to the link so people on phones know what to expect. */
  size?: string;
};

export type Shelf = {
  id: string;
  title: string;
  /** The question this shelf answers. */
  question: string;
  /** "members" shelves get a short note and a join link under the list. */
  kind?: "free" | "members";
  docs: LibraryDoc[];
};

export const libraryHero = {
  label: "Library",
  title: "Lincolnville’s records, in one place.",
  lede: "The plans, budgets, meeting records and City interviews behind the Lincolnville Community Redevelopment Agency (CRA), sorted by the question each one answers. Everything with an “Open document” button is free to read. The rest opens with the Lincolnville Connection.",
  freeGroup: "Free to read",
  membersGroup: "Members’ library",
};

export const latestUpdate = {
  label: "Latest update",
  title: "October 5, 2026 CRA Meeting Guide",
  date: "Steering Committee meeting, Monday, October 5, 2026, 5:00 PM, Alcazar Room, City Hall",
  about:
    "A two-page guide to the meeting: what the CRA is, what was on the agenda (the 2026-2027 Lincolnville CRA budget, the Vickers and Hayling park update, and public comment), how to listen to a budget, and questions to carry with you.",
  file: "/documents/cra/october-5-2026-cra-meeting-guide.pdf",
  size: "PDF, 6 MB",
};

export const shelves: Shelf[] = [
  {
    id: "start-here",
    title: "Start here",
    question: "What is the CRA, and what does it mean for Lincolnville?",
    kind: "free",
    docs: [
      {
        title: "Lincolnville CRA Meeting Booklet",
        source: "Root & Simmer Hospitality Co., October 2026",
        about:
          "The plain-words narrative of the redevelopment plan: what the CRA was created to do, its three goals of People, History and Place, what it funds, and what to ask at a meeting.",
        access: "open",
        file: "/documents/cra/lincolnville-cra-meeting-booklet-october-2026.pdf",
        size: "PDF, 6 MB",
      },
      {
        title: "Lincolnville CRA Meeting Guide, expanded edition",
        source: "Root & Simmer Hospitality Co., for the October 5, 2026 meeting",
        about:
          "What a CRA is, the timeline from 2013 to the plan’s end on December 31, 2033, what was on the October 5 agenda, the bigger picture, and how to listen for where each project stands.",
        access: "open",
        file: "/documents/cra/lincolnville-cra-meeting-guide-expanded-october-2026.pdf",
        size: "PDF, 6 MB",
      },
      {
        title: "Lincolnville Connection Member Resource Bundle",
        source: "Root & Simmer Hospitality Co., November 2026",
        about:
          "Plain-words narratives with the official documents behind them: understanding the CRA, protecting a historic home from demolition, seeking historic designation and tax relief, what residents asked the City for, discovering Lincolnville, and taking part.",
        access: "open",
        file: "/documents/cra/lincolnville-connection-member-resource-bundle.pdf",
        size: "PDF, 66 pages, 17 MB",
      },
    ],
  },
  {
    id: "the-plan",
    title: "The plan",
    question: "What was the CRA created to do?",
    kind: "free",
    docs: [
      {
        title: "Lincolnville Redevelopment Plan",
        source: "City of St. Augustine, adopted April 8, 2013 (Resolution 2013-14)",
        about:
          "The founding plan, written after a community charrette. It sets out the projects and programs the CRA may fund, with cost estimates and tax increment projections.",
        access: "open",
        file: "/documents/cra/lincolnville-redevelopment-plan-2013.pdf",
        size: "PDF, 7 MB",
      },
      {
        title: "Lincolnville Redevelopment Plan Amendment",
        source: "City of St. Augustine, June 20, 2017",
        about:
          "The amended plan that organizes the work around three goals: preserve African American heritage and retain long-term residents, preserve historic character, and conduct neighborhood improvements. Includes the Fix-It-Up grant basics and the community land trust idea.",
        access: "open",
        file: "/documents/cra/lincolnville-redevelopment-plan-amendment-2017.pdf",
        size: "PDF, 4 MB",
      },
    ],
  },
  {
    id: "budgets",
    title: "The budgets, free to read",
    question: "Where is the money planned to go?",
    kind: "free",
    docs: [
      {
        title: "Lincolnville CRA adopted budget, Fiscal Year 2026-2027, line by line",
        source: "City of St. Augustine, October 5, 2026 Steering Committee agenda packet",
        about: "The full budget table the CRA adopted: $8,086,626, every project line, with the April 6, 2026 meeting minutes. The budget table is on pages 9-10.",
        access: "open",
        file: "/documents/cra/lincolnville-cra-agenda-packet-2026-10-05-adopted-budget.pdf",
        size: "PDF, 10 pages",
      },
      {
        title: "Lincolnville CRA Budget Resolution, Fiscal Year 2026-2027",
        source: "City of St. Augustine, adopted September 9, 2026",
        about: "The official resolution adopting this year’s Lincolnville CRA budget.",
        access: "open",
        file: "/documents/cra/lincolnville-cra-budget-resolution-fy2026-27.pdf",
        size: "PDF, 3 MB",
      },
      {
        title: "Lincolnville CRA Budget, Fiscal Year 2025-2026",
        source: "Lincolnville Community Redevelopment Agency (CRA)",
        about:
          "The line-by-line Lincolnville CRA budget: what comes in, and what is set aside for residents, historic institutions, parks and streets.",
        access: "open",
        file: "/documents/cra/lincolnville-cra-budget-fy2025-26.pdf",
        size: "PDF, 2 pages",
      },
      {
        title: "City of St. Augustine Annual Budget, Fiscal Year 2026",
        source: "City of St. Augustine",
        about:
          "The City’s full annual budget book. The Lincolnville CRA has its own page in it, alongside the Historic Area and West City CRAs.",
        access: "open",
        file: "/documents/cra/city-of-st-augustine-annual-budget-fy2026.pdf",
        size: "PDF, 10 MB",
      },
      {
        title: "2019 City Budget Summary: Lincolnville Highlights",
        source: "Root & Simmer Hospitality Co., November 16, 2026",
        about:
          "A short summary of what the City’s 2019 budget book said about Lincolnville: the CRA budget and its three goals, streets and drainage, and historic preservation.",
        access: "open",
        file: "/documents/cra/2019-city-budget-summary-lincolnville-highlights.pdf",
        size: "PDF, 3 pages",
      },
      {
        title: "City of St. Augustine Budget Book, Fiscal Year 2019",
        source: "City of St. Augustine",
        about: "The full 2019 budget book that the summary above is drawn from.",
        access: "open",
        file: "/documents/cra/city-of-st-augustine-budget-book-fy2019.pdf",
        size: "PDF, 7 MB",
      },
    ],
  },
  {
    id: "projects",
    title: "Projects and landmarks",
    question: "What is being built, repaired or honored?",
    kind: "free",
    docs: [
      {
        title: "Lincolnville Pedestrian Connectivity Study",
        source: "Lincolnville Community Redevelopment Area, July 10, 2020",
        about: "The study of sidewalks and walking routes through Lincolnville, building on the earlier Lincolnville streetscape work.",
        access: "open",
        file: "/documents/cra/lincolnville-pedestrian-connectivity-study-2020.pdf",
        size: "PDF, 25 MB",
      },
      {
        title: "Greater St. Mary’s Church Rehabilitation: Request for Bids #24043",
        source: "City of St. Augustine, 2024",
        about: "The City’s call for contractors to restore Greater St. Mary’s Missionary Baptist Church: soffit, exterior staircase, balcony and structure, twenty windows and exterior paint.",
        access: "open",
        file: "/documents/cra/greater-st-marys-rehabilitation-bid-notice-2024.pdf",
        size: "PDF, 1 page",
      },
      { title: "Carrie Johnson Way street dedication program", source: "Summary and the original program, February 20, 2021", access: "members" },
    ],
  },
  {
    id: "packets",
    title: "Home protection packets",
    question: "How do I protect a home from demolition, get it recognized as historic, or reach the owner of an abandoned one?",
    kind: "members",
    docs: [
      { title: "Packet 1: Protecting Your Home from Demolition", source: "Root & Simmer Hospitality Co., with the City’s records and forms, 73 pages", access: "members" },
      { title: "Packet 2: Getting Your Home Recognized as Historic", source: "Root & Simmer Hospitality Co., with the official records, 114 pages", access: "members" },
      { title: "Packet 3: Abandoned and Vacant Homes: Reaching the Owners", source: "Root & Simmer Hospitality Co., with the redevelopment plan pages, 14 pages", access: "members" },
    ],
  },
  {
    id: "meetings",
    title: "Meetings and minutes",
    question: "What was said and decided at each Steering Committee meeting?",
    kind: "members",
    docs: [
      { title: "October 5, 2026: Searchable transcript of the agenda packet", source: "Lincolnville CRA Steering Committee (the packet itself is free under The budgets)", access: "members" },
      { title: "July 14, 2026: Meeting packet with the preliminary budget", source: "Lincolnville CRA Steering Committee (meeting cancelled)", access: "members" },
      { title: "April 6, 2026: Meeting packet with the 2025 Annual Report, and draft minutes", source: "Lincolnville CRA Steering Committee, with a searchable transcript", access: "members" },
      { title: "January 5, 2026: Meeting packet and minutes", source: "Lincolnville CRA Steering Committee, with a searchable transcript", access: "members" },
      { title: "October 6, 2025: Agenda packet with the MLK easement memo, and minutes", source: "Lincolnville CRA Steering Committee", access: "members" },
      { title: "July 7, 2025: Minutes", source: "Lincolnville CRA Steering Committee", access: "members" },
      { title: "April 7, 2025: Minutes", source: "Lincolnville CRA Steering Committee", access: "members" },
      { title: "January 29, 2024: Minutes", source: "Lincolnville CRA Steering Committee", access: "members" },
    ],
  },
  {
    id: "money-researched",
    title: "The money, researched",
    question: "How do the budgets compare, year to year and against the plan?",
    kind: "members",
    docs: [
      { title: "Budget Comparison: July 14 Preliminary and October 5 Adopted", source: "Root & Simmer Hospitality Co.", access: "members" },
      { title: "Lincolnville CRA Budget Cross-Reference, FY2025-26", source: "Root & Simmer Hospitality Co.", access: "members" },
      { title: "Financial Tables FY2022-27 and the 2013 Tax Increment Projection", source: "Root & Simmer Hospitality Co.", access: "members" },
    ],
  },
  {
    id: "homes-and-history",
    title: "Protecting homes and history",
    question: "How are Lincolnville’s homes protected, and what did residents ask for?",
    kind: "members",
    docs: [
      { title: "Why Lincolnville Homes Are Lost: Risks and Protections", source: "Root & Simmer Hospitality Co.", access: "members" },
      { title: "Partial demolition letter to owners of historic buildings", source: "Summary and the City’s original letter", access: "members" },
      { title: "Historic Preservation Master Plan public forum: strengths, weaknesses, opportunities and threats", source: "Summary and the original, May 19, 2016", access: "members" },
      { title: "Historic Preservation Master Plan community workshop comments", source: "Summary and the original, 2016", access: "members" },
      { title: "Historic Preservation Officer interview on guidelines and landmarks", source: "Summary and transcript", access: "members" },
      { title: "Keeping Your Lincolnville Home: a homeowner’s guide to preservation and repairs", source: "Root & Simmer Hospitality Co., October 30, 2026", access: "members" },
      { title: "Lincolnville Demolitions at a Glance, 2019-2025", source: "Root & Simmer Hospitality Co., from the City’s records", access: "members" },
      { title: "Lincolnville Homes Already Demolished, two lists", source: "Root & Simmer Hospitality Co., from the City’s records", access: "members" },
      { title: "City demolition permits, 2019 to 2025, and the permits still open", source: "City of St. Augustine list, with Root & Simmer’s Lincolnville summary", access: "members" },
      { title: "Demolished Structures Survey, 2019-2021", source: "St. Augustine Flood Mitigation Survey Report, Appendix E, with a printable copy", access: "members" },
      { title: "National Register of Historic Places nomination: Lincolnville Historic District", source: "National Park Service registration form", access: "members" },
      { title: "Example Florida Master Site File form with photographs, c. 1979", source: "Florida Master Site File", access: "members" },
    ],
  },
  {
    id: "voices",
    title: "Voices from City Hall",
    question: "What have City staff said about Lincolnville, in their own words?",
    kind: "members",
    docs: [
      { title: "CRA interview on Redevelopment 25 and neighborhood grants", source: "Summary and transcript", access: "members" },
      { title: "CRA interview on the West City plan, Eddie Vickers courts and Hayling Park", source: "Summary and transcript", access: "members" },
      { title: "CRA interview on the Elks Lodge grant and the Historic Area plan", source: "Summary and transcript", access: "members" },
      { title: "Neighborhood Services and CRA interview", source: "Summary and transcript", access: "members" },
      { title: "City Clerk interview on Faces of the Places", source: "Summary and transcript", access: "members" },
      { title: "City Clerk interview on women who shaped the city", source: "Summary and transcript", access: "members" },
      { title: "City Archaeologist interview on the Yallaha Plantation dig", source: "Summary and transcript", access: "members" },
    ],
  },
];

/** Shown on each locked document. */
export const membersLock = {
  badge: "Members only",
  href: "/digital-records#dr-membership",
};

export const libraryMembership = {
  title: "Open the members’ library",
  body: "The Lincolnville Connection comes with the Home Story Package. Members receive every document in the library, new ones as they are added, and updates on CRA meetings and votes.",
  button: "See the Lincolnville Connection",
  href: "/digital-records#dr-membership",
};

export const libraryNote =
  "City plans and budgets are public records; anyone may request them from the City of St. Augustine. Root & Simmer Hospitality Co. gathers them here as independent community education. This library is not an official City of St. Augustine or CRA publication, and it does not speak for either.";
