const Task = require('../models/Task')
const asyncWrapper = require('../middleware/asyncWrapper')

const getAllTask = asyncWrapper(async (req, res) => {

        const task = await Task.find({});

        res.status(201).json({task})
})

const createTask = asyncWrapper(async (req, res) => {

        const task = await Task.create(req.body);

        res.status(201).json({task})


})

const getTask = asyncWrapper(async (req, res) => {

        const {id:TaskId} = req.params;

        const task = await Task.findOne({_id:TaskId});

        if(!task){
            return  res.status(404).json(`No task found with the ID ${TaskId}`)
        }

        res.status(201).json({task})
})

const updateTask = asyncWrapper(async (req, res) => {

        const {id:taskId} = req.params

        const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
            new:true,
            runValidators: true
        })

        if(!task){
            return res.status(500).json({msg:`No task found with the ID : ${taskId}`})
        }

        res.status(201).json({task})


})

const editTask = asyncWrapper(async (req, res) => {

        const {id:taskId} = req.params

        const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
            new:true,
            runValidators: true,
            overWrite: true
        })

        if(!task){
            return res.status(500).json({msg:`No task found with the ID : ${taskId}`})
        }

        res.status(201).json({task})
})

const deleteTask = asyncWrapper(async (req, res) => {

        const {id:TaskId} = req.params;

        const task = await Task.findOneAndDelete({_id:TaskId});

        if(!task){
            return  res.status(404).json(`No task found with the ID ${TaskId}`)
        }

        res.status(201).json({msg:'The task is deleted'})

})

module.exports = {
    getAllTask, createTask, getTask, updateTask, deleteTask, editTask
}