/** Lil Africa Neighborhood Story Map: the kinds of work the city directories record, each with a map color. */
export type GroupId = "food" | "personal" | "health" | "learning" | "trades" | "business" | "arts" | "other";

export const STORY_GROUPS: { id: GroupId; label: string; color: string; test: RegExp }[] = [
  { id: "food", label: "Groceries, meat markets and restaurants", color: "#a32e28", test: /grocer|grocery|meat|restaurant|saloon|lunch|bak|market|fish/ },
  { id: "personal", label: "Barbers, hairdressing and tailoring", color: "#6d4f7c", test: /barber|hair|manicur|tailor|dress|pressing/ },
  { id: "health", label: "Physicians, dentists, pharmacists and care", color: "#4f7f78", test: /physician|dentist|pharmac|midwife|nurse|undertak|embalm/ },
  { id: "learning", label: "Teachers and pastors", color: "#a8843f", test: /teacher|school|pastor|minister|church|sexton/ },
  { id: "trades", label: "Printers, blacksmiths and the trades", color: "#5c8a3c", test: /printer|blacksmith|carpenter|mason|painter|mechanic|cooper|shoe/ },
  { id: "business", label: "Insurance, real estate, banking and public service", color: "#2f5f86", test: /insurance|real estate|loan|notary|mail|clerk|marshal|alderman|furnished rooms|treasurer|secretary|president/ },
  { id: "arts", label: "Musicians", color: "#c06a2b", test: /music/ },
  { id: "other", label: "Work not yet read", color: "#8a8478", test: /.*/ },
];

export const groupOf = (work: string): GroupId => STORY_GROUPS.find((g) => g.test.test((work || "").toLowerCase()))!.id;

/** What the directory says about the address: lived there, worked there, or both. */
export const kindWords = (kind: string) => (kind === "home" ? "Lived here" : kind === "work" ? "Worked here" : kind === "home and work" ? "Lived and worked here" : kind);
