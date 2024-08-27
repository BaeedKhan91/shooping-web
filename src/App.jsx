import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/home-page/home'
import Initial from './pages/initial-page/initial'
import About from './pages/about-page/about';
import Contact from './pages/contact-page/contact';
import Login from './pages/login-page/login'




import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Initial />}/>
      <Route path="/home" element={<Home />} />
      <Route  path='/contact' element={<Contact/>} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />

      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


 {/* <Navbar/>
    <Products/>
    <Footer/>
<Login/>*/}