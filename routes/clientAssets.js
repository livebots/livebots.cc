var path = require('path')

module.exports = {
  method: 'GET',
  path: '/{path*}',
  config : {
    handler: {
      directory: function(){
        var staticAssetsPath = path.join(__dirname, '..', 'clientapp');
        return {
          path: staticAssetsPath,
          listing: false,
          index: true 
        };}()
    }
  }
};