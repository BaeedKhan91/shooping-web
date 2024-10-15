import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

export const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();



    function input1Handler(event) {
        setusername(event.target.value)
    }
    function input2Handler(event) {
        setpassword(event.target.value)
    }
    function result() {
        if (username === "admin" && password === "123") {
            // alert("your id is correct")
            navigate("/")

        }
        else {
            alert("please enter valid username or password")
        }

    }

    return (
        <div className='bd'>
            <div className='main'>
                <h1 className='h1'>LOG IN</h1>
                <p className='p'>Username: <br /> <input className='input' type="text" value={username} onChange={input1Handler} /></p>
                <p className='p'>password: <br /><input className='input' type="password" value={password} onChange={input2Handler} /></p>
                <button className='button' onClick={result}>login</button>
            </div>
        </div>
    )
}

export default Login