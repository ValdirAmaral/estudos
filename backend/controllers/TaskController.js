const Task = require('../models/Task.js')
const path = require('path')



//exportar as classes das rotas
module.exports = class TaskController { 
    
    /*
       static showTasks(req, res) { //retornando html sem template engine
       res.sendFile(path.resolve('views', 'tasks', 'home.html'))
    }
    */


     static showTasks(req, res) { //retornando json
        res.json({
            teste: 'MIAU!'
        })
     }

     static homePage(req, res) {
        res.sendFile(path.resolve('views', 'tasks', 'home.html'))
     }

}
