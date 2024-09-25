const express = require('express')
const app = express();
const taskRouter = require('./routes/tasks')

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('HELLO WORLD')
})

app.use('/api/v1/tasks', taskRouter)

const port = 3000;

app.listen(port, console.log(`Server is running on port ${port}`))