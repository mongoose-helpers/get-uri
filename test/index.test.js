'use strict';

var getUri = require( '../src/index' )
var tap = require( 'tap' )

var options = [
  {
    options: null,
    uri: 'mongodb://localhost'
  },
  {
    options: { database: 'mydb' },
    uri: 'mongodb://localhost/mydb'
  },
  {
    options: { database: 'mydb', host: 'test' },
    uri: 'mongodb://test/mydb'
  },
  {
    options: { database: 'mydb', host: 'test' },
    uri: 'mongodb://test/mydb'
  },
  {
    options: { database: 'mydb', host: 'test', password: '123' },
    uri: 'mongodb://test/mydb'
  },
  {
    options: { database: 'mydb', host: 'test', username: 'me' },
    uri: 'mongodb://test/mydb'
  },
  {
    options: { database: 'mydb', host: 'test', password: '123', username: 'me' },
    uri: 'mongodb://me:123@test/mydb'
  },
  {
    options: { database: 'mydb', host: 'test', password: '123', port: 42, username: 'me' },
    uri: 'mongodb://me:123@test:42/mydb'
  }
]

tap.test( 'get mongoose connection uri with various options',
  function ( t ) {
    options.forEach(
      function ( option ) {
        var uri = getUri( option.options )

        t.equal(
          uri,
          option.uri,
          'should return a uri that equals `%uri`'
            .replace( '%uri', option.uri )
        )
      }
    )

    t.end()
  }
)
