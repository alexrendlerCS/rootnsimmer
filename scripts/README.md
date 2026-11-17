# Lincolnville Home Map data

`build-home-map.mjs` makes `public/data/lincolnville-homes.json`, which the map at `/preserve-historic-homes/map` reads.

1. Download the City of St. Augustine layers for the Lincolnville neighborhood as GeoJSON (EPSG:4326) into one folder:
   `boundary` (Neighborhoods, Neigh = LINCOLNVILLE), `parcels` (City_Parcels: STRAP and site-address fields only),
   `footprints` (BuildingFootprints), `fmsf` (NRHistoricStructures), `age` (Building_Age_Distribution).
   Service root: https://services.arcgis.com/2HXAtOKdBRSMj8is/arcgis/rest/services
2. `npm i --no-save exceljs@4.4.0`
3. `node scripts/build-home-map.mjs <folder> "<Street Files workbook>.xlsx" public/data/lincolnville-homes.json "<folder>/unmatched.csv"`

Never request owner names, mailing addresses or values from the parcel layers. Only rows with Status = "Verified"
show research; the "Story / note", "Status" and "Next step" columns, listing sources and sale notes are never used.
The unmatched list is admin-only: keep it out of the repo.
