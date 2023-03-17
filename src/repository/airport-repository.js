const { Op } = require("sequelize");

const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, cityId }) {
    try {
      const airport = await Airport.create({ name, address, cityId });
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = Airport.update(data, {
        where: {
          id: airportId,
        },
      });
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repository");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("something went wrong in airport repositroy");
      throw { error };
    }
  }

  async getAllAirports(filter) {
    // filter can be empty
    try {
      if (filter.name) {
        const airports = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airports;
      }
      const airports = await Airport.findAll();
      return airports;
    } catch (error) {
      console.log("something went wrong in getCity in city-repository");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
