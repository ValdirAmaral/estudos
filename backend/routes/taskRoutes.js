const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/taskController.js')
const Task = require('../models/Task.js')

router.get('/hello', TaskController.showTasks)
router.get('/', TaskController.homePage)

module.exports = router