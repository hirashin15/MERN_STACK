import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
export default props => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + props.id)
      .then(res => setProduct(res.data))
  }, [])

  const deleteProduct = (id) => {
    axios.delete('http://localhost:8000/api/product/' + id)
      .then(res => {
        // removeFromDom(id)
        navigate('/product')
      })
  }


  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>

      <button onClick={(e) => navigate('/product')}>
        Back To Dashbaord
      </button>
      <button onClick={(e) => navigate(`/product/${product._id}/edit`)}>
        Edit
      </button>
      <button onClick={(e) => { deleteProduct(product._id) }}>
        Delete
      </button>

    </div >
  )
}
