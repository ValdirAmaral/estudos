const express = require('express')
const router = express.Router()
const UserController = require('../services/users/userService.js')

router.post('/add', UserController.addUser)
router.get('/find', UserController.findUser)

module.exports = router