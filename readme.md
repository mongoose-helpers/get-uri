# mongoose-helpers-get-uri
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a mongoose helper that constructs a mongoose connection uri

## table of contents
* [installation](#installation)
* [api](#api)
* [usage](#usage)
    * [basic](#basic)
* [license](#license)

## installation
```javascript
npm install mongoose-events-event-logger
```

## api
```javascript
/**
 * @param {Object} user_options
 * @param {string} [user_options.database]
 * @param {string} [user_options.host]
 * @param {string} [user_options.password]
 * @param {number} [user_options.port]
 * @param {string} [user_options.username]
 *
 * @returns {string}
 */
getUri( user_options )
```

## usage
### basic
```javascript
var getUri = require( 'mongoose-helpers-get-uri' )

var options = {
  uri: {
    database: config.database,
    password: config.password,
    username: config.username
  }
}

var uri = getUri( options.uri )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/mongoose-helpers/get-uri/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/mongoose-helpers/get-uri?branch=master
[mit-license]: https://raw.githubusercontent.com/mongoose-helpers/get-uri/master/license.txt
[npm-image]: https://img.shields.io/npm/v/mongoose-helpers-get-uri.svg
[npm-url]: https://www.npmjs.com/package/mongoose-helpers-get-uri
[nsp-image]: https://nodesecurity.io/orgs/mongoose-helpers/projects/55d16e93-e42c-497a-8855-6829b5f87b23/badge
[nsp-url]: https://nodesecurity.io/orgs/mongoose-helpers/projects/55d16e93-e42c-497a-8855-6829b5f87b23
[travis-image]: https://travis-ci.org/mongoose-helpers/get-uri.svg?branch=master
[travis-url]: https://travis-ci.org/mongoose-helpers/get-uri
