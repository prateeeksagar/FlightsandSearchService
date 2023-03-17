const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport({ name, address, cityId }) {
    try {
      const result = await this.airportRepository.createAirport({
        name,
        address,
        cityId,
      });
      return result;
    } catch (error) {
      console.log("something went wrong in airport service create");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const response = await this.airportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const result = await this.airportRepository.updateAirport(
        airportId,
        data
      );
      return result;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const result = await this.airportRepository.getAirport(airportId);
      return result;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw { error };
    }
  }

  async getAllAirports(filter) {
    try {
      const airports = await this.airportRepository.getAllAirports({
        name: filter.name,
      });
      return airports;
    } catch (error) {
      console.log("something went wrong in airport service");
      throw { error };
    }
  }
}

module.exports = AirportService;
