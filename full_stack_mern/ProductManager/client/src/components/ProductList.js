import React from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
  const { products, removeFromDom } = props;
  const deleteProduct = (id) => {
    axios.delete('http://localhost:8000/api/product/' + id)
      .then(res => {
        removeFromDom(id)
      })
  }

  const productList = products.map((item, i) => {
    return (
      <p key={i}>
        <Link to={`/product/${item._id}`}>
          {item.title}
        </Link>

        <button onClick={(e) => navigate(`/product/${item._id}/edit`)}>
          Edit
        </button>
        <button onClick={(e) => { deleteProduct(item._id) }}>
          Delete
        </button>
      </p>
    )
  })

  return (
    <div>
      <h1>All Products:</h1>
      {productList}
    </div>
  )
}