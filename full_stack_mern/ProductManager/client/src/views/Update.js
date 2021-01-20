import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
export default props => {
  const { id } = props;
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/product/' + id)
      .then(res => {
        setProduct(res.data);
        setLoaded(true);
      })
  }, [])
  const updateProduct = e => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/product/' + id, product)
      .then(res => console.log(res));
    navigate(`/product/${id}`)
  }
  return (
    <div>
      <h1>Update a Product</h1>
      {loaded && <ProductForm
        onSubmitFuntion={updateProduct}
        initialTitle={product.title}
        initialPrice={product.price}
        initialDescription={product.description} />}

      <button onClick={(e) => navigate('/product')}>
        Back to Dashboard
      </button>
      <button onClick={(e) => navigate(`/product/${id}`)}>
        Product Detail
      </button>
    </div >
  )
}
