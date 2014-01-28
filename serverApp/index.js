var Hapi       = require('hapi');
var options    = require('./options.js');
var config     = require('./config.js');
var logger     = require('./modules/logger.js');
require('./db');


var plugins = {
  yar: {
    cookieOptions: {
      password: process.env.COOKIE_SECRET || 'worldofwalmart', // cookie secret
      isSecure: false // required for non-https applications
    }
  },
  travelogue: config
};


var server     = module.exports =
  Hapi.createServer('localhost', config.port, options);

server.pack.require(plugins, function (err) {
  if (err) {
    throw err;
  }
});

server.auth.strategy('passport', 'passport');

// Follow normal Passport rules to add Strategies
// Passport.use(/* Strategy Goes Here */);
// Passport.serializeUser(ser);
// Passport.deserializeUser(deser);

var routes     = require('./routes');



