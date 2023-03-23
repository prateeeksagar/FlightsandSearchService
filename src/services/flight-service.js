const { FlightRepository, AirplaneRepository } = require("../repository/index");

const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "depart time must be greater than arrival time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      throw { error };
    }
  }

  async getFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlight(data);
      console.log("in the flight service", flights);
      return flights;
    } catch (error) {
      console.log(error);
      console.log("wrong in flight service");
      throw { error };
    }
  }
}

module.exports = FlightService;
