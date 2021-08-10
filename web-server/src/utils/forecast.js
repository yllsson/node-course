const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=dcae8625cc1f675d84f3d990a6f285bd&query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to Weather services!', undefined);
    } else if (body.error) {
      callback('Invalid location. Please try another search.', undefined);
    } else {
      const temperature = body.current.temperature;
      const precip = body.current.precip;
      const feelsLike = body.current.feelslike;
      const weather_description = body.current.weather_descriptions[0];
      const wind_speed = body.current.wind_speed;
      const data = `${weather_description}. It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees. There is a ${precip}% chance of rain. The wind speed is ${wind_speed} km/h.`;
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
