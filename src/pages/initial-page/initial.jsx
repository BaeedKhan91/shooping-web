import React from 'react'
import girl from '../../assets/girl.png'
import { Link } from 'react-router-dom'

const initial = () => {
  return (
    <div className="front">
    <div className="front-one">
        <p>Trade-in-offer</p>
        <h1>Super Value deals</h1>
        <h1 className="colour">On all products</h1>
        <p>save more with coupons & up to 70% off</p>
       <Link to='/shop'> <button className="shop-btn colour">shop now</button></Link>
    </div>
    <div className="front-two "><img src={girl} alt="" /></div>
</div>
  )
}

export default initial