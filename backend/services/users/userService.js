const User = require("../../models/Users.js"); //invocação do model

module.exports = class UserController {
  //------------------register----------------------
  //check email exists
  static async isUserExists(email) {
    const emailCheck = await User.findOne({ where: { email: email } });
    return emailCheck;
  }

  //create user
  static async createUser(name, username, email, password) {
    const userTypes = await User.create(name, username, email, password);
    if (!userTypes) {
      console.log(error);
    }
  }

  //-----------------------login----------------------------
  //find for username and password in database
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
  //----------------------------list------------------------------
  //list all users
  static async listAllUsers() {
    const list = await User.findAll({
      attributes: ["id", "name", "username", "email"],
    });
    return list;
  }
};
