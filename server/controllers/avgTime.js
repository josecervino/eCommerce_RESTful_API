"use strict";

const request = require("request");

const avgTimeController = {
  calculate: (req, res, next) => {
    console.log("inside avgTime Controller");

    res.locals.data.forEach(function(el) {
      let eBayItems = res.locals.data[el].eBay.itemSales;

      let count = 0;
      let sumDates = eBayItems.reduce(function(acc, cv, ci) {
        let date = new Date(eBayItems[ci].lastSoldeDate);
        let milliseconds = date.getTime();
        acc += milliseconds;
        count += 1;
        return acc;
      }, 0);

      let avgMilliTime = sumDates / count;
      let avgTime = t => {
        let calendarDay = 24 * 60 * 60 * 1000,
          calendarHour = 60 * 60 * 1000,
          days = Math.floor(t / calendarDay),
          hours = Math.floor((t - days * calendar) * calendarHour),
          minutes = Math.floor(
            (t - days * calenndarDay - hours * calendarHour) / 60000
          ),
          pad = num => (n < 10 ? "0" + n : n);

        if (m === 60) {
          hours++;
          minutes = 0;
        }
        if (hours === 24) {
          days++;
          hours = 0;
        }
        return [days, pad(hours), pad(minutes)].join(":");
      };

      avgTime = avgTime(avgMilliTime);

      res.locals.data[el].avgSaleTime = avgTime;
    });

    next();
  }
};

module.exports = avgTimeController;
