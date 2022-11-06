import React, { useState } from 'react'
//import Header from './Header'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password)
    }

  return (
    <div>
      
      <form className='form' >
        <h1>SignUp</h1>
        <label>Email:</label>
        <input 
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        <label>Password:</label>
        <input 
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />


        <button onClick={handleSubmit}>SignUp</button>
    </form>
    </div>
    
  )
}

export default SignUp