const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Contacts API docs',
    description: 'API documentation for the contacts endpoints',
  },
  host: 'cse341-backend-jnnf.onrender.com',
  schemes: ['https'],
  definitions: {
    CreateContactPayload: {
      $firstName: 'John',
      $lastName: 'Doe',
      $email: 'john.doe@example.com',
      $favoriteColor: 'Blue',
      $birthday: '1990/01/01',
    },
    UpdateContactPayload: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      favoriteColor: 'Blue',
      birthday: '1990/01/01',
    },
  },
}

const outputFile = './docs/swagger-output.json'
const routes = ['./routes/index.js']

swaggerAutogen(outputFile, routes, doc)
