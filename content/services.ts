/**
 * Root & Simmer — two pages:
 *   /homeowner-help  "Help for Lincolnville homeowners": the City and CRA programs, in one place, and how the
 *                    Home Story Package helps a homeowner apply. Facts only from the pages they link to.
 *   /work-with-us    "Work with Root & Simmer": paid services for the City, the CRA and community partners,
 *                    as an independent contractor under a written agreement. No endorsement implied.
 * Same rules as content/site.ts: edit the words between the quotes and save.
 */

export const homeownerHelp = {
  label: "For homeowners",
  title: "Help for Lincolnville homeowners",
  lede: "The City of St. Augustine and the Lincolnville Community Redevelopment Agency (CRA) offer programs that can help long-term residents repair, protect and keep their homes. Here they are in one place, in plain words, with how Root & Simmer Hospitality Co. can help you get ready to apply.",
  programs: [
    {
      title: "Does my home qualify as historic?",
      body: "Four questions show where your home stands: is it on the 1991 list of 548 contributing buildings, is it 50 years old or older, has it kept its historic character, and do you want lasting protection or tax relief?",
      href: "/preserve-historic-homes/historic-recognition#qualify",
      link: "Check your home",
    },
    {
      title: "Fix-It-Up repair grant",
      body: "The CRA’s main tool for helping long-term residents stay in their homes. The City’s program page says income-qualified, single-family Lincolnville residents may apply for up to $100,000 in home repairs for serious health and safety needs, so residents can age in place. That is a maximum, not what every household receives.",
      href: "/cra-lincolnville/fix-it-up",
      link: "Read about Fix-It-Up",
    },
    {
      title: "Tax relief for historic restoration",
      body: "For a designated or contributing historic building, the City and County Ad Valorem Tax Exemption can exempt 100% of the added value of qualifying restoration work for 10 years.",
      href: "/preserve-historic-homes/historic-recognition",
      link: "How historic recognition works",
    },
    {
      title: "Protection from demolition",
      body: "Historic homes in Lincolnville go through City review before they can be demolished. Knowing your home’s history and status helps you protect it.",
      href: "/preserve-historic-homes/demolition",
      link: "How demolition review works",
    },
    {
      title: "Neighborhood grants",
      body: "The City’s neighborhood grant program offers up to $3,000 per group per fiscal year for small community projects inside City limits. Groups of three or more neighbors may apply, and applications open each October, January, April and July.",
      href: "/cra-lincolnville/take-part",
      link: "How to take part",
    },
    {
      title: "Neighborhood Services",
      body: "Added to the CRA in June 2023, Neighborhood Services is meant to be one front door for residents who are not sure which City department to call.",
      href: "/cra-lincolnville/take-part",
      link: "Ways to reach the City",
    },
  ],
  helpTitle: "How Root & Simmer helps you get ready",
  help: [
    { title: "Your home’s records, gathered", body: "Programs ask for proof: ownership, the home’s age, its historic status and its history. The Home Story Package gathers those City, County and State records for you and keeps them in your home file." },
    { title: "The rules, in plain words", body: "We explain what each program asks for and what the City’s own pages say, so you know where you stand before you apply." },
    { title: "Your papers, organized", body: "We help you put your documents in order and track what has been requested and what has arrived." },
  ],
  helpButton: "Ask about the Home Story Package",
  helpSubject: "Getting ready to apply for a homeowner program",
  helpBody: "Hello Kimberly,\n\nI am a Lincolnville homeowner and would like help getting ready to apply for a City or CRA program.\n\nThe program I am interested in (Fix-It-Up, historic tax relief, not sure):\nMy name:\nMy street (no house number needed yet):\nBest way to reach me:",
  note: "The City of St. Augustine and the CRA run these programs and decide who qualifies. Root & Simmer Hospitality Co. is an independent business: it does not run, approve or promise any program, and it does not buy, sell or list homes. Always confirm current rules and deadlines with the City.",
};

export const workWithUs = {
  label: "For the City and community partners",
  title: "Work with Root & Simmer",
  lede: "The City’s own 2013 Lincolnville Redevelopment Plan calls Lincolnville “an overlooked experience to the vast majority of visitors.” Root & Simmer Hospitality Co. offers research, storytelling and community work that helps change that, for the City, the Lincolnville Community Redevelopment Agency (CRA), museums, churches, schools and other community partners.",
  services: [
    { title: "Historical research and narratives", body: "Sourced histories of homes, streets, people and places, with what the record shows kept apart from what is still being confirmed." },
    { title: "Oral history recording", body: "Recording the memories of long-term residents, with their written permission, and returning copies to the families who share them." },
    { title: "Visitor map and walk content", body: "Verified stops, addresses, dates and stories for visitor maps, self-guided walks and wayfinding, so Lincolnville appears where it belongs." },
    { title: "Interpretive and marker text", body: "Plain, accurate wording for historic markers, signs, exhibits and printed guides." },
    { title: "Community outreach and plain-language guides", body: "Meeting guides, newsletters and plain-words explanations of plans, budgets and programs that help residents take part." },
    { title: "Records requests and tracking", body: "Requesting and organizing City, County and State records for a project, and tracking each one until it arrives." },
  ],
  examplesTitle: "See the work",
  examples: [
    { href: "/visitor-map", label: "Bringing Lincolnville onto the Visitor Map" },
    { href: "/walks", label: "The self-guided walks" },
    { href: "/lincolnville-history/tracts", label: "The Land Beneath Our Feet" },
    { href: "/cra-lincolnville", label: "Understanding the Lincolnville CRA, in plain words" },
    { href: "/what-if/washington-street", label: "What if…? Washington Street" },
  ],
  howTitle: "How we work",
  how: "Every project begins with a conversation and is done under a written agreement with a clear scope, timeline and fee. Root & Simmer is an independent business, not a City or CRA department, and nothing on this site implies City or CRA endorsement.",
  button: "Request a proposal",
  subject: "A project with Root & Simmer",
  body: "Hello Kimberly,\n\nWe would like to talk about a project with Root & Simmer.\n\nOrganization or department:\nWhat the project is about:\nTimeline, if known:\nContact name:\nBest way to reach us:",
};
