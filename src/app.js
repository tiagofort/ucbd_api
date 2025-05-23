const express = require('express')
const cors = require('cors');
const userRoute = require('./routes/user.route')
const socioDemographicRoute = require('./routes/socioDemographic.route')
const dataResearchRoute = require('./routes/dataResearch.route')
const authRoutes = require('./routes/auth.routes')
const errorHandler = require('./middlewares/error.middleware')

const app = express()
app.use(cors());
app.use(express.json())
app.use('/auth', authRoutes)
app.use('/users', userRoute)
app.use('/socioDemographic', socioDemographicRoute)
app.use('/dataResearch', dataResearchRoute)
app.use(errorHandler)

module.exports = app
