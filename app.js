// here we import the request module
const request = require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=462022%20anand%20nagar%20bhopal',
  json: true
},(error,response,body) => {
  console.log('statusCode:', response && response.statusCode);
  console.log(body);
});
