'use strict';

class Forecast {
    constructor(date, description) {
      this.date = date.valid_date;
      this.description = description.weather.description;
    }
  }
  
  module.exports = Forecast;