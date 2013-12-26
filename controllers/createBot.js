var request = require('request');
request.post({
	//uri: 'http://MacRoyalBacon.local:3000/bot',
	uri: 'http://api.livebots.cc/bot',
	json: {
	  bot_id: "jaquim",
	  bot_name: "jaquim"
	}
}, function(err, res){
	if (err) console.log(err);   
	console.log(res);  
});

/*

  this.createSave = function (req, resp, params) {
    var that = this;
    var queryObject = querystring.parse(req.body);
    console.log(queryObject);

    request.post({
      uri: '/bot',
      json: {
        bot_id: queryObject.bot_id,
        bot_name: queryObject.bot_name,
        commands: queryObject.commands.split(","),
        address: queryObject.address,
        description: queryObject.description,
        photourl: queryObject.photourl,
        livefeedurl: queryObject.livefeedurl,
        bot_visible: true
      },
    }, function(err, result){
      if (err) console.log(err);
      console.log(result);
      that.redirect('/bot/'+queryObject.bot_id)
    });
  };

 */