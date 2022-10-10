const express = require("express")
const app = express()
const port = 4040 
const path = require("path")
const userRout = require('./rotas')

const basePath = path.join(__dirname, 'templates')

app.use('/rotas', userRout)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
