const userService = require("../../services/users/userService");
const path = require('path')

module.exports = class TaskController {
  static async loginpage(req, res) {
    const login = {
      username: "cascao",
      password: "1234",
    };

    const user = await userService.login(login.username, login.password);
    res.render (path.resolve("views", "tasks", "home2.html"), { user });
  }
};
