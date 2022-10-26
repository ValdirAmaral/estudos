const userService = require("../services/users/userService");
const User = require("../models/Users.js");
const bcrypt = require("bcrypt");

module.exports = class UserController {
  //-----------------------register --------------------------
  static async createUser(req, res) {
    //check if email exists
    const { email } = req.body;
    const user = await userService.isUserExists(email);
    if (user) {
      return res.json({
        message: "Email já existe.",
        error: true,
      });
    }

    //request registration and successful response
    var dataEntry = req.body;

    //password change with bcrypt
    dataEntry.password = await bcrypt.hash(dataEntry.password, 8);

    console.log(dataEntry);

    await userService.createUser(dataEntry).then(() => {
      res.json({
        message: "Cadastro realizado com sucesso",
      });
    });
  }

  //---------------------login-------------------------------
  //request username and password on body
  static async login(req, res) {
    const { username, password } = req.body;
    const user = await userService.login(username, password);
    if (user === null) {
      return res.json({
        error: "Usuário ou Senha inválidos",
      });
    } else {
      return res.json({
        user,
      });
    }
  }
  //-------------------list-------------------------
  //respond all users json
  static async showUsers(req, res) {
    const users = await userService.listAllUsers();
    return res.json({ users });
  }
};
