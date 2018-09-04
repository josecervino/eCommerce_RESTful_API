'use strict';

const request = require('request');

const eBayController = {
  queryData: (req, res, next) => {
    console.log('inside eBayController');
    console.log('Response Locals Data: ', res.locals.data);

    // for (let i = 0; i < res.locals.data.length; i += 1) {
    //   const eBayAPIURL = 'https://api.ebay.com/buy/marketplace_insights/v1_beta/item_sales/' + res.locals.data[i] + ;
    //   request(eBayAPIURL, (error, respnose, html) => {
    //   })
    // }


    next();
  }
}

module.exports = eBayController;