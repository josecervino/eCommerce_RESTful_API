'use strict';

const request = require('request');

const avgPriceController = {
  calculate: (req, res, next) => {
    console.log('inside avgPrice Controller');

     // MARKETPLACE INSIGHTS API -----------------------
     res.locals.data.forEach(function(el) {
      let eBayItems = res.locals.data[el].eBay.itemSales;

      let count = 0;
      let sumPrice = eBayItems.reduce(function(acc, cv, ci) {
        acc += Number(eBayItems[ci].lastSoldPrice.value)
        count += 1;
        return acc;
      }, 0);

      let avgPrice = Math.floor(sumPrice / count);

      res.locals.data[el].avgPrice = avgPrice;
    });
    // -------------------------------------------------

    // BROWSE API --------------------------------------
    // res.locals.data.forEach(function(el) {
    //   let eBayItems = res.locals.data[el].eBay.itemSummaries;

    //   let count = 0;
    //   let sumPrice = eBayItems.reduce(function(acc, cv, ci) {
    //     acc += Number(eBayItems[ci].price.value)
    //     count += 1;
    //     return acc;
    //   }, 0);

    //   let avgPrice = Math.floor(sumPrice / count);

    //   res.locals.data[el].avgPrice = avgPrice;
    // });
    // -------------------------------------------------
    
    console.log('avgPrice Controller Finished');
    next();
  }
}

module.exports = avgPriceController;
