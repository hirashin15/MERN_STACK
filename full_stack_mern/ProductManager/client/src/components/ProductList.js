import React from 'react';
import { Link } from '@reach/router'

export default props => {
  const { products } = props;
  console.log(products)

  const productList = products.map((item, i) => {
    return <Link to={`/product/${item._id}`}><p key={i}>{item.title}</p></Link>
  })

  return (
    <div>
      <h1>All Products:</h1>
      {productList}
    </div>
  )
}