const getAllTask = (req, res) => {
    res.end('All task list')
}

const createTask = (req, res) => {
    res.end('create task')
}

const getTask = (req, res) => {
    res.end('get task')
}

const updateTask = (req, res) => {
    res.end('update task')
}

const deleteTask = (req, res) => {
    res.end('Task delete')
}

module.exports = {
    getAllTask, createTask, getTask, updateTask, deleteTask
}