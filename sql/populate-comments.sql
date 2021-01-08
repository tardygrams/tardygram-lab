
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


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('2', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('3', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');

--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('4', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('5', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('6', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('7', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('8', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('9', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('10', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('11', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');


--INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ('12', 'post.photo.url', 'great photo', '{"tags": "#nofilter"}');

