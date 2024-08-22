import React, { useState } from 'react'
import Email from '../assets/email.png'
import Person from '../assets/user.png'
import Password from '../assets/lock.png'
import './login.css'



function login  () {
    const[action,setAction] =useState("Sign Up")

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="login"?null:<div className="input">
                <img src={Person} alt="" className='image' />
                <input type="text" placeholder='username'/>
            </div>}

            <div className="input">
                <img src={Email} alt="" className='image' />
                <input type="email" placeholder='Email id'/>
            </div>
            <div className="input">
                <img src={Password} alt="" className='image' />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="login"?        <div className="forget-password">
            lost password ? <span><a href="">click here</a></span>
        </div>:<div></div>}

        <div className="buttons">
            <div className={action ==="login"?"submit gray":"submit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
            <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("login")}}>Login</div>
        </div>

    </div>
  )
}
export default login
