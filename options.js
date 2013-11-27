module.exports = {
  views: {
    path: __dirname + '/views',
    partialsPath: __dirname + '/views/partials',
    helpersPath: __dirname + '/views/helpers',
    engines: {
      html: 'handlebars'
    }
  },
  cache: {
    engine: 'memory'
  }
};
