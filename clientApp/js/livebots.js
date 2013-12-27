url_prefix = process.env.NODE_ENV === 'production' ? 'http://api.livebots.cc/' : 'http://localhost:3000/';
 
require('./app.js');
require('./controllers');
require('./directives.js');
require('./filters.js');
require('./services.js');