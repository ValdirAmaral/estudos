const User = require('../../models/Users.js') //invocação do model

module.exports = class UserController {

  static async findUser(req, res) { //find user
   
   await User.findOne({where: {username: 'zezin'}} && {where: {password: '1234'}}).then((result) => res.json(result))
  }


  static async addUser(req, res) { //add user

    const createUser = {

       name: req.body.name,
       username: req.body.username,
       email: req.body.email,
       password: req.body.password,
    }

    try {       
       await User.create(createUser)

    } catch (error) {console.log(error)}
}


}




