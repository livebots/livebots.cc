var joi            = require('joi');
var async          = require('async');
var restify        = require('restify');
var Bot            = require('./../../db/models/bots.js');
var assert         = require('assert');

exports = module.exports = edit;
exports.validate = validate;

/// validate

function validate(req, res, next) {
  var err = joi.validate(req.params, schema);
  if (err) res.send(new restify.InvalidArgumentError(err.message));
  else next();
}

var schema = {
  current_bot_id: joi.string().required(),
  bot_id: joi.string(),
  bot_name: joi.string(),
  commands: joi.array().includes(joi.string()),
  address: joi.string(),
  description: joi.string(),
  photourl: joi.string(),
  livefeedurl: joi.string(),
  bot_visible: joi.boolean()
};

/// create bot

function edit(req, res, next) {
  var currentBotId = req.params.current_bot_id;
  assert(currentBotId, 'must have the current bot ID');

  var bot;

  async.series([
      getBot,
      editBot,
      saveBot
    ], done);

  function getBot(cb) {
    Bot.findByBotId(currentBotId, gotBot);

    function gotBot(err, result) {
      if (err) cb(err);
      bot = result[0];
      cb();
    }
  }

  function editBot(cb) {

    if (req.params.bot_id) bot.bot_id = req.params.bot_id;
    if (req.params.bot_name) bot.bot_name = req.params.bot_name;
    if (req.params.bot_key) bot.bot_key = req.params.bot_key;
    if (req.params.bot_state !== null) bot.bot_state = req.params.bot_state;
    if (req.params.address) bot.address = req.params.address;
    if (req.params.commands) bot.commands = req.params.commands;
    if (req.params.livefeedurl) bot.livefeedurl = req.params.livefeedurl;
    if (req.params.photourl) bot.photourl = req.params.photourl;
    if (req.params.description) bot.description = req.params.description;
    cb();
  }

  function saveBot(cb) {
    bot.save(function (err, res){
      if (err) cb(err);
      console.log('bot edited sucessfuly', res);
      cb();
    });
  }

  function done(err) {
    if (err) {
      res.send(new restify.InvalidArgumentError(err.detail));
    } else res.send(bot);
  }
}