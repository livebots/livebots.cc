var request = require('request');

var Create = function() {
  var get = function (req) {
    req.reply.view('bot/create.html');
  };

  var post = function (req) {
    request.post({
      uri: 'http://api.livebots.cc/bot',
      json: {
        bot_id: req.payload.bot_id,
        bot_name: req.payload.bot_name,
        commands: req.payload.commands.split(","),
        address: req.payload.address,
        description: req.payload.description,
        photourl: req.payload.photourl,
        livefeedurl: req.payload.livefeedurl,
        bot_visible: true
      },
    }, function(err, result){
      if (err) console.log(err);
      console.log(result.body);
      req.reply.redirect('/bot/'+req.payload.bot_id)
    });
  };

  return {
    get: get,
    post: post
  }
};

module.exports = Create;