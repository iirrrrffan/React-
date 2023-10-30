import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>Login</h1><br /><hr />
        <input type='text' placeholder='username' /><br /><br />
        <input type='password' placeholder='password' /><br /><br />
      <Link to="/home">
      <button>Login</button>
      </Link>
       

        
    </div>
  )
}

export default Login