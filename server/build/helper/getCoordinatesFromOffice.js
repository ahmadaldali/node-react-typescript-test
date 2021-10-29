"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoordinatesFromOffice = void 0;
//this module to convert coordinates of the office from string into two value...
//(Latitude and Longitude) as numbers (LocationType)
var getCoordinatesFromOffice = function (coordinates) {
    var idx = coordinates.indexOf(",");
    var latAsString = coordinates.substring(0, idx).trim();
    var lngAsString = coordinates.substring(idx + 1);
    var lat = Number(latAsString);
    var lng = Number(lngAsString);
    return {
        lat: lat,
        lng: lng,
    };
};
exports.getCoordinatesFromOffice = getCoordinatesFromOffice;
