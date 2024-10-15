import React from 'react'
import "./product.css"

const Product = () => {
  return (
    <div className='product'>
      <div className='img'>image</div>
      <h4 className='product-name'>product Name</h4>
      <p className='product-p'>thi is some info about product</p>
      <p className='product-price'>0.00$</p>
      <div className='product-btn-adj'>
        <button className='product-btn'>Add to cart</button>
      </div>
    </div>
  )
}

export default Product