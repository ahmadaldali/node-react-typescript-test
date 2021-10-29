import FilterOffices from "../classes/filters/offices";

//Filter Gallus Consulting company offices with range 10
test("Filter Offices with 10 KM Test For a 'Gallus Consulting' partner", () => {
  //set filter of offices
  let filterOffice = new FilterOffices();
  filterOffice.addFilter({
    key: "distance",
    value: 10,
  });

  //define offices of Gallus Consulting company
  const offices = [
    {
      location: "Northampton",
      address:
        "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG",
      coordinates: "52.277409,-0.877935999999977",
    },
    {
      location: "London",
      address: "No1 Royal Exchange, London, EC3V 3DG",
      coordinates: "51.5136102,-0.08757919999993646",
    },
    {
      location: "Manchester",
      address: "3 Hardman Square, Spinningfields, Manchester, M3 3EB",
      coordinates: "53.47990859999999,-2.2510892999999896",
    },
  ];

  //filter the office (with distance 10)
  filterOffice.setOffices(offices);
  filterOffice = filterOffice.filterAccordingDistance();
  //get the results / the filtered offices of this company in range 10 KM
  const results = filterOffice.getOffices();

  //define the expected result / the filtered offices
  const expected = [
    {
      location: "London",
      address: "No1 Royal Exchange, London, EC3V 3DG",
      coordinates: "51.5136102,-0.08757919999993646",
    },
  ];
  //run the test
  expect(expected).toEqual(results);
});

//Filter Gallus Consulting company offices with range 200
test("Filter Offices with 200 KM Test For a 'Gallus Consulting' partner", () => {
  //set filter of offices
  let filterOffice = new FilterOffices();
  filterOffice.addFilter({
    key: "distance",
    value: 200,
  });

  //define offices of Gallus Consulting company
  const offices = [
    {
      location: "Northampton",
      address:
        "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG",
      coordinates: "52.277409,-0.877935999999977",
    },
    {
      location: "London",
      address: "No1 Royal Exchange, London, EC3V 3DG",
      coordinates: "51.5136102,-0.08757919999993646",
    },
    {
      location: "Manchester",
      address: "3 Hardman Square, Spinningfields, Manchester, M3 3EB",
      coordinates: "53.47990859999999,-2.2510892999999896",
    },
  ];

  //filter the office (with distance 200)
  filterOffice.setOffices(offices);
  filterOffice = filterOffice.filterAccordingDistance();
  //get the results / the filtered offices of this company in range 200 KM
  const results = filterOffice.getOffices();

  //define the expected result / the filtered offices
  const expected = [
    {
      location: "Northampton",
      address:
        "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG",
      coordinates: "52.277409,-0.877935999999977",
    },
    {
      location: "London",
      address: "No1 Royal Exchange, London, EC3V 3DG",
      coordinates: "51.5136102,-0.08757919999993646",
    },
  ];
  //run the test
  expect(expected).toEqual(results);
});

//Filter Balance at Work company offices with range 50
test("Filter Offices with 50 KM Test For a 'Balance at Work' partner", () => {
  //set filter of offices
  let filterOffice = new FilterOffices();
  filterOffice.addFilter({
    key: "distance",
    value: 50,
  });

  //define offices of Balance at Work company
  const offices = [
    {
      location: "Sydney, Australia",
      address: "Suite 1308, 109 Pitt St \nSydney 2000",
      coordinates: "-33.8934219,151.20404600000006",
    },
  ];

  //filter the office (with distance 50)
  filterOffice.setOffices(offices);
  filterOffice = filterOffice.filterAccordingDistance();
  //get the results / the filtered offices of this company in range 10 KM
  const results = filterOffice.getOffices();

  //define the expected result / the filtered offices
  const expected: any[] = [];

  //run the test
  expect(expected).toEqual(results);
});
