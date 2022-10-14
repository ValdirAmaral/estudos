const express = require("express")
const app = express()
const port = process.env.PORT || 4040 
const path = require("path")
const userRout = require('./rotas')
const cors = require('cors')

const basePath = path.join(__dirname, 'templates')

app.use(cors())
app.use('/rotas', userRout)


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) //url home 
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
