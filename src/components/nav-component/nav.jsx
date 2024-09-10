import React, { useState, useEffect } from 'react';
import { Link, Outlet} from 'react-router-dom';
import logo from './../../assets/logo.png'
import './nav.css'; // Import the CSS file for styling

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
        {/* <Outlet/> */}
        </nav>
    );
};

export default Navbar;