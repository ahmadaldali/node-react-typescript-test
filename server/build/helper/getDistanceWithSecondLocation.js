"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistanceWithSecondLocation = void 0;
var Place = require("../classes/place");
var Distance = require("../classes/distance");
var centralLondon_1 = require("./centralLondon");
var getCoordinatesFromOffice_1 = require("./getCoordinatesFromOffice");
//this module to calculate the distance between your office and the other office (between two places)
var getDistanceWithSecondLocation = function (coordinates) {
    //get coordinates from other office as numbers
    var partner_office_location = (0, getCoordinatesFromOffice_1.getCoordinatesFromOffice)(coordinates);
    //convert  main office and the other office into place type
    var place1 = new Place(centralLondon_1.MAIN_LOCATION);
    var place2 = new Place(partner_office_location);
    //calculate the distance ... (KM)
    var distance = new Distance(place1, place2);
    //return 2 numbers only from the decimal part
    var result = Number(distance.getDistance().toFixed(2));
    //return the final result
    return result;
};
exports.getDistanceWithSecondLocation = getDistanceWithSecondLocation;
