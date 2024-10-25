import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


import React from 'react';
import './footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  localStorage.getItem('mail')

  return (
    <>
    <div className='main-newsletter'>
      <div className='newsletter-text'>
        <h2>Sign Up For NewsLetter</h2>
        <p style={{ fontSize: 14, marginTop: '1%' }}>
          Get the latest news and updates from us
        </p>
      </div>
      <div className='newsletter-input'>
        <div className="floating-label">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)} }
            required
            placeholder=" " 
          />
          <label htmlFor="email">Enter your email</label>
        </div>
        <button onClick={()=>{
          localStorage.setItem('mail',email)
        }
        }>Subscribe</button>
      </div>
    </div>
    <div className="main-footer">
        <div className="footer-one">
          <h3>Threift Store</h3>
          <p style={{
            marginBottom:"20px",
            fontWeight:'900'
          }}>Contact</p>
          
          <p>Address: <span>ABC town DEF Street House NO#123 </span></p>
         <p>Phone:<span>+923162364385 +92356987416</span></p>
         <p>Hours: <span>10.00 . 18.00 mon-sat</span></p>
         <p style={{
           marginTop:"20px",
           fontWeight:'900'
           
          }}>Follow Us </p>
          <ul className='icons' style={{
            listStyle:"none",
            display:"flex",
            // justifyContent:"space-between",
            margin:"0",
            }}>
              <li > <FontAwesomeIcon icon={faFacebook}/> </li>
              <li> <FontAwesomeIcon icon={faInstagram}/> </li>
              <li> <FontAwesomeIcon icon={faLinkedin}/> </li>
              <li> <FontAwesomeIcon icon={faTwitter}/> </li>

            </ul>
        </div>
        <div className="footer-two">
          <p className='top-head'>About</p>
          <p style={{color:'white'}}>About Us</p>
          <span style={{color:'#8d8d8d'}}>
          <p>About Us</p>
          <p>Delivery information</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition </p>
          <p>Contact Us</p>
          </span>
        </div>
        <div className="footer-three">
          <p className='top-head'>My Account</p>
          <p style={{color:'white'}}>Sign in</p>
         <span style={{color:'#8d8d8d'}}>
          <p>Sign Up</p>
          <p> View Cort </p>
          <p>Track My Order</p>
          <p>Help</p>
          </span>
        </div>
    </div>
    <div className="footer-bottom">
        <p>© 2024 Cartio - HTML CSS Ecommerce Template</p>
      </div>
</>
  );
}
export default Footer;
