const debug = require('debug')('cfgram:route-auth');
const errorHandler = require('../lib/error-handler');
const basicAuth = require('../lib/basic-auth-middleware');
const User = require('../model/user');

module.exports = function(router) {
  router.post('/api/signup', (req, res) => {
    debug('POST /api/signup');

    let pw = req.body.password;
    delete req.body.password;

    let newUser = new User(req.body);

    newUser.generatePasswordHash(pw)
      .then(userA => userA.save())
      .then(userB => userB.generateToken())
      .then(token => res.send(token))
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/signin', basicAuth, (req, res) => {
    debug('GET /api/signin');

    return User.findOne({username: req.auth.username})
      .then(user => user.comparePasswordHash(req.auth.password))
      .then(user => user.generateToken())
      .then(token => res.send(token))
      .catch(err => errorHandler(err, req, res))
  });
};
