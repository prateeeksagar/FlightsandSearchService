const { Flights } = require("../models/index");

class FlightRepository {
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

  //   async getFlight(data) {
  //     try {
  //     } catch (error) {
  //       console.log("something went wrong in the flight -repo");
  //       throw { error };
  //     }
  //   }
}

module.exports = FlightRepository;
