"use strict";
var getDistanceWithSecondLocation_1 = require("../../helper/getDistanceWithSecondLocation");
var FilterOffices = /** @class */ (function () {
    function FilterOffices() {
        //filter array - ex: distance and location
        this.filters = [];
        //data array
        this.offices = [];
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
    }
    //add what you want to filter it - setter for data
    FilterOffices.prototype.setOffices = function (o) {
        this.offices = o;
    };
    //add filters to array - when you want to add new filter just call this func
    FilterOffices.prototype.addFilter = function (newFilter) {
        this.filters.push(newFilter);
    };
    //getter for data - want this func to get data after filter it
    FilterOffices.prototype.getOffices = function () {
        return this.offices;
    };
    //distance filter
    FilterOffices.prototype.filterAccordingDistance = function () {
        //get filters array
        var filters = this.filters;
        //pass for offices
        this.offices = this.offices.filter(function (office) {
            for (var i = 0; i < filters.length; i++) {
                //calculate distance between this office and your company office
                var distance = (0, getDistanceWithSecondLocation_1.getDistanceWithSecondLocation)(office.coordinates.trim());
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
    };
    return FilterOffices;
}()); //class
module.exports = FilterOffices;
