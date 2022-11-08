import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserAuthContext from './context/UserAuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContext>
      <App />
    </UserAuthContext>
  </React.StrictMode>
)