const { Person } = require('../models/person.model')

module.exports.index = (req, res) => {
  res.json({ message: "Hello World" })
}

module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  Person.create({
    firstName,
    lastName
  })
    .then(person => response.json(person))
    .catch(err => response.json(err));
}