const { AirportService } = require("../services/index");

const airportService = new AirportService();

const createAirport = async (req, res) => {
  try {
    const airport = airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "airport successfully created",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create an airport",
      err: error,
    });
    throw { error };
  }
};

const destroyAirport = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfulyy airport deleted from the database",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to deletes an airport",
      err: error,
    });
    throw { error };
  }
};

const updateAirport = async (req, res) => {
  try {
    const response = await airportService.updateAirport(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfulyy updated airport in the database",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to update an airport",
      err: error,
    });
  }
};

const getAirport = async (req, res) => {
  try {
    const response = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "fetched all the details",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch an airport",
      err: error,
    });
  }
};

const getAllAirports = async (req, res) => {
  try {
    const airports = await airportService.getAllAirports(req.query);
    return res.status(200).json({
      data: airports,
      success: true,
      message: "successfully updated the city",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in airport-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all the airports",
      err: error,
    });
  }
};

module.exports = {
  createAirport,
  destroyAirport,
  updateAirport,
  getAirport,
  getAllAirports,
};
