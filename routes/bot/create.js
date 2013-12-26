var server        = require('./../../index.js');
var createHandler   = require('./../../controllers/bot/create.js')();

var get = {
  method: 'GET',
  path: '/bot',
  config: { 
    handler: createHandler.get 
  }
};

var post = {
  method: 'POST',
  path: '/bot',
  config: { 
    handler: createHandler.post
  }
};

server.route(get);
server.route(post);
