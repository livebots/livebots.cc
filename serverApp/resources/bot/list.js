var joi            = require('joi');
var async          = require('async');
var restify        = require('restify');
var Bot            = require('./../../db/models/bots.js');

exports = module.exports = list;

/// get bot

function list(req, res, next) {

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
      res.send(new restify.InvalidArgumentError(err.detail));
    } else res.send(bots);
  }
}