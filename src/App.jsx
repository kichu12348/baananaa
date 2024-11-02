import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Navigate,Route} from 'react-router-dom'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'
import Home from './pages/Home/home'
import EndlessScroll from './pages/EndlessScroll/endlessScroll'
import PhilosophicalCat from './pages/PhiloCat/philoCat'
import PointlessProgressBars from './pages/progressBar/progressBar'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/endless-scroll' element={<EndlessScroll/>} />
        <Route path='/philosophical-cat' element={<PhilosophicalCat/>} />
        <Route path='/progress-bars' element={<PointlessProgressBars/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
