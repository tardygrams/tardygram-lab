const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const UserService = require('../services/UserService');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    UserService
      .create(req.body)
      .then(user => {
        res.cookie('session', UserService.authToken(user), {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
          sameSite: 'none',
          secure: process.env.NODE_ENV === 'production'
        });
        res.send(user);
      })
      .catch(next);
  })

  .post('/login', (req, res, next) => {
    UserService
      .authorize(req.body)
      .then(user => {
        res.cookie('session', UserService.authToken(user), {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
          sameSite: 'none',
          secure: process.env.NODE_ENV === 'production'
        });
        res.send(user);
      })
      .catch(next);
  })

  .get('/verify', ensureAuth, (req, res) => {
    res.send(req.user);
  })

  .get('/top-posts', (req, res, next) => {
    Post
      .topPosts()
      .then(posts => res.send(posts))
      .catch(next);
  })

  .post('/posts', ensureAuth, (req, res, next) => {
    Post
      .insert(req.body)
      .then(post => res.send(post))
      .catch(next);
  })

  .patch('/posts/:id', ensureAuth, (req, res, next) => {
    Post
      .update(req.params.id, { ...req.body,
        userId: req.user.id })
      .then(post => res.send(post))
      .catch(next);
  })

  .delete('/posts/:id', ensureAuth, (req, res, next) => {
    Post
      .delete(req.params.id)
      .then(post => res.send(post))
      .catch(next);
  })

  .post('/comments', ensureAuth, (req, res, next) => {
    Comment
      .insert(req.body)
      .then(comment => res.send(comment))
      .catch(next);
  })

  .delete('/comments/:id', ensureAuth, (req, res, next) => {
    Comment
      .delete(req.params.id)
      .then(post => res.send(post))
      .catch(next);
  });
