import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Navigate,Route} from 'react-router-dom'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'
import Home from './pages/Home/home'
import EndlessScroll from './pages/EndlessScroll/endlessScroll'
import PhilosophicalCat from './pages/PhiloCat/philoCat'
import PointlessProgressBars from './pages/progressBar/progressBar'
import SecretClick from './pages/SecretClick/secretClick'
import InvisibleMuseum from './pages/InvisibleMuseum/invisibleMuseum'
import FortuneTellerPotato from './pages/fortuneTellerPotato/fortuneTellerPotato'
import RateMyAir from './pages/RateMyAir/rateMyAir'
import StackingPaperClips from './pages/StackingPaperClips/stackingPaperClips'
import BakingAir from './pages/BakingAir/backingAir'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/baananaa/login" element={<Login />} />
        <Route path='/baananaa' element={<Home/>}/>
        <Route path='/baananaa/dashboard' element={<Dashboard />} />
        <Route path='/baananaa/endless-scroll' element={<EndlessScroll/>} />
        <Route path='/baananaa/philosophical-cat' element={<PhilosophicalCat/>} />
        <Route path='/baananaa/progress-bars' element={<PointlessProgressBars/>}/>
        <Route path='/baananaa/invisible-history' element={<InvisibleMuseum/>}/>
        <Route path='/baananaa/fortune-potato' element={<FortuneTellerPotato/>} />
        <Route path='/baananaa/rate-air' element={<RateMyAir/>}/>
        <Route path='/baananaa/secret-click' element={<SecretClick/>}/>
        <Route path='/baananaa/stacking-paper-clips' element={<StackingPaperClips/>} />
        <Route path='/baananaa/baking-air' element={<BakingAir/>} />
        <Route path="*" element={<Navigate to="/baananaa" />} />
      </Routes>
    </Router>
  )
}

export default App
