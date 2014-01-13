var joi            = require('joi');
var async          = require('async');
var restify        = require('restify');
var Bot            = require('./../../db/models/bots.js');
var Commands       = require('./../../db/models/commands.js');

exports = module.exports = lastCommand;
exports.validate = validate;

/// validate

function validate(req, res, next) {
  var err = joi.validate(req.params, schema);
  if (err) res.send(new restify.InvalidArgumentError(err.message));
  else next();
}

var schema = {
  bot_id: joi.string().required(),
  bot_key: joi.string().required()
};

/// Last Issued Command

function lastCommand(req, res, next) {

  var botId = req.params.bot_id;
  var givenBotKey = req.params.bot_key;
  var lastComm;

  async.series([
      validateKey,
      getLastCommand,
      //updateLastCommand,
    ], done);


  function validateKey(cb) {
    Bot.findByBotId(botId, gotBotKey);

    function gotBotKey(err, result) {
      if (err) cb(err);
      if (result.length > 0) {
        if(givenBotKey !== result[0].bot_key)
          cb(restify.InvalidArgumentError('Invalid Bot Key'));
        else
          cb();
      } else cb(restify.InvalidArgumentError('There is no Bot with ID: ' + botId));
    }
  }

  function getLastCommand(cb) {
    Commands.findLast(botId, gotLastCommand);

    function gotLastCommand(err, result) {
      if (err) cb(err);
      if (result.length > 0) {
        //if (result[0].consumed == true) cb(restify.InvalidArgumentError('All commands were consumed'));
        lastComm = result[0];
        //lastComm.consumed = true;
        console.log(result[0]);
        cb();
      } else cb(restify.InvalidArgumentError('No commands for this bot'));
    }
  }

  function updateLastCommand(cb) {
    lastComm.save(function (err, res) {
      if (err) cb(err);
      console.log('Last Comm Updated sucessfuly',res);
      cb();
    });
  }

  function done(err) {
    if (err) {
      res.send(new restify.InvalidArgumentError(err.detail));
    } else  res.send(lastComm);
  }
}