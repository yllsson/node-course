const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

// Alternate fix to extension issue. Taken from course Q&A.
const options = {
  extensions: ['htm', 'html']
};

app.use(express.static(publicDirectoryPath, options));

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
