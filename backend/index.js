const express = require('express')

const bodyParser = require('body-parser');

const app = express()
const conn = require('./db/conn.js') //invocacao do db
//const User = require('./models/Users.js') //invocação do model
const taskRouters = require('./routes/taskRoutes.js') //importar o router
const userRoutes = require('./routes/usersRoute.js')
const cors = require('cors')
const port = process.env.PORT || 4040

/*Middleware*/
app.use(cors())
app.use('/', taskRouters, userRoutes)
app.use(express.static('./views/tasks'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/*sincronizar os models com o db e porta*/
conn.sync()
    .then(async () => {
        app.listen(port)
        console.log(`conectado na porta ${port}`)
  }).catch((err) => console.log(err))

