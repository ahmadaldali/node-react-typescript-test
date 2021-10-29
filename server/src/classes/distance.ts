import Place from "./place";

class Distance {
  private place1: Place;
  private place2: Place;

  constructor(p1: Place, p2: Place) {
    this.place1 = p1;
    this.place2 = p2;
  }

  private convertFromDegToRad(degree: number) {
    const pi = Math.PI;
    return degree * (pi / 180);
  }

  public getDistance(): number {
    let lat1: number = this.place1.location.lat;
    let lng1: number = this.place1.location.lng;
    let lat2: number = this.place2.location.lat;
    let lng2: number = this.place2.location.lng;

    //convert to Radian
    lat1 = this.convertFromDegToRad(lat1);
    lng1 = this.convertFromDegToRad(lng1);
    lat2 = this.convertFromDegToRad(lat2);
    lng2 = this.convertFromDegToRad(lng2);

    const deltaLng: number = lng2 - lng1;
    const deltaLat = lat2 - lat1;

    let result: number =
      Math.pow(Math.sin(deltaLat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLng / 2), 2);

    result = 2 * Math.asin(Math.sqrt(result));

    //convert to KM
    const R: number = 6371;
    result = result * R;

    return result;
  }
}
export = Distance;
