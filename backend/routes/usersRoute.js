const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const telaUser = require('../controllers/telas/Users')
const { verifyJWT } = require('../services/users/userService')

router.get('/user/all', UserController.showUsers)
router.get('/user/acess', UserController.verifyJWT)
router.post('/user/add', UserController.createUser)
router.post('/user/login', UserController.login)
router.post('/logintest', telaUser.loginpage)

module.exports = router