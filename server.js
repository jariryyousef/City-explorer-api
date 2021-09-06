const express = require('express') // require the express package
const server = express() // initialize your express app instance
 

require('dotenv').config();
const cors = require('cors');

server.use(cors()) // after you initialize your express app instance

const axios = require('axios'); // require the package

// a server endpoint 
server.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
  
})
 
// to hold data file from json file
const weatherData=require('./weather.json');
const { response } = require('express');
server.get('/weather',

(request, response) => {
    // const city_name=request.query.city_name;

    const nameOfCity= request.query.searchQ;
    const lat= request.query.lat;
    const lon =request.query.lon;


    const result = weatherData.find((item) =>{

        if(item.city_name === nameOfCity && item.lat === lat && item.lon === lon ){
          return item;
        }
        }
        )

        // response.send(result);
// })


let data = result.data.map(item=>{
    return new Forcast(item);
  })

  response.send(data);

// catch{
//   res.send('404 Not Found');
// }
})

class Forcast {
constructor(item){
  this.date = item.valid_date;
  this. description= item.weather.description ;
}
}


server.listen(3001, ()=> {
    console.log("testttaat");}) // kick start the express server to work