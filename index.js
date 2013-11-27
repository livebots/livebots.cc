var Hapi        = require('hapi');
var options     = require('./options.js');
var logger      = require('./modules/logger.js');

var port        = process.env.PORT || 8080;
var server      = module.exports = new Hapi.Server(port, options);
var routes      = require('./routes');

server.start(function () {
  logger.info('Server started at ' + server.info.uri);
});


