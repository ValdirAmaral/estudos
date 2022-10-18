const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/taskController')
const Task = require('../models/Task')

router.get('/hello', TaskController.showTasks)
router.get('/', TaskController.homePage)

module.exports = router