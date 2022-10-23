const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const telaUser = require('../controllers/telas/Users')

router.post('/user/add', UserController.createUser)
router.post('/user/login', UserController.login)
router.post('/logintest', telaUser.loginpage)

module.exports = router