const express = require("express")
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')


router.get('/hello', (req, res) => {
    res.json({
        teste: "MIUA!"
    }) 
})


module.exports = router