/**
 * Root & Simmer — the paperwork for filing a demolition (shown on /preserve-historic-homes/demolition).
 *
 * Every rule and form here comes from the City of St. Augustine's own pages, checked November 17, 2026:
 *   HARB Applications  https://www.citystaug.com/195/Historic-Architectural-Review-Board-Appl
 *   Demolitions        https://www.citystaug.com/194/Demolitions
 * The City changes its forms and fees; check those pages and update this file when it does.
 * Fee amounts are deliberately not copied here: link to the City's current fee schedule instead.
 */

const CITY = "https://www.citystaug.com";

export const filingIntro = {
  title: "Filing for a demolition: the paperwork",
  lede: "For owners who are weighing demolition of all or part of a building, here is what the City asks for, in the order you will need it. The City’s own advice comes first: before deciding to demolish, consider restoring or repairing the building, and look at the local and federal programs that help with preservation costs.",
  source: "From the City of St. Augustine’s Demolitions and HARB Applications pages, as of November 2026.",
};

export const needsReview = {
  title: "Does your building need HARB approval?",
  intro: "The Historic Architectural Review Board (HARB) must approve a demolition before the City issues a demolition permit if the building:",
  items: [
    "Is listed in the Florida Master Site File",
    "Is 50 years old or older",
    "Is designated as a local historic landmark",
    "Is listed on the National or Local Register of Historic Places, on its own or as part of a historic district",
  ],
  note: "These rules apply to every building in the city, whatever its zoning. Most of Lincolnville’s older homes meet at least one of them. Ask Historic Preservation staff if you are unsure: harb@citystaug.com.",
};

export const filingSteps = [
  {
    title: "Talk to Historic Preservation staff first",
    body: "Ask which application your project needs and whether HARB review applies. Email harb@citystaug.com. For a partial project, work that replaces features with matching materials and design may be approved by staff without a hearing.",
  },
  {
    title: "Choose the right application",
    body: "A Certificate of Demolition (Full) is required before completely demolishing any structure 50 years old or older. A Certificate of Demolition (Partial) is required when you permanently remove historic exterior features (roofs, chimneys, exterior walls or finishes, porches, windows, foundations or other visible features) and replace them with a different design or material. Moving a building 50 years or older needs a Certificate of Relocation.",
  },
  {
    title: "Gather the documents",
    body: "Every application needs the signed HARB Application Agreement. A full demolition of a building that is individually listed on the National Register, contributing to a National Register district (as 548 Lincolnville buildings were in 1991), or a local landmark also needs a Condition Assessment Report by a Florida-licensed architect or engineer, and proof of undue economic hardship. A partial demolition needs photographs, scaled drawings and a written justification (see the Submittal Checklist).",
  },
  {
    title: "File through the City’s Permit Portal by the deadline",
    body: "Applications are filed online through the Planning and Building Department’s Permit Portal, by the deadlines in the HARB application schedule, so the City can meet state legal advertising rules. Incomplete applications can be delayed to a later meeting.",
  },
  {
    title: "Pay the fees",
    body: "There is an application fee, plus the cost of the newspaper notice and the letters mailed to neighbors. See the City’s current HARB Application Fee Schedule. Pay online, by check to the City of St. Augustine, or in person at City Hall, 75 King Street, Elevator Lobby B, 4th floor.",
  },
  {
    title: "Present at the hearing",
    body: "HARB meets on the third Thursday of each month unless another date is announced. Once a hearing is set, you or your representative must be ready to present the request. The hearing is public, and neighbors may speak.",
  },
  {
    title: "After a decision",
    body: "An approval is not yet a permit: you still need other development approvals, archaeological review and a building permit before work starts. You may appeal a staff decision to HARB within 30 days. A HARB decision can be appealed to the City Commission, which requires a verbatim transcript of the HARB meeting, paid for by the applicant.",
  },
];

export const hardship = {
  title: "What “proof of undue economic hardship” means",
  intro: "The City defines it as an onerous and excessive financial burden that denying the demolition would place on the owner. The burden of proof is on the applicant. The City’s worksheet lists what may be submitted, including:",
  items: [
    "An estimate of the cost of the proposed demolition, and of the cost to rehabilitate",
    "A professional’s estimate of whether rehabilitation or reuse of the building is economically feasible",
    "The property’s assessed value for the two most recent assessments, and real estate taxes for the previous two years",
    "Any mortgage balance and annual debt service for the previous two years",
    "Income and expenses from the property for the previous two years, if it earns income",
    "The owner’s intended use of the property if the demolition is approved",
  ],
};

export const floodExemption = {
  title: "A possible exemption in flood zones",
  body: "A privately owned single-family home in a flood zone may be exempt from HARB review if the owner provides substantial evidence, such as a recent sealed survey or elevation certificate, that the finished floor is below the City’s required base flood elevation for that zone, under Florida Statute 553.79(26). Confirm with the City how it applies to your home.",
};

/** The City's official forms and rules, linked rather than copied so owners always get the current version. */
export const cityForms = [
  { title: "HARB Application Agreement", note: "Required with every HARB application; signed by all owners", href: `${CITY}/DocumentCenter/View/7012/HARB-Application-Agreement`, kind: "PDF" },
  { title: "Undue Economic Hardship Worksheet", note: "For a full demolition of a listed, contributing or landmark building", href: `${CITY}/DocumentCenter/View/6797/UndueEconomicHardshipWorksheet`, kind: "PDF" },
  { title: "HARB Submittal Checklist", note: "What photographs, drawings and justification to include, by type of work", href: `${CITY}/DocumentCenter/View/7018/HARB-Submittal-Checklist`, kind: "PDF" },
  { title: "Architectural Guidelines for Historic Preservation", note: "The standards HARB applies, including the Plan Requirements", href: `${CITY}/DocumentCenter/View/153/Architectural-Guidelines-for-Historic-Preservation-PDF`, kind: "PDF" },
  { title: "Window Condition Assessment Survey", note: "For projects that replace historic windows", href: `${CITY}/DocumentCenter/View/6796/WindowConditionAssessmentSurveyForm-FillablePDF`, kind: "PDF" },
  { title: "Appeal Form", note: "To appeal a staff decision to HARB within 30 days", href: `${CITY}/DocumentCenter/View/4421/Appeal-Form-PDF`, kind: "PDF" },
  { title: "HARB Applications, fees and deadlines", note: "The City’s page with the current fee schedule and application types", href: `${CITY}/195/Historic-Architectural-Review-Board-Appl`, kind: "Web page" },
  { title: "HARB meeting schedule and deadlines", note: "Meeting dates and the filing deadline for each", href: `${CITY}/601/12479/Historic-Architectural-Review-Board-HARB`, kind: "Web page" },
  { title: "Planning and Building Permit Portal", note: "Where applications are filed and fees are paid", href: "https://gis.citystaug.com/COSAPermits/login", kind: "Web page" },
];

export const filingContact = "Questions about your building: City of St. Augustine Historic Preservation staff, harb@citystaug.com. Planning & Building: 904-825-1065.";
