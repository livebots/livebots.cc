var tap     = require('tap');
var test    = tap.test;
var request = require('./_request');
process.env.NODE_ENV = 'test';
var wipe    = require('./_wipe.js');
var server  = require('./../index.js');
var db      = require('./../db');


function startTesting(){
  
  // 
  // Playground bots
  // 
  var bot_a = {
    id: 'bot_a',
    name: 'bot_a_name',
    commands: ['up','down','left','right'],
    address: 'tagus',
    description: 'bot-mai-lindo',
    photourl: 'pretty-picture',
    livefeedurl: 'such-live-stream',
    visible: true
  };
  var bot_b = {
    id: 'bot_b',
    name: 'bot_b_name',
    commands: ['up','down','left','right'],
    address: 'tagus',
    description: 'bot-mai-lindo',
    photourl: 'pretty-picture',
    livefeedurl: 'such-live-stream',
    visible: true
  };
  var bot_c = {
    id: 'bot_c',
    name: 'bot_c_name',
    commands: ['up','down','left','right'],
    address: 'tagus',
    description: 'bot-mai-lindo',
    photourl: 'pretty-picture',
    livefeedurl: 'such-live-stream',
    visible: true
  };


  // 
  // Tests
  // 
  test('Create a new bot-a', function(t) {
    request.post({
      uri: '/bot',
      json: bot_a
    }, function(err, bot, code) {
      t.equal(bot.id, bot_a.id, 'thingie should be thing');
      t.equal(bot.name, bot_a.name, 'thingie should be thing');
      t.equal(bot.address, bot_a.address, 'thingie should be thing');
      t.equal(bot.description, bot_a.description, 'thingie should be thing');
      t.equal(bot.photourl, bot_a.photourl, 'thingie should be thing');
      t.equal(bot.livefeedurl, bot_a.livefeedurl, 'thingie should be thing');
      t.equal(bot.visible, bot_a.visible, 'thingie should be thing');
      t.end();
    });
  });

  test('Create a new bot-b', function(t) {
    request.post({
      uri: '/bot',
      json: bot_b
    }, function(err, bot, code) {
      t.equal(bot.id, bot_b.id, 'thingie should be thing');
      t.equal(bot.name, bot_b.name, 'thingie should be thing');
      t.equal(bot.address, bot_b.address, 'thingie should be thing');
      t.equal(bot.description, bot_b.description, 'thingie should be thing');
      t.equal(bot.photourl, bot_b.photourl, 'thingie should be thing');
      t.equal(bot.livefeedurl, bot_b.livefeedurl, 'thingie should be thing');
      t.equal(bot.visible, bot_b.visible, 'thingie should be thing');
      t.end();
    });
  });

  test('Create a new bot-c', function(t) {
    request.post({
      uri: '/bot',
      json: bot_c
    }, function(err, bot, code) {
      t.equal(bot.id, bot_c.id, 'thingie should be thing');
      t.equal(bot.name, bot_c.name, 'thingie should be thing');
      t.equal(bot.address, bot_c.address, 'thingie should be thing');
      t.equal(bot.description, bot_c.description, 'thingie should be thing');
      t.equal(bot.photourl, bot_c.photourl, 'thingie should be thing');
      t.equal(bot.livefeedurl, bot_c.livefeedurl, 'thingie should be thing');
      t.equal(bot.visible, bot_c.visible, 'thingie should be thing');
      t.end();
    });
  });

  test('Create a repeated bot', function(t) {
    request.post({
      uri: '/bot',
      json: bot_a
    }, function(err, bot, code) {
      t.equal(code, 409, 'When repeating ID, a 409 is expected');
      t.end();
    });
  });


}

wipe(function (){
  server.start(function() {
    startTesting();
  });
});

tap.tearDown(function(){
  server.stop();
  wipe(function() {
    db.close();
  });
});