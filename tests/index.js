// test file

const request = require('supertest');
const app = require('../server/server');

describe('API General Request', () => {
  it ('responds with JSON object containing Craigslist item info & associated eBay API data', () => {
    request()
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

/*
1. After scraperController.getData, res.locals.data is an array of objects with title, url, locationText, dateText, avgPrice, avgSaleTime, and eBay properties
1.2 avgPrice, avgSaleTime, and eBay should all be set to null

2. After eBayController.queryData, every res.locals.data index value (an object) will have an eBay property not set to null

3. After avgPriceController.calculate, every res.locals.data value will have an avgPrice property not set to null

4. After avgTimeConntroller.calculate, every res.locals.data value will have an avgTime property not set to null

5. app.get('/') will return a JSON object containining an array of objects
*/