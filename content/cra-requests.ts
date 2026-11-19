/**
 * Root & Simmer — Community requests for the CRA (/cra-lincolnville/requests).
 * Questions, ideas and concerns that members and neighbors want raised at a Lincolnville CRA meeting.
 * Kimberly's first four requests (November 2026). To add one, copy a block between { } and change the words.
 * Status words: "To raise at the next meeting", "Raised", "Answered", "In progress".
 */
export type CraRequest = { id: string; title: string; ask: string; why: string; status: string };

export const requestsPage = {
  lede: "Members and neighbors can send a question, idea or concern for the Lincolnville Community Redevelopment Agency (CRA). We gather them here, carry them to public comment at CRA meetings, and post what we hear back.",
  listTitle: "Requests to raise at CRA meetings",
  sendTitle: "Send a request",
  sendBody: "Have a question, an idea or a concern about Lincolnville? Send it to us in a sentence or two. We will add it to the list and raise it during public comment, or help you raise it yourself.",
  button: "Send a request for the CRA",
  subject: "A request for the Lincolnville CRA meeting",
  body: "Hello Kimberly,\n\nI would like this raised at a Lincolnville CRA meeting.\n\nQuestion, idea or concern:\nWhy it matters:\nWhere in Lincolnville (street or place, if any):\nMy name:\nOK to list my name with the request? (yes / no):\nBest way to reach me:",
  note: "Root & Simmer Hospitality Co. is independent. Requests are carried to the CRA as public comment; the City and the CRA decide what happens. Names are never listed without permission.",
};

export const craRequests: CraRequest[] = [
  {
    id: "virtual-meetings",
    title: "Hold CRA meetings online as well as in person",
    ask: "Offer every Lincolnville CRA meeting online, with a way to watch live and to give public comment from home.",
    why: "Many residents work, care for family or cannot easily get to a meeting in person. Online meetings let more of Lincolnville hear the plans and be heard.",
    status: "To raise at the next meeting",
  },
  {
    id: "freedom-trail-markers",
    title: "Restore the Freedom Trail markers and plaques",
    ask: "Work with ACCORD, which runs the Freedom Trail, to refresh or replace the civil rights markers and plaques in Lincolnville so every one can be read clearly.",
    why: "Some markers have faded or weathered and can no longer be read. They tell the story of the 1964 movement that Lincolnville is known for, to residents and visitors alike.",
    status: "To raise at the next meeting",
  },
  {
    id: "washington-two-way",
    title: "Open Washington Street to two-way traffic",
    ask: "Study opening Washington Street to two-way traffic.",
    why: "Washington Street was Lincolnville’s main Black business district. Two-way traffic could make it easier to reach, help small businesses and bring the street back to life.",
    status: "To raise at the next meeting",
  },
  {
    id: "washington-seating",
    title: "Seating on Washington Street",
    ask: "Explore seating at the church on Washington Street, with the church’s permission, or at a City parking lot, so locals and visitors have a place to sit, eat and rest.",
    why: "There are few places to sit and eat along the street. Seating would give people a reason to stay, walk the neighborhood and support local food businesses.",
    status: "To raise at the next meeting",
  },
];
