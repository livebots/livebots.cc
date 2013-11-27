/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/
var querystring = require('querystring');
var request  = require('../../lib/request.js');

var Bot = function () {
  this.index = function (req, resp, params) {
    var that = this;
    console.log(params.bot_id);
    request.get({
      uri: '/bot/'+params.bot_id,
    }, function(err, result){
      if (err) console.log(err);
      console.log(result);
      if(result) {
        that.respond(result, {
          format: 'html'
        , template: 'app/views/bot/index'
        });
      } else {
        that.redirect('/')
      }      
    });
  };
  this.list = function (req, resp, params) {
    var that = this;
    request.get({
      uri: '/bots'
    }, function(err, result){
      if (err) console.log(err);
      params.bots = result;
      console.log(params);
      that.respond(params, {
        format: 'html'
      , template: 'app/views/bot/list'
      });
    });
  };
  this.edit = function (req, resp, params) {
    var that = this;
    request.get({
      uri: '/bot/'+params.bot_id,
    }, function(err, result){
      if (err) console.log(err);
      console.log(result);
      that.respond(result, {
        format: 'html'
      , template: 'app/views/bot/edit'
      });
    });
  };
  this.create = function (req, resp, params) {
    this.respond(params, {
      format: 'html'
    , template: 'app/views/bot/create'
    });
  };
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
  this.editSave = function (req, resp, params) {
    var that = this;
    var queryObject = querystring.parse(req.body);
    console.log(queryObject);
    
    request.post({
      uri: '/bot/'+params.bot_id,
      json: {
        current_bot_id: params.bot_id,
        bot_id: params.bot_id,
        bot_name: queryObject.bot_name,
        commands: queryObject.commands.split(","),
        address: queryObject.address,
        description: queryObject.description,
        photourl: queryObject.photourl,
        livefeedurl: queryObject.livefeedurl,
        bot_visible: true,
        bot_state: (queryObject.bot_state=="yes")
      },
    }, function(err, result){
      if (err) console.log(err);
      console.log(result);
      that.redirect('/bot/'+params.bot_id)
    });
  };
  this.command = function (req, resp, params) {
    var that = this;
    var queryObject = querystring.parse(req.body);
    console.log(queryObject);

    request.post({
      uri: "/bot/"+queryObject.bot_id+"/command",
      json: {
        bot_id: queryObject.bot_id,
        command: queryObject.command,
      },
    }, function(err, result){
      if (err) console.log(err);
      console.log(result);
      that.respond(result, {
        format: 'json'
      });
    });
  };
};

exports.Bot = Bot;


