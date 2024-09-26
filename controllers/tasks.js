const Task = require('../models/Task')

const getAllTask = (req, res) => {
    res.end('All task list')
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);

        res.status(201).json({task})

    }catch (error){
        res.status(400).json({error})
    }
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.json({id:req.params.id})
}

const deleteTask = (req, res) => {
    res.end('Task delete')
}

module.exports = {
    getAllTask, createTask, getTask, updateTask, deleteTask
}