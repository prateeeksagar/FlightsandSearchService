const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "successfully created the flight",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in flight-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
};
