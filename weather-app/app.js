const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=dcae8625cc1f675d84f3d990a6f285bd&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  const temperature = data.temperature;
  const precip = data.precip;
  const feelsLike = data.feelslike;
  const weather_description = data.weather_descriptions[0];

  console.log(
    `${weather_description}. It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees. There is a ${precip}% chance of rain.`
  );
});

// Geocoding

const geoURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWx2YXR1cm5lciIsImEiOiJja3FtbTJ4a3IwMTFtMm9ueGE5eGFoOXNmIn0.MFgz-eXa73qyMR-43lIleg&limit=1';

request({ url: geoURL, json: true }, (error, response) => {
  const data = response.body.features;
  const latitude = data[0].center[1];
  const longitude = data[0].center[0];
  console.log(latitude, longitude);
});
