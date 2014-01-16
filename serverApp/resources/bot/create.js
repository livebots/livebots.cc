var Hapi           = require('hapi');
var async          = require('async');
var Bot            = require('./../../db/models/bot.js');
var uuid           = require('./../../lib/uuid');

exports = module.exports = create;


// var schema = {
//   bot_id: joi.string().required(),
//   bot_name: joi.string().required(),
//   commands: joi.array().includes(joi.string()),
//   address: joi.string(),
//   description: joi.string(),
//   photourl: joi.string(),
//   livefeedurl: joi.string(),
//   bot_visible: joi.boolean()
// };

/// create bot

function create(request, reply) {

  var bot = {};

  async.series([
      checkBot,
      createBot,
      saveBot,
    ], done);

  function checkBot(cb) {
    Bot.findByBotId(request.payload.id, function(err, bot) {
      if (err) {
        return cb(Hapi.error.internal('Hipcup on the DB' + err.detail));
      } else if (bot.length > 0) {
        return cb(Hapi.error.conflict('Bot ID exists: '+request.payload.id));
      } else {
        return cb();
      }
    });
  }

  function createBot(cb) {
    bot.id = request.payload.id;
    bot.name = request.payload.name;
    bot.key = uuid();
    bot.state = false;
    bot.visible = request.payload.visible || true;

    if (request.payload.address) {
      bot.address = request.payload.address;
    }
    if (request.payload.commands) {
      bot.commands = request.payload.commands;
    } else if (request.payload["commands[]"]) {
      bot.commands = request.payload["commands[]"];
    } 
    if (request.payload.description) {
      bot.description = request.payload.description;
    }
    if (request.payload.photoURL) {
      bot.photoURL = request.payload.photoURL;
    }
    if (request.payload.liveFeedURL) {
      bot.liveFeedURL = request.payload.liveFeedURL;
    }
    cb();
  }

  function saveBot(cb) {
    var newBot = new Bot(bot);

    newBot.save(function (err, reply){
      if (err) {
        return cb(Hapi.error.internal('Hipcup on the DB' + err.detail));
      } else if(reply) {
        cb();
      } else { // same id        
        return cb(Hapi.error.conflict('Bot ID exists: '+request.payload.id));
      }
      cb();
    });
  }

  function done(err) {
    if (err) {
      reply(err);
    } else {
      reply(bot);
    }
  }
}