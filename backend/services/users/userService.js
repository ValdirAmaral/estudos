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
    
    // o ideal é vc fazer o hash aqui dentro do service
    // https://github.com/kelektiv/node.bcrypt.js
    // olha a tecnica dois
    //vai fica +ou- assim
    //bcrypt.hash(password, saltRounds, function(err, hash) {
      //const userTypes = await User.create(name, username, email, hash);
    //});
    const userTypes = await User.create(name, username, email, password);
    if (!userTypes) {
      console.log(error);
    }
  }

  //-----------------------login----------------------------
  //find for username and password in database
  static async login(username, password) {
    //trocou a senha do usuario pelo hash do bcrypt
    // vc vai ter que fazer um where só pelo username, 
    //o password sempre vai estar gravado como hash no banco e
    //voce vai ter que validar depois que o dado voltar de lá
    
    const user = await User.findOne({
      attributes: ["id", "name", "username", "email"],
      where: {
        username: username,
       // essa linha morre password: password,
      },
    });
    
    //com o bcrypt vc ve se a senha que veio do login bate com a hash que veio do banco
    //bcrypt.compare(password, user.password, function(err, result) {
      
      //if( result == true)
      //return ...
      //else
      /return ...
    //});
    
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
