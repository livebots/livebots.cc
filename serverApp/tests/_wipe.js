var db       = require('./../db');
var Bot      = require('./../db/models/bot.js');
var Command = require('./../db/models/command.js');

module.exports = function (cb) {
  // TODO change this uglyness to async  
  Bot.remove({}, function(err) { 
    Command.remove({}, function(err) { 
      cb();
    });
  });
};
