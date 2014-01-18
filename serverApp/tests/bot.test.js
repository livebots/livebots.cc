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
    photoURL: 'pretty-picture',
    liveFeedURL: 'such-live-stream',
    state: false,
    visible: true,

  };
  var bot_b = {
    id: 'bot_b',
    name: 'bot_b_name',
    commands: ['up','down','left','right'],
    address: 'tagus',
    description: 'bot-mai-lindo',
    photoURL: 'pretty-picture',
    liveFeedURL: 'such-live-stream',
    state: false,
    visible: true
  };
  var bot_c = {
    id: 'bot_c',
    name: 'bot_c_name',
    commands: ['up','down','left','right'],
    address: 'tagus',
    description: 'bot-mai-lindo',
    photoURL: 'pretty-picture',
    liveFeedURL: 'such-live-stream',
    state: false,
    visible: true
  };


  // 
  // Create Tests
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
      t.equal(bot.state, bot_a.state, 'thingie should be thing');
      t.equal(bot.photoURL, bot_a.photoURL, 'thingie should be thing');
      t.equal(bot.liveFeedURL, bot_a.liveFeedURL, 'thingie should be thing');
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
      t.equal(bot.state, bot_b.state, 'thingie should be thing');
      t.equal(bot.photoURL, bot_b.photoURL, 'thingie should be thing');
      t.equal(bot.liveFeedURL, bot_b.liveFeedURL, 'thingie should be thing');
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
      t.equal(bot.state, bot_c.state, 'thingie should be thing');
      t.equal(bot.photoURL, bot_c.photoURL, 'thingie should be thing');
      t.equal(bot.liveFeedURL, bot_c.liveFeedURL, 'thingie should be thing');
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



  // 
  // Get Tests
  //  

  test('Get bot-a', function(t) {
    request({
      method: 'GET',
      uri: '/bot/' + encodeURIComponent(bot_a.id)
    }, function(err, bot, code) {
      t.equal(bot.id, bot_a.id, 'thingie should be thing');
      t.equal(bot.name, bot_a.name, 'thingie should be thing');
      t.equal(bot.address, bot_a.address, 'thingie should be thing');
      t.equal(bot.description, bot_a.description, 'thingie should be thing');
      t.equal(bot.photoURL, bot_a.photoURL, 'thingie should be thing');
      t.equal(bot.liveFeedURL, bot_a.liveFeedURL, 'thingie should be thing');
      t.equal(bot.visible, bot_a.visible, 'thingie should be thing');
      t.end();
    });
  });
 

  test('Get bots', function(t) {
    request({
      method: 'GET',
      uri: '/bot'
    }, function(err, bots, code) {
      t.equal(bots[0].id, bot_a.id, 'thingie should be thing');
      t.equal(bots[0].name, bot_a.name, 'thingie should be thing');
      t.equal(bots[0].address, bot_a.address, 'thingie should be thing');
      t.equal(bots[0].description, bot_a.description, 'thingie should be thing');
      t.equal(bots[0].state, bot_a.state, 'thingie should be thing');
      t.equal(bots[0].photoURL, bot_a.photoURL, 'thingie should be thing');
      t.equal(bots[0].liveFeedURL, bot_a.liveFeedURL, 'thingie should be thing');
      t.equal(bots[0].visible, bot_a.visible, 'thingie should be thing');

      t.equal(bots[1].id, bot_b.id, 'thingie should be thing');
      t.equal(bots[1].name, bot_b.name, 'thingie should be thing');
      t.equal(bots[1].address, bot_b.address, 'thingie should be thing');
      t.equal(bots[1].description, bot_b.description, 'thingie should be thing');
      t.equal(bots[1].state, bot_b.state, 'thingie should be thing');
      t.equal(bots[1].photoURL, bot_b.photoURL, 'thingie should be thing');
      t.equal(bots[1].liveFeedURL, bot_b.liveFeedURL, 'thingie should be thing');
      t.equal(bots[1].visible, bot_b.visible, 'thingie should be thing');

      t.equal(bots[2].id, bot_c.id, 'thingie should be thing');
      t.equal(bots[2].name, bot_c.name, 'thingie should be thing');
      t.equal(bots[2].address, bot_c.address, 'thingie should be thing');
      t.equal(bots[2].description, bot_c.description, 'thingie should be thing');
      t.equal(bots[2].state, bot_c.state, 'thingie should be thing');
      t.equal(bots[2].photoURL, bot_c.photoURL, 'thingie should be thing');
      t.equal(bots[2].liveFeedURL, bot_c.liveFeedURL, 'thingie should be thing');
      t.equal(bots[2].visible, bot_c.visible, 'thingie should be thing');
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