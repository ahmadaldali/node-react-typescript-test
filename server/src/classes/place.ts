import { LocationType } from "../types/partnerType";

class Place {
  public location: LocationType;
  constructor(loc: LocationType) {
    this.location = loc;
  }
}
export = Place;
