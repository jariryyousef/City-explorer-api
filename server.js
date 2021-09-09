const express = require("express"); 
const server = express(); 

require("dotenv").config();

const cors = require("cors");

server.use(cors()); 

const axios = require("axios"); 

const PORT = process.env.PORT; //

const WATHER_API_KEY = process.env.WATHER_API_KEY;
const MOVIE_API_KEY= process.env.MOVIE_API_KEY;


// a server endpoint
server.get(
  "/", // our endpoint name
  function (req, res) {
    // callback function of what we should do with our request
    res.send("Hello World"); // our endpoint function response
    // console.log("hello");
    
  }
);

// to hold data file from json file
const weatherData = require("./weather.json"); 
const { request, response } = require("express");

class Forecast {
  constructor (date,description){
this.date=date.valid_date;
this.description=description.weather.description;
}}


class Movie {
  constructor(item){
    this.title = item.title;
    this.overview= item.overview;
    this.average_votes= item.vote_average;
    this.total_votes= item.vote_count;
    this.image_url= `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
    this.popularity= item.popularity;
    this.released_on= item.release_date;
  }
}

// clas Movie{
// constructor()

// }

server.get("/weather",  async (request, response) => {

    const nameOfCity = request.query.searchQ;
    const watherBitResponse= await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${nameOfCity}&key=${WATHER_API_KEY}`);
  
    // console.log(watherBitResponse.data);
    response.json(watherBitResponse.data);
    

    // const result = weatherData.find((item) => {
    //   return (item.city_name.toLowerCase() === nameOfCity.toLowerCase());
    // });

    class Forecast {
      constructor (date,description){
    this.date=date.valid_date;
    this.description=description.weather.description;
    }}
    if (nameOfCity){
      let newArr =result.data.map((item) => {

        return new Forecast (item.valid_date,item.weather.description)
      })
      response.json(newArr);
    }
    else{
      response.json('data not found')
  }
    
  
  
}
);

server.get(
  "/movie"
  ,async(request,response)=>{
//
  const nameOfCity1 = request.query.searchQ;

  const moviesResponse= await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${MOVIE_API_KEY}&query=${nameOfCity1}`);

  const newMovie =  moviesResponse.data.results.map(item => {
    return new Movie(item);
  })
  response.json(newMovie);


})




// server.listen(3001, ()=> {
//     console.log("testttaat");}) // kick start the express server to work

server.listen(PORT, () => {
  console.log(`'port' ${PORT}`);
});
