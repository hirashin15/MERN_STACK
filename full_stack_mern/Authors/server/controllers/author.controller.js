const { Author } = require('../models/author.model');

module.exports.index = (req, res) => {
  res.json({
    message: "It's working"
  });
}

module.exports.findById = (req, res) => {
  Author.findById({ _id: req.params.id })
    .then(author => res.json(author))
    .catch(err => console.log(err))
}

module.exports.getAllAuthors = (req, res) => {
  Author.find()
    .then(authors => res.json(authors))
    .catch(err => console.log(err))
}

module.exports.createAuthor = (req, res) => {
  const { firstName, lastName } = req.body;
  Author.create({
    firstName,
    lastName
  })
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
  Author.findByIdAndUpdate(
    { _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
  Author.findByIdAndDelete({ _id: req.params.id })
    .then(deleted => res.json(deleted))
    .catch(err => console.log(err))
}
