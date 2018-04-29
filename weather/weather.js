const request = require('request');
const config = require('../config.json');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${config.forecastApiKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        termperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
