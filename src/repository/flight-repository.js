const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createFliter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      Object.assign(filter, { [Op.lte]: data.maxPrice });
    }
    return filter;
  }
  async createFlight(data) {
    try {
      console.log("enter");
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in the flight -repo");
      console.log(error);
      throw { error };
    }
  }

  //   async deleteFlight(data) {
  //     try {

  //     } catch (error) {
  //       console.log("something went wrong in the flight -repo");
  //       throw { error };
  //     }
  //   }

  //   async updateFlight(data) {
  //     try {
  //     } catch (error) {
  //       console.log("something went wrong in the flight -repo");
  //       throw { error };
  //     }
  //   }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in the flight -repo");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      if (filter) {
        const filterObject = this.#createFliter(filter);
        const flight = await Flights.findAll({
          where: filterObject,
        });
        return flight;
      }
      const flight = await Flights.findAll();
      return flight;
    } catch (error) {
      console.log("something went wrong in the flight -repo");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
