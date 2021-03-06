'use strict'

const faker = require('faker')
const mocks = require('../lib/mocks')
const superagent = require('superagent')
const server = require('../../lib/server')
const Gallery = require('../../model/gallery')
require('jest')

describe('Testing Gallery Routes', function() {
  beforeAll(server.start)
  afterAll(server.stop)
  afterEach(mocks.gallery.removeAll)
  afterEach(mocks.user.removeAll)

  describe('POST to /api/gallery', function() {
    describe('Valid Requests', () => {
      beforeAll(() => {
        this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) }

        return mocks.user.createOne()
          .then(userData => this.userData = userData)
          .then(() => {
            return superagent.post(':4444/api/gallery')
              .set('Authorization', `Bearer ${this.userData.token}`)
              .send(this.fakeGalleryData)
          })
          .then(res => this.res = res)
      })

      test('should return a status of 201', () => {
        expect(this.res.status).toBe(201)
      })
      test('should return a new gallery in the res', () => {
        expect(this.res.body.name).toBe(this.fakeGalleryData.name)
        expect(this.res.body.desc).toBe(this.fakeGalleryData.desc)
      })
      test('should have a userId property', () => {
        expect(this.res.body).toHaveProperty('userId')
        expect(this.res.body.userId.toString()).toBe(this.userData.user._id.toString())
      })
    })

    describe('Invalid Requests', () => {
      test('should return a status of 401 given no Auth credentials', () => {
        return superagent.post(':4444/api/gallery')
          .send(this.fakeGalleryData)
          .catch(err => {
            expect(err.status).toBe(401)
          })
      })

      test('should return a 401 given bad Auth credentials', () => {
        return superagent.post(':4444/api/gallery')
          .set('Authorization', 'Bearer badToken')
          .send(this.fakeGalleryData)
          .catch(err => {
            expect(err.status).toBe(401)
          })
      })

      xtest('should return 400 given bad req body', () => {
        return superagent.post(':4444/api/gallery')
          .set('Authorization', `Bearer ${this.userData.token}`)
          .send({})
          .catch(err => {
            expect(err.status).toBe(400)
          })
      })
    })
  })

  describe('GET to /api/gallery', function() {
    describe('Valid Requests', () => {
      beforeAll(() => {
        this.fakeGalleryData = {name: faker.random.word(), desc: faker.random.words(12)}

        return mocks.user.createOne()
          .then(userData => this.userData = userData)
          .then(() => {
            return superagent.post(':4444/api/gallery')
              .set('Authorization', `Bearer ${this.userData.token}`)
              .send(this.fakeGalleryData)
          })
          .then(res => this.res = res)
      })

      test('200, for a request made with a valid id', () => {
        return superagent.get(`:4444/api/gallery/${this.res.body._id}`)
          .set('Authorization', `Bearer ${this.userData.token}`)
          .then(res => {
            expect(res.status).toBe(200)
          })
      })

      describe('Invalid Requests', () => {
        beforeAll(() => {
          this.fakeGalleryData = {name: faker.random.word(), desc: faker.random.words(12)}

          return mocks.user.createOne()
            .then(userData => this.userData = userData)
            .then(() => {
              return superagent.post(':4444/api/gallery')
                .set('Authorization', `Bearer ${this.userData.token}`)
                .send(this.fakeGalleryData)
            })
            .then(res => this.res = res)
        })

        xtest('401, if no token was provided', () => {
          return superagent.get(`:4444/api/gallery/${this.res.body._id}`)
            .then(res => {
              expect(res.status).toBe(401)
            })
        })

        xtest('404, for a valid request with an id that was not found', () => {
          return superagent.get(`:4444/api/gallery/30495839485`)
            .set('Authorization', `Bearer ${this.userData.token}`)
            .then(res => {
              expect(res.status).toBe(404)
            })
        })
      })
    })
  })

  describe('PUT to /api/gallery', function() {
    describe('Valid Requests', () => {
      beforeAll(() => {
        this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) }

        return mocks.user.createOne()
          .then(userData => this.userData = userData)
          .then(() => {
            return superagent.post(':4444/api/gallery')
              .set('Authorization', `Bearer ${this.userData.token}`)
              .send(this.fakeGalleryData)
          })
          .then(res => this.res = res)
      })
      test('200, for a post request with a valid body', () => {
        return superagent.put(`:4444/api/gallery/${this.res.body._id}`)
          .set('Authorization', `Bearer ${this.userData.token}`)
          .send({ name: 'hello', desc: 'this is a description' })
          .then(res => {
            expect(res.status).toBe(200)
          })
      })
    })
    describe('Invalid Requests', () => {
      beforeAll(() => {
        this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) }

        return mocks.user.createOne()
          .then(userData => this.userData = userData)
          .then(() => {
            return superagent.post(':4444/api/gallery')
              .set('Authorization', `Bearer ${this.userData.token}`)
              .send(this.fakeGalleryData)
          })
          .then(res => this.res = res)
      })
      test('401, if no token was provided', () => {
        return superagent.put(`:4444/api/gallery/${this.res.body._id}`)
          .send({ name: 'art', desc: 'gallery' })
          .then(res => {
            expect(res.status).toBe(401)
          })
      })
      test('404, for a valid request made with an id that was not found', () => {
        return superagent.put(`:4444/api/gallery/${this.res.body._id + 1}`)
          .set('Authorization', `Bearer ${this.userData.token}`)
          .send({ name: 'art', desc: 'gallery' })
          .then(res => {
            expect(res.status).toBe(404)
          })
      })
      test('400, if the body was invalid', () => {
        return superagent.put(`:4444/api/gallery/${this.res.body._id}`)
          .set('Authorization', `Bearer ${this.userData.token}`)
          .send({literally: 'nothing'})
          .then(res => {
            expect(res.status).toBe(400)
          })
      })
    })
  })

  describe('DELETE to /api/gallery', function() {
    describe('Valid Requests', () => {
      beforeAll(() => {
        this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) }

        return mocks.user.createOne()
          .then(userData => this.userData = userData)
          .then(() => {
            return superagent.post(':4444/api/gallery')
              .set('Authorization', `Bearer ${this.userData.token}`)
              .send(this.fakeGalleryData)
          })
          .then(res => this.res = res)
      })
      test('200, for a post request with a valid body', () => {
        return superagent.delete(`:4444/api/gallery/${this.res.body._id}`)
          .set('Authorization', `Bearer ${this.userData.token}`)
          .then(res => {
            expect(res.status).toBe(200)
          })
      })
    })

    describe('Invalid Requests', () => {
    })
  })
})
