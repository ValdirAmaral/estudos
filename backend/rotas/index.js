const express = require("express")
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/login', (req, res) => {
    res.sendFile(`${basePath}/login.html`)
})

module.exports = router