const express = require('express')
const userRoutes = require('./routes/user.routes')
const errorHandler = require('./middlewares/error.middleware')

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use(errorHandler)

module.exports = app
