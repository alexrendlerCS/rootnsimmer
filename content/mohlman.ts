/**
 * Root & Simmer — Mohlman Research (/lincolnville-history/mohlman-research). MEMBERS ONLY.
 *
 * Visitors see each shelf and the title and a one-line description of each file, with a lock.
 * Signed-in members open the file itself. The files are NEVER put in this project (it is public):
 * they live in Documents\Root & Simmer Member Library\9 Mohlman research\<shelf folder> and are loaded with
 *   node --env-file=.env.local scripts/members-cli.mjs upload-shared --folder "C:\Users\kimbe\Documents\Root & Simmer Member Library"
 * To add a file: put it in the right shelf folder, run that command, then add a line below with its exact file name.
 * Internal working notes (for example the cross-reference audit) go in "_Never share" and are never listed here.
 */

export type ResearchFile = { file: string; title: string; about: string };
export type ResearchShelf = { id: string; title: string; intro: string; files: ResearchFile[]; coming?: string };

export const mohlmanPage = {
  href: "/lincolnville-history/mohlman-research",
  label: "Lincolnville history · Members",
  title: "Mohlman Research",
  subtitle: "Narratives, directories, maps and photographs for members of the Lincolnville Connection",
  intro:
    "Root & Simmer Hospitality Co. organizes historical research on Lincolnville and Black St. Augustine into narratives and indexed sources, read address by address. Published research by historian Geoffrey Mohlman is one of the references we use. We cite it as a reference only; Root & Simmer is independent and not affiliated with that research.",
  membersNote: "The research files are for members of the Root & Simmer Hospitality Exclusively for Lincolnville Community Connection. Members sign in to open them.",
  rule: "Historic house numbers do not always match today’s, and a directory listing shows where someone lived or worked in a given year, not who owned the property.",
};

export const mohlmanShelves: ResearchShelf[] = [
  {
    id: "narratives",
    title: "Narratives",
    intro: "The story of Lincolnville, told from the historical record.",
    files: [
      {
        file: "01 The Lives Between the Landmarks.pdf",
        title: "Lincolnville: The Lives Between the Landmarks",
        about: "Washington Street’s businesses, the homes behind the occupations, a house where teachers boarded, and neighbors who ran a building and loan association, from the 1911–12 city directory.",
      },
    ],
    coming: "More narratives are being added.",
  },
  {
    id: "directories",
    title: "Directories",
    intro: "Who lived and worked here, street by street. The same people are on the Historic Residents Map.",
    files: [
      {
        file: "01 Lincolnville Residents in the City Directories, 1885-1912.pdf",
        title: "Lincolnville Residents in the City Directories, 1885–1912",
        about: "Every resident gathered so far from the city directories of 1885 to about 1912, by street: name, address, work and year.",
      },
      {
        file: "02 St. Augustine City Directory, 1904 - Streets, People and Place.pdf",
        title: "St. Augustine City Directory, 1904: Streets, People and Place",
        about: "The 1904 directory’s street guide, business directory and the start of its list of residents, with the original pages.",
      },
    ],
  },
  {
    id: "maps",
    title: "Maps",
    intro: "How St. Augustine grew, and where Lincolnville sits within it.",
    files: [
      {
        file: "01 Historic Maps of St. Augustine and Lincolnville.pdf",
        title: "Historic Maps of St. Augustine and Lincolnville",
        about: "Development maps of 1904–1917 and 1917–1930, Lincolnville’s location, and the tracts beneath the neighborhood, including the Dumas Tract and the Genovar Addition.",
      },
    ],
  },
  {
    id: "photographs",
    title: "Photographs",
    intro: "The homes, churches and buildings of historic Lincolnville.",
    files: [
      {
        file: "01 Historic Lincolnville Homes and Buildings.pdf",
        title: "Historic Lincolnville Homes and Buildings",
        about: "42 historic photographs of Lincolnville’s homes, churches and community buildings, with the people Richard A. Twine photographed in the 1920s.",
      },
    ],
  },
  {
    id: "originals",
    title: "Original documents",
    intro: "Each story with its original pages: publications, photographs, letters and newspaper pages.",
    files: [
      {
        file: "01 A Lien on Lincolnville.pdf",
        title: "A Lien on Lincolnville",
        about: "A Lincolnville publication: The History, The Writer, The Historian, The Reverend, The Builder, The Mayor and The Beet Queen. 10 original pages.",
      },
      {
        file: "02 Black Community and Religious Life.pdf",
        title: "Black Community & Religious Life",
        about: "Gatherings, worship, outdoor fellowship and baptisms: the congregations and families who sustained community life. 15 photographs.",
      },
      {
        file: "03 St. Augustine in 1899 - Crime, Youth, and a Mayor's Correspondence.pdf",
        title: "St. Augustine in 1899: Crime, Youth, and a Mayor’s Correspondence",
        about: "Newspaper reporting and a June 5, 1899 letter to the mayor about a young man and his family. 4 original pages.",
      },
      {
        file: "04 1964 - Civil Rights, Protest, and the Local Press.pdf",
        title: "1964: Civil Rights, Protest, and the Local Press",
        about: "A handwritten timeline of the spring and summer of 1964, with a June 22, 1964 newspaper clipping. 2 original pages.",
      },
      {
        file: "05 Schools, Education and Community Memory.pdf",
        title: "Schools, Education & Community Memory",
        about: "Two handwritten pages on the history of schooling in St. Augustine.",
      },
      {
        file: "06 The Railway in the Paper Record - A 1916 Payment.pdf",
        title: "The Railway in the Paper Record: A 1916 Payment",
        about: "A Florida East Coast Railway payment and voucher from 1916. 2 original pages.",
      },
      {
        file: "07 Florida East Coast Railway - Letters and Research Notes.pdf",
        title: "Florida East Coast Railway: Letters and Research Notes",
        about: "Railway letters and handwritten notes, read together. 3 original pages.",
      },
      {
        file: "08 West Palm Beach - Correspondence Across Places.pdf",
        title: "West Palm Beach: Correspondence Across Places",
        about: "Handwritten letters that carry the story beyond St. Augustine. 2 original pages.",
      },
      {
        file: "09 Marked Newspaper Clippings - What Researchers Noticed.pdf",
        title: "Marked Newspaper Clippings: What Researchers Noticed",
        about: "Newspaper pages with the passages someone chose to underline and save. 2 original pages.",
      },
    ],
  },
];
