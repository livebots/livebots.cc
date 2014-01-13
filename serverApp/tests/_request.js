var request = require('request');

exports = module.exports = doRequest;

var PREFIX = 'http://localhost:2000';

exports.prefix = prefix;

function prefix(url) {
  return PREFIX + url;
}

function doRequest(options, cb) {
  if (typeof(options) != 'object') {
    options = { uri: options };
  }

  if (! options) options = {};

  if (options.uri.indexOf(PREFIX) != 0)
    options.uri = PREFIX + options.uri;

  if (! options.json) options.json = true;

  request(options, done);

  function done(err, res, body) {
    if (err) return cb(err);
    var code = res.statusCode;
    if (code < 200 || code > 299) {
      var msg = 'response status code: ' + code + '.';
      if (body) msg += ' Response: ' + (
        body.error && body.error.message || body.error || body.message || body);
      var error = new Error(msg)
      error.code = code;
      return cb(error, null, code);
    }
    cb(null, body, code);
  }
}

['post', 'put', 'delete'].forEach(inject);

function inject(method) {
  doRequest[method] = function(options, cb) {
    if (typeof(options) != 'object') {
      options = { uri: options };
    }

    if (! options) options = {};

    options.method = method;
    doRequest(options, cb);
  };
}