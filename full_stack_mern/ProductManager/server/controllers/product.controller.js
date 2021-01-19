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