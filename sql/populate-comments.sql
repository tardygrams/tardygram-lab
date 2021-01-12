
INSERT INTO users (email, password_hash, username, profile_photo_url) VALUES 
('test@test.com', 'passwordHash', 'finnegan', 'profile.photo.url'),
('test1@test.com', 'passwordHash', 'Dinnegan', 'profile.photo.url2');


INSERT INTO posts (user_id, photo_url, caption, tags) VALUES 
(1, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(1, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(1, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(1, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(1, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(1, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(2, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(2, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(2, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(2, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(2, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}'),
(2, 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


INSERT INTO comments (post_id, comment_by, comment) VALUES 
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(1, 1, 'coool post'),
(2, 1, 'coool post'),
(2, 1, 'coool post'),
(3, 1, 'coool post'),
(3, 1, 'coool post'),
(4, 1, 'coool post'),
(4, 1, 'coool post'),
(5, 2, 'coool post'),
(5, 2, 'coool post'),
(6, 2, 'coool post'),
(6, 2, 'coool post'),
(7, 2, 'coool post'),
(7, 2, 'coool post'),
(8, 2, 'coool post'),
(8, 2, 'coool post'),
(9, 2, 'coool post'),
(9, 2, 'coool post'),
(10, 2, 'coool post'),
(10, 2, 'coool post'),
(11, 2, 'coool post'),
(12, 2, 'coool post');


