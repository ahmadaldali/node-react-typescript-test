"use strict";
var Distance = /** @class */ (function () {
    function Distance(p1, p2) {
        this.place1 = p1;
        this.place2 = p2;
    }
    Distance.prototype.convertFromDegToRad = function (degree) {
        var pi = Math.PI;
        return degree * (pi / 180);
    };
    Distance.prototype.getDistance = function () {
        var lat1 = this.place1.location.lat;
        var lng1 = this.place1.location.lng;
        var lat2 = this.place2.location.lat;
        var lng2 = this.place2.location.lng;
        //convert to Radian
        lat1 = this.convertFromDegToRad(lat1);
        lng1 = this.convertFromDegToRad(lng1);
        lat2 = this.convertFromDegToRad(lat2);
        lng2 = this.convertFromDegToRad(lng2);
        var deltaLng = lng2 - lng1;
        var deltaLat = lat2 - lat1;
        var result = Math.pow(Math.sin(deltaLat / 2), 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLng / 2), 2);
        result = 2 * Math.asin(Math.sqrt(result));
        //convert to KM
        var R = 6371;
        result = result * R;
        return result;
    };
    return Distance;
}());
module.exports = Distance;
