const express = require('express')
const app = express();
const taskRouter = require('./routes/tasks')
const connectDb = require('./db/connection')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

app.use(express.json())

app.use('/api/v1/tasks', taskRouter)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        connectDb(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is running on port ${port}`))
    } catch (error){
        console.log(error)
    }
}

start()

