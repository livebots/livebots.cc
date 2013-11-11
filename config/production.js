var config = {
  detailedErrors: false
, hostname: "live-nodebots.2013.nodeknockout.com"
, port: 80
// , model: {
//     defaultAdapter: 'mongo'
//   }
// , db: {
//     mongo: {
//       username: null
//     , dbname: 'production'
//     , prefix: null
//     , password: null
//     , host: 'localhost'
//     , port: 27017
//     }
//   }
, sessions: {
    store: 'memory'
  , key: 'sid'
  , expiry: 14 * 24 * 60 * 60
  }
};

module.exports = config;


