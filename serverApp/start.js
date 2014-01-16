var server = require('./index.js');

server.start(function () {
  console.log('Server started at: ' + server.info.uri);
});