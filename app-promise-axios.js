// here we import the axios module:- https://www.npmjs.com/package/axios
const yargs = require('yargs');
const axios = require('axios');

const k = 'AIzaSyA1F8VE-8m-2PL_urvPFtFunoEVzX9CCIc';

const argv = yargs
          .options({
            a:{
              demand: true,
              alias: 'address',
              describe: 'Address to fetch weather for',
              string: true
            }
          })
          .help()
          .alias('help','h')
          .argv;
var encodedAddress = encodeURIComponent(argv.a);
var encodeUrl =`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress},+CA&key=${k}`;

// for this syntax of axios.get -> https://www.npmjs.com/package/axios
axios.get(encodeUrl)
  .then((response) => {
    // here data came from first proise
     if(response.data.status === 'ZERO_RESULTS')
     {
       // here we throw an error which will receive in the catch as a message
       throw new Error('Unable to find that address');
     }
     var Latitude = response.data.results[0].geometry.location.lat;
     var Longitude = response.data.results[0].geometry.location.lng;
     var weatherUrl =`https://api.darksky.net/forecast/5cfc84e0ce6384cf83b839aedd5668cd/${Latitude},${Longitude}`;
  //  console.log(weatherUrl);
    return axios.get(weatherUrl)  // here we use promise (chaining of promise)
  }).then((response)=>{
    // here data came from second promise
    var temperature = response.data.currently.temperature;
    //console.log('okkokkokk');
    console.log(`It's currently ${temperature}`);
  })
  .catch( (error) =>{
    if(error.code==='ENOTFOUND')
    {
        console.log('Unable to connect to the google server');
    }
    else{
      console.log(error.message);
    }

  });
