import Place = require("../classes/place");
import Distance = require("../classes/distance");
import { LocationType } from "../types/partnerType";
import { MAIN_LOCATION } from "./centralLondon";
import { getCoordinatesFromOffice } from "./getCoordinatesFromOffice";

//this module to calculate the distance between your office and the other office (between two places)
export const getDistanceWithSecondLocation = (coordinates: string): number => {
  //get coordinates from other office as numbers
  const partner_office_location: LocationType = getCoordinatesFromOffice(
    coordinates
  );
  
  //convert  main office and the other office into place type
  const place1: Place = new Place(MAIN_LOCATION);
  const place2: Place = new Place(partner_office_location);
  //calculate the distance ... (KM)
  const distance: Distance = new Distance(place1, place2);
  //return 2 numbers only from the decimal part
  const result: number = Number(distance.getDistance().toFixed(2));
  //return the final result
  return result;
};
