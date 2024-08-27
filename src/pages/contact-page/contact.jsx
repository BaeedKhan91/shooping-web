import React from 'react'
import { Link } from 'react-router-dom'
import logo from '.././../assets/logo.png';
import './contact.css'

export default function contact  ()  {
  return (
    <>
    <div className="nav">
<div className="logo"><img src={logo} alt="" /> </div>
<div className="menu">
  <Link to='/'><div className="menu-list"><p>home</p></div></Link>
  <Link to='/home'><div className="menu-list"><p>shop</p></div></Link>
  <Link to= '/about'> <div className="menu-list"><p>About</p></div></Link>
  <Link to= '/contact'> <div className="menu-list"><p>Contact</p></div></Link>   
</div>
<div className="shop">
  
<Link to='/login'>
                <button className="log">log in</button>
                <button className="sign">sign up</button></Link>
</div>
</div>

<br />
<br />
<hr />
<br />
<br />

<h1>CONTACT US</h1>
</>
  )
}
