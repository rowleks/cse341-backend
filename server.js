const express = require('express')
const cors = require('cors')
const db = require('./database')

const rootRoute = require('./routes')
const contactRoute = require('./routes/contact')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3030

app.use(cors())

app.get('/', rootRoute)
app.use('/contacts', contactRoute)

app.listen(port, async () => {
  await db.connect()
  console.log(`Server running on port ${port}`)
})
