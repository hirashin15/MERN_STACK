import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/product')
      .then(res => {
        setProducts(res.data.products);
        setLoaded(true);
      });
  }, [products])

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id != productId));
  }

  const createProduct = product => {
    axios.post('http://localhost:8000/api/product', product)
      .then(res => {
        setProducts([...products, res.data]);
      })
  }

  return (
    <div>
      <ProductForm onSubmitFunction={createProduct} initialTitle="" initialPrice="" initialDescription="" /> <hr />
      {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
    </div>
  )
}