'use strict';

const Todo = require('../model/todo');
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('cfgram:route-todo');
const bearerAuth = require('../lib/bearer-auth-middleware');

module.exports = function(router) {
  router.post('/api/todo', bearerAuth, (req, res) => {
    debug('POST /api/todo');

    // http POST (auth token) :5000/api/todo name='my fancy todo' desc='it be dabomb'

    req.body.userId = req.user._id;

    return new Todo(req.body).save()
      .then(todo => res.status(201).json(todo))
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/todo/:_id', bearerAuth, (req, res) => {
    debug('GET /api/todo/:_id');

    return Todo.findById(req.params._id)
      .then(todo => res.json(todo))
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/todo', (req, res) => {

  });

  router.put('/api/todo', (req, res) => {

  });

  router.delete('/api/todo', (req, res) => {

  });
};
