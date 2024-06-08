const express = require("express");
const { httpGetAllPlanets } = require("./planets.controller");
const planetsRouter = express.Router();

planetsRouter.get("/", (req, res) => httpGetAllPlanets(req, res));

module.exports = planetsRouter;
