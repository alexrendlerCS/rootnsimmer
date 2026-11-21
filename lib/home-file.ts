/**
 * How a member's private Home File is shown on /members (Nov 2026; 74 South St, parcel 2115600000, is the template).
 *
 * Display only: nothing here moves, renames or changes a stored document. Each stored document keeps its own
 * category, id and storage path; these rules just decide which of the five sections it is listed under.
 * General library material (CRA meetings, budgets, demolition research, Mohlman archives, preservation packets,
 * other properties) is shared, not private, so it never appears in a Home File and stays in the members' library.
 */

export type HomeFileDoc = { id: string; title: string; category: string; file_name: string | null };

export const HOME_FILE_VIEW = [
  { id: "welcome", title: "Welcome & Home History" },
  { id: "photos", title: "Historic Photos & Maps" },
  { id: "ownership", title: "Ownership & Permits" },
  { id: "status", title: "Historic Status & City Records" },
  { id: "research", title: "Property Research & Sources" },
] as const;
export type HomeFileSectionId = (typeof HOME_FILE_VIEW)[number]["id"];

/** Branded presentations, compiled PDFs and ZIP downloads: copies of what is already in the file. Listed for later review. */
export const isCopyOrBundle = (d: HomeFileDoc) =>
  /\.zip$/i.test(d.file_name ?? "") || /printed folder|presentation|collection\b.*\ball\b|every file|in one download/i.test(d.title);

/** Which of the five sections a stored document is listed under. */
export function sectionOf(d: HomeFileDoc): HomeFileSectionId {
  const c = d.category;
  if (/national register questionnaire/i.test(d.title)) return "status";
  if (c === "Start here" || c === "Your home’s history" || c === "Next steps") return "welcome";
  if (c === "The records: Historic maps" || /photo/i.test(d.title)) return "photos";
  if (c === "The records: Ownership" || c === "The records: Repairs and permits") return "ownership";
  if (c === "The records: Historic status" || c === "The records: Plan and protections" || c === "The records: Demolition") return "status";
  return "research";
}

/** The two featured documents at the top of the file. Until the revised branded drafts are approved and uploaded,
 *  these are the existing welcome letter and Home History Packet. */
export function featured<T extends HomeFileDoc>(docs: T[]) {
  const welcome = docs.find((d) => d.category === "Start here" && /welcome/i.test(d.title)) ?? docs.find((d) => d.category === "Start here" && !isCopyOrBundle(d));
  const history =
    docs.find((d) => /history of|home history packet/i.test(d.title) && !isCopyOrBundle(d)) ??
    docs.find((d) => d.category === "Your home’s history" && !isCopyOrBundle(d));
  return { welcome, history };
}

/** "74 South St" -> "74 South Street" for the featured title. */
export const longAddress = (a: string) =>
  a.replace(/\bSt$/, "Street").replace(/\bAve$/, "Avenue").replace(/\bPl$/, "Place").replace(/\bRd$/, "Road").replace(/\bDr$/, "Drive");
