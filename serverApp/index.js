var Hapi       = require('hapi');
var options    = require('./options.js');
var logger     = require('./modules/logger.js');
var db         = require('./db')();

var port       = process.env.PORT || 8000;
var server     = module.exports = Hapi.createServer('localhost', port, options);
var routes     = require('./routes');

exports.start  = function(cb){
  server.start(function () {
    logger.info('Server started at: ' + server.info.uri);
    if(cb) {
      cb();
    }
  });
};





