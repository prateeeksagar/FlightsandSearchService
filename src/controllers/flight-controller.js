const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");
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
    return res.status(SuccessCodes.CREATED).json({
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

const getAll = async (req, res) => {
  try {
    const flight = await flightService.getFlightData(req.qurey);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "successfully fetched the flight",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
