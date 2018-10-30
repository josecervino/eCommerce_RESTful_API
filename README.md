# Craigslist + eBay API

This is an experimental API that automatically scrapes Craigslist free section and queries eBay API using the scraped items. 

It returns a JSON object with a nested array which contains objects containing Craigslist item data as properties with associated eBay items, calculated average price of those eBay items, and average sale time calculations of those eBay items as properties.


## NOTE 

This API is still under development. Since its creation, eBay API authentication may have changed. As of last testing, this API scrapes Craigslist but does not return a JSON object with eBay items and calculations.


## In order to run:

1. Download the repository
2. Open in editor of choice
3. Install project dependencies via your terminal after setting your terminal to the project's folder using 'yarn add' or 'npm i'
4. Run npm run start
5. Open 'http://localhost:3000' to review returned JSON object
