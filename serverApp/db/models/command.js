var mongoose = require('mongoose');

var botSchema = require('./bot');

var commandSchema = module.exports = new mongoose.Schema({
  bot_id: String,
  bot_key: String,
  issued: { type: Date, default: Date.now, index: true },
  command: String,
  consumed: {type: Boolean, default: false}
});

commandSchema.statics.findByBotId = function (botId, cb) {
  this.find({ bot_id: botId }, cb);
};

commandSchema.statics.findLast = function (botId, cb) {
  // this.find({},cb);
  this.find({bot_id: botId}).sort('-issued').limit(1).exec(cb);

// Person
// .find({ occupation: /host/ })
// .where('name.last').equals('Ghost')
// .where('age').gt(17).lt(66)
// .where('likes').in(['vaporizing', 'talking'])
// .limit(10)
// .sort('-occupation')
// .select('name occupation')
// .exec(callback);

};

var Command = module.exports = mongoose.model('Command', commandSchema);