import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import NotFound from './pages/NotFound'
import Doctors from './pages/Doctors'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthPage from './pages/AuthPage'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />\
        <Route path="/contact" element={<Contact />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:specility' element={<Doctors />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h3>Este es el pie de página</h3>
    </div>
  )
}

export default App