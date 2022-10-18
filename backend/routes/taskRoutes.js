const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/taskController')

router.get('/hello', TaskController.showTasks)


module.exports = router