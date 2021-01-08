const pool = require('../utils/pool');

module.exports = class Post {
    id;
    userId;
    photoUrl;
    caption;
    tags;

    constructor(row) {
      this.id = row.id;
      this.userId = row.user_id;
      this.photoUrl = row.photo_url;
      this.caption = row.caption;
      this.tags = row.tags;
    }

    static async insert(post) {
      const { rows } = await pool.query(
        'INSERT INTO posts (user_id, photo_url, caption, tags) VALUES ($1, $2, $3, $4) RETURNING *;',
        [post.userId, post.photoUrl, post.caption, post.tags]
      );
      return new Post(rows[0]);
    }

    static async findById(postId) {
      const { rows } = await pool.query(
        `SELECT  
        posts.*,
        users.*,
        json_agg(json_build_object('commenter', comment_user.username, 'comment', comments.comment)) AS comments
    FROM posts
    JOIN
        comments
    ON comments.post_id = posts.id
    JOIN
        users
    ON users.id = posts.user_id
    JOIN 
        users AS comment_user
    ON comment_user.id = comments.comment_by
    WHERE post_id=$1
GROUP BY posts.id, users.id`,
        [postId]
      );
      return new Post(rows[0]);
    }

    static async findAllPosts() {
      const { rows } = await pool.query(
        'SELECT * FROM posts',
      );
      return new Post(rows[0]);
    }
};
