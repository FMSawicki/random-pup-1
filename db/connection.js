const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/random_pup', { useMongoClient: true })

module.exports = mongoose
