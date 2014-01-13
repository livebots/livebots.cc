var joi            = require('joi');
var async          = require('async');
var restify        = require('restify');
var Bot            = require('./../../db/models/bots.js');

exports = module.exports = get;
exports.validate = validate;

/// validate

function validate(req, res, next) {
  var err = joi.validate(req.params, schema);
  if (err) res.send(new restify.InvalidArgumentError(err.message));
  else next();
}

var schema = {
  bot_id: joi.string().required(),
};

/// get bot

function get(req, res, next) {

  var botId = req.params.bot_id;
  var bot   = {};

  async.series([
      getBot,
    ], done);

  function getBot(cb) {
    Bot.findByBotId(botId, gotBot);

    function gotBot(err, result) {
      if (err) cb(err);
      if (result.length > 0) {
        if (result[0].bot_id) bot.bot_id = result[0].bot_id;
        if (result[0].bot_name) bot.bot_name = result[0].bot_name;
        if (result[0].bot_key) bot.bot_key = result[0].bot_key;
        if (result[0].bot_state) bot.bot_state = result[0].bot_state;
        if (result[0].address) bot.address = result[0].address;
        if (result[0].commands) bot.commands = result[0].commands;
        if (result[0].livefeedurl) bot.livefeedurl = result[0].livefeedurl;
        if (result[0].photourl) bot.photourl = result[0].photourl;
        if (result[0].description) bot.description = result[0].description;      
        cb();
      } else {
        cb(restify.InvalidArgumentError('Not bot with the ID: ', botId));        
      }
    }
  }

  function done(err) {
    if (err) {
      res.send(new restify.InvalidArgumentError(err.detail));
    } else res.send(bot);
  }
}