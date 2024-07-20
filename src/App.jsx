import React from 'react'
import './App.css'

import Home from './pages/Home'
import Romes from './pages/Romes'
import SingleRoomPage from './pages/SingleRoomPage'
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/rooms' element={<Romes />} />
      <Route exact path='/rooms/:slug' element={<SingleRoomPage />} />
      <Route path='/:id' element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
