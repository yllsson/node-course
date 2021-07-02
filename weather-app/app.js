const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=dcae8625cc1f675d84f3d990a6f285bd&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
