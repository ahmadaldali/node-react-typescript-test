"use strict";
var FilterPartners = /** @class */ (function () {
    //firstly, init the partners and filter for offices
    function FilterPartners(p, f) {
        //normal filter array - ex: id and website ... etc
        this.filters = [];
        this.partners = p;
        this.filterOffice = f;
    }
    //add filters to array - when you want to add new normal filter just call this func
    FilterPartners.prototype.addFilter = function (newFilter) {
        this.filters.push(newFilter);
    };
    //getter for data - want this func to get data after filter it
    FilterPartners.prototype.getPartners = function () {
        return this.partners;
    };
    //offices filter - check if the filtered offices is empty or no
    FilterPartners.prototype.filterAccordingOffice = function () {
        //get office filter
        var filterOffice = this.filterOffice;
        //pass for partners
        this.partners = this.partners.filter(function (partner) {
            //get offices of each partner
            var offices = partner.offices;
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
            if (offices.length == 0)
                return false;
            //if there is at least one office then return this partner with filtered offices only available
            //in other words, update offices of this partner with filtered offices only.
            partner.offices = offices;
            return true;
        });
        //return the object
        return this;
    };
    /*
    //to add normal filter just write a new function and filter partner according it like in office
    //etc ...
    */
    //sort function
    FilterPartners.prototype.sortPartnerAsNameAsc = function () {
        //sort the result according company name (organization) asc
        this.partners.sort(function (p1, p2) {
            return p1.organization.toUpperCase() > p2.organization.toUpperCase() ? 1 : -1;
        });
    };
    return FilterPartners;
}()); //class
module.exports = FilterPartners;
