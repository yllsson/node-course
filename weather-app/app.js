const request = require('postman-request');
const geocode = require('./utils/geocode');

// const url =
//   'http://api.weatkherstack.com/current?access_key=dcae8625cc1f675d84f3d990a6f285bd&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     const data = response.body.current;
//     const temperature = data.temperature;
//     const precip = data.precip;
//     const feelsLike = data.feelslike;
//     const weather_description = data.weather_descriptions[0];
//     console.log(
//       `${weather_description}. It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees. There is a ${precip}% chance of rain.`
//     );
//   }
// });

// Geocoding
// Address -> Lat/Long -> Weather

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
