import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
  const { initialTitle, initialPrice, initialDescription, onSubmitFunction } = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);


  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitFunction({ title, price, description });

    setTitle("");
    setPrice("");
    setDescription("");
  }


  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label><br />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label>Price</label><br />
        <input type="text" onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label>Description</label><br />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  )
}

export default ProductForm;
