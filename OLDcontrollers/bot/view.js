var request = require('request');

var View = function() {
  var get = function (req) {
    request.get('http://api.livebots.cc/bot/'+req.params.id, function(err, res, body){
      if (err) console.log(err);
      var bot = JSON.parse(body);
      console.log(bot);
      req.reply.view('bot/view.html', bot);
    });
  };

  return {
    get: get,
  }
};

module.exports = View;