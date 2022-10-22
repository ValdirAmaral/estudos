const User = require('../models/Users.js')
const path = require('path')



//exportar as classes das rotas
module.exports = class TaskController { 
    

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



     static showTasks(req, res) { //retornando json fixo
        res.json({
            teste: 'MIAU!'
        })
     }

     static homePage(req, res) {
        res.sendFile(path.resolve('views', 'tasks', 'home.html')) //retornando html estatico
     }
    

}
