require('dotenv').config()
const app = require('./src/app')
const errorHandler = require('./src/middlewares/error.middleware')
const connectDB = require('./src/config/database')

const PORT = process.env.PORT || 3000

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
