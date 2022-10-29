const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController.js')



router.get('/hello', TaskController.showTasks)
router.get('/', TaskController.homePage)


module.exports = router