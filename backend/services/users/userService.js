const User = require('../../models/Users.js') //invocação do model

module.exports = class UserController {

  static async findUser(req, res) {
   
   await User.findOne({where: {username: 'zezin'}} && {where: {password: '1234'}}).then((result) => res.json(result))
  }
}




