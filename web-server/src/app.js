const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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
    name: 'Ylva Turner',
    helpText: 'This is the help message!'
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    });
  }

  res.send({
    forecast: 'Sunny, 20 degrees',
    location: 'Edinburgh',
    address: req.query.address
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    });
  }

  console.log(req.query.search);
  res.send({
    products: []
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Ylva Turner',
    errorMessage: 'Help article not found'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Ylva Turner',
    errorMessage: 'Page not found'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
