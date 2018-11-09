"use strict";

const express = require("express");
const app = express();
const path = require("path");
const scraperController = require("./controllers/scraper");
const eBayController = require("./controllers/eBay");
const avgPriceController = require("./controllers/avgPrice");
const avgTimeController = require("./controllers/avgTime");
const PORT = 3000 || process.env.port;

console.log("directory path:", __dirname + "../");

app.get(
  "/",
  scraperController.getData, // Where we scrape Craigslist free section & format the data as an array of objects with eBay data, avgPrice, and avgTime set to null for following middleware to populate
  eBayController.queryData, // Where we query eBay Markets Insights API for an array of similar objects to the one found on Craigslist
  avgPriceController.calculate, // Where we iterate through eBay data to calculate an avgPrice of the Craigslist item
  avgTimeController.calculate, // Where we iterate through eBay data to calculate an avgTime to sell items similar to the Craigslist item
  (req, res) => {
    res.status(200);
    res.setHeader("Content-Type", "application/json");
    const { data } = res.locals;
    res.send(data);
  }
);

app.use((err, req, res, next) => {
  res.status(400).json(err);
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

module.exports = app;
