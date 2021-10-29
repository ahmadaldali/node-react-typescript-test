"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDistanceWithSecondLocation_1 = require("../helper/getDistanceWithSecondLocation");
test("Distance Test", function () {
    /* the closet office to your office. with distance is 3.81
    "location": "London",
    "address": "No1 Royal Exchange, London, EC3V 3DG",
    "coordinates": "51.5136102,-0.08757919999993646"
    */
    var distance = (0, getDistanceWithSecondLocation_1.getDistanceWithSecondLocation)("51.5136102,-0.08757919999993646");
    expect(3.81).toBe(distance);
});
