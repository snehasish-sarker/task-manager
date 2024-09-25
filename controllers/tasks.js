const getAllTask = (req, res) => {
    res.end('All task list')
}

const createTask = (req, res) => {
    res.json(req.body)
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