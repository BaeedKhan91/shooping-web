import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Product from '../../components/product/Product'
import "./shop.css"

const Shop = () => {
  return (
    <>
    <Navbar />
    <h1>Shop page</h1>
    <div className='page-product'>
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    </div>
    </>
      )
}

export default Shop