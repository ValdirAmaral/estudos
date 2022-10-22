const express = require('express')

const bodyParser = require('body-parser');

const app = express()
const conn = require('./db/conn.js') //invocacao do db
const User = require('./models/Users.js') //invocação do model
const taskRouters = require('./routes/taskRoutes.js') //importar o router
const cors = require('cors')
const port = process.env.PORT || 4040

//teste

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



/*Middleware*/
app.use(cors())
app.use('/tasks', taskRouters)
app.use(express.static('./views/tasks'))
app.use(express.json())


/*sincronizar os models com o db e porta*/
conn.sync()
    .then(async () => {
        app.listen(port)
        console.log(`conectado na porta ${port}`)
  }).catch((err) => console.log(err))

