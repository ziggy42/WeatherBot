"use strict";

var restify = require('restify');
var builder = require('botbuilder');
var index = require('./dialogs/index');

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: 'appId', appSecret: 'appSecret' });
bot.add('/', index.root);

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});