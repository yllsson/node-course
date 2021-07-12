const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoieWx2YXR1cm5lciIsImEiOiJja3FtbTJ4a3IwMTFtMm9ueGE5eGFoOXNmIn0.MFgz-eXa73qyMR-43lIleg&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to Location services!');
    } else if (response.body.features.length === 0) {
      callback('Invalid location. Try another search.');
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
