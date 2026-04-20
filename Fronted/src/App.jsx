import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Code from './pages/Code'
import Login from './pages/Login'
import FrontPage from './pages/FrontPage'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/code' element={
          <PrivateRoute>
            <Code/>
          </PrivateRoute>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App