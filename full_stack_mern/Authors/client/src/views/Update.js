import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router'
import AuthorForm from '../components/AuthorForm'
import Header from '../components/Header'

const Update = props => {
  const { id } = props;
  const [author, setAuthor] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + id)
      .then(author => {
        setAuthor(author.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])

  const updateAuthor = (auth) => {
    axios.put("http://localhost:8000/api/author/" + id, auth)
      .then(() => navigate("/"))
      .catch(err => console.log(err))
  }
  console.log(author)

  return (
    <div>
      <Header />
      <Link to={'/'}>Home</Link>
      <p style={{ color: 'purple' }}>Edit this author: </p>
      {loaded && <AuthorForm initialFirstName={author.firstName} initialLastName={author.lastName} onSubmitFunction={updateAuthor} />}
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  )
}

export default Update
