import { LocationType } from "../types/partnerType";

//this module to convert coordinates of the office from string into two value...
//(Latitude and Longitude) as numbers (LocationType)

export const getCoordinatesFromOffice = (coordinates: string): LocationType => {
  const idx: number = coordinates.indexOf(",");
  const latAsString: string = coordinates.substring(0, idx).trim();
  const lngAsString: string = coordinates.substring(idx + 1);
  const lat: number = Number(latAsString);
  const lng: number = Number(lngAsString);

  return {
    lat: lat,
    lng: lng,
  };

};
