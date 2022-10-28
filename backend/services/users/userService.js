const User = require('../../models/Users.js'); //invocação do model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth.js')

const PASSWORD_SALT = 10;

module.exports = class UserController {
  //------------------register----------------------
  //check email exists
  static async isUserExists(email) {
    const emailCheck = await User.findOne({ where: { email: email } });
    return emailCheck;
  }

  //create user


  static async createUser(name, username, email, password) {
    //primeira treta era que a gente tava fazendo o hash errado, melhor usar assim;
    //ele retorna o hash pra variavel;
    let passwordHash = bcrypt.hashSync(password, PASSWORD_SALT);

    //Repara na variavel de cima, vc ta passando 5 parametros pro user create
    //a ideia é passar um objeto {} com todos os parametros dentro
    // o trocando a senha pelo hash

    const newUser = {
      name: name,
      username: username,
      email: email,
      password: passwordHash,
    };
    const userTypes = await User.create(newUser);
    if (!userTypes) {
      console.log(error);
    }
  }

  //-----------------------login----------------------------
  //find for username and password in database
  static async loginUser(username,password) {
    const user = await User.findOne({
      attributes: ['id', 'name', 'username', 'email', 'password'],
      where: {
        username: username,
        //password: password, não pode buscar por senha pq tem uma hash lá
      },
    });

     const passwordMatch = bcrypt.compareSync(password, user.password);
     if (passwordMatch) {
      var token = jwt.sign({id: user.id}, config.secret, {expiresIn: config.expireIn})
      console.log("Aqui tem que aparece o token", token)
     }
     return token
     
  }

  //----------------------------list------------------------------
  //list all users
  static async listAllUsers() {
    const list = await User.findAll({
      attributes: ['id', 'name', 'username', 'email'],
    });
    return list;
  }
};