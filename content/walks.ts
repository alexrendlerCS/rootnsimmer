/**
 * Root & Simmer — the self-guided walks (/walks): the PUBLIC part only (title, short description, start, stop count).
 * The stop-by-stop walk text is private and never goes in this project: see scripts/walks.mjs.
 */
export type WalkSummary = { slug: string; title: string; subtitle: string; summary: string; start: string; stops: number };

export const walkSummaries: WalkSummary[] = [
  {
    slug: "land-beneath-your-feet",
    title: "The Land Beneath Your Feet",
    subtitle: "From Little Africa to Lincolnville: how freedom became community",
    summary: "Ten stops from the creek-side land where Little Africa took shape to the homes, churches, schools and businesses that made Lincolnville a community.",
    start: "Maria Sanchez Creek, beside Riberia Street",
    stops: 10,
  },
  {
    slug: "civil-rights-walk",
    title: "The Civil Rights Walk",
    subtitle: "Lincolnville organized. Downtown demonstrated. We return to community.",
    summary: "Two walks through the 1964 St. Augustine movement: Day 1 in Lincolnville, where the movement lived and organized, and Day 2 from Riberia Street to downtown, where it became visible to the nation.",
    start: "Ragga Surf Cafe, 134 Riberia Street",
    stops: 24,
  },
  {
    slug: "washington-street",
    title: "Washington Street",
    subtitle: "The people who built Lincolnville’s business street",
    summary: "A walk through Washington Street between 1899 and 1912: the restaurant, the dentist, the barbers, the market and the businesses that fed, groomed, healed and housed the neighborhood.",
    start: "62 Washington Street",
    stops: 8,
  },
];
