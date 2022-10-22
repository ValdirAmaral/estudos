const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController.js')
const User = require('../models/Users.js')

router.get('/hello', TaskController.showTasks)
router.get('/', TaskController.homePage)
router.post('/add', TaskController.addUser)


module.exports = router