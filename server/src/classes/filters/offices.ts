import { Filter } from "../../types/filterType";
import { OfficeType } from "../../types/partnerType";
import { getDistanceWithSecondLocation } from "../../helper/getDistanceWithSecondLocation";

class FilterOffices {
  //filter array - ex: distance and location
  private filters: Filter[] = [];
  //data array
  private offices: OfficeType[] = [];

  //add what you want to filter it - setter for data
  public setOffices(o: OfficeType[]) {
    this.offices = o;
  }

  //add filters to array - when you want to add new filter just call this func
  public addFilter(newFilter: Filter): void {
    this.filters.push(newFilter);
  }

  //getter for data - want this func to get data after filter it
  public getOffices(): OfficeType[] {
    return this.offices;
  }

  //distance filter
  public filterAccordingDistance(): FilterOffices {
    //get filters array
    let filters: Filter[] = this.filters;
    //pass for offices
    this.offices = this.offices.filter(function(office) {
      for (let i = 0; i < filters.length; i++) {
        //calculate distance between this office and your company office
        const distance: number = getDistanceWithSecondLocation(
          office.coordinates.trim()
        );
        //select distance filter from filters array
        //&& check from distance condition
        if (filters[i].key == "distance" && distance > filters[i].value)
          return false;
        //console.log(office.address + " office is inside the range with distance is: " + distance + ' KM');
      }
      return true;
    });
    //return the object
    return this;
  }

  /*
  //for future: if you want to add location filter, just implement this func and call it
  public filterAccordingLocation():FilterOffices {
    let filters: Filter[] = this.filters;
    this.offices = this.offices.filter(function(office) {
      for (let i = 0; i < filters.length; i++) {
        const location: string = office.location;
        //select location filter from filters array
        //&& check from location condition
        if (filters[i].key == "location" && location != filters[i].value)
          return false;
      }
      return true;
    });
    return this;
  }
*/

  /*
  //to add another filter just write a new function and filter office according it
  //etc ..
  */
} //class
export = FilterOffices;
