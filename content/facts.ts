/**
 * Root & Simmer — short history facts placed around the site for impact (Kimberly, Nov 2026).
 * Each one comes from a record we already cite: the 1991 National Register nomination for the Lincolnville
 * Historic District, the city directories, the St. Augustine Historical Society or the City.
 * Historic names only; no living residents. Edit the words between the quotes and save.
 */
export type Fact = { mark: string; text: string; source: string };

export const facts = {
  founding: { mark: "1866", text: "Six newly freed people leased land beside Maria Sanchez Creek: Aaron Dupont, Miles Hancock, Matilda Papy, Peter Sanks, Tom Solana and Harriet Weedman. Their settlement, Little Africa, grew into Lincolnville.", source: "St. Augustine Historical Society; 1991 National Register nomination" },
  before1930: { mark: "548", text: "In 1991 the National Register counted 548 Lincolnville buildings as contributing to its history, every one built before 1930. A City survey of 2019–2021 found 140 addresses where a recorded historic building was gone.", source: "1991 National Register nomination; City of St. Augustine survey, 2019–2021" },
  oneida: { mark: "1899", text: "One block of Oneida Street was home to a printer, a blacksmith, a grocer, a mail carrier and two barbers who walked to their chairs downtown.", source: "St. Augustine city directory, 1899" },
  washington: { mark: "1909", text: "The Odd Fellows Hall rose three stories in brick at 92 Washington Street, on what the National Register calls Lincolnville’s main Black business district. Halls like it held movie theaters, restaurants and shops.", source: "1991 National Register nomination" },
  churches: { mark: "1873", text: "St. Paul A.M.E. was founded in 1873, St. Mary’s Missionary Baptist in 1875 and First Baptist in 1887. Lincolnville’s churches gave the neighborhood worship, schooling, leadership and mutual aid.", source: "Each church’s public listing" },
  march: { mark: "1964", text: "Andrew Young Crossing in the Plaza marks the 1964 march from Lincolnville. Many neighborhood places carry the names of people who shaped it, among them Twine Park, for Henry Twine, the City’s first Black Vice Mayor, and his wife Katherine “Kat” Twine.", source: "City of St. Augustine" },
  directories: { mark: "40", text: "The 1991 National Register dated Lincolnville’s buildings with forty city directories, two bird’s-eye views and Sanborn maps from 1884 to 1958. We research with the same records today.", source: "1991 National Register nomination" },
  twine: { mark: "1920s", text: "Richard A. Twine photographed Lincolnville from within the community: its families, churches, businesses and celebrations. His pictures are among the few that show the neighborhood through its own eyes.", source: "Richard A. Twine collection" },
  welters: { mark: "1888", text: "A dentist’s home on De Haven Street, built between 1888 and 1894, is still on the 1991 list of contributing buildings. Every home’s story starts with its age and its record.", source: "1991 National Register nomination; city directory, 1911–12" },
  teachers: { mark: "1899", text: "Two teachers, S.M. Plair and L.A. Jackson, lived side by side on Moore Street, in the neighborhood whose children they taught.", source: "St. Augustine city directory, 1899" },
  records: { mark: "1884", text: "Sanborn fire insurance maps of Lincolnville run from 1884 to 1958, showing each building’s outline, size and use. They are among the records we gather for your home.", source: "1991 National Register nomination" },
} satisfies Record<string, Fact>;
