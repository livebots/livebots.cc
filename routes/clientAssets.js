var server = require('./../index.js');
var path = require('path')

var clientapp = {
  method: 'GET',
  path: '/{path*}',
  config : {
    handler: {
      directory: function(){
        var staticAssetsPath = path.join(__dirname, '..', 'clientapp');
        return {
          path: staticAssetsPath,
          listing: true,
          index: true 
        };}()
    }
  }
};

server.route(clientapp);