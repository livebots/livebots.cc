var async          = require('async');
var Bot            = require('./../db/models/bots.js');
var Hapi           = require('hapi');

module.exports = get;

function get(req, res, next) {

  var botId = req.payload.id;
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
        if (result[0].livefeedurl) {
          bot.livefeedurl = result[0].livefeedurl;
        }
        if (result[0].photourl) {
          bot.photourl = result[0].photourl;
        }
        if (result[0].description) {
          bot.description = result[0].description;
        }
        cb();
      } else {
        cb(Hapi.error.badRequest('Not bot with the ID: ', botId));
      }
    }
  }

  function done(err) {
    if (err) {
      res.send(Hapi.error.badRequest(err.detail));
    } else {
      res.send(bot);
    }
  }
}