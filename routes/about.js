var server        = require('./../index.js');
var aboutHandler  = require('./../controllers/about.js');

var about = {
  method: 'GET',
  path: '/about',
  config: { 
    handler: aboutHandler 
  }
};

server.route(about);
