import React from 'react'
import "../App.css"
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

function Econn() {
  const { user, handleAuthLogout } = useAuth()
  const navigate = useNavigate();
   const handleLogout = async () => {
    const res = await handleAuthLogout()
    if (!res) {
      alert("Error 456. Sorry, somthing went wrong")
      return
    }

    navigate('/');
     alert("See you again")
  }
  
  return (
    
    <div>
      {
        user ?
        <div>
          
          <p>Hi {user.firstName}</p>
      <h1> Find a friend </h1>
          <div className="container"></div>
          
          <div>
             {user ? (
                <p>
                  <span>{user?.firstName} {user?.lastName}</span>
                  <button
                    className="btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </p>
              ) : (
                <span>
                  <Link to="/login" >
                    Login
                  </Link>
                </span>  )
             }
          </div>
 </div>
        
        :
        <div>
           <h1>Join the family to see a connect</h1>
          <Link className="btn" to="/login"><p>Login here</p></Link>
        </div>
       
      }
      


      
    </div>

    )
}

export default Econn;
