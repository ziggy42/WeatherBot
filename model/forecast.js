"use strict";

exports.Forecast = class Forecast {
    constructor(channel) {
        this.city = channel.location.city;
        this.region = channel.location.region;
        this.country = channel.location.country;
        this.title = channel.item.title;
        this.date = channel.item.condition.date;
        this.temp = channel.item.condition.temp;
        this.text = channel.item.condition.text;
        this.daysForecast = channel.item.forecast;
    }
}