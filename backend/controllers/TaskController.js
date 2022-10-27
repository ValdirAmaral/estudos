const User = require('../models/Users.js')
const path = require('path')



module.exports = class TaskController { 
    
     static showTasks(req, res) { //retornando json fixo
        res.json({
            teste: 'MIAU!'
        })
     }

     static homePage(req, res) {
        res.sendFile(path.resolve('views', 'tasks', 'home.html')) //retornando html estatico
     }
    

}
