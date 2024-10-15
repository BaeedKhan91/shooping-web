import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './pages/home/Home'
import Shop from './pages/shop/Shop'
import About from './pages/About'
import Contact from './pages/contact'
import Login from './pages/login/Login'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      {/* <Nav/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
