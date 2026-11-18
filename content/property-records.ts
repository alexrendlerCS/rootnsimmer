/**
 * Root & Simmer — "Records on file": the City, County and State paper trail for a property, tracked one record at
 * a time. Shown on the map card and on the Demolition page. Everyone sees what exists and where it stands;
 * Lincolnville Connection members open the documents themselves.
 *
 * To update: change a record's status ("in-hand", "requested", "missing"), add the date it was requested, and when
 * it arrives put the PDF in Documents\Root & Simmer Member Library\8 Demolition records (named "Record …") and set
 * fileName to that file's name, then run: node --env-file=.env.local scripts/members-cli.mjs upload-shared --folder "…"
 */

export type RecordStatus = "in-hand" | "requested" | "missing";
export type PropertyRecord = {
  title: string;
  date?: string;
  source: string;
  status: RecordStatus;
  /** When the request was sent, for status "requested". */
  requested?: string;
  /** The members' library file (shared, category "Demolition records"), for status "in-hand". */
  fileName?: string;
  /** What this record answers, in plain words. */
  why?: string;
};

export const recordStatusLabel: Record<RecordStatus, string> = {
  "in-hand": "In hand",
  requested: "Requested",
  missing: "Still to request",
};

export const recordsCopy = {
  title: "Records on file",
  intro: "The paper trail behind this lot, one record at a time. Root & Simmer requests every City, County and State record and tracks it until it arrives.",
  memberOpen: "Open",
  memberLock: "Members",
  memberLockHref: "/digital-records#dr-membership",
  memberNote: "Lincolnville Connection members open each record, with a plain-words note on what it means.",
};

export const propertyRecords: Record<string, { address: string; records: PropertyRecord[] }> = {
  /** 103 South Street: a contributing house (1904-1910), now an empty lot. */
  "2120400000": {
    address: "103 South St",
    records: [
      { title: "HARB order, case 2019-0109: partial demolition approved with conditions", date: "December 19, 2019", source: "City of St. Augustine, Historic Architectural Review Board", status: "in-hand", fileName: "Record 1.1 103 South St, HARB order, case 2019-0109, partial demolition approved with conditions.pdf" },
      { title: "Demolition permit application", date: "December 18, 2020", source: "City of St. Augustine, Planning and Building", status: "in-hand", fileName: "Record 1.2 103 South St, demolition permit application, December 2020.pdf" },
      { title: "Demolition permit PR2020-1652", date: "December 2020", source: "City of St. Augustine, Planning and Building", status: "in-hand", fileName: "Record 1.3 103 South St, demolition permit PR2020-1652.pdf" },
      { title: "Demolition plan: the architect’s drawings of the house", source: "Filed with permit PR2020-1652", status: "in-hand", fileName: "Record 1.4 103 South St, demolition plan.pdf" },
      { title: "City demolition permit list entry", date: "2019-2025 list", source: "City of St. Augustine", status: "in-hand", why: "Lists the whole building and an already empty lot." },
      { title: "1991 National Register listing: contributing, Frame Vernacular, 1904-1910", date: "1991", source: "Lincolnville Historic District nomination", status: "in-hand" },
      { title: "The earlier Certificate of Demolition, COD 2018-0005, which expired", source: "City Historic Preservation", status: "missing", why: "What was first asked for, and why it lapsed." },
      { title: "Any extension or amended order after December 2019", source: "City Historic Preservation and Planning and Building", status: "missing", why: "The order approved a partial demolition; no building stands. This would show what approval covered the rest." },
      { title: "Permit PR2020-1652 inspection and closeout records", source: "City Planning and Building", status: "missing", why: "What work was inspected and signed off." },
      { title: "Code enforcement cases on the property before 2021", source: "City Code Enforcement", status: "missing", why: "Whether the City cited the house before it came down." },
      { title: "Florida Master Site File form 8SJ2219, with its photographs", source: "Florida Division of Historical Resources", status: "missing", why: "The State’s description of the house, and photos from before its loss." },
      { title: "Archaeology review for the lot", source: "City Archaeology Program", status: "missing", why: "Whether digging was reviewed on this Lincolnville lot." },
    ],
  },
};
