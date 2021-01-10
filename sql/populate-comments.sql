
INSERT INTO users (email, password_hash, username, profile_photo_url) VALUES ('test@test.com', 
			'passwordHash', 
			'finnegan', 
			'profile.photo.url');

INSERT INTO users (email, 
				   password_hash, 
				   username, 
				   profile_photo_url) 
	VALUES ('test1@test.com', 
			'passwordHash', 
			'Dinnegan', 
			'2profile.photo.url');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('1', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('1', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('1', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('2', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('1', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('3', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('1', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('4', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('1', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('5', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('2', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('6', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('2', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('7', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('2', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('8', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('2', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('9', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('2', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('10', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('2', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('11', '2', 'coool post');

INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('2', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');
INSERT INTO comments (post_id, comment_by, comment) VALUES ('12', '2', 'coool post');

