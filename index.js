require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')
const cors = require('cors')
const morgan = require('morgan')

morgan.token('person', (request, _response) => {
  if (request.method === 'POST') return JSON.stringify(request.body)
  return null
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :person'
  )
)

app.get('/api/persons', (_request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      next(error)
    })
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
      error: 'Name is missing',
    })
  }

  if (!body.telNo) {
    return response.status(404).json({
      error: 'Number is missing',
    })
  }

  const person = new Person({
    name: body.name,
    telNo: body.telNo,
  })

  person.save().then(savedPerson => response.json(savedPerson))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    telNo: body.telNo
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => response.json(updatedPerson))
    .catch(error => {
      console.log(error)
      next(error)
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(_result => response.status(204).end())
    .catch(error => next(error))
})

const unknownEndpoint = (_request, response) => {
  response.status(404).send({ error: 'Unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, _request, response, next) => {
  console.log(error.message)

  if (error.name === 'CastError')
    return response.status(400).send({ error: 'Malformatted ID' })

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
