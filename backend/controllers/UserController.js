const userService = require("../services/users/userService");
const path = require("path");
const User = require("../models/Users");

//exportar as classes das rotas
module.exports = class UserController {
  static createUser(req, res) {
    //retornando json fixo
    const { name, username, email, password } = req.body;
    userService.createUser(name, username, password, email);
    return res.json({
      status: "mimii,",
    });
  }

  static async login(req, res) {
    //retornando json fixo
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

  static async showUsers(req, res) {
   
    const users = await User.findAll({
      attributes: ['username', 'name', 'email']
    })

    return res.json({users})
  }
};
