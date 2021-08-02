const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Alternate fix to file extension issue (which was forcing us to add "/index.html" to url). Taken from course Q&A.
const options = {
  extensions: ['htm', 'html']
};

// Setup static directory to serve
app.use(express.static(publicDirectoryPath, options));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Ylva Turner'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Ylva Turner'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'This is the help messsage!'
  });
});

// req, res = request, response
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny, 20 degrees',
    location: 'Edinburgh'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
