const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');
const Post = require('../lib/models/Post');


describe('tardygram-app routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/populate-comments.sql', 'utf-8'));
  });
  let agent;
  let user;
  beforeEach(async () => {
    agent = request.agent(app);
    user = await UserService.create({
      email: 'newemail@test.com',
      password: 'password',
      username: 'finnley',
      profilePhotoURL: 'https://myphotos/finnley'
    });
    await agent
      .post('/api/v1/auth/login')
      .send({
        email: 'newemail@test.com',
        password: 'password',
        username: 'finnley'
      });
  });


  it('allows a user to sign up via POST', async () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: '1234',
        username: 'finnley',
        profilePhotoURL: 'https://myphotos/finnley'
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          email: 'test@test.com',
          username: 'finnley'
        });
      });
  });

  it('allows a user to login via POST', async () => {
    const res = await agent
      .post('/api/v1/auth/login')
      .send({
        email: 'newemail@test.com',
        password: 'password'
      });

    expect(res.body).toEqual({
      id: expect.any(String),
      email: 'newemail@test.com',
      username: 'finnley'
    });
  });

  it('verifies a user is logged-in via GET', async () => {
    await agent
      .post('/api/v1/auth/login')
      .send({
        email: 'newemail@test.com',
        password: 'password',
        username: 'finnley'
      });

    const res = await agent
      .get('/api/v1/auth/verify');

    expect(res.body).toEqual({
      id: user.id,
      email: 'newemail@test.com',
      username: 'finnley'
    });
  });

  // what if there is no comment? NULL?
  it('responds with a list of the 10 posts with most comments via GET', async () => {
    const res = await agent
      .get('/api/v1/auth/top-posts');
    expect(res.body).toEqual([
      {
        id: '1',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '1',
        count: '10'
      },
      {
        id: '4',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '1',
        count: '2'
      },
      {
        id: '10',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '2',
        count: '2'
      },
      {
        id: '6',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '1',
        count: '2'
      },
      {
        id: '2',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '1',
        count: '2'
      },
      {
        id: '7',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '2',
        count: '2'
      },
      {
        id: '8',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '2',
        count: '2'
      },
      {
        id: '5',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '1',
        count: '2'
      },
      {
        id: '9',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '2',
        count: '2'
      },
      {
        id: '3',
        photo_url: 'post.photo.url',
        caption: 'great photo',
        tags: { tags: '#nofilter' },
        user_id: '1',
        count: '2'
      }
    ]);
  });

  it('adds a comment to a post via POST', async () => {
    const res = await agent
      .post('/api/v1/auth/comments')
      .send({
        commentBy: user.id,
        postId: '1',
        comment: 'nice'
      });

    expect(res.body).toEqual({
      id: res.body.id,
      commentBy: user.id,
      postId: '1',
      comment: 'nice'
    });
  });

  it('deletes a post via DELETE', async () => {


  });
});
