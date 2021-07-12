const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=dcae8625cc1f675d84f3d990a6f285bd&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to Weather services!');
    } else if (response.body.error) {
      callback('Invalid location. Please try another search.');
    } else {
      const temperature = response.body.current.temperature;
      const precip = response.body.current.precip;
      const feelsLike = response.body.current.feelslike;
      const weather_description = response.body.current.weather_descriptions[0];
      const data = `${weather_description}. It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees. There is a ${precip}% chance of rain.`;
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
