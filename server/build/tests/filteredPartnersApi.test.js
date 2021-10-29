"use strict";
var request = require("supertest");
var server = require("../index");
describe("Test Api", function () {
    test("GET /api/filtered_partners", function (done) {
        request(server)
            .get("/api/filtered_partners?distance=100")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect(function (res) {
            res.body.final_partners = [
                {
                    id: 4,
                    urlName: "blue-square-360",
                    organization: "Blue Square 360",
                    customerLocations: "globally",
                    willWorkRemotely: true,
                    website: "http://www.bluesquare360.com/",
                    services: "Blue Square 360 provides a professionally managed service covering all areas of a 360Â° Feedback initiative. We're experienced in supporting projects of all sizes, and always deliver a personal service that provides the level of support you need to ensure your 360 initiative delivers results for the business.",
                    offices: [
                        {
                            location: "London, UK",
                            address: "St Saviours Wharf, London SE1 2BE",
                            coordinates: "51.5014767,-0.0713608999999451",
                        },
                    ],
                },
                {
                    id: 13,
                    urlName: "gallus-consulting",
                    organization: "Gallus Consulting",
                    customerLocations: "across the UK",
                    willWorkRemotely: true,
                    website: "http://www.gallusconsulting.com/",
                    services: "We're strategy consultants with a difference - we work with organisations and their leaders to take them from strategy to reality. In our work with leaders we often use 360-degree feedback to identify capability gaps, improve self-awareness, and develop strategic and cultural alignment. Our aim is for believe-able leaders to emerge with the drive, capability and cultural fit to take strategy to reality.",
                    offices: [
                        {
                            location: "Northampton",
                            address: "Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG",
                            coordinates: "52.277409,-0.877935999999977",
                        },
                        {
                            location: "London",
                            address: "No1 Royal Exchange, London, EC3V 3DG",
                            coordinates: "51.5136102,-0.08757919999993646",
                        },
                    ],
                },
            ];
        })
            .end(function (err, res) {
            if (err)
                return done(err);
            return done();
        });
    });
});
