const userService = require("../services/users/userService");
const User = require("../models/Users");
const bcrypt = require('bcrypt')

//exportar as classes das rotas
module.exports = class UserController {

  static async createUser(req, res) {

    var dados = req.body
    
    dados.password = await bcrypt.hash(dados.password, 8)

    await User.create(dados)
      .then(() => {
        return res.json({
          erro: false,
          message: "Usuário cadastrado com sucesso"
        })
      }).catch(() => {
        return res.status(400).json({
          erro: true,
          message: "Erro: Usuário não cadastrado com sucesso"
        })
      })
      
 }


  /*
  static createUser(req, res) {
    //retornando json fixo
    const { name, username, email, password } = req.body;
    userService.createUser(name, username, password, email);
    return res.json({
      status: "mimii,",
    });
  }*/




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

    return res.json({ users })
  }





};

