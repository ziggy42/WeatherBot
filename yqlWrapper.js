"use strict";

var YQL = require('yql');

exports.getQueryForCity = function (city, session) {
    return new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + 
        city + '") and u="c"');
} 