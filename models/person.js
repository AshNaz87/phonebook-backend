const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI

console.log('Connecting to', url)

mongoose.set('useFindAndModify', false)

mongoose.connect(
  url, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  }
)
  .then(_result => console.log('Connected to MongoDB'))
  .catch(error => console.log('Error connecting to MongoDB', error.message))

const personSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  telNo: { 
    type: String, 
    required: true, 
    minlength: 11,
    unique: false 
  }
})

personSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Person', personSchema)
