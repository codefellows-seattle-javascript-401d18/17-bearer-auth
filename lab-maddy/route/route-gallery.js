'use strict';

const Gallery = require('../model/gallery');
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('cfgram:route-gallery');
const bearerAuth = require('../lib/bearer-auth-middleware');

module.exports = function(router) {
  router.post('/api/gallery', bearerAuth, (req, res) => {
    debug('POST /api/gallery');

    // http POST (auth token) :5000/api/gallery name='my fancy gallery' desc='it be dabomb'

    req.body.userId = req.user._id;

    return new Gallery(req.body).save()
      .then(gallery => res.status(201).json(gallery))
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/gallery/:_id', bearerAuth, (req, res) => {
    debug('GET /api/gallery/:_id');

    return Gallery.findById(req.params._id)
      .then(gallery => res.json(gallery))
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/gallery:_id', bearerAuth,(req, res) => {
    debug('/api/gallery:_id GET');

    return Gallery.find()
      .then(gallery => res.json(gallery.map(gallery => gallery._id)))
      .catch(err => errorHandler(err, req, res)); //added after code demo
  });

  router.put('/api/gallery/:_id', bearerAuth, (req, res) => { //getting rid of all the nexts becuase we're replacing them wiht errorHandler file
    debug('/api/gallery:_id PUT');

    return Gallery.findByIdAndUpdate(req.params._id, req.body, { upsert: true, runValidators: true }) //then pass in a few options in {}. new takes a boolean value. upsert, set it to true. If we don't have the run validators and we run a findbyIDandUpdate. this helps validate that if hte string has been changed to a number (mutated), we need to still make sure we meet that criteria.
    //upsert - update/insert- if true and no records match the query, insert update as a new record.
      .then(() => res.sendStatus(204)) //deleted gallery
      .catch(err => errorHandler(err, req, res));
  });

  router.delete('/api/gallery/:_id', bearerAuth, (req, res) => {//added :_id //an isAdmin module after child could be used to only let an admin drop a full db //don't need :_id after child?
    debug('/api/gallery:_id DELETE');

    return Gallery.findByIdAndRemove(req.params._id)
      .then(() => res.sendStatus(204))
      .catch(err => errorHandler(err, req, res));
  });
};
