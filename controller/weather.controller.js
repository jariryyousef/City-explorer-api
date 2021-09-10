const axios = require('axios');
require('dotenv').config(); 

const WATHER_API_KEY = process.env.WATHER_API_KEY;
const Forecast = require('../models/weather.model');

const getWeather = async (request, response) => {
    const nameOfCity = request.query.searchQ;
    const watherBitResponse = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${nameOfCity}&key=${WATHER_API_KEY}`
    );
  
    response.json(watherBitResponse.data);
    
    
    if (nameOfCity) {
      let newArr = result.data.map((item) => {
        return new Forecast(item.valid_date, item.weather.description);
      });
      response.json(newArr);
    } else {
      response.json("data not found");
    }
  };

  module.exports = getWeather;