livebots.cc Client app
===================================


## Development

When you change .js files in ./lib, run browserify by:
```bash
$ npm run dist
```

You can start the app by:
```bash
$ npm start
```

Or with nodemon by:
```bash
$ npm run mon
```

## Automate

```bash
# set the permissions to be able to execute, just once
$ chmod +x bin/watch.js
```

```bash
$ bin/watch.js
```


Notes for API:
BadDigest: 400,
BadMethod: 405,
InvalidArgument: 409,
InvalidContent: 400,
InvalidCredentials: 401,
InvalidHeader: 400,
InvalidVersion: 400,
MissingParameter: 409,
NotAuthorized: 403,
PreconditionFailed: 412,
RequestExpired: 400,
RequestThrottled: 429,
ResourceNotFound: 404,
WrongAccept: 406