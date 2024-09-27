const express = require('express')
const router = express.Router()

const {getAllTask, createTask, getTask, updateTask, deleteTask, editTask} = require('../controllers/tasks')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

module.exports = router