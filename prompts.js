"use strict";

module.exports = {
    helpMessage: 'Hi, here\'s a list of stuff you can do:\n\n' +
    '* *current weather in <city>*\n\n' + 
    '* *weather in <city> for the next <n> days*\n\n',
    
    forecastNow: '%s:\n %s, %s',
    forecastHeader: 'Conditions for the next %d days in %s, %s, %s\n\n',
    forecastContent: '* *%s %s*: \n%s, high: %s, low: %s\n',
    
    idu: 'I didn\'t understand :(',
    location404: 'Forecast not found for %s'
};