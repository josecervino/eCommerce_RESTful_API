'use strict';

const cheerio = require('cheerio');
const request = require('request');

const scrapeController = {

  getData: (req, res, next) => {
    request('https://newyork.craigslist.org/search/zip?search_distance=2&postal=10012', (error, response, html) => {

      const $ = cheerio.load(html);
      const listItems = $('.result-row', '#sortable-results .rows', html);
      const listItemsArray = Object.entries(listItems);
      const itemsArray = [];

      for (let i = 0; i < listItemsArray.length; i += 1) {
        if (listItemsArray[i][0] == Number(listItemsArray[i][0])) {
          const obj = listItemsArray[i][1];
          const titleText = $('.result-title', obj, html).text();
          const urlText = $('.result-title', obj, html).attr('href');
          const location = $('.result-hood', obj, html).text();
          const date = $('.result-date', obj, html).attr('datetime');
 
          itemsArray.push({
            title: titleText,
            url: urlText,
            locationText: location,
            dateText: date,
            avgPrice: null,
            avgSaleTime: null,
            eBay: null,
          });
        }
      }
      
      res.locals.data = itemsArray;
      next();
    });
  },
};

module.exports = scrapeController;
