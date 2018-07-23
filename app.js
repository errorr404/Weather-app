// here we import the request module:- https://www.npmjs.com/package/request
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
      }
    });
