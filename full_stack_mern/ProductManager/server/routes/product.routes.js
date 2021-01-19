const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
  app.get('/api', ProductController.root);
  app.post('/api/product', ProductController.createProduct);
  app.get('/api/product', ProductController.findAllProducts);
  app.get('/api/product/:id', ProductController.getProduct);


  app.put('/api/product/:id', ProductController.updateProduct);
}