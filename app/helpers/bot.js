
var handlebars = require('handlebars');

handlebars.registerHelper('title-phrase', function(state) {
  if(state) {
    return new handlebars.SafeString(" is Live!!!");
  } else {
    return new handlebars.SafeString(" is sleeping...");
  }
});
handlebars.registerHelper('title-class', function(state) {
  if(state) {
    return new handlebars.SafeString("red");
  } else {
    return new handlebars.SafeString("blue");
  }
});
handlebars.registerHelper('content-html', function(state, photourl, livefeedurl) {
  if(state) {
    return new handlebars.SafeString("<iframe src=\""+livefeedurl+"\" frameborder=\"0\" width=\"100%\" height=\"480\"></iframe>");
  } else {
    return new handlebars.SafeString("<img src=\""+photourl+"\">");
  }
});
