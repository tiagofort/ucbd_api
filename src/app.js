const express = require('express')
const userRoute = require('./routes/user.route')
const socioDemographicRoute = require('./routes/socioDemographic.route')
const dataResearchRoute = require('./routes/dataResearch.route')
const errorHandler = require('./middlewares/error.middleware')

const app = express()

app.use(express.json())
app.use('/users', userRoute)
app.use('/socioDemographic', socioDemographicRoute)
app.use('/dataResearch', dataResearchRoute)
app.use(errorHandler)

module.exports = app
