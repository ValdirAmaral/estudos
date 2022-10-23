const User = require('../../models/Users.js') //invocação do model

module.exports = class UserController {

   //login
  static async loginUser(req, res) { 

  const user = await User.findOne({

      attributes: ['id', 'name', 'username', 'email', 'password'],
      where: {
         username: req.body.usarname,
         password: req.body.password,
      }
   })

}





/*
   await User.findOne({where: {username: 'zezin'}} && {where: {password: '1234'}}).then((result) => res.json(result))
  }
*/



  //add user
  static async addUser(req, res) { 

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




