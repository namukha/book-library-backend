const express = require('express')
const router = express.Router();
const TaskController = require('../controller/TaskController')

router.get('/getTask', TaskController.get_task)
router.post('/addTask', TaskController.create_task)
router.put('/updateTask/:id', TaskController.update_task)
router.delete('/deleteTask/:id', TaskController.delete_task)

module.exports = router