import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ClientDashboard from './Pages/ClientDashboard'
import ScientistDashboard from './Pages/ScientistDashboard'

const App = () => {
  return (
    <Routes>
      <Route path ="/" element = {<Home/>}></Route> 
      <Route path="/home" element={<div class="text-3xl font-bold flex-1 text-center">    Project Started!  </div>} />
      <Route path="/clientDashboard" element={<ClientDashboard />} />
      <Route path="/scientistDashboard" element={<ScientistDashboard />} />
      

    </Routes>
  )
}

export default App
