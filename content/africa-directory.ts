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
  narrative: [
    "Open the directory and Little Africa comes alive. Barbers kept chairs downtown on Granada, King and St. George Streets and on Washington Street closer to home. There were tailors and a dressmaker, masons, painters, a blacksmith and a printer, grocers at St. Francis and Washington Streets and on Bridge Street, and restaurants on Washington and Charlotte Streets.",
    "Teachers lived on Moore Street. Dr. D.W. Roberts, a physician, worked at 61 Bridge Street and lived on Central Avenue, today’s Martin Luther King Avenue. Rev. T.A. Glymph was pastor of First Baptist Church on St. Francis Street, and Rev. M.D. Certain of St. Paul A.M.E. Church, listed then on Washington Street.",
    "The directory names a city marshal, mail carriers, a sexton, an alderman and the president of the Lincoln Temperance Society. Many people worked downtown and came home to Oneida, Lincoln and St. Francis Streets. Street by street, it shows working people and neighbors building a community.",
  ],
  note: "Entries are transcribed from a compiled directory and are still being checked against the original directory pages. Spellings and job titles are as the directory gives them. Some workplaces, such as Granada, King, St. George and Charlotte Streets, are downtown, outside Lincolnville.",
  evidence: "Directory entry, 1885–1907",
};

export const directory: DirectoryStreet[] = [
  { street: "Bernard Street", people: [{ name: "Gray, Katie", where: "27 Bernard Street", role: "Dress maker" }] },
  {
    street: "Bridge Street",
    people: [
      { name: "Nottage, William", where: "57 Bridge Street", role: "Tailor" },
      { name: "Huertas, Toney", where: "Bridge Street", role: "Painter" },
      { name: "Roberts, Dr. D.W.", where: "61 Bridge Street (work); residence: 124 Central Avenue", role: "Physician" },
      { name: "Duncan, S.W.", where: "74 Bridge Street", role: "Grocery" },
    ],
  },
  { street: "Bronson Street", people: [{ name: "Morris, James", where: "Bronson Street", role: "Mason" }] },
  { street: "Central Avenue (now Martin Luther King Avenue)", people: [{ name: "Roberts, Dr. D.W.", where: "124 Central Avenue (residence); work: 61 Bridge Street", role: "Physician" }] },
  {
    street: "Charlotte Street",
    people: [
      { name: "Collie, John", where: "Charlotte Street", role: "Restaurant" },
      { name: "Roundtree, R.J.", where: "240 Charlotte Street", role: "Lunchroom" },
    ],
  },
  {
    street: "Granada Street",
    people: [
      { name: "Burke, W.A.", where: "40 Granada Street", role: "Tailor" },
      { name: "Carr, E.", where: "44 Granada Street", role: "Restaurant" },
      { name: "Johnson & Parks", where: "45 Granada Street", role: "Barber" },
      { name: "Parks, W.M.", where: "46 Granada Street (work); residence: 66 Oneida Street", role: "Barber" },
      { name: "Collie, J.M.", where: "48-50 Granada Street (work); residence: 58 Oneida Street", role: "Saloon" },
    ],
  },
  {
    street: "King Street",
    people: [
      { name: "Pappy, A.A.", where: "23 King Street (work); residence: 95 Oneida Street", role: "Barber" },
      { name: "Jackson, Louis", where: "48 King Street", role: "Sailor" },
    ],
  },
  {
    street: "Lincoln Street",
    people: [
      { name: "Martin, H.W.", where: "73 Lincoln Street (residence); restaurant: 62 Washington Street", role: "Restaurant" },
      { name: "Pappy, Frank", where: "83 Lincoln Street", role: "Barber" },
      { name: "Colvin, J.W.", where: "102 Lincoln Street", role: "Mail carrier" },
    ],
  },
  {
    street: "Lincolnville (street not given)",
    people: [
      { name: "Bryant, Alexander", where: "Lincolnville", role: "Clerk at W. Lyon & Company" },
      { name: "Lee, Butler", where: "Lincolnville", role: "Mason" },
      { name: "Papino, John", where: "Lincolnville", role: "City marshal; mason" },
      { name: "Savelle, Bartola", where: "Lincolnville", role: "Painter" },
      { name: "Scott, Rev. D.S.", where: "Lincolnville", role: "Minister" },
      { name: "Sharpe, George H.", where: "Lincolnville", role: "Clerk" },
      { name: "Van Dyke, William A.", where: "Lincolnville", role: "Carpenter; house" },
      { name: "Waiters, William", where: "Lincolnville", role: "Butcher" },
    ],
  },
  {
    street: "Moore Street",
    people: [
      { name: "Plair, S.M.", where: "119 Moore Street", role: "Teacher" },
      { name: "Jackson, L.A.", where: "120 Moore Street", role: "Teacher" },
    ],
  },
  {
    street: "Oneida Street",
    people: [
      { name: "Parks, W.M.", where: "66 Oneida Street (residence); work: 46 Granada Street", role: "Barber" },
      { name: "Kelton, R.B.", where: "70 Oneida Street", role: "Printer" },
      { name: "Sevelle, Sam", where: "76 Oneida Street (residence); grocery: St. Francis & Washington Streets", role: "Grocer" },
      { name: "Oliveros, G.", where: "79 Oneida Street", role: "Blacksmith" },
      { name: "Davenport, P.", where: "85 Oneida Street", role: "Mail carrier" },
      { name: "Pappy, A.A.", where: "95 Oneida Street (residence); work: 23 King Street", role: "Barber" },
    ],
  },
  { street: "Orange Street", people: [{ name: "Martin, Stephen", where: "Orange Street", role: "Mason" }] },
  { street: "Riberia Street", people: [{ name: "Trent, Jno.", where: "224 Riberia Street", role: "Profession not listed" }] },
  { street: "Spanish Street", people: [{ name: "Martin, Alexander", where: "Spanish Street", role: "Mason" }] },
  { street: "St. Benedict Street", people: [{ name: "Williams, C.J.", where: "82 St. Benedict Street", role: "Sexton" }] },
  {
    street: "St. Francis Street",
    people: [
      { name: "Evans, Charles T.", where: "88 St. Francis Street (residence); work: 66 Washington Street", role: "Barber" },
      { name: "Glymph, Rev. T.A.", where: "91 St. Francis Street (First Baptist Church)", role: "Pastor" },
    ],
  },
  {
    street: "St. George Street",
    people: [
      { name: "Chavis, G.W.", where: "13 St. George Street (work); residence: 68 Abbott Street", role: "Barber" },
      { name: "Mayes, S.M.", where: "37 St. George Street", role: "Boots and Shoes" },
    ],
  },
  {
    street: "Washington Street",
    people: [
      { name: "Evans, Charles T.", where: "66 Washington Street (work); residence: 88 St. Francis Street", role: "Barber" },
      { name: "Martin, H.W.", where: "62 Washington Street (restaurant); residence: 73 Lincoln Street", role: "Restaurant" },
      { name: "Higdon, Matt", where: "101 Washington Street", role: "Barber" },
      { name: "Certain, Rev. M.D.", where: "142 Washington Street (St. Paul A.M.E. Church)", role: "Pastor" },
      { name: "Newman, Jas.", where: "Washington Street", role: "Restaurant" },
    ],
  },
  {
    street: "Street not listed",
    people: [
      { name: "Morgan, Rev.", where: "Address not listed", role: "African Methodist; St. Mary’s Baptist Church" },
      { name: "Nattiel, William", where: "Address not listed", role: "President, Lincoln Temperance Society" },
      { name: "Papy, D.M.", where: "St. Augustine; street not listed", role: "Alderman" },
      { name: "King, C.S.", where: "Address not listed", role: "Esperanza Grocery" },
    ],
  },
];

/** The short card on the Locator Map page. */
export const directoryTeaser = {
  title: "Then and now: the Little Africa Directory",
  body: "The map shows Lincolnville today. Step back a century: the city directories of 1885 to 1907 list the neighborhood’s barbers, grocers, teachers, masons, pastors and a physician, many on the same streets you see here.",
  link: "Walk the old directory, street by street",
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
