const axios = require("axios"); 
const { query } = require("express");
require('dotenv').config();

const Movie = require('../models/movie.model');
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
const myMemory ={};

const getMovie= async (request, response) => {
    const nameOfCity1 = request.query.searchQ;
  if (myMemory[query]!==undefined){
    response.json(myMemory[query]);
  }else{

    const moviesResponse = await axios.get(
      `https://api.themoviedb.org/3/search/movie?&api_key=${MOVIE_API_KEY}&query=${nameOfCity1}`
    );
    const newMovie = moviesResponse.data.results.map((item) => {
      return new Movie(item);
    });
    myMemory[query]=newMovie;
    response.json(newMovie);
  }

  };

  module.exports = getMovie;