/**
 * Root & Simmer — shared words for every project page (the "What if…?" visions, the Demolition page and more).
 * Same rules as content/site.ts: edit the words between the quotes and save.
 */

/** How Root & Simmer helps, shown on every project page. */
export const rootnsimmerHelps = {
  title: "How Root & Simmer helps",
  intro: "Root & Simmer Hospitality Co. is here to support the Lincolnville Community Redevelopment Agency (CRA) and the neighbors it serves, with a service that answers the CRA’s own concerns. We do not bid on City work or manage City property. We do the groundwork that helps good decisions get made.",
  ways: [
    { title: "Get the forms and records", body: "We request and gather every City, County and State record and form a project needs: permits, Historic Architectural Review Board (HARB) files, property records, maps, minutes and budget pages." },
    { title: "Explain them in plain words", body: "We read the records and write the narrative: what the data shows, what it leaves open, and what it means for the people who live here, with every source named." },
    { title: "Preserve history and homes", body: "We research and record the story of each place and the families connected to it, so that history is kept and the homes still standing stay standing." },
    { title: "Support the CRA – Lincolnville", body: "We bring neighbors’ voices, verified history and volunteer hands to the CRA’s work, and we help answer the questions the CRA and the City are asking." },
  ],
};

export type ProjectRecord = { title: string; source: string; href?: string; note: string; kind?: "PDF" | "Web page" };
export type ProjectConcern = { concern: string; help: string };
