const request = require('request');
const config = require('./config.json');

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=5115%20Lake%20Road&key=${config.apiKey}`,
  json: true
}, (error, response, body) => {
  if (response.statusCode === 200) {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`lat: ${body.results[0].geometry.location.lat}`);
    console.log(`lng: ${body.results[0].geometry.location.lng}`);
  }
  // console.log(JSON.stringify(body, undefined, 2));
});
