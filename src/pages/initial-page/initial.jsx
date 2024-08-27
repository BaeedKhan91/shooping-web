import react from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import shop from "./../../assets/shop.png";
import girl from "./../../assets/girl.png"
import './initial.css';

function Nav() {

    return(
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
        {/* nav End */}
        <div className="front">
            <div className="front-one">
                <p>Trade-in-offer</p>
                <h1>Super Value deals</h1>
                <h1 className="colour">On all products</h1>
                <p>save more with coupons & up to 70% off</p>
               <Link to='/home'> <button className="shop-btn colour">shop now</button></Link>
            </div>
            <div className="front-two "><img src={girl} alt="" /></div>
        </div>
        </>
    )
    
}

export default Nav