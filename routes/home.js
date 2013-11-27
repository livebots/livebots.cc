var server        = require('./../index.js');
var homeHandler   = require('./../controllers/home.js');

var home = {
  method: 'GET',
  path: '/',
  config: { 
    handler: homeHandler 
  }
};


server.route(home);
