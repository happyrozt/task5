import { useState } from 'react'
import Login from './Camponents/Login/Login'
import Dashboard from './Camponents/Dashboard/Dashboard'
import Register from './Camponents/Register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>routing with contextet api </h1>
    <Register />
    <Login />
    <Dashboard />
    </>
  )
}

export default App
