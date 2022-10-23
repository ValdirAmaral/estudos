const express = require('express')
const router = express.Router()
const UserController = require('../services/users/userService.js')

router.post('/add', UserController.addUser)
router.post('/login', UserController.loginUser)

module.exports = router