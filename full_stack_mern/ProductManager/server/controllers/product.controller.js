const { Product } = require('../models/product.model');


module.exports.root = (req, res) => {
  res.json({ message: "responding" })
}

module.exports.createProduct = (request, res) => {
  const { title, price, description } = request.body;
  console.log()
  Product.create({
    title,
    price,
    description
  })
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.findAllProducts = (req, res) => {
  Product.find({})
    .then(allProd => res.json({ products: allProd }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then(updatedProduct => response.json(updatedProduct))
    .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then(deleteProduct => response.json(deleteProduct))
    .catch(err => response.json(err))
}
