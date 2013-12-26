var server        = require('./../../index.js');
var handler   = require('./../../controllers/bot/view.js')();

var get = {
  method: 'GET',
  path: '/bot/{id}',
  config: { 
    handler: handler.get 
  }
};

server.route(get);
