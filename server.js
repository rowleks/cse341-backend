/* eslint-disable no-unused-vars, no-console */

const express = require('express')
const cors = require('cors')
const db = require('./database')

const rootRoute = require('./routes')
const contactRoute = require('./routes/contact')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3030

app.use(cors())
app.use(express.json())

app.use('/', rootRoute)
app.use('/contacts', contactRoute)

const startServer = async () => {
  try {
    await db.connect()
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (_) {
    console.error(
      'Failed to connect to the database. Application is shutting down.'
    )
    process.exit(1)
  }
}

startServer()
