import react from "react";
import girl from "./../../assets/girl.png"
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import './home.css';

function Nav() {

    return(
        <>
        <Navbar />
        <div className="front">
            <div className="front-one">
                <p>Trade-in-offer</p>
                <h1>Super Value deals</h1>
                <h1 className="colour">On all products</h1>
                <p>save more with coupons & up to 70% off</p>
                <Link to='/shop'><button className="shop-btn colour">shop now</button></Link>
                
            </div>
            <div className="front-two "><img src={girl} alt="" /></div>
        </div>
            <Footer/>
        </>
    )
    
}

export default Nav