'use strict';

/**
 * 'mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/mydatabase';
 *
 * @link http://mongoosejs.com/docs/api.html#index_Mongoose-connect
 *
 * @param {Object} [user_options]
 * @param {string} [user_options.database]
 * @param {string} [user_options.host]
 * @param {string} [user_options.password]
 * @param {number} [user_options.port]
 * @param {string} [user_options.username]
 *
 * @returns {string}
 */
function getUri( user_options ) {
  var options = user_options || {};
  var uri = 'mongodb://';

  if ( options.username && options.password ) {
    uri += '%user:%pass@'
      .replace( '%user', options.username )
      .replace( '%pass', options.password );
  }

  uri += options.host || 'localhost';

  if ( options.port ) {
    uri += ':' + options.port;
  }

  if ( options.database ) {
    uri += '/%database'.replace( '%database', options.database );
  }

  return uri;
}

module.exports = getUri;
