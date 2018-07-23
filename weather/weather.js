const request = require('request');
const getWeather = (Latitude,Longitude,callback) =>{
  request({

    url:`https://api.darksky.net/forecast/5cfc84e0ce6384cf83b839aedd5668cd/${Latitude},${Longitude}`,

    json: true
  },(error,response,body) => {
    if(error) {
      callback('Unable to connect to the forecast.io server');
      //console.log('Unable to connect to the forecast.io server');
    }
    else if(response.statusCode === 400)
    {

      callback('Unable to fetch Weather');
    }
    else if(response.statusCode === 200)
    { callback(undefined,{
      temprature:body.currently.temperature
    });

    }


});
}
module.exports.getWeather = getWeather;
