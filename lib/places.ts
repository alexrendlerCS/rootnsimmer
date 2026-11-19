/** The Lincolnville Places Map groups and data shape, shared by the page and the map. */
export type Place = { name: string; group: GroupId; kind: string; address: string; lat: number; lng: number };
export type PlacesData = { built: string; boundary: [number, number][]; places: Place[] };
export type GroupId = "parks" | "food" | "faith" | "culture" | "business";

export const GROUPS: { id: GroupId; label: string; color: string }[] = [
  { id: "parks", label: "Parks", color: "#5c8a3c" },
  { id: "food", label: "Restaurants and cafés", color: "#a32e28" },
  { id: "faith", label: "Churches", color: "#4f7f78" },
  { id: "culture", label: "Museums and community places", color: "#a8843f" },
  { id: "business", label: "Shops and businesses", color: "#6d4f7c" },
];
