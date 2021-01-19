const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    telNo: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    telNo: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    telNo: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    telNo: "39-23-6423122"
  }
]

app.get('/api/persons', (_request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = +request.params.id
  const person = persons.find(person => person.id === id)

  person ? response.json(person): response.status(404).end()
})

app.get('/info', (_request, response) => {
  const numberOfPeople = persons.length
  const time = new Date()
  response.send(
    `<p>Phonebook has info for ${numberOfPeople} people.</p><p>${time}</p>`    
  )    
})

const generateId = () => {
  return Math.ceil(Math.random() * 1000)
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(404).json({
      error: 'Name is missing'
    })
  }

  if (!body.telNo) {
    return response.status(404).json({
      error: 'Number is missing'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    telNo: body.telNo
  }

  persons = persons.concat(person)

  response.json(persons)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = +request.params.id
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
