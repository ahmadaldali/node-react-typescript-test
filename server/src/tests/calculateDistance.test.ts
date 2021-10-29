import {getDistanceWithSecondLocation} from '../helper/getDistanceWithSecondLocation';

test("Distance Test", () => {
   
  /* the closet office to your office. with distance is 3.81
  "location": "London",
  "address": "No1 Royal Exchange, London, EC3V 3DG",
  "coordinates": "51.5136102,-0.08757919999993646"
  */
  const distance: number = getDistanceWithSecondLocation(
    "51.5136102,-0.08757919999993646"
  );

  expect(3.81).toBe(distance);

});