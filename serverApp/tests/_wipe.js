var async    = require('async');
var db       = require('./../db');
var Bot      = require('./../db/models/bot.js');
var Command  = require('./../db/models/command.js');

module.exports = function (cb) {
  async.series([
    removeBots,
    removeCommands,
  ],cb);

  function removeBots(cb){
    Bot.remove({}, function(err) {
      if (err) {
        cb(err);
      }
      cb();
    });
  }

  function removeCommands(cb){
    Command.remove({}, function(err) {
      if (err) {
        cb(err);
      }
      cb();
    });
  }
};