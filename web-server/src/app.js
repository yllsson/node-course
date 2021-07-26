const express = require('express');

const app = express();

// req, res = request, response
app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Ylva'
    },
    {
      name: 'Sarah'
    }
  ]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny, 20 degrees',
    location: 'Edinburgh'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
