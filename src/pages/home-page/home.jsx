import React from 'react'
import Navbar from '../.././components/nav-component/nav'
import Products from '../../components/product-component/product'
import Footer from '../../components/footer-component/footer'
export default function home  ()  {
  return (
    <div>
      <Navbar/>
      <Products/>
      <Footer/>

    </div>
  )
}
