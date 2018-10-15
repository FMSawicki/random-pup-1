const mongoose = require('./connection.js')

const dogSchema = new mongoose.Schema({
  name: String,
  image: String
})

mongoose.model("Dog", dogSchema)

module.exports = mongoose
