var request = require('request');

module.exports = function (req) {
  //request.get('http://macroyalbacon.local:3000/bots', function(err, res, body){
  request.get('http://api.livebots.cc/bots', function(err, res, body){
    if (err) console.log(err);
    var bots = JSON.parse(body);
    console.log(bots);
    req.reply.view('main/home.html', {
      bots: bots
    });
  });
};