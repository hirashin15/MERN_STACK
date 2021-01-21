import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router'
import Header from '../components/Header'

const Main = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/author")
      .then(res => setAuthors(res.data))
  }, []);

  const removeFromDom = (id) => {
    axios.delete("http://localhost:8000/api/author/" + id)
      .then(deleted => setAuthors(
        authors.filter(deleted => deleted._id !== id)
      ))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Header />
      <Link to={'/author'}>Add an author</Link>
      <p style={{ color: 'purple' }}>We have quotes by: </p>
      <table>
        <thead>
          <tr>
            <td>Author</td>
            <td>Actions available</td>
          </tr>
        </thead>
        <tbody>
          {
            authors.map((author, i) => {
              return (
                < tr key={i} >
                  <td style={{ color: 'purple' }}>{author.firstName} {author.lastName}</td>
                  <td>
                    <button onClick={() => navigate('/author/' + author._id)}>Edit</button>
                    <button onClick={() => removeFromDom(author._id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default Main;
