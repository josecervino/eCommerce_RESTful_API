'use strict';

const express = require('express');
const app = express();
const scraperController = require('./controllers/scraper');
const eBayController = require('./controllers/eBay');

// first sample route
app.get('/',
  scraperController.getData,
  eBayController.queryData,
  (req, res) => {
    res.status(200);
    res.setHeader(
      'Content-Type', 'application/json',
    );
    const { data } = res.locals; 
    res.send(data);
  });

app.use((err, req, res, next) => {
  res.status(400).json(err);
});

app.listen(3000);

module.exports = app;
 