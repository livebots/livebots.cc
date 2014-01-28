var server = require('./../index.js');
var path   = require('path');

var publicAssets = {
  method: 'GET',
  path: '/{path*}',
  config : {
    handler: {
      directory: function() {
        var staticAssetsPath = path.join(__dirname, '../..', '/public');
        return {
          path: staticAssetsPath,
          listing: true,
          index: true
        };
      }()
    }
  }
};

server.route(publicAssets);