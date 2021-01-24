require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')
const cors = require('cors')
const morgan = require("morgan");

morgan.token('person', (request, _response) => {
  if (request.method === 'POST') return JSON.stringify(request.body)
  return null;
})

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))

app.get('/api/persons', (_request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => response.json(person))
    .catch(error => console.log(error))
})

app.get('/info', (_request, response) => {
  const numberOfPeople = Person.length
  const time = new Date()
  response.send(
    `<p>Phonebook has info for ${numberOfPeople} people.</p><p>${time}</p>`    
  )    
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(404).json({
      error: "Name is missing"
    })
  }

  if (!body.telNo) {
    return response.status(404).json({
      error: "Number is missing"
    })
  }

  // Check if person is added to phonebook
  // if (Person.some(person => person.name === body.name)) {
  //   return response.status(400).json({
  //     error: "Name must be unique"
  //   })
  // }

  const person = new Person ({
    name: body.name,
    telNo: body.telNo
  })

  person.save().then(savedPerson => response.json(savedPerson))
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  Person.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
