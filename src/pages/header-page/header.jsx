import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './../../components/nav-component/nav'
import logo from "../../assets/logo.png";
import './header.css';

function Nav() {

    return(
        <>
<Navbar/>

        <Outlet/>
        {/* nav End */}
        
        </>
    )
    
}

export default Nav