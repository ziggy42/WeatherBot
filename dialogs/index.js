"use strict";

var builder = require('botbuilder');
var prompts = require('../prompts');
var yql = require('../yqlWrapper');
var forecast = require('../model/forecast')

function forecastForCityNow(session, args) {
    yql.getQueryForCity(args.matches[1], session).exec(function (err, data) {
        if (data.query.results != null) {
            var cityForecast = new forecast.Forecast(data.query.results.channel);
            session.send(prompts.forecastNow, cityForecast.title, cityForecast.text,
                cityForecast.temo);
        } else session.send(prompts.location404, args.matches[1]);
    });
}

function forecastForCity(session, args) {
    yql.getQueryForCity(args.matches[1], session).exec(function (err, data) {
        if (data.query.results != null) {
            var cityForecast = new forecast.Forecast(data.query.results.channel);
            var sendArgs = [prompts.forecastHeader, args.matches[2], cityForecast.city, cityForecast.region, cityForecast.country]
            for (var i = 0; i < Math.min(args.matches[2], cityForecast.daysForecast.length - 1); i++) {
                sendArgs[0] += '\n' + prompts.forecastContent;
                var element = cityForecast.daysForecast[i];
                sendArgs.push(element.day, element.date, element.text, element.high, element.low)
            }
            session.send.apply(session, sendArgs)
        } else session.send(prompts.location404, args.matches[1]);
    })
}

module.exports.root = new builder.CommandDialog()
    .matches('^(hello|hi|howdy|help)', builder.DialogAction.send(prompts.helpMessage))
    .matches('^(?:current weather in|cw)(?: (.+))?', forecastForCityNow)
    .matches('^(?:weather in|w)(?: (.+) )(?:for the next|ftn)(?: (.+)) days?', forecastForCity)
    .onDefault(builder.DialogAction.send(prompts.idu));