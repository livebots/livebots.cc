var server        = require('./../../index.js');
var handler   = require('./../../controllers/bot/edit.js')();

var get = {
  method: 'GET',
  path: '/bot/{id}/edit',
  config: { 
    handler: handler.get 
  }
};

var post = {
  method: 'POST',
  path: '/bot/{id}/edit',
  config: { 
    handler: handler.post

  }
};

server.route(get);
server.route(post);
