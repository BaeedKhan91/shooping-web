import React from "react";
import { Link,Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import './header.css';

function Nav() {

    return(
        <>
        <div className="nav">
            <div className="logo"><img src={logo} alt="" /> </div>
            <div className="menu" >
           {/* <div className="menu-list"> <p><Link to='/'></Link></p></div> */}
                <div className="menu-list"><p><Link to='/shop'>shop</Link></p></div>
                <div className="menu-list"> <p><Link to= '/about'>About</Link></p></div>
                 <div className="menu-list"><p><Link to= '/contact'>Contact</Link></p> </div>  
            </div>
            <div className="shop">
                <Link to='/login'>
                <button className="log">log in</button>
                <button className="sign">sign up</button></Link>
            </div>
        </div>
        <Outlet/>
        {/* nav End */}
        
        </>
    )
    
}

export default Nav