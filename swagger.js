const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Contacts API docs',
    description: 'API documentation for the contacts endpoints',
  },
  host: 'cse341-backend-jnnf.onrender.com',
  schemes: ['https'],
}

const outputFile = './docs/swagger-output.json'
const routes = ['./routes/index.js']

swaggerAutogen(outputFile, routes, doc)
