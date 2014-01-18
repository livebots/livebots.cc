var async          = require('async');
var Bot            = require('./../../db/models/bot.js');
var Hapi           = require('hapi');

module.exports = list;

function list(request, reply) {

  var bots;

  async.series([
      getBots,
    ], done);

  function getBots(cb) {
    Bot.findAll(gotBots);

    function gotBots(err, result) {
      if (err) cb(err);
      bots = result;
      cb();
    }
  }

  function done(err) {
    if (err) {
      reply(Hapi.error.badRequest(err.detail));
    } else {
      reply(bots);
    }
  }
}