var test    = require('tap').test;
var request = require('./_request');


test('creates a bot', function(t) {
  request.post({
    uri: '/bot',
    json: {
      bot_id: 'this-is-a-bot-id',
      bot_name: 'this-is-a-bot-name',
      commands: ['up','down','left','right'],
      address: 'tagus',
      description: 'bot-mai-lindo',
      photourl: 'pretty-picture',
      livefeedurl: 'such-live-stream',
      bot_visible: true
    }
  }, function(error, response, body){
    var thingie = 'thing';
    t.equal(thingie, 'thing', 'thingie should be thing');
    t.end();
  });

});
