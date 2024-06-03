const express = require("express");

const planetsRouter = express.Router();

planetsRouter.get("/planets", (req, res) => getAllPlanets(req, res));

module.exports = planetsRouter;
