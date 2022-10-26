const userService = require("../services/users/userService");
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
    //essa parte do bcrypt pode ficar dentro do service, deixei um comentario lá
    //a sintaxe pelo que to vendo ficou errada. 
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


    //teste password --------------------------------------
    const user = await userService.loginUser(username, password);

    //essa parte do bcrypt pode ficar dentro do service, deixei um comentario lá
    //a sintaxe pelo que to vendo ficou errada. 
    const passwordMath = bcrypt.compare(password, user.password)
    if (!passwordMath) {
      res.json({
        message: "Senha incorreta."
      })
    }
    //---------------------------------------------------


    if (user) {
      res.json({
        message: "Logado com sucesso",
        error: false
      });
    } else {
      return res.json({
        message: "Usuário não encontrado.",
        error: true
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
