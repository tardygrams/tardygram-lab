const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = class UserService {
  static async create({ email, password, username, profilePhotoURL }) {
    const passwordHash = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
    const user = await User.insert({ email, passwordHash, username, profilePhotoURL });
    return user;
  }

  // find a user by email
  // if a user doesn't exist with that email ERROR 401
  static async authorize({ email, password }) {
    try {
      const user = await User.findByEmail(email);

      // check that the password matches the passwordHash in the DB
      // if not ERROR
      const matchPassword = await bcrypt.compare(password, user.passwordHash);
      if (!matchPassword) throw new Error('Invalid Password');

      return user;

    } catch (err) {
      err.status = 401;
      throw err;
    }
  }

  static authToken(user) {
    return jwt.sign({ user: user.toJSON() }, process.env.APP_SECRET, {
      expiresIn: '24h'
    });
  }

  static verifyAuthToken(token) {
    const { user } = jwt.verify(token, process.env.APP_SECRET);
    return user;
  }
};
