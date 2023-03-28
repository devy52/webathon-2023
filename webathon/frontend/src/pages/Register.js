import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/users/register',
    {
        username,
        email,
        designation,
        password
    }   
    )
    .then(
        (res)=>console.log(res)
    )
    .catch(
        err=>console.log(err.message)
    )
    console.log({
        username,
        email,
        designation,
        password
    }   )
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>You are logged in as {loggedInUser}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <div className='w-50 mx-auto'>
        <form onSubmit={handleRegister}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Designation:
            <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
      )}
    </div>
  );
};

export default Register;
