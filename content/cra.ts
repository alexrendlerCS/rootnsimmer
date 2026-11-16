/**
 * Root & Simmer — CRA – Lincolnville page content (/cra-lincolnville).
 *
 * Same rules as content/site.ts: edit the text between the quotes and save.
 * Keep the quotes and commas in place.
 */

export const craDisclaimer =
  "Root & Simmer Hospitality Co. is independent. It is not affiliated with or endorsed by the City of St. Augustine or its Community Redevelopment Agency (CRA).";

/** Short teaser shown on the home page, linking to the full CRA page. */
export const craTeaser = {
  label: "CRA – Lincolnville",
  title: "The Lincolnville Community Redevelopment Agency (CRA)",
  body: "Since 2013, the City’s Lincolnville Community Redevelopment Agency (CRA) has reinvested in the neighborhood under a plan shaped by residents. Its 2017 amendment rests on three goals that sit close to our own work.",
  link: "Open the CRA – Lincolnville page",
  goals: [
    "Preserve African American heritage and retain long-term residents",
    "Preserve Lincolnville’s historic character",
    "Conduct neighborhood improvements",
  ],
  source:
    "Source: Lincolnville Redevelopment Plan Amendment, June 20, 2017. Root & Simmer is independent and not affiliated with or endorsed by the City or the CRA.",
};

export const craHero = {
  label: "CRA – Lincolnville",
  title: "The Lincolnville Community Redevelopment Agency (CRA)",
  lede: "Since 2013, the City of St. Augustine has reinvested in Lincolnville through its Community Redevelopment Agency (CRA). Money raised from growth in property values inside the district stays in the district, funding preservation, home repairs and neighborhood improvements under a plan shaped by residents.",
  facts: [
    { value: "April 8, 2013", label: "CRA established" },
    { value: "June 20, 2017", label: "Plan amended" },
    { value: "541.4 acres", label: "District area" },
    { value: "April 2033", label: "Current sunset" },
  ],
  subnav: [
    { href: "#cra-why", label: "Why it began" },
    { href: "#cra-history", label: "History in the Plan" },
    { href: "#cra-voices", label: "What residents said" },
    { href: "#cra-plan", label: "The 2017 Plan" },
    { href: "#cra-now", label: "Work today" },
    { href: "#cra-members", label: "Member access" },
    { href: "#cra-rs", label: "Our role" },
  ],
};

export const craWhy = {
  label: "2012 – 2013",
  title: "Why the CRA began",
  body: [
    "In 2012 the City commissioned a Finding of Necessity for Lincolnville. It found six conditions under Florida law that qualify an area for redevelopment, and the City Commission established the Lincolnville Community Redevelopment Area in 2013.",
    "Before the first plan was adopted, residents met for a three-day community charrette in January 2013 to talk about what Lincolnville should become.",
  ],
  conditionsTitle: "The six conditions found in 2012",
  conditions: [
    "Lot sizes and layouts that no longer fit their use",
    "Inadequate street layout and missing sidewalks",
    "Assessed values that failed to rise",
    "Unsanitary or unsafe conditions, including neglected vacant lots",
    "Deteriorating sites and buildings: 12% of parcels with structures were deteriorated or dilapidated",
    "More code violations than the rest of the city",
  ],
};

export const craHistory = {
  label: "Lincolnville’s history, as the Plan tells it",
  title: "A neighborhood the Plan sets out to protect.",
  timeline: [
    { when: "1700 – 1763", what: "During the First Spanish Period, the area held the Indian villages of Palica and Pocotalaca and several Spanish land grants." },
    { when: "British Period", what: "Fortifications rose along the San Sebastian River, with ferry service reached by Bridge Street and Kings Ferry Way." },
    { when: "After the Civil War", what: "Formerly enslaved people settled the area and called it “Africa.”" },
    { when: "1878", what: "Streets were laid out and the neighborhood was renamed Lincolnville." },
    { when: "By 1930", what: "Building, which intensified in the 1920s, was virtually complete. Lincolnville was St. Augustine’s principal African American community." },
    { when: "1964", what: "Lincolnville’s churches and businesses hosted the meetings and marches that drew national attention, including Dr. Martin Luther King Jr.’s visit, before passage of the Civil Rights Act." },
    { when: "1991", what: "Lincolnville was listed as a Historic District on the National Register of Historic Places, with 548 contributing buildings." },
  ],
  institutionsTitle: "Historic institutions named in the Plan",
  institutions: [
    { name: "St. Benedict’s Catholic school, Sanford Street", built: "1898" },
    { name: "St. Cyprian’s Episcopal Church, Martin Luther King Avenue", built: "1899" },
    { name: "Benevolent Hall, 86 St. Francis Street, once the main community center", built: "c. 1899 – 1904" },
    { name: "Odd Fellows Hall, 92 Washington Street", built: "1909" },
    { name: "Classroom of the Presbyterian Industrial School, 112 Moore Street", built: "c. 1910" },
    { name: "St. Benedict the Moor Catholic Church, Martin Luther King Avenue", built: "1910 – 1911" },
    { name: "Trinity Methodist, Bridge Street", built: "1913" },
  ],
  institutionsNote:
    "Benevolent societies’ halls were meeting places for many Black civic groups and often housed theaters, restaurants and businesses. The Plan quotes these dates from the 1991 National Register nomination.",
};

export const craVoices = {
  label: "March 2017",
  title: "What residents told the CRA.",
  intro:
    "Sixty residents and stakeholders took part in two workshops, three focus groups and a survey that shaped the 2017 Plan amendment.",
  quotes: [
    { text: "Lincolnville’s greatest strength is its story, followed by its parks, its friendliness and its historic homes.", source: "Strengths workshop, March 6, 2017" },
    { text: "The biggest threats named were the demolition of historic properties and the loss of ethnic diversity.", source: "Strengths workshop, March 6, 2017" },
    { text: "Keeping building design true to Lincolnville’s historic nature rated 9.0 out of 10. Stabilizing or increasing African American households rated 8.6.", source: "Resident survey, March 2017" },
    { text: "Every structure that goes away takes part of Lincolnville’s history with it. Preserve the structures.", source: "Historic preservation focus group, March 2017 (paraphrased)" },
  ],
};

export const craPlan = {
  label: "The Lincolnville Redevelopment Plan Amendment, June 20, 2017",
  title: "Three goals, built from what residents asked for.",
  intro: "The amendment reinforced the 2013 plan around three goals. These are its action steps.",
  goals: [
    {
      title: "Preserve African American heritage and retain long-term residents",
      steps: [
        "Reach residents through churches and neighborhood associations to share programs for homeowners",
        "Help qualified homeowners with legal assistance to clear title",
        "Combine emergency and Fix-It-Up repairs into one Fix-It-Up grant",
        "Work toward a community land trust",
      ],
    },
    {
      title: "Preserve Lincolnville’s historic character",
      steps: [
        "Create a rehabilitation program, including help for historic buildings owned by institutions",
        "Provide parcel and site cleanup grants",
        "**Promote the historical significance of Lincolnville**: a historic brochure and web presence, education for current and future owners, and plaques for contributing buildings",
        "Develop an architectural design overlay district",
      ],
    },
    {
      title: "Conduct neighborhood improvements",
      steps: [
        "Streetscapes on Martin Luther King Avenue, Riberia Street and South Street",
        "Sidewalks, mobility and stormwater improvements with the City",
        "Improve and expand Twine Park, a pocket park at 66 Weeden Street, and the Dr. Robert B. Hayling Freedom Park",
        "Keep Martin Luther King Avenue primarily institutional and residential",
      ],
    },
  ],
  note: "The Plan also asks that exterior work on contributing buildings funded by its programs follow the Secretary of the Interior’s Standards for Rehabilitation, using like-for-like materials so each building keeps its character.",
};

export const craNow = {
  label: "From plan to programs",
  title: "Where the work stands",
  timeline: [
    { when: "2017", what: "The combined Fix-It-Up grant offered up to $20,000 per owner-occupied home, with priority for shotgun-style and historic contributing homes." },
    { when: "2018 – 2024", what: "Rehabilitation of historic institutions, home repairs, parks and the MLK Avenue corridor take shape." },
    { when: "2025", what: "The Fountain of Youth Elks Lodge rehabilitation is completed at about $1.4 million. Fix-It-Up awards reach up to $100,000 for qualifying residents." },
    { when: "January 2026", what: "The Steering Committee unanimously recommends projects at the First Baptist Church parsonage and Bethel Baptist Church." },
    { when: "June 2026", what: "Construction begins on Hayling Plaza." },
  ],
  underwayTitle: "Under way, as of August 2026",
  underway: [
    { title: "Hayling Plaza.", body: "A place for reflection, education and gathering around a commemorative statue of Dr. Robert B. Hayling; completion was anticipated in fall 2026." },
    { title: "Historic institutions.", body: "Rehabilitation at Greater St. Mary’s and at Trinity Independent, including restoration of its bell tower." },
    { title: "Long-term residents.", body: "Fix-It-Up repairs so qualifying residents can stay in their homes." },
    { title: "Parks and streets.", body: "Phased improvements at Eddie Vickers Park and the Hayling Freedom Park, Twine Park design and construction, sidewalks, and the MLK Avenue Streetscape." },
  ],
  note: "The Steering Committee meets in public. Agendas and minutes are posted in the City’s Agenda Center. For current programs and eligibility, contact the CRA directly.",
};

export const craMembers = {
  label: "Lincolnville Love Membership",
  title: "Full CRA access for members.",
  intro:
    "This page gives everyone the CRA’s story. Members get the detail behind it: every meeting summarized, the budgets explained, each project followed, and answers to their own questions.",
  features: [
    { title: "Meeting minutes and summaries", body: "A plain-language summary of every Lincolnville CRA Steering Committee meeting: what was presented, what was recommended and what comes next, with the official minutes and agenda packet attached." },
    { title: "Budgets and reports, explained", body: "Each year’s adopted budget and annual report broken down by the Plan’s three goals: heritage and long-term residents, historic character, and neighborhood improvements." },
    { title: "Project tracker", body: "Hayling Plaza, the Vickers and Hayling park work, the MLK Avenue Streetscape, Twine Park, Fix-It-Up and the historic institution projects, followed from first mention to completion, with dates and sources." },
    { title: "The Plan, line by line", body: "Every commitment in the 2013 plan and 2017 amendment, marked from the public record as completed, active, changed, not started or still to verify." },
  ],
  ask: {
    label: "Ask for specific information",
    title: "Members can request what they need.",
    body: "Looking for what the CRA decided about a project, when an item came before the Steering Committee, or what the records say about a program? Send the question. We search the public record and reply with what we find and where it comes from. Larger requests are scoped with you first.",
    button: "Request CRA information",
    emailSubject: "CRA information request",
    emailBody:
      "Hello Kimberly,\n\nI’m a Lincolnville Love member (or would like to join) and I’m looking for CRA information about:\n\nProject, program or meeting:\n\nTime period:\n\nWhat I already know:\n\nBest way to reach me:",
  },
  sample: {
    label: "Sample member summary",
    title: "Steering Committee, January 5, 2026",
    points: [
      "Two Institutional Rehabilitation applications, the First Baptist Church parsonage and Bethel Baptist Church, received unanimous recommendations. Staff said both would go into the FY2026–27 budget process.",
      "Staff explained that the CRA manages these projects itself, working with architects, engineers and contractors through City procurement.",
      "The MLK Avenue Streetscape’s utility undergrounding needs easements from property owners. The City Attorney said owners should not be pressured or made to feel their neighbors are against them for declining.",
    ],
    source: "Source: Lincolnville CRA Steering Committee meeting, January 5, 2026.",
  },
  note: "Meeting minutes and agendas are public records. Anyone can find them in the City’s Agenda Center or request them from the City. Membership pays for the work of following, organizing and explaining them. Root & Simmer is independent and not affiliated with or endorsed by the City of St. Augustine or its Community Redevelopment Agency (CRA).",
  membershipLink: "See everything Lincolnville Love Membership includes",
};

export const craRole = {
  label: "Where Root & Simmer fits",
  title: "The Plan asks that Lincolnville’s history be known. That is our work.",
  body: "Goal 2 of the 2017 Plan calls for promoting the historical significance of Lincolnville and for educating current and future owners about the neighborhood’s history and architectural character. Root & Simmer’s home histories, family story recordings and self-guided discovery work on that same ground, independently and with each family’s permission.",
  disclaimer:
    "Root & Simmer Hospitality Co. is independent. It is not affiliated with or endorsed by the City of St. Augustine or its Community Redevelopment Agency (CRA), and it does not administer CRA programs.",
  sources:
    "Sources: Lincolnville Redevelopment Plan Amendment (Strategic Planning Group, Inc., June 20, 2017), including its summary of the 2012 Finding of Necessity and the 1991 National Register nomination; Lincolnville CRA records through August 2026, including the FY2025 annual report, the FY2026 adopted budget and Steering Committee meetings of January 5 and April 6, 2026; CRA interview, The Break Room, 2022. Summarized by Root & Simmer.",
};

/**
 * Photos on the CRA – Lincolnville page. The image files are in public/photos.
 * Credits are required by each photo's free license; keep them with the photo.
 */
export const craPhotos = {
  hero: {
    alt: "The green Lincolnville Historic District state marker, framed by sea oats and a blue sky",
    caption: "The Lincolnville Historic District marker, placed by the City and the State of Florida in 1994.",
    credit: {
      by: "w_lemay",
      source: "https://commons.wikimedia.org/wiki/File:Lincolnville_Historic_District_Historical_Marker,_Lincolnville,_St._Augustine,_FL.jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    },
  },
  history: {
    alt: "St. Benedict the Moor Catholic Church, a red brick church with a curved front gable, arched stained-glass windows and a white block wall",
    caption: "St. Benedict the Moor Catholic Church on Martin Luther King Avenue, built 1910 – 1911.",
    credit: {
      by: "Ebyabe",
      source: "https://commons.wikimedia.org/wiki/File:St_Aug_Lincolnville_St_Benedict_the_Moor_church01.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    },
  },
  now: {
    alt: "Trinity Methodist Church, now Trinity Independent Church, a yellow brick church whose bell tower is braced with steel supports",
    caption: "Trinity Methodist Church (now Trinity Independent) on Bridge Street, built 1913. Its bell tower is among the restoration work under way.",
    credit: {
      by: "w_lemay",
      source: "https://commons.wikimedia.org/wiki/File:Trinity_Methodist_Church_(Trinity_Independent_Church),_Bridge_Street,_Lincolnville,_St._Augustine,_FL.jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    },
  },
};
