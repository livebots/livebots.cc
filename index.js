var Hapi        = require('hapi');
var options     = require('./options.js');
var logger      = require('./modules/logger.js');

var port        = process.env.PORT || 8080;
var server      = module.exports = new Hapi.Server(port, options);
var routes      = require('./routes');


var status = function () {
  this.reply('ok');
};

server.route({ method: 'GET', path: '/status', handler: status });

server.start(function () {
  logger.info('Server started at ' + server.info.uri);
});



