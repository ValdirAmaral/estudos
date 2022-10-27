const userService = require('../services/users/userService');
const bcrypt = require('bcrypt');

module.exports = class UserController {
  //-----------------------register --------------------------
  static async createUser(req, res) {
    //check if email exists
    const { email } = req.body;
    const user = await userService.isUserExists(email);
    if (user) {
      return res.json({
        message: 'Email já existe.',
        error: true,
      });
    }

    //request registration and successful response
    var dataEntry = req.body;

    await userService
      .createUser(
        dataEntry.name,
        dataEntry.username,
        dataEntry.email,
        dataEntry.password
      )
      .then(() => {
        res.json({
          message: 'Cadastro realizado com sucesso',
        });
      });
  }

  //---------------------login-------------------------------
  //request username and password on body

  static async login(req, res) {
    const { username, password } = req.body;

    //teste password --------------------------------------
    const isLogged = await userService.loginUser(username, password);

    if (isLogged) {
      res.json({
        message: 'Logado com sucesso',
        error: false,
      });
    } else {
      res.json({
        message: 'Usuário não encontrado.',
        error: true,
      });
    }

    return res;
  }

  //-------------------list-------------------------
  //respond all users json
  static async showUsers(req, res) {
    const users = await userService.listAllUsers();
    return res.json({ users });
  }
};