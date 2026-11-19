/**
 * Root & Simmer — The Land Beneath Your Feet (/lincolnville-history/tracts).
 * Wording from Kimberly's brief (November 2026). Same rules as content/site.ts:
 * edit the text between the quotes and save.
 *
 * Every dated entry carries an evidence label. "St. Augustine Historical Society" means the fact was checked
 * against the Society's article "Lincolnville: The Beginning". "To verify" means it comes from research
 * Root & Simmer is still checking against original documents. Change a label only when a document is in hand.
 */

export type Evidence = "St. Augustine Historical Society" | "National Register (1991)" | "Directory entry" | "Oral history" | "To verify";

export const tractsPage = {
  href: "/lincolnville-history/tracts",
  title: "The Land Beneath Your Feet",
  subtitle: "From Little Africa to Lincolnville — How a Community Took Root",
  intro:
    "Before Lincolnville became the neighborhood we know today, its land held centuries of history. Following emancipation, newly freed African Americans established a community known as Africa or Little Africa. From this settlement grew a neighborhood of homeowners, churches, schools, businesses, and families whose contributions helped shape St. Augustine.",
  feature: "Little Africa was the root from which Lincolnville grew.",
  independence:
    "Root & Simmer Hospitality Co. is independent. This page is community history research, not an official City of St. Augustine or Community Redevelopment Agency (CRA) publication.",
};

/** Home page preview, under the "Where it began" story. */
export const tractsTeaser = {
  label: "Lincolnville history",
  title: "The Land Beneath Your Feet",
  body: "From Little Africa to Lincolnville: how a community took root, from the land grants of 1838 to the six freed people who leased land by Maria Sanchez Creek in 1866, and the streets and additions that grew from there.",
  link: "Explore the history",
};

export type TimelineEntry = { year: string; title: string; body: string; evidence: Evidence; source?: string };

export const timeline: TimelineEntry[] = [
  {
    year: "1838",
    title: "Dumas Homestead Tract",
    body: "Peter Sken Smith consolidated three earlier Spanish land grants into the Dumas Homestead Tract. This land would later become central to Lincolnville’s founding story.",
    evidence: "To verify",
  },
  {
    year: "1866",
    title: "Africa / Little Africa",
    body: "By October 1866, six newly freed African Americans leased land along the western edge of Maria Sanchez Creek: Aaron Dupont, Miles Hancock, Matilda Papy, Peter Sanks, Tom Solana and Harriet Weedman.",
    evidence: "St. Augustine Historical Society",
    source: "St. Augustine Historical Society, “Lincolnville: The Beginning”",
  },
  {
    year: "1870s",
    title: "Building a Neighborhood",
    body: "Black residents began purchasing lots and establishing homes along Central Avenue (now Martin Luther King Avenue) and Benedict Street. Development continued along Oneida and Bridge Streets.",
    evidence: "To verify",
  },
  {
    year: "1879",
    title: "Genovar Addition",
    body: "The Genovar Addition contributed to Lincolnville’s expansion. Research attributed to Geoffrey Mohlman connects this development to Bartolo Genovar and the Martin Tract.",
    evidence: "To verify",
  },
  {
    year: "1880s",
    title: "Atwood and Buena Esperanza",
    body: "Further subdivision and residential growth expanded the neighborhood. Related development topics include Fountain City and the Sanford–Weeden area.",
    evidence: "To verify",
  },
  {
    year: "Early 1900s–1930",
    title: "Keith Addition and Continued Growth",
    body: "Additional subdivisions, residential construction, churches, schools, and businesses helped shape the established neighborhood.",
    evidence: "To verify",
  },
];

export type Tract = { id: string; name: string; period: string; overview: string; significance: string; research: string[]; evidence: Evidence };

/** Five expandable cards. Overviews use only what the timeline above says; property research is still to come. */
export const tracts: Tract[] = [
  {
    id: "dumas",
    name: "Dumas Homestead Tract",
    period: "1838",
    overview: "Formed when Peter Sken Smith consolidated three earlier Spanish land grants.",
    significance: "This land would later become central to Lincolnville’s founding story.",
    research: ["The three Spanish land grants and their original grantees", "The tract’s boundaries, compared with today’s streets", "How the tract passed from Smith to later owners"],
    evidence: "To verify",
  },
  {
    id: "genovar",
    name: "Genovar Addition",
    period: "1879",
    overview: "A subdivision connected, in research attributed to Geoffrey Mohlman, to Bartolo Genovar and the Martin Tract.",
    significance: "The Genovar Addition contributed to Lincolnville’s expansion.",
    research: ["The recorded plat and its date", "The Martin Tract and how it became the Genovar Addition", "The first lot owners and the homes they built"],
    evidence: "To verify",
  },
  {
    id: "atwood",
    name: "Atwood Tract",
    period: "1880s",
    overview: "Part of the further subdivision and residential growth that expanded the neighborhood in the 1880s.",
    significance: "Its growth is linked to related development topics: Fountain City and the Sanford–Weeden area.",
    research: ["The recorded plat and its date", "Where the tract lies on today’s map", "The first lot owners and the homes they built"],
    evidence: "To verify",
  },
  {
    id: "esperanza",
    name: "Buena Esperanza / Esperanza Addition",
    period: "1880s",
    overview: "Part of the further subdivision and residential growth that expanded the neighborhood in the 1880s.",
    significance: "With the Atwood Tract, it carried Lincolnville’s growth beyond its first streets.",
    research: ["The recorded plat and its date, and which name appears on it", "Where the addition lies on today’s map", "The first lot owners and the homes they built"],
    evidence: "To verify",
  },
  {
    id: "keith",
    name: "Keith Addition",
    period: "Early 1900s–1930",
    overview: "One of the additional subdivisions of the early 1900s, as residential construction, churches, schools, and businesses filled in the neighborhood.",
    significance: "It belongs to the period that shaped the established neighborhood.",
    research: ["The recorded plat and its date", "Where the addition lies on today’s map", "The homes, churches and businesses built on its lots"],
    evidence: "To verify",
  },
];

export const archive = {
  title: "Digging Into the Past | Research & Community Archives",
  body: [
    "Root & Simmer Hospitality Co. brings historical documents, maps, property records, photographs, and community knowledge together to explore how Lincolnville developed, from its first leased lots to the neighborhood it is today.",
    "Published research by historian Geoffrey Mohlman is one of the references we use. We cite it as a reference only; Root & Simmer is independent and not affiliated with that research.",
    "Research shared here is a starting point. Until a supporting document is in hand, an entry is marked “To verify” and is not presented as independently verified.",
  ],
  categories: [
    "Original land grants and subdivision plats",
    "Little Africa’s earliest residents",
    "Historic homes and property histories",
    "Washington Street businesses",
    "Churches, schools, and community institutions",
    "Historic Sanborn maps",
    "Buildings lost and preserved",
  ],
};

export const mapNote = {
  title: "The historical tract map",
  body: "A map of the original tracts and the 1866 leaseholds will appear here once it can be drawn from verified records.",
  note: "Historical tract boundaries and original leasehold locations are being researched and verified.",
};

export const sources = [
  { label: "St. Augustine Historical Society — Lincolnville: The Beginning", href: "https://staughs.com/lincolnville-the-beginning/" },
  { label: "National Register of Historic Places — Lincolnville Historic District (listed November 29, 1991)", href: "https://npgallery.nps.gov/AssetDetail/NRIS/91000979" },
  {
    label: "City of St. Augustine — National Register Historic District buildings, contributing and noncontributing (includes Lincolnville)",
    href: "https://www.citystaug.com/DocumentCenter/View/4930/National-Register-Historic-District-Buildings-Listed-by-Contributing-and-Noncontributing",
  },
  { label: "National Park Service — Lincolnville Historic District", href: "https://www.nps.gov/places/florida-lincolnville-historic-district.htm" },
];
