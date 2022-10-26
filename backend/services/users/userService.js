const User = require("../../models/Users.js"); //invocação do model

module.exports = class UserController {
  //register
  //check email exists
  static async isUserExists(email) {
    const emailCheck = await User.findOne({ where: { email: email } });
    return emailCheck;
  }

  //create user
  




  //login
  static async login(username, password) {
    const user = await User.findOne({
      attributes: ["id", "name", "username", "email"],
      where: {
        username: username,
        password: password,
      },
    });
    return user;
  }
};
