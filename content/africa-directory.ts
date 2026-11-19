/**
 * Root & Simmer — The Little Africa Directory (/lincolnville-history/directory).
 * Transcribed from Kimberly's "Little Africa / Lincolnville Historical Directory" (Africa Directory PDF, November 2026),
 * a street-by-street cross-reference compiled from historical city directory entries, primarily 1885, 1899 and 1907.
 * Spelling and occupational wording are kept as the directory gives them. Where a person had both a home and a
 * workplace, both are shown. Add or correct entries here; every entry is a "Directory entry".
 */

export type DirectoryPerson = { name: string; where: string; role: string };
export type DirectoryStreet = { street: string; people: DirectoryPerson[] };

export const directoryPage = {
  href: "/lincolnville-history/directory",
  label: "Lincolnville history",
  title: "The Little Africa Directory",
  subtitle: "Who lived and worked here, street by street, in the city directories of 1885 to 1907",
  intro:
    "Old city directories listed residents by name, address and work. Root & Simmer Hospitality Co. gathered the Lincolnville and Little Africa entries, mainly from 1885, 1899 and 1907, and arranged them by street, so you can walk today’s map with the neighbors of more than a century ago.",
  narrativeTitle: "A neighborhood at work",
  members: "The street-by-street directory is for members of the Root & Simmer Hospitality Exclusively for Lincolnville Community Connection: 52 people on 19 streets, with their work and addresses. Members sign in to open it.",
  note: "Entries are transcribed from a compiled directory and are still being checked against the original directory pages. Spellings and job titles are as the directory gives them. Some workplaces, such as Granada, King, St. George and Charlotte Streets, are downtown, outside Lincolnville.",
  evidence: "Directory entry, 1885–1907",
};

/* The street-by-street list and its narrative are members only (Kimberly, Nov 2026). They live in the private
   members' storage, never in this public project: DocumentsRoot & Simmer Member LibraryLittle Africa Directory (private),
   uploaded with: node --env-file=.env.local scripts/walks.mjs upload-directory --file <that json>. */

export const directoryTeaser = {
  title: "Then and now: the Little Africa Directory",
  body: "The map shows Lincolnville today. Step back a century: the city directories of 1885 to 1907 list the neighborhood’s barbers, grocers, teachers, masons, pastors and a physician, many on the same streets you see here.",
  link: "Walk the old directory, street by street (members)",
};

/** The story under the Locator Map: Lincolnville today, told as a walk. Uses only places on the map. */
export const mapStory = {
  title: "The story on the map",
  body: [
    "Start where the neighborhood keeps its memory: the Lincolnville Museum & Cultural Center on M.L. King Avenue, the ACCORD Civil Rights Museum & Freedom Trail on Bridge Street, and the Best Richardson African Diaspora Literature & Culture Museum on Washington Street.",
    "The Corner Market, a gathering place since 1920, anchors M.L. King Avenue. Toward the San Sebastian River, Riberia Street has been working ground for more than a century: coffee, art studios and makers share 134 Riberia, and the boatyards keep the waterfront at work. Along Cedar Street, at the district’s northern edge, inns welcome guests.",
    "And between them stand the churches, St. Paul AME and St. Benedict the Moor on M.L. King Avenue, First Baptist on St. Francis Street, St. Cyprian’s on Lovett Street and Bethel Baptist on Riberia, holding the neighborhood together.",
  ],
};
