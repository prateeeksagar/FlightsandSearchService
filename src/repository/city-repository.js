const { City } = require("../models/index");

class CityRepository {
  //creating a new entry in city table
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
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
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
