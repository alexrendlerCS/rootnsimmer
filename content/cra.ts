/**
 * Root & Simmer — "Understanding the Lincolnville CRA" guide (/cra-lincolnville and its pages).
 *
 * Same rules as content/site.ts: edit the text between the quotes and save.
 * Keep the quotes and commas in place. To make a few words bold, wrap them in **double asterisks**.
 *
 * Anything in [SQUARE BRACKETS] is a placeholder. It shows on the page in a dashed red box
 * until you replace it with the real text.
 */

/** The first mention of the CRA on every guide page, shown above the page title. */
export const craKicker = "Lincolnville Community Redevelopment Agency (CRA)";

/** Short teaser shown on the home page, linking to the guide. */
export const craTeaser = {
  label: "CRA – Lincolnville",
  title: "The Lincolnville Community Redevelopment Agency (CRA)",
  body: "Since 2013, the City’s Lincolnville Community Redevelopment Agency (CRA) has reinvested in the neighborhood under a plan shaped by residents. Its 2017 amendment rests on three goals that sit close to our own work.",
  link: "Open Understanding the Lincolnville CRA",
  goals: [
    "Preserve African American heritage and retain long-term residents",
    "Preserve Lincolnville’s historic character",
    "Conduct neighborhood improvements",
  ],
  source:
    "Source: Lincolnville Redevelopment Plan Amendment, June 20, 2017. Root & Simmer is independent and not affiliated with or endorsed by the City or the CRA.",
};

/** The pages of the guide, in order. Used for the side menu and the previous/next links. */
export const craPages = [
  { slug: "", title: "Understanding the Lincolnville CRA" },
  { slug: "institutional-landmarks", title: "Institutional Landmarks" },
  { slug: "parks-and-named-places", title: "Parks and Named Places" },
  { slug: "historic-district", title: "The Historic District and Home History" },
  { slug: "fix-it-up", title: "Fix-It-Up and Staying in Place" },
  { slug: "take-part", title: "How to Take Part" },
  { slug: "homes-not-hotels", title: "Homes, Not Hotels" },
  { slug: "home-story-package", title: "Every Home Known: The Home Story Package" },
] as const;

export type CraSlug = (typeof craPages)[number]["slug"];

export const craContact = {
  name: "Kimberly Joyce",
  role: "Founder & Director of Community Partnerships",
  phone: "760-481-4961",
  phoneHref: "tel:+17604814961",
  email: "rootnsimmer@gmail.com",
};

export const joinCta = {
  words: ["Join.", "Show up.", "Be heard.", "Vote."],
};

/* --------------------------------------------------------------------------
   1. Understanding the Lincolnville CRA
   -------------------------------------------------------------------------- */
export const craLanding = {
  intro:
    "Lincolnville has been home to generations of families, churches, lodges and businesses that carried St. Augustine’s African American story forward. Since 2013, part of the public investment in the neighborhood has come through the Lincolnville Community Redevelopment Area, overseen by the City’s Community Redevelopment Agency (CRA). This page is a plain-language welcome to how the CRA works, what it was created to do, and how neighbors and friends of Lincolnville can follow its work.",
  what: {
    title: "What is a CRA?",
    body: [
      "A Community Redevelopment Area is a district the City sets apart so that growth in local property tax value inside the district is reinvested in that same district. This growth is called tax increment financing (TIF). As the City’s CRA staff have described it, money raised within the district stays in the district and can only be spent on work written into the district’s redevelopment plan.",
      "Before a CRA can be created, a “finding of necessity” study must show conditions the State of Florida recognizes, such as vacant or deteriorating buildings, safety problems, a lack of affordable housing or poor pedestrian connections. The redevelopment plan then lays out how the district will address those findings.",
    ],
  },
  glance: {
    title: "Lincolnville’s CRA at a glance",
    facts: [
      { label: "Created", value: "February 11, 2013 (Resolution 2013-01), after public meetings that drew more than 100 people." },
      { label: "Plan amended", value: "2017." },
      { label: "Plan end date", value: "December 31, 2033." },
      { label: "One of three City CRAs", value: "Historic Area (2000), Lincolnville (2013) and West City (2024)." },
      { label: "Who decides", value: "The City Commission sits as the CRA Agency Board and has the final say. The Lincolnville CRA Steering Committee gathers public input and makes recommendations to the Agency." },
    ],
  },
  goals: {
    title: "Three goals: People, History, Place",
    intro: "The amended redevelopment plan organizes the work around three broad goals.",
    items: [
      { name: "People", body: "Preserve African American heritage and support the retention of long-term residents." },
      { name: "History", body: "Preserve Lincolnville’s historic character and promote its historical significance." },
      { name: "Place", body: "Improve neighborhood infrastructure and beautification, including streetscapes, sidewalks and infrastructure systems." },
    ],
  },
  done: {
    title: "What the CRA has done",
    items: [
      { goal: "People", slug: "fix-it-up", title: "Fix-It-Up residential repair grant", body: "Fix-It-Up is one of the CRA’s main tools for helping long-term residents stay in their homes." },
      { goal: "History", slug: "institutional-landmarks", title: "Keeping Lincolnville’s landmarks standing", body: "The CRA’s Institutional Rehabilitation Grant Program helps historic Lincolnville institutions with stabilization, rehabilitation and maintenance." },
      { goal: "History", slug: "historic-district", title: "The Lincolnville National Register Historic District", body: "Lincolnville is one of St. Augustine’s seven National Register historic districts." },
      { goal: "Place", slug: "parks-and-named-places", title: "Parks, public spaces and streets", body: "Eddie Vickers Park, Lincolnville Park and Robert B. Hayling Park, plus the MLK Avenue streetscape, a current CRA project covering street, utility and safety work." },
    ],
  },
  library: {
    title: "Read the documents yourself",
    body: "The 2013 Redevelopment Plan, the 2017 amendment, the budgets and our latest meeting guide are gathered in one place, each with a plain-words note on what it is.",
    link: "Open the Library",
  },
  /** Quotes from the City’s Steering Committee minutes. Quote them only "according to the City’s minutes". */
  minutes: {
    title: "In the City’s own words",
    intro: "What City staff and Steering Committee members said about Lincolnville’s residents, homes and parks, according to the City’s minutes.",
    quotes: [
      { text: "The 2017 plan “asked the CRA to focus on assisting Lincolnville long term residents to age in place and the Fix It Up Program is the program the CRA implemented to address that concern.”", who: "Jaime Perkins, CRA Manager", date: "January 29, 2024" },
      { text: "Challenges include “a lack of housing stock, the costs of improved and unimproved parcels in Lincolnville, and how to determine how to make these properties at an affordable rate where it made sense to spend taxpayers’ dollars.”", who: "Jaime Perkins, CRA Manager", date: "July 7, 2025" },
      { text: "Acquisition is difficult “due to the current economic state of rising costs of properties in that area”; the current budget line “was specifically for consultation services to monitor data in the Lincolnville area.”", who: "Jaime Perkins, CRA Manager", date: "April 6, 2026" },
      { text: "On the MLK Avenue streetscape, she “would not want to implement eminent domain for a beautification project, but it was possible.”", who: "Jaime Perkins, CRA Manager", date: "April 7, 2025" },
      { text: "Encouraged the board “to be gentle with residents”; the City “would not want anyone to feel coerced or that their neighbors were against them because they had not signed off on it.”", who: "Isabelle Lopez, City Attorney", date: "January 5, 2026" },
      { text: "Questioned why the kayak launch had no fishing pier; “it was the first time she heard that there would not be a fishing pier.”", who: "Madeline Wise, Steering Committee member", date: "April 6, 2026" },
      { text: "The fishing pier at Eddie Vickers Park “had always been an important component for the community” and “she did not want to drop it.”", who: "Mari Hayes, Steering Committee Vice-Chair", date: "April 6, 2026" },
    ],
    note: "The City’s minutes are summaries written by the City Clerk’s staff, not word-for-word transcripts. Source: Lincolnville CRA Steering Committee minutes, January 29, 2024 to April 6, 2026.",
  },
  follow: {
    title: "Following the work",
    body: "A budget figure is not the same as a finished project. A helpful way to follow any CRA item is to ask where it stands:",
    stages: ["Planned", "Funded", "Designed", "Contracted", "Underway", "Completed"],
    questionsIntro: "Four questions carry through every project:",
    questions: ["What was planned?", "What was funded?", "What has actually happened?", "What comes next?"],
  },
  disclaimer:
    "Root & Simmer Hospitality Co. offers this page as independent community education. It is not an official City of St. Augustine or CRA publication, and it does not speak for either.",
};

/* --------------------------------------------------------------------------
   2. Institutional Landmarks
   -------------------------------------------------------------------------- */
export const craLandmarks = {
  title: "Institutional Rehabilitation: keeping Lincolnville’s landmarks standing",
  intro:
    "The CRA’s Institutional Rehabilitation Grant Program helps historic Lincolnville institutions with stabilization, rehabilitation and maintenance. As City staff put it, the goal is to keep these buildings standing so they continue to tell the community’s culture and history.",
  landmarks: [
    {
      name: "Fountain of Youth Elks Lodge No. 684",
      where: "100 Washington Street",
      body: "The City won about $891,000 from Florida’s African American Cultural and Historical Grants program, joined by $250,000 in Lincolnville CRA funds, for a project of about $1.1 million. The rehabilitation was completed in 2025. The Lodge serves youth and elders through mentoring, outreach and family gatherings.",
    },
    {
      name: "First Baptist Church",
      where: "",
      body: "About $1.1 million in work, including a roof, an elevator for access, window restoration, ADA compliance and structural stabilization. The Northeast Florida Regional Council recognized the City’s CRA for this preservation work.",
    },
    { name: "St. Paul A.M.E.", where: "", body: "A roofing project completed with Lincolnville CRA funds (reported 2022)." },
    { name: "Trinity Independent", where: "", body: "A multi-year effort involving critical repairs, including work on the bell tower." },
    { name: "Greater St. Mary’s", where: "", body: "Described in FY2025 CRA material as in the final stages of construction." },
  ],
  sources: "Sources: The Break Room (July 2022, early 2024); CRA Meeting Booklet (Oct 2026).",
  photo: {
    alt: "Trinity Methodist Church, now Trinity Independent Church, a yellow brick church whose bell tower is braced with steel supports",
    caption: "Trinity Methodist Church (now Trinity Independent), Bridge Street.",
    credit: {
      by: "w_lemay",
      source: "https://commons.wikimedia.org/wiki/File:Trinity_Methodist_Church_(Trinity_Independent_Church),_Bridge_Street,_Lincolnville,_St._Augustine,_FL.jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    },
  },
};

/* --------------------------------------------------------------------------
   3. Parks and Named Places
   -------------------------------------------------------------------------- */
export const craParks = {
  faces: {
    title: "The faces behind the places",
    body: "Many Lincolnville places honor people who shaped the neighborhood and the civil rights movement: the Willie Galimore Center, Eddie Vickers Park, Robert B. Hayling Park, Twine Park for Henry Twine, the City’s first Black Vice Mayor, and Andrew Young Crossing in the Plaza, which marks the 1964 march from Lincolnville. Carrie Johnson Way, at Bravo and Weeden Streets, was dedicated by the City on February 20, 2021.",
    sources: "Sources: The Break Room, City Clerk Darlene Galambos, Feb 2023; Carrie Johnson Way dedication program.",
  },
  parks: {
    title: "Parks and public spaces",
    items: [
      { name: "Eddie Vickers Park", body: "The sports courts were rebuilt with pickleball and basketball courts and reopened in April 2025." },
      { name: "Lincolnville Park, honoring George and Ollie Smith", body: "A neighborhood pocket park, reported complete in the CRA’s 2024 annual report." },
      { name: "Robert B. Hayling Park", body: "A passive park for walking and views, where a plaza with a statue honoring Dr. Hayling has been planned." },
    ],
    sources: "Sources: CRA 2024 annual report; The Break Room, Sept 2024.",
  },
  streets: {
    title: "Streets, sidewalks and infrastructure",
    body: "The redevelopment plan includes improving and building sidewalks and upgrading neighborhood infrastructure. The MLK Avenue streetscape is a current CRA project covering street, utility and safety work. Earlier City budgets show work such as the Bridge Street Gateway entry, South and Dumas Street improvements and stormwater repairs.",
    sources: "Sources: CRA Meeting Booklet (Oct 2026); 2019 City Budget summary.",
  },
};

/* --------------------------------------------------------------------------
   4. The Historic District and Home History
   -------------------------------------------------------------------------- */
export const craDistrict = {
  sections: [
    {
      id: "district",
      title: "The Lincolnville National Register Historic District",
      body: [
        "Lincolnville is one of St. Augustine’s seven National Register historic districts. The 1991 nomination lists roughly 540 contributing buildings street by street, most of them Frame Vernacular, with Bungalows and a handful of Queen Anne, Gothic Revival, Italianate and other styles. In 2022 the City’s Historic Preservation Officer said Lincolnville’s district was being updated to reflect its civil rights history, now that buildings from that era have reached 50 years old. Designation is not permanent: a building that is heavily altered or demolished can lose its contributing status.",
      ],
      note: "",
      sources: "Sources: 1991 National Register nomination, Section 7; The Break Room, Julie Courtney, May 2022.",
    },
    {
      id: "partial-demolition",
      title: "Protecting historic character: partial demolition review",
      body: [
        "In 2023 the City wrote to the owners of its 1,659 designated or contributing historic buildings about a partial demolition ordinance. Removing significant features, such as a porch or chimney, can change a building’s historic character, so this work on designated or contributing buildings is reviewed by staff and the Historic Architectural Review Board (HARB), including outside the City’s HP zoning districts. Any building 50 years or older needs HARB review before full demolition. Owners can also ask HARB to designate their home a local landmark, as one St. Augustine owner did to protect an intact bungalow from future demolition.",
      ],
      note: "",
      sources: "Sources: City letter and fact sheet, Aug 21, 2023; The Break Room, Julie Courtney, May 2022.",
    },
    {
      id: "master-plan",
      title: "What residents asked for: the Historic Preservation Master Plan",
      body: [
        "In 2016 residents gave public input for the City’s Historic Preservation Master Plan, adopted in 2018. Participants noted that Lincolnville holds the city’s highest concentration of Victorian-era architecture and that this fabric was eroding. They asked the City to tell the whole story of St. Augustine beyond downtown, to let neighborhoods tell their own story, to record oral histories, and to document buildings before demolition.",
      ],
      note: "These are residents’ comments, not City policy.",
      sources: "Sources: HPMP public forum SWOT (May 19, 2016) and community workshop comments (fall 2016).",
    },
    {
      id: "palica",
      title: "Before Lincolnville: the Palica mission at Yallaha",
      body: [
        "Lincolnville’s history reaches back past the plantation era. At the Yallaha Plantation house on Bridge Street, which the City Archaeologist calls probably the oldest building still standing in Lincolnville, City archaeologists found posts and a compacted earthen floor from the early-1700s Palica mission. Palica was one of six recorded Native American refugee mission communities within today’s City limits. The house itself likely dates to the early 1800s.",
      ],
      note: "",
      sources: "Source: The Break Room, Dr. Andrea White, City Archaeologist, March 2023.",
    },
  ],
  photo: {
    alt: "St. Benedict the Moor Catholic Church, a red brick church with a curved front gable, arched stained-glass windows and a white block wall",
    caption: "St. Benedict the Moor Catholic Church, Martin Luther King Avenue.",
    credit: {
      by: "Ebyabe",
      source: "https://commons.wikimedia.org/wiki/File:St_Aug_Lincolnville_St_Benedict_the_Moor_church01.jpg",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    },
  },
};

/* --------------------------------------------------------------------------
   5. Fix-It-Up and Staying in Place
   -------------------------------------------------------------------------- */
export const craFixItUp = {
  title: "Fix-It-Up residential repair grant",
  body: [
    "Fix-It-Up is one of the CRA’s main tools for helping long-term residents stay in their homes. The City’s current program page says income-qualified, single-family Lincolnville residents may apply for up to $100,000 in home repairs, to address extensive health and safety needs so residents can age in place. That figure is a maximum, not the amount every household receives. The program has grown considerably since the CRA began.",
  ],
  highlight: { value: "Up to $100,000", label: "in home repairs for income-qualified, single-family Lincolnville residents. A maximum, not the amount every household receives." },
  sources: "Source: City Fix-It-Up program page, as cited in the CRA Meeting Booklet (Oct 2026).",
};

/* --------------------------------------------------------------------------
   6. How to Take Part
   -------------------------------------------------------------------------- */
export const craTakePart = {
  ways: [
    {
      title: "Attend a Steering Committee meeting.",
      body: "Meetings are held at 5:00 PM in the Alcazar Room at City Hall, 75 King Street. Public comment is the place for a focused question or request for clarification.",
    },
    { title: "Look up an address.", body: "The City’s GIS map shows whether an address falls inside a CRA district." },
    {
      title: "Ask Neighborhood Services.",
      body: "Added to the CRA in June 2023, Neighborhood Services is meant to be one front door for residents who are not sure which City department to call.",
    },
    {
      title: "Serve.",
      body: "The City Clerk has announced Steering Committee openings at citystaug.com. Preference goes to people who live in Lincolnville or have a business, property or other established stake there.",
    },
  ],
  grants: {
    title: "Neighborhood grants",
    body: "The City’s neighborhood grant program offers up to $3,000 per group per fiscal year for small community projects inside City limits. Groups of three or more, formally organized or not, may apply; a neighborhood association is not required. Applications open quarterly in October, January, April and July until the year’s budget is spent. A Lincolnville historic preservation group has used a grant toward the annual Lincolnville Festival.",
    sources: "Source: The Break Room, Jaime D. Perkins, Aug 19, 2025.",
  },
};

/* --------------------------------------------------------------------------
   7. Homes, Not Hotels
   -------------------------------------------------------------------------- */
export const craHomesNotHotels = {
  lede: "One in four Lincolnville homes is now a registered vacation rental, and the Lincolnville Community Redevelopment Area has about seven years left before it sunsets on December 31, 2033. This page brings the facts into one place, so residents, owners, the City and the CRA can make choices together from the same clear picture.",
  spirit:
    "It is offered in a spirit of collaboration. Many people have worked hard for Lincolnville since 2013, and real progress has been made. The aim is to build on that work and make sure long-term residents are heard before decisions are made, not after.",
  independence: "Root & Simmer is an independent business. Nothing here implies City or CRA endorsement.",
  numbers: {
    title: "Lincolnville by the numbers",
    intro:
      "175 of Lincolnville’s 685 residential properties (25.5%) hold at least one City-registered vacation rental. The neighborhood has 210 of the City’s 912 registrations (23.0%).",
    columns: ["Measure (as of October 22, 2026)", "Count", "Share"],
    rows: [
      ["Residential properties in Lincolnville", "685", "100%"],
      ["Properties with a registered vacation rental", "175", "25.5%"],
      ["Vacation rental registrations in Lincolnville", "210", "23.0% of the City’s 912"],
      ["Properties where the owner gets mail at the home (likely owner-lived)", "302", "44.1%"],
      ["Properties owned by an LLC, corporation or trust", "206", "30.1%"],
      ["Properties whose owner mails from outside Florida", "105", "15.3%"],
      ["Rental properties owned from outside Florida", "44 of 175", "25.1%"],
      ["Rental properties whose owner gets mail at the rental", "27 of 175", "15.4%"],
    ],
    streets:
      "The heaviest rental streets are Riberia St (27 registrations), M L King Ave (18), Oneida St (18), Washington St (16), Sanford St (13) and Twine St (11).",
    method:
      "How these were counted: rentals come from the City’s registry map. Properties and owners come from St. Johns County Property Appraiser parcel data for single-family, multi-family, mixed-use and condo parcels on Lincolnville’s streets. “Owner gets mail at the home” is a stand-in for owner-occupied, not an official homestead count.",
  },
  oneWeek: {
    title: "The one-week rule: why rentals are being reported",
    intro:
      "In St. Augustine’s single-family zones, a home rented more than four times a year must be rented for at least a week at a time. A 6-night booking breaks that rule, and neighbors who know it are reporting those stays.",
    columns: ["Zoning district", "Minimum rental stay", "Rule"],
    rows: [
      ["RS-1 and RS-2 (single-family)", "1 week, when rented more than 4 times a year", "Ord. 2010-24, carried forward by Ord. 2019-51"],
      ["HP-1 (historic preservation)", "1 month", "Ord. 1989-51, carried forward by Ord. 2019-52"],
      ["All other districts", "No City minimum", "Florida law bars new limits on rental length"],
    ],
    points: [
      { title: "The City can enforce these minimums.", body: "Florida law exempts local rules adopted on or before June 1, 2011, and both of these date from 2010 and 1989." },
      { title: "Most Lincolnville rental owners are not on site.", body: "Of 175 rental properties, only 27 owners get mail at the rental, and 44 are owned from outside Florida. Booking sites let owners set any minimum stay, and many default to 2 or 3 nights. Owners who don’t know the City rule can break it without meaning to." },
      { title: "What it costs owners.", body: "Complaints go to code enforcement, and the City can revoke a rental’s registration (City Code sec. 28-154). Owners also lose the shorter bookings they’ve already taken. The code sections reviewed do not state a fine amount." },
      { title: "What it costs neighbors.", body: "Rules broken quietly mean more turnover on the block, and neighbors have to act as enforcers." },
    ],
    background:
      "Background: the weekly and monthly rental minimums rest on older City rules (Ord. 2010-24 and Ord. 1989-51). Florida law lets cities keep limits on rental length adopted on or before June 1, 2011, but bars new ones (s. 509.032(7)(b), as quoted in SB 286, 2022).",
  },
  problems: {
    title: "The problems we share",
    intro: "The CRA has money and programs, yet homes keep passing out of long-term hands. The gap is in reach, timing and voice more than in funding.",
    points: [
      { title: "Long-term homeownership is shrinking.", body: "Black-owned homes in the tract that includes Lincolnville fell 45%, from 349 to 192, between 2009 and 2014 (Flagler Gargoyle). Today only 44% of properties have an owner getting mail at the home." },
      { title: "Rentals are concentrated and often remote.", body: "One in four properties holds a registered rental. Of 175 rental properties, 44 (25%) are owned from outside Florida, and only 27 owners get mail at the rental." },
      { title: "The City’s tools are limited.", body: "State law bars new limits on how long or how often a home is rented. The City can still require registration, safety inspections, parking, occupancy limits and a 30-minute response to complaints (City Code secs. 28-146 to 28-154)." },
      { title: "Residents are not reliably in the room.", body: "The Lincolnville CRA Steering Committee has five members. Budgets are decided at CRA meetings. No public count of resident attendance or comment was found, so no one can yet show whether participation is rising or falling." },
      { title: "Neighbors feel the pressure.", body: "Residents have raised parking, noise, trash, demolitions and the loss of knowing their neighbors since at least 2018 (News4JAX 2018, 2019)." },
    ],
  },
  trends: {
    title: "Where current trends point",
    intro: "If nothing changes, rentals could reach half of Lincolnville’s homes before the CRA’s funding ends on December 31, 2033. These are scenarios built from the facts above, not forecasts.",
    points: [
      { title: "Rentals.", body: "Citywide registrations rose from more than 400 in 2019 to 912 in 2026, roughly doubling in seven years. If Lincolnville followed that pace for the next seven years, rental properties would rise from 175 (25%) to around 350 to 400, which is half or more of the neighborhood’s 685 homes." },
      { title: "Ownership.", body: "The 2009 to 2014 drop in Black-owned homes (45% in five years) shows how fast change can move." },
    ],
  },
  protections: {
    title: "What protects a Lincolnville home",
    points: [
      { title: "Repair help is narrow.", body: "Fix-It-Up covers health and safety repairs for income-qualified owners who live in the home (homesteaded). There is no funding for investors providing low-income housing. An investor-owned or vacant house has no repair program behind it." },
      { title: "Full demolition needs approval.", body: "Any building 50 years old or older, anywhere in the city, needs a Certificate of Demolition from the Historic Architectural Review Board (HARB) after a public hearing, whatever its location, significance or design." },
      { title: "One exception.", body: "Some privately owned single-family homes in a flood zone may skip HARB demolition review if the owner documents the floor elevation with a sealed survey or elevation certificate." },
      { title: "Partial demolition review.", body: "Removing or replacing significant exterior features (roofs, windows, exterior finishes, porches, foundations) is reviewed for designated or contributing buildings, including outside the HP-1 to HP-5 zones. Minor matching repair, such as re-roofing, is not covered. Noncontributing buildings get no partial demolition review." },
      { title: "Status can be lost.", body: "A contributing building that is significantly altered or demolished is no longer counted as designated, and a National Register district should keep at least 51% historic buildings." },
      { title: "Listing alone doesn’t protect.", body: "National Register listing by itself doesn’t stop a private owner from demolishing. Protection comes through the City’s local review: HARB must approve full demolition of any building 50 years or older, and partial demolition of designated or contributing ones." },
      { title: "Owners can protect a home themselves.", body: "An owner can ask HARB for Local Historical Landmark status. One St. Augustine home was designated at its owner’s request so a future owner could not tear it down." },
      { title: "Incentives exist.", body: "Designated or contributing buildings can qualify for the City’s property tax (ad valorem) exemption for qualified rehabilitation and the Federal Preservation Tax Credit. The City also named local programs such as the Lincolnville CRA for eligible owners." },
      { title: "Digging brings review.", body: "Work that disturbs soil more than 3 inches deep over 100 square feet may need archaeological review first." },
    ],
    residents:
      "Residents named these risks in 2016: demolition by neglect; fines too low to deter demolition (a $5,000 fine was said not to discourage it); Lincolnville’s Victorian-era housing fabric eroding; no design review in Lincolnville; and a need to educate new owners and “flippers.” These were public comments, not City findings.",
  },
  sources:
    "Sources: City of St. Augustine Registered Short Term Rentals map, registry data pulled October 22, 2026; St. Johns County parcel data (Property Appraiser owner and land-use records), pulled October 22, 2026; City Code Chapter 28, Division 2, Vacation Rentals (secs. 28-145 to 28-158); Flagler College Gargoyle, April 10, 2016; News4JAX, January 9, 2018 and June 10, 2019; Florida s. 509.032(7)(b), as quoted in SB 286 (2022); City letter to historic property owners, Aug 21, 2023; City HARB page; Historic Preservation Officer interview, May 2022; Historic Preservation Master Plan workshops, fall 2016, and public forum, May 19, 2016.",
  legal: "This page is informational and is not legal advice.",
};

/* --------------------------------------------------------------------------
   8. Every Home Known: The Home Story Package
   -------------------------------------------------------------------------- */
export const craHomeStory = {
  then: {
    alt: "Black-and-white photograph of a one-story frame house with a screened porch, behind a row of hedges",
    caption: "About 1979. State historic survey photograph, courtesy Florida Master Site File.",
  },
  now: {
    alt: "The same frame house today, painted cream with a metal roof, a screened porch and a red iron handrail at the front steps",
    caption: "October 2026. Photo: Root & Simmer Hospitality Co.",
  },
  membershipLink: { label: "Lincolnville Connection", href: "/digital-records#dr-membership" },
  price: {
    amount: "$1,200",
    payments: ["$600 when the work begins", "$600 on delivery"],
  },
  included: {
    title: "All-inclusive package and membership",
    columns: ["Included", "Details"],
    rows: [
      ["Digital welcome packet", "A sourced history of your home: records gathered in one place, historical context, and your family’s memories in your own words. Scope agreed together."],
      ["Electronic documents", "Three member documents: Homes, Not Hotels: A Lincolnville Proposal; Why Lincolnville Homes Are Lost: Risks and Protections; and the Lincolnville Places and People Guide."],
      ["Membership", "One year in the Root & Simmer Hospitality Exclusively for Lincolnville Community Connection. Updates on events and CRA votes, a voice, and knowing what is happening in Lincolnville."],
    ],
  },
  /**
   * "Inside a finished packet": modeled on a real packet delivered in November 2026 (the home in the
   * Then/Now photos). Never add the address, the owner’s name or the deeds here: the packet belongs to the family.
   */
  sample: {
    title: "Inside a finished packet",
    intro: "This is what one Lincolnville family received in November 2026, for the home in the photos above. Every fact is traced to a record, and where the records disagree or fall silent, the packet says so. The packet belongs to the family, so its pages are not shown here.",
    parts: [
      { name: "Folder presentation", size: "18 pages", body: "Everything known about the house and its land, with a table of contents for the records." },
      { name: "A personal letter", size: "3 pages", body: "What we found, what is still missing, and the questions only the family can answer." },
      { name: "Home History Packet", size: "13 pages", body: "The full written history of the home, with every source named." },
      { name: "Digital Records Collection", size: "80 pages", body: "Copies of 19 public records in six sections, each with a one-page summary." },
    ],
    sectionsTitle: "The six sections of records",
    sections: [
      { name: "Ownership", body: "The Property Appraiser record and the chain of deeds." },
      { name: "Repairs and permits", body: "Roof and electrical permits, and a roof certificate of completion." },
      { name: "Historic status", body: "The Florida Master Site File record and its survey photographs, the 1991 National Register nomination, and the 1991 Lincolnville Historic District map." },
      { name: "Historic maps", body: "Sanborn fire insurance maps from 1910 and 1917." },
      { name: "Plan and protections", body: "The page of the 2013 Lincolnville Redevelopment Plan that touches the street, the Ad Valorem Tax Exemption for Historic Preservation, and the City Code on the Historic Architectural Review Board." },
      { name: "Research", body: "Pages from a university study of the neighborhood, and the findings of a file search." },
    ],
    extras: "Where it helps, the packet also includes a draft of the State’s National Register Preliminary Site Information Questionnaire for the home, and the Lincolnville Connection Member Guide.",
  },
};

/** Photo on the guide’s main page. */
export const craLandingPhoto = {
  alt: "The green Lincolnville Historic District state marker, framed by sea oats and a blue sky",
  caption: "The Lincolnville Historic District marker.",
  credit: {
    by: "w_lemay",
    source: "https://commons.wikimedia.org/wiki/File:Lincolnville_Historic_District_Historical_Marker,_Lincolnville,_St._Augustine,_FL.jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
};
