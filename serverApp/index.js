var Hapi       = require('hapi');
var options    = require('./options.js');
var logger     = require('./modules/logger.js');
require('./db');

var port       = process.env.PORT || 8000;
if (process.env.NODE_ENV === 'test'){
  port = 2000;
}

var server     = module.exports = Hapi.createServer('localhost', port, options);
var routes     = require('./routes');



