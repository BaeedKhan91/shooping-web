import { useState } from 'react';
import React from 'react';
import './footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  return (
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
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=" " // Placeholder must be a space for floating effect
          />
          <label htmlFor="email">Enter your email</label>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
