'use strict';

const debug = require('debug')('cfgram:basic-auth-middleware');

module.exports = function(req, res, next) {
  debug('basic auth');

  // grabing the headers and looking for authorization
  let authHeaders = req.headers.authorization;
  if(!authHeaders) return next(new Error('authorization auth-headers required'));

  // parse the base64 username:password into somehthing usable

  let base64Str = authHeaders.split('Basic ')[1];
  if(!base64Str) return next(new Error('authorization failed, username:pasword required'));

  // attache the parsed data to the req and next

  let [username, password] = Buffer.from(base64Str, 'base64Str').toString().split(':');

  req.auth = { username, password };

  if(!req.auth.username) return next(new Error('authorization failed, username required'));
  if(!req.auth.password) return next(new Error('authorization failed, password required'));

  next();
};
