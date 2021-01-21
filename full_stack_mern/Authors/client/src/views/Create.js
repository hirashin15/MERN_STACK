import axios from 'axios'
import React, { useState } from 'react'
import { Link, navigate } from '@reach/router'
import AuthorForm from '../components/AuthorForm'
import Header from '../components/Header'

const Create = () => {
  const [errors, setErrors] = useState([]);

  const createAuthor = (author) => {
    axios.post("http://localhost:8000/api/author", author)
      .then(() => navigate('/'))
      .catch(err => {
        const errResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errResponse)) {
          errorArr.push(errResponse[key].message)
        }
        setErrors(errorArr);
      })
  }

  return (
    <div>
      <Header />
      <Link to={'/'}>Home</Link>
      <p style={{ color: 'purple' }}>Add a new author: </p>
      <AuthorForm initialFirstName="" initialLastName="" onSubmitFunction={createAuthor} errors={errors} />
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  )
}

export default Create
