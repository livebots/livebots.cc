var joi            = require('joi');
var async          = require('async');
var restify        = require('restify');
var Command        = require('./../../db/models/commands.js');
var Bot            = require('./../../db/models/bots.js');

exports = module.exports = create;
exports.validate = validate;

/// validate

function validate(req, res, next) {
  var err = joi.validate(req.params, schema);
  if (err) res.send(new restify.InvalidArgumentError(err.message));
  else next();
}

var schema = {
  bot_id: joi.string().required(),
  command: joi.string().required()
};

/// create bot

function create(req, res, next) {

  var comm = {
    bot_id: req.params.bot_id,
    command: req.params.command,
  };


  async.series([
      getBotKey,
      saveCommand,
    ], done);


  function getBotKey(cb) {
    console.log("GET BOT FOR KEY", comm.bot_id);
    Bot.findByBotId(comm.bot_id, gotBotKey);

    function gotBotKey(err, result) {
      if (err) cb(err);
      //console.log("O RESULT É", result[0].bot_key);
      //if (! result.lenght > 0) cb(restify.InvalidArgumentError('Not bot with the ID: ', botId));
      
      comm.bot_key = result[0].bot_key;
      //console.log("O COMMM É", comm);
      //console.log("O BOT QUE VAI SER ENVIADO PARA O CLIENTE É", bot);
      cb();
    }
  }


  function saveCommand(cb) {
    var newCommand = new Command(comm);

    newCommand.save(function (err, res){
      if (err) cb(err);
      console.log('Command saved sucessfuly',res);
      cb();
    });
    
  }

  function done(err) {
    if (err) {
      res.send(new restify.InvalidArgumentError(err.detail));
    } else res.send(comm);
  }
}