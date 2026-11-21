/**
 * How the shared members' library is grouped on /members (Nov 2026). Display only: each stored document keeps its
 * id, category and storage path. These rules decide the one area and group it is listed under, so every document
 * appears exactly once. Anything the rules do not recognise is listed under "Other documents", never hidden.
 */

export type LibraryDoc = { id: string; title: string; category: string };

export const LIBRARY_AREAS = [
  { id: "cra", title: "CRA", note: "Independent public education. Not an official City of St. Augustine or Community Redevelopment Agency (CRA) publication." },
  { id: "demolition", title: "Demolition" },
  { id: "preservation", title: "Preservation" },
  { id: "research", title: "Research Archive" },
  { id: "projects", title: "Projects & Landmarks" },
  { id: "other", title: "Other documents" },
] as const;
export type LibraryAreaId = (typeof LIBRARY_AREAS)[number]["id"];

/** Groups inside each area, in reading order. */
export const LIBRARY_GROUPS: { area: LibraryAreaId; title: string }[] = [
  { area: "cra", title: "Meetings & Minutes" },
  { area: "cra", title: "Budgets & Financial Records" },
  { area: "cra", title: "City Research" },
  { area: "demolition", title: "City Demolition Records" },
  { area: "demolition", title: "103 South Street" },
  { area: "demolition", title: "Property Demolition Records" },
  { area: "preservation", title: "Homeowner Resources" },
  { area: "preservation", title: "Historic Planning" },
  { area: "research", title: "Mohlman Research: Narratives" },
  { area: "research", title: "Mohlman Research: Directories" },
  { area: "research", title: "Mohlman Research: Maps" },
  { area: "research", title: "Mohlman Research: Photographs" },
  { area: "research", title: "Mohlman Research: Original Documents" },
  // The 16-document Mohlman archive (Nov 21, 2026), grouped by its manifest categories.
  { area: "research", title: "Mohlman Research: People & Community" },
  { area: "research", title: "Mohlman Research: Streets, Transportation & Development" },
  { area: "research", title: "Mohlman Research: Civil Rights & Historical Records" },
  { area: "research", title: "Mohlman Research: Directories & Resident Research" },
  // Four narratives added Nov 21, 2026.
  { area: "research", title: "Mohlman Research: Washington Street Commerce — Palace Market" },
  { area: "research", title: "Mohlman Research: Transportation History — St. Augustine Transfer Company" },
  { area: "research", title: "Mohlman Research: Historical Directories — City Directories" },
  { area: "research", title: "Mohlman Research: Historical Documents — Records and Correspondence" },
  { area: "research", title: "City Historical Interviews" },
  { area: "projects", title: "Projects & Landmarks" },
  { area: "other", title: "Other documents" },
];

const mohlman = (c: string) => `Mohlman Research: ${c.replace(/^Mohlman research:\s*/i, "").replace(/\b(?!(?:and|of|the)\b)\w/g, (m) => m.toUpperCase())}`;

/** The one group a shared document is listed under. */
export function libraryGroupOf(d: LibraryDoc): string {
  const c = d.category, t = d.title;
  if (c === "Meetings and minutes") return "Meetings & Minutes";
  if (c === "The money, researched") return "Budgets & Financial Records";
  if (c === "Voices from City Hall") return /\bCRA\b|Neighborhood Services/i.test(t) ? "City Research" : "City Historical Interviews";
  if (c === "Guides" && /CRA/i.test(t)) return "City Research";
  if (c === "Demolition records") return /103 South/i.test(t) ? "103 South Street" : "Property Demolition Records";
  if (c === "Home protection packets") return "Homeowner Resources";
  if (c === "Protecting homes and history") {
    if (/preservation and repair guide|partial demolition ordinance|homes are lost/i.test(t)) return "Homeowner Resources";
    if (/demoli/i.test(t)) return "City Demolition Records";
    return "Historic Planning";
  }
  if (/^Mohlman research:/i.test(c)) return mohlman(c);
  if (c === "Projects and landmarks") return "Projects & Landmarks";
  return "Other documents";
}

/**
 * Shared documents not listed in the members' library (display only; the stored record and file are untouched).
 * - "Florida Master Site File 8SJ2204, c. 1979 form photos" (5 pages) belongs to 74 South St, whose Home File keeps
 *   its own 6-page "Record 3.2 Site File form photos c1979". Kimberly, Nov 21, 2026: hide the shared listing.
 */
export const hiddenFromLibrary = (d: LibraryDoc) => /^Florida Master Site File 8SJ2204\b/i.test(d.title);

/**
 * Mohlman files staged for Kimberly's review (Nov 2026). Stored as archived records with this category prefix, so
 * row-level security returns them only to administrators and the document route refuses everyone else.
 * The subject follows the prefix, e.g. "Mohlman staging: Transportation".
 */
export const STAGING_PREFIX = "Mohlman staging: ";
export const STAGING_SUBJECTS = [
  "People", "Directory Cards", "Directories", "Maps & Streets", "Buildings & Property", "Churches & Religious Life",
  "Schools", "Transportation", "Civil Rights", "Newspapers & Correspondence", "Photographs", "Internal",
];
