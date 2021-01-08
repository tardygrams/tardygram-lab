const pool = require('../utils/pool');

module.exports = class User {
  id;
  email;
  passwordHash;
  username;
  profilePhotoURL;

  constructor(row) {
    this.id = row.id;
    this.email = row.email;
    this.passwordHash = row.password_hash;
    this.username = row.username;
    this.profilePhotoURL = row.profile_photo_url;
  }

  static async insert(user) {
    const { rows } = await pool.query(
      'INSERT INTO users (email, password_hash, username, profile_photo_url) VALUES ($1, $2, $3, $4) RETURNING *;',
      [user.email, user.passwordHash, user.username, user.profilePhotoURL]
    );
    return new User(rows[0]);
  }

  static async findByEmail(email) {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE email=$1',
      [email]
    );

    if (!rows[0]) throw new Error(`No user with that email ${email} exists`);
    return new User(rows[0]);
  }

  toJSON() {
    const json = { ...this };
    delete json.passwordHash;
    delete json.profilePhotoURL;
    return json;
  }
};
