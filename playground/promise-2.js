var request = require('request');
var config = require('../config.json');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${config.googleApiKey}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google service');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('44054').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
