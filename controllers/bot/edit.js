var request = require('request');

var Edit = function() {
  var get = function (req) {
    request.get('http://api.livebots.cc/bot/'+req.params.id, function(err, res, body){
      if (err) console.log(err);
      var bot = JSON.parse(body);
      console.log(bot);
      req.reply.view('bot/edit.html', bot);
    });
  };

  var post = function (req) {
    console.log(req.params.id);
    request.post({
      uri: 'http://api.livebots.cc/bot/'+req.params.id,
      json: {
        current_bot_id: req.params.id,
        bot_id: req.params.id,
        bot_name: req.payload.bot_name,
        commands: req.payload.commands.split(","),
        address: req.payload.address,
        description: req.payload.description,
        photourl: req.payload.photourl,
        livefeedurl: req.payload.livefeedurl,
        bot_visible: true,
        bot_state: (req.payload.bot_state=="yes")
      },
    }, function(err, result){
      if (err) console.log(err);
      console.log(result.body);
      req.reply.redirect('/bot/'+req.params.id)
    });
  };

  return {
    get: get,
    post: post
  }
};

module.exports = Edit;