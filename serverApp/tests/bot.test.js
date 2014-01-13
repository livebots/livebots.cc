var tap     = require('tap');
var test    = tap.test;
var request = require('./_request');
process.env.NODE_ENV = 'test';
var wipe    = require('./_wipe.js');
var server  = require('./../index.js');
var db      = require('./../db');


wipe(function (){
  server.start(function() {

    // Write all the tests

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
        // TODO
        // Make this test actually significant

        var thingie = 'thing';
        t.equal(thingie, 'thing', 'thingie should be thing');
        t.end();
      });
    });
  


  });
});


tap.tearDown(function(){
  server.stop();
  wipe(function() {
    db.close();
  });
});