const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const { globalAgent } = require('https');
const UserService = require('../lib/services/UserService');
const Post = require('../lib/models/Post');


describe('tardygram-app routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/populate-comments.sql', 'utf-8'));
  });


  it('allows a user to sign up via POST', async() => {
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

  it('allows a user to login via POST', async() => {
    const user = await UserService.create({
      email: 'test@test.com',
      password: '1234',
      username: 'finnley',
      profilePhotoURL: 'https://myphotos/finnley'
    });

    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: '1234',
        username: 'finnley'
      });

    expect(res.body).toEqual({
      id: user.id,
      email: 'test@test.com',
      username: 'finnley'
    });
  });

  it('verifies a user is logged-in via GET', async() => {
    const agent = request.agent(app);
    const user = await UserService.create({
      email: 'test@test.com',
      password: '1234',
      username: 'finnley',
      profilePhotoURL: 'https://myphotos/finnley'
    });

    await agent
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: '1234',
        username: 'finnley'
      });

    const res = await agent
      .get('/api/v1/auth/verify');

    expect(res.body).toEqual({
      id: user.id,
      email: 'test@test.com',
      username: 'finnley'
    });
  });

  // what if there is no comment? NULL?
  it('responds with a list of the 10 posts with most comments via GET', async() => {
    const res = await request(app)
      .get('/api/v1/auth/top-posts');
    expect(res.body).toEqual([
      { id: 1, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 10 },
      { id: 2, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 },
      { id: 3, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 },
      { id: 5, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 },
      { id: 6, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 },
      { id: 4, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 },
      { id: 7, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 },
      { id: 8, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 },
      { id: 9, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 },
      { id: 10, photo_url: 'someurl.url', caption:'some caption', tags: '#sometag', user_id: 1, count: 2 }

    ]);
  });

  it('tests the add comment route', async() => {
    const post = await Post.insert({
      user_id: '1',
      photo_url: 'photo.com',
      caption: 'lovely',
      tags: '#nofilter'
    });
    const res = await request(app)
      .insert('/comments')
      .send({
        comment_by: post.user_id,
        post_id: 1,
        comment: 'nice'
      });
      
    expect(res.body).toEqual({
      comment_by: post.user_id,
      post_id: 1,
      comment: 'nice'
    });


  });

});
