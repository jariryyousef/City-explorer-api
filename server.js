const express = require("express"); 
const server = express(); 

require("dotenv").config();
const cors = require("cors");

server.use(cors()); 

const axios = require("axios"); 

const PORT = process.env.PORT; //

// a server endpoint
server.get(
  "/", // our endpoint name
  function (req, res) {
    // callback function of what we should do with our request
    res.send("Hello World"); // our endpoint function response
  }
);

// to hold data file from json file
const weatherData = require("./weather.json"); //

server.get(
  "/weather",

  (request, response) => {

    class Forecast {
      constructor (date,description){
    this.date=date;
    this.description=description;
    }}
    
    console.log(request.query);
    const nameOfCity = request.query.searchQ;
    const lat = request.query.lat;
    const lon = request.query.lon;

    const result = weatherData.find((item) => {
      return (item.city_name.toLowerCase() === nameOfCity.toLowerCase());
    });

    
    if (result){
      let newArr =result.data.map((item) => {

        return new Forecast (item.datetime,item.weather.description)


      })
      response.json(newArr);


    }
    else{
      response.json('data not found')
  }
    

  }
);

// server.listen(3001, ()=> {
//     console.log("testttaat");}) // kick start the express server to work

server.listen(PORT, () => {
  console.log(`'port' ${PORT}`);
});
