"use strict";
const express = require("express");
const server = express();

require("dotenv").config();

const cors = require("cors");

server.use(cors());

const PORT = process.env.PORT;

const getMovie = require('./controller/movie.controller.js');
const getWeather = require('./controller/weather.controller.js');

server.get("/", function (req, res) {
  res.send("start from here");
});
// const weatherData = require("./weather.json");
// const { request, response } = require("express");
// http:Localhost:8080/movies?

server.get("/weather", getWeather);

// http://localhost:8080/movies?&searchQ=Amman
server.get("/movies", getMovie);

server.listen(PORT, () => {
  console.log(`'port' ${PORT}`);
});
