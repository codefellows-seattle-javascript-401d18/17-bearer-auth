'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const User = mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  email: { type: String, require:true },
  findHash: { type: String, unique: true }
});

User.methods.generatePasswordHash = function(password) {
// creates a hashed password for storing on the server
//NO PLAIN TEXT

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if(err) return reject(err);
      this.password = hash;
      resolve(this);
    });
  });
};

User.methods.comparePasswordHash = function(password) {
  // takes a users password and compares it with whats stored in the db

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, valid) => {
      if(err) return reject(err);
      if(!valid) return reject(new Error('authorization failed, password did not match'));
      resolve(this);
    });
  });
};

User.methods.generateFindHash = function() {
  // unique hash to the user which helps cretae a token for further authorization requests

  return new Promise((resolve, reject) => {
    let tries = 0;
    _generateFindHash.call(this);

    function _generateFindHash() {
      this.findhash = crypto.randomBytes(32).toString('hex');
      this.save
        .then(() => resolve(this.findhash))
        .catch(err => {
          if(tries < 3) {
            tries++;
            _generateFindHash.call(this);
          }
          if(err) return reject(err);
        });
    }
  });
};

User.methods.generateToken = function() {
  // this is a token given to the user after signup/in so they can make
  // requests behind authentication

  return new Promise((resolve, reject) => {
    this.generateFindHash()
      .then(findhash => resolve(jwt.sign({ token: findhash }, process.env.APP_SECRET)))
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

module.exports = mongoose.model('user', User);
