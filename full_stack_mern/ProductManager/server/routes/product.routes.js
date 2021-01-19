const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
  app.get('/api', ProductController.root);
  app.post('/api/product', ProductController.createProduct);
  app.get('/api/allproducts', ProductController.findAllProducts);
}