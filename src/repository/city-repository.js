const { City } = require("../models/index");

class CityRepository {
  //creating a new entry in city table
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something wrong in respository layer");
      throw { error };
    }
  }

  // to delete city from the database table
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("something wrong in respository layer");
      throw { error };
    }
  }

  //update city from db using id
  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("something went wrong in updatecity in city-repository");
      throw { error };
    }
  }

  //fetching the details using id from city table
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      console.log(city);
      return city;
    } catch (error) {
      console.log("something went wrong in getCity in city-repository");
      throw { error };
    }
  }

  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("something went wrong in getCity in city-repository");
      throw { error };
    }
  }
}

module.exports = CityRepository;
