import React from 'react'
import { Link } from 'react-router-dom'

const Regestration = () => {
  return(
    <div><h1>Regestration</h1><br /><hr />
    <input type='text' placeholder='user name'/><br /><br />
    <input type='email'  placeholder='email'/><br /><br />
    <input type='password'  placeholder='password'/><br /><br />
    <input type='password' placeholder='re enter password'/> <br /><br />
    <Link to="/Login">
    <button>Submit</button>
    </Link>
    </div>
    
  )
}

export default Regestration