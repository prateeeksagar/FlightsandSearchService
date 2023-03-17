const express = require("express");

const cityController = require("../../controllers/city-controller");
const airportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);

router.post("/airport", airportController.createAirport);
router.delete("/airport/:id", airportController.destroyAirport);
router.get("/airport/:id", airportController.getAirport);
router.get("/airport", airportController.getAllAirports);
router.patch("/airport/:id", airportController.updateAirport);

module.exports = router;
