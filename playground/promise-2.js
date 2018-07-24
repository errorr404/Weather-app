
const request = require('request');
const k = 'AIzaSyA1F8VE-8m-2PL_urvPFtFunoEVzX9CCIc';


var geoCodeAddress = (address) =>{
  return new Promise((resolve,reject) => {
    var encodedAddress = encodeURIComponent(address);
    console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress},+CA&key=${k}`);
      request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress},+CA&key=${k}`,
        json: true
      }, (error,response,body) => {
      //  console.log(body);
        //console.log(error);
        if(error)
        {
          //console.log(error);
          reject('Unable to connect to the Google server.');
        }
        else if(body.status === 'ZERO_RESULTS')
        {
          reject('Unable to find that address.');
        }
        else if(body.status === 'OK')
        {
          resolve({
            Location: body.results[0].formatted_address,
            Latitude: body.results[0].geometry.location.lat,
            Longitude: body.results[0].geometry.location.lng
          });
        }
      });
  });
};

geoCodeAddress('854326').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
},(errorMsg)=>{
  console.log(errorMsg);
});
