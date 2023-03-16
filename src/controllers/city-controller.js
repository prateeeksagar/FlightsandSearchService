const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
    throw { error };
  }
};

// DELETE - /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted the city",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in city-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

// get - /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched the city",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in city-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the city",
      err: error,
    });
  }
};

//PATCH - /city/:id
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated the city",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in city-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "successfully updated the city",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in city-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all the city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
