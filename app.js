// here we import the request module:- https://www.npmjs.com/package/request
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const request = require('request');

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

    //console.log(argv);
    var encodedAddress = encodeURIComponent(argv.a); // here encodeURIComponent change the 'Dixit Kumar' to 'Dixit%20Kumar'
    geocode.geocodeAddress(encodedAddress,(errorMessage,result) =>{
      if(errorMessage)
      {
        console.log(errorMessage);
      }
      else {
        console.log(JSON.stringify(result,undefined,2));
      //  console.log(`https://api.darksky.net/forecast/5cfc84e0ce6384cf83b839aedd5668cd/${result.Latitude},${result.Longitude}`);
        request({

          url:`https://api.darksky.net/forecast/5cfc84e0ce6384cf83b839aedd5668cd/${result.Latitude},${result.Longitude}`,

          json: true
        },(error,response,body) => {
          if(error) {
            console.log('Unable to connect to the forecast.io server');
          }
          else if(response.statusCode === 400)
          {
            console.log('Unable to fetch Weather');
          }
          else if(response.statusCode === 200)
          {
            console.log(body.currently.temperature);
          }


      });
    }
  });

  // 5cfc84e0ce6384cf83b839aedd5668cd
  //https://api.darksky.net/forecast/[key]/[latitude],[longitude]
