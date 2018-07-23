// here we import the request module:- https://www.npmjs.com/package/request
const request = require('request');
const k = 'AIzaSyA1F8VE-8m-2PL_urvPFtFunoEVzX9CCIc';
request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=462021%20anand%20nagar%20bhopal,+CA&key=${k}`,

  json: true
},(error,response,body) => {
  //console.log('statusCode:', response && response.statusCode);
//  console.log(JSON.stringify(body,undefined,2));  // for JSON.stringify(--,--,--) goto:-https://www.dyn-web.com/tutorials/php-js/json/filter.php
   console.log(`Location: ${body.results[0].formatted_address}`);
   console.log(`Lat: ${body.results[0].geometry.location.lat}`);
   console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});
