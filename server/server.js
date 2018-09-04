const express = require('express');

const app = express();

const scraperController = require('./scraper');
// const eBayController = require('./eBay');

// Craigslist Scraper GET request
app.get('/',
  scraperController.getData,
  (req, res) => {
    res.status(200);
    res.setHeader(
      'Content-Type', 'application/json',
    );
    const { data } = res.locals;
    res.send(data);
  });

// app.get('/ebay',
//   eBayController.getData,
//   (req, res) => {
//   },
// )

app.use((err, res) => {
  res.status(400).json(err);
});

app.listen(3000);

module.exports = app;
