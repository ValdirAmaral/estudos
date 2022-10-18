const express = require('express')
const app = express()
const conn = require('./db/conn') //invocacao do db
const Task = require('./models/Task') //invocação do model
const taskRouters = require('./routes/taskRoutes') //importar o router
const cors = require('cors')

/*Middleware*/
app.use(cors())
app.use('/tasks', taskRouters)
app.use(express.static('./views/tasks'))

/*sincronizar os models com o db e porta*/
conn.sync()
    .then(() => {
        app.listen(3000)
        console.log('conecatado na porta 3000')
    }).catch((err) => console.log(err))

