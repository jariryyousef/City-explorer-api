"use strict";
const express = require("express");
const server = express();

require("dotenv").config();

const cors = require("cors");

server.use(cors());

const PORT = process.env.PORT;

const getMovie = require("./controller/movie.controller");

server.get("/", function (req, res) {
  res.send("start from here");
});
const weatherData = require("./weather.json");
const { request, response } = require("express");

server.get("/weather", getWeather);

server.get("/movies", getMovie);

server.listen(PORT, () => {
  console.log(`'port' ${PORT}`);
});
