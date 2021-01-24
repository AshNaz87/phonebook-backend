const url =
  `mongodb+srv://admin:AshNaz1987@cluster0.ouoed.mongodb.net/person-app?retryWrites=true&w=majority`

mongoose.connect(
  url, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  }
)

const personSchema = new mongoose.Schema({
  name: String,
  telNo: String
})

const Person = mongoose.model('Person', personSchema)
