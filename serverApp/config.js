var config = {
  hostname: 'localhost',
  port: process.env.PORT || 8000,
  urls: {
    failureRedirect: '/login',
    successRedirect: '/'
  },
};

if (process.env.NODE_ENV === 'test'){
  config.port = 2000;
}

module.exports = config;