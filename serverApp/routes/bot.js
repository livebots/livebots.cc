var server  = require('./../index.js');
var bot     = require('./../resources/bot');

server.route(
  { method: 'POST',
    path: '/bot',
    handler: bot.create }
  );

server.route(
  { method: 'GET',
    path: '/bot/{bot_id}',
    handler: bot.get }
  );

server.route(
  { method: 'GET',
    path: '/bot',
    handler: bot.list}
  );

// server.route(
//   { method: 'PUT',
//     path: '/bot/{bot_id}',
//     handler: bot.edit }
//   );











