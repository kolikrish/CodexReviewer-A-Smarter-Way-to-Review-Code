import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Code from './pages/Code'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/code' element={
          <PrivateRoute>
            <Code/>
          </PrivateRoute>}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App