import axios from 'axios'
import React from 'react'
import { Link, navigate } from '@reach/router'
import AuthorForm from '../components/AuthorForm'
import Header from '../components/Header'

const Create = () => {

  const createAuthor = (author) => {
    axios.post("http://localhost:8000/api/author", author)
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Header />
      <Link to={'/'}>Home</Link>
      <p style={{ color: 'purple' }}>Add a new author: </p>
      <AuthorForm initialFirstName="" initialLastName="" onSubmitFunction={createAuthor} />
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  )
}

export default Create
