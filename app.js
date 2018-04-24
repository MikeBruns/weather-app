const request = require('request');
const config = require('./config.json');

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=10185%20little%20forest%20drive%20germantown&key=${config.apiKey}`,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
