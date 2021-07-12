const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forecast(-73.9712, 40.7831, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
