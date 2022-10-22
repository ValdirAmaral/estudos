const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController.js')
const User = require('../models/Users.js')

router.post('/add', TaskController.addUser)
router.get('/hello', TaskController.showTasks)
router.get('/', TaskController.homePage)



module.exports = router