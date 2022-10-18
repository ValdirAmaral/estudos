const express = require('express')
const app = express()
//const conn = require('./db/conn.js') //invocacao do db
const Task = require('./models/Task.js') //invocação do model
const taskRouters = require('./routes/taskRoutes.js') //importar o router
const cors = require('cors')
const port = process.env.PORT || 4040

/*Middleware*/
app.use(cors())
app.use('/tasks', taskRouters)
app.use(express.static('./views/tasks'))

/*sincronizar os models com o db e porta*/
//conn.sync()
  //  .then(() => {
        app.listen(port)
    //    console.log('conecatado na porta 3000')
    //}).catch((err) => console.log(err))

