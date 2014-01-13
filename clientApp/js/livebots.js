url_prefix = process.env.NODE_ENV === 'production' ? 'http://api.livebots.cc/' : 'http://localhost:3000/';
 
require('./angularApp/app.js');
require('./angularApp/controllers');
require('./angularApp/directives');
require('./angularApp/filters');
require('./angularApp/services');