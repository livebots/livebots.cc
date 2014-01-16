var mongoose = require('mongoose');

var botSchema = new mongoose.Schema({
  id: {type: String, unique: true},
  name: String,
  key: String,
  state: {type: Boolean, default: false},
  visible: Boolean, // After having the user
  address: String,
  commands: [String], // List of commands available to execute
  liveFeedURL: String,
  photoURL: String,
  description: String,
});

botSchema.statics.findByBotId = function (botId, cb) {
  this.find({ id: botId }, cb);
};

botSchema.statics.findAll = function (cb) {
  this.find({},cb);
};

 
var Bot = module.exports = mongoose.model('Bot', botSchema);