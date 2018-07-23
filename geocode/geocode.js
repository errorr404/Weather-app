const request = require('request');
const k = 'AIzaSyA1F8VE-8m-2PL_urvPFtFunoEVzX9CCIc';
const geocodeAddress = (encodedAddress,callback) =>{
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress},+CA&key=${k}`,

    json: true
  },(error,response,body) => {
    //console.log('statusCode:', response && response.statusCode);
  //  console.log(JSON.stringify(body,undefined,2));  // for JSON.stringify(--,--,--) goto:-https://www.dyn-web.com/tutorials/php-js/json/filter.php
    if(error)
    {
      callback('Unable to connect to the Google server.');
      //console.log('Unable to connect to the Google server.');
    }
    else if(body.status === 'ZERO_RESULTS')
    {
      callback('Unable to find that address.');
      //console.log('Unable to find that address.')
    }
    else if(body.status === 'OK')
    {
      callback(undefined,{
        Location: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
      // console.log(`Location: ${body.results[0].formatted_address}`);
      // console.log(`Lat: ${body.results[0].geometry.location.lat}`);
      // console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }
   else callback('error occours');
  });

};
module.exports.geocodeAddress = geocodeAddress;
