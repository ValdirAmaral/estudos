const userService = require("../services/users/userService");
const User = require("../models/Users");
const bcrypt = require("bcrypt");

//exportar as classes das rotas
module.exports = class UserController {

  static async createUser(req, res) {
    //cadastro de usuário

    //checagem de email existente
    const { email } = req.body;
    const emailCheck = await User.findOne({ where: { email: email }});
    if (emailCheck) {

      res.json({
        message: "Já existe este email cadastrado.",

      })

      return
    } 

    //inclusão do usuário
    var dados = req.body;

    dados.password = await bcrypt.hash(dados.password, 8);

    await User.create(dados)
      .then(() => {
        return res.json({
          erro: false,
          message: "Usuário cadastrado com sucesso",
        });
      })
      .catch(() => {
        return res.status(400).json({
          erro: true,
          message: "Erro: Usuário não cadastrado com sucesso",
        });
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
      attributes: ["username", "name", "email"],
    });

    return res.json({ users });
  }
};
