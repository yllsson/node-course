const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=dcae8625cc1f675d84f3d990a6f285bd&query=40,-75`;

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
