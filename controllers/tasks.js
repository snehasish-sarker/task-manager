const Task = require('../models/Task')

const getAllTask = async (req, res) => {
    try{
        const task = await Task.find({});

        res.status(201).json({task})

    }catch (error){
        res.status(500).json({msg:error})
    }
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);

        res.status(201).json({task})

    }catch (error){
        res.status(500).json({msg:error})
    }
}

const getTask = async (req, res) => {
    try{
        const {id:TaskId} = req.params;

        const task = await Task.findOne({_id:TaskId});

        if(!task){
            return  res.status(404).json(`No task found with the ID ${TaskId}`)
        }

        res.status(201).json({task})

    }catch (error){
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req, res) => {
    try{
        const {id:taskId} = req.params

        const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
            new:true,
            runValidators: true
        })

        if(!task){
            return res.status(500).json({msg:`No task found with the ID : ${taskId}`})
        }

        res.status(201).json({task})

    }catch(error)
    {
        res.status(500).json({msg:error})
    }
}

const editTask = async (req, res) => {
    try{
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

    }catch(error)
    {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req, res) => {
    try{
        const {id:TaskId} = req.params;

        const task = await Task.findOneAndDelete({_id:TaskId});

        if(!task){
            return  res.status(404).json(`No task found with the ID ${TaskId}`)
        }

        res.status(201).json({msg:'The task is deleted'})

    }catch (error){
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTask, createTask, getTask, updateTask, deleteTask, editTask
}