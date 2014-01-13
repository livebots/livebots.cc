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

  // console.log(request);
  console.log(request.payload);

  var bot = {};

  async.series([
      createBot,
      saveBot,
    ], done);

  function createBot(cb) {
    bot.id = request.payload.bot_id;
    bot.name = request.payload.bot_name;
    bot.key = uuid();
    bot.state = false;
    bot.visible = request.payload.bot_visible || true;

    if (request.payload.address) {
      bot.address = request.payload.address;
    }
    if (request.payload.commands) {
      bot.commands = request.payload.commands;
    }
    if (request.payload.description) {
      bot.description = request.payload.description;
    }
    if (request.payload.photourl) {
      bot.photourl = request.payload.photourl;
    }
    if (request.payload.livefeedurl) {
      bot.livefeedurl = request.payload.livefeedurl;
    }
    cb();
  }

  function saveBot(cb) {
    var newBot = new Bot(bot);

    newBot.save(function (err, reply){
      if (err) {
        return cb(err);
      }
      if(reply) {
        cb();
      } else { // same id        
        cb(new Error('A bot with the same ID already exists'));
      }

      cb();
    });
    
  }

  function done(err) {
    if (err) {
      var error = Hapi.error.badRequest(err.detail);
      reply(error);
    } else {
      reply(bot);
    }
  }
}