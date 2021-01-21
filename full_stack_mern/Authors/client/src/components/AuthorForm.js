import React, { useState } from 'react'

const AuthorForm = (props) => {
  const { initialFirstName, initialLastName, onSubmitFunction, errors } = props;
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);


  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitFunction({ firstName, lastName });
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, i) => <p style={{ color: "red" }} key={i}>{err}</p>)}
        <p>
          <label>First Name</label><br />
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </p>
        <p>
          <label>Last Name</label><br />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </p>
        <input type="submit" />
      </form>

    </div>
  )
}

export default AuthorForm
