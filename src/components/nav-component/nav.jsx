import react from "react";
import { Link } from "react-router-dom";
import home from "./../../assets/home.png"
import shop from "./../../assets/shop.png"
import logo from "../.././assets/logo.png";
import './nav.css'

function Navigation() {
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

        </>
    )
}
export default Navigation;