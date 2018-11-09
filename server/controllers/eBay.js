"use strict";

const request = require("request");
const Promise = require("promise");

const eBayController = {
  queryData: (req, res, next) => {
    const urls = [];
    for (let i = 0; i < res.locals.data.length; i += 1) {
      const regex = /[a-z0-9]/gi;
      let resLocalIndex = res.locals.data[i].title;
      let item = resLocalIndex.match(regex).join("");

      const eBayURLAndHeader = {
        url:
          "https://api.sandbox.ebay.com/buy/marketplace_insights/v1_beta/item_sales/search?q=" +
          item +
          "&limit=50",
        headers: {
          Authorization: `Bearer v^1.1#i^1#I^3#p^1#r^0#f^0#t^H4sIAAAAAAAAAOVXbYwTRRi+9r48joNEUAQxlEUkcux2tr1tuxta6N3xUYG7Yu8uiJJjuzvbW67dbXZmafvDcDbkiCKJxg9IRDxBjBDBXyZCNEb5ISCoiZ/B+BGUIGpUoniixnN2W47eaeA4jkhi/zQz877vvM8zz7vvDOipqpnbu7S3v85R7ezrAT1Oh4OtBTVVlfUTyp3TKstAiYGjr+f2nop8+TfzkZhKpoW7IUrrGoKubCqpIcGeDFKmoQm6iFQkaGIKIgFLQiy8YrngYYCQNnSsS3qSckWag5TP65dEf4DlPB5F9iuAzGoXYrbpQcrvgzLP87IsK5wHQpGsI2TCiIawqOEg5QFsgAY8Dbg2NiB4eKGBY/wct5pydUADqbpGTBhAhex0BdvXKMn10qmKCEEDkyBUKBJeHGsNR5oXtbTNd5fEChV5iGERm2joqEmXoatDTJrw0tsg21qImZIEEaLcocIOQ4MK4QvJjCJ9m2o57vMAwMX5AOeRfH7fmFC5WDdSIr50HtaMKtOKbSpADas4dzlGCRvxdVDCxVELCRFpdll/K00xqSoqNILUosbwPeFolArdpSPYBI31dJMhqgmUVOlY4yoaBjzA5+PEAM0Bn8x6eb64USFakeZhOzXpmqxapCFXi44bIckaDueGLeGGGLVqrUZYwVZGJXYecIHDBt9q61ALp2jiLs06V5giRLjs4eVPYNAbY0ONmxgORhi+YFMUpMR0WpWp4Yu2FovyyaIg1YVxWnC7M5kMk/EyupFwE4Gw7lUrlsekLpgixZZNWbVesFcv70CrNhQJEk+kCjiXJrlkiVZJAlqCCnlBgPd6i7wPTSs0fPYfEyWY3UMrYqwqpIEL+LxENDIAvChL8bGokFBRpG4rDxgXc3RKNLohTidFCdIS0ZmZgoYqC15O8XgDCqRlH6/QDbyi0HFO9tGsAiGAMB6X+MD/qVBGKvWYpKdhVE+qUm5MBD92YjfkqGjgXKOZI+MYTCbJ30i1/69QkQX1GoK0an0UQK0YiAQR0ypjKZyR9JRbF8mnzZrqtLN2jcTIHTdzTMKECJMsZNJdRuykEokwpFDkkbsUypAAGLkLubrIpoRHtZFd7wxhUk10YXRFe2ZHQQoicmOSekJFWJUQkzZl/aqkp5KLyXVVXQR0Ab0qF24UjE0Bg9ZLjAGRbhrkMsW0Wg22Te+GGvlcYUNPJqHRwV4VE2PXWv+jtloYV+SdXw9DJiVVQmXn9YbuCnvWKPUt4usLNct5fazfwwa4q8LVZJ9pW+6a9o1RwFuqIwzla3ATdA99l4bK7B+bd7wG8o4D5GkL/IBm68GdVeXtFeXjKURaB4NETY7rWUYVFYZ8oDXy7DIg0w1zaVE1nFWOe2/9dsGfJS/ivjXglsE3cU05W1vyQAbTL65UshOn1LEBwAOODXj4Bm41mHVxtYK9uWLyhiOfPa2su4PfeWP9rzPP7Hty5aq/PgV1g0YOR2VZRd5RFtn6cn301R23ueYduOH+H2LOWH53zUdrph5vDw6gh6f2L3rjcWaP/tKWhrU/nn2msUadc+67bczJxNr27UdvihyedGyevJGplo4pmWjXl0cnzdlyusU19WT17+/2HdvdsfWLgdObdlWnT3n375qJXzgX1cdveGj6NnnJc3XvlcW2rx84PrmX+m2v/M7chUdOtB3NV368pM65sS5xfhm9uWNGC/fE/O9/+UNuXPhA/yNbs8FZj76e+XzN2dro2+PGHcxUv/jTwCfdzz42oenN/U990FKVOb9jyrifn5+3/ETHxOl7Zx/86r5DkzvPzEy9taX3wVTqkPFh56Z9td49p96fNts/Y+fCZVP6T72y+fCC9lmFY/wbd/J+6asQAAA=`,
          "X-EBAY-C-MARKETPLACE-ID": "EBAY-US",
          Accept: " application/json",
          "Content-Type": "application/json"
        }
      };

      urls.push(eBayURLAndHeader);
    }

    for (let i = 0; i < urls.length; i += 1) {
      request(urls[i], (error, response, body) => {
        if (error) console.log("Error: ", error);

        const eBayData = JSON.parse(body);
        res.locals.data[i].eBay = eBayData;
      });
    }

    next();
  }
};

module.exports = eBayController;
