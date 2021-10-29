import { Filter } from "../../types/filterType";
import { PartnerType } from "../../types/partnerType";
import { OfficeType } from "../../types/partnerType";
import FilterOffices from "../../classes/filters/offices";

class FilterPartners {
  //normal filter array - ex: id and website ... etc
  private filters: Filter[] = [];
  //to filter related office
  private filterOffice: FilterOffices;
  //data array
  private partners: PartnerType[];

  //firstly, init the partners and filter for offices
  constructor(p: PartnerType[], f: FilterOffices) {
    this.partners = p;
    this.filterOffice = f;
  }

  //add filters to array - when you want to add new normal filter just call this func
  public addFilter(newFilter: Filter): void {
    this.filters.push(newFilter);
  }

  //getter for data - want this func to get data after filter it
  public getPartners(): PartnerType[] {
    return this.partners;
  }

  //offices filter - check if the filtered offices is empty or no
  public filterAccordingOffice(): FilterPartners {
    //get office filter
    let filterOffice: FilterOffices = this.filterOffice;
    //pass for partners
    this.partners = this.partners.filter(function(partner) {
      //get offices of each partner
      let offices: OfficeType[] = partner.offices;
      //set offices for the filter
      filterOffice.setOffices(offices);

      //filter offices according distance
      filterOffice = filterOffice.filterAccordingDistance();
      /*
      //if you want to add location filter in the future / just uncomment the next line
      filterOffice = filterOffice.filterAccordingLocation();
      */

      //get filtered offices (get final result)
      offices = filterOffice.getOffices();

      //if there is no office the return false - that mean do not add this partner
      if (offices.length == 0) return false;
      //if there is at least one office then return this partner with filtered offices only available
      //in other words, update offices of this partner with filtered offices only.
      partner.offices = offices;
      return true;
    });
    //return the object
    return this;
  }

  /*
  //to add normal filter just write a new function and filter partner according it like in office
  //etc ...
  */
  
  //sort function
  public sortPartnerAsNameAsc():void{
    //sort the result according company name (organization) asc
    this.partners.sort((p1, p2) =>
      p1.organization.toUpperCase() > p2.organization.toUpperCase() ? 1 : -1
    );
  }

} //class
export = FilterPartners;
