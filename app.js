// here we import the request module:- https://www.npmjs.com/package/request
const request = require('request');
const yargs = require('yargs');
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

    //console.log(argv);
    var encodedAddress = encodeURIComponent(argv.a); // here encodeURIComponent change the 'Dixit Kumar' to 'Dixit%20Kumar'
request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress},+CA&key=${k}`,

  json: true
},(error,response,body) => {
  //console.log('statusCode:', response && response.statusCode);
//  console.log(JSON.stringify(body,undefined,2));  // for JSON.stringify(--,--,--) goto:-https://www.dyn-web.com/tutorials/php-js/json/filter.php
  if(error)
  {
    console.log('Unable to connect to the Google server.');
  }
  else if(body.status === 'ZERO_RESULTS')
  {
    console.log('Unable to find that address.')
  }
  else if(body.status === 'OK')
  {
    console.log(`Location: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
  }
 else console.log('error occours');
});
