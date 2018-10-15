const mongoose = require('./schema.js')
const Dog = mongoose.model('Dog')
const dogData = require('./dog-data.json')


Dog.remove({})
  .then(() => {
    Dog.collection.insert(dogData)
      .then((dogs) => {
        console.log(dogs)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
