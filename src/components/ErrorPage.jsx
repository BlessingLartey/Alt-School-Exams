import React from 'react'
import{Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <p>Sorry, page not found</p>
        <p>go back <Link to= '/'>Home</Link></p>
    </div>
  )
}

export default ErrorPage