var mongoose = require('mongoose');

var mongo_url = process.env.MONGOURL || 'mongodb://localhost/livebots_dev';

if (process.env.NODE_ENV === 'test') {
  mongo_url = 'mongodb://localhost/livebots_test';
}

require('./models/bot');
require('./models/command');

mongoose.connect(mongo_url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){
  console.log('Successfuly connected to mongoDB');
});

module.exports = db;