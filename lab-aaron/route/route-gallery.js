'use strict';

const Gallery = require('../model/gallery');
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('cfgram:route-gallery');
const bearerAuth = require('../lib/bearer-auth-middleware');

module.exports = function(router) {
  router.post('/api/gallery', bearerAuth, (req, res) => {
    debug('POST /api/gallery');

    req.body.userId = req.user._id;

    return new Gallery(req.body).save()
      .then(gallery => res.status(201).json(gallery))
      .catch(err => errorHandler(err, req, res));
  });

// need to use bearerAuth in all of the other commands

  router.get('/api/gallery', (req, res) => {

  });

  router.put('/api/gallery', (req, res) => {

  });

  router.delete('/api/gallery', (req, res) => {

  });
};
