var async          = require('async');
var Bot            = require('./../../db/models/bot.js');
var Hapi           = require('hapi');

module.exports = get;

function get(request, reply) {

  var botId = request.params.bot_id;
  var bot   = {};

  async.series([
      getBot,
    ], done);

  function getBot(cb) {
    Bot.findByBotId(botId, gotBot);

    function gotBot(err, result) {
      if (err) {
        cb(err);
      }
      if (result.length > 0) {
        if (result[0].id) {
          bot.id = result[0].id;
        }
        if (result[0].name) {
          bot.name = result[0].name;
        }
        if (result[0].key) {
          bot.key = result[0].key;
        }
        if (result[0].state) {
          bot.state = result[0].state;
        }
        if (result[0].address) {
          bot.address = result[0].address;
        }
        if (result[0].commands) {
          bot.commands = result[0].commands;
        }
        if (result[0].liveFeedURL) {
          bot.liveFeedURL = result[0].liveFeedURL;
        }
        if (result[0].photoURL) {
          bot.photoURL = result[0].photoURL;
        }
        if (result[0].description) {
          bot.description = result[0].description;
        }
        if (result[0].visible) {
          bot.visible = result[0].visible;
        }
        cb();
      } else {
        cb(Hapi.error.conflict('No bot with the ID: ' + botId));
      }
    }
  }

  function done(err) {
    if (err) {
      reply(Hapi.error.badRequest(err.detail));
    } else {
      reply(bot);
    }
  }
}