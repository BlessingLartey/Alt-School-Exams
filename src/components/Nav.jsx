import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'

function Nav() {
  return (
    
    <div className="nav">
      

      <Link to='/'><p>Home</p></Link>
      <Link to='/econn'><p>eConnect</p></Link>
      <Link to='/login'><p>Login</p></Link>
      <Link to='signup'><p>Signup</p></Link>
      
    </div>

    )
}

export default Nav;