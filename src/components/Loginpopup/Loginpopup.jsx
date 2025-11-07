import React, { useState } from 'react'
import './Loginpopup.css'
import {assets} from '../../assets/assets';
const Loginpopup = ({setShowLogin}) => {

    const[currstate,setCurrstate]=useState("Sign Up");
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowLogin(false)} src = {assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
              {currstate==="Login"?<></>:<input type="text"  placeholder='Your name' required/>}
              <input type="text"  placeholder='Your email' required/>
              <input type="text" placeholder='Password' required/>
            </div>
            <button> {currstate === "Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
              <input type="checkbox"  required/>
              <p>By continuing ,I agree to the terms of use & privacy policy</p>
            </div>
            {currstate==="Login"?<p>Create a new account? <span onClick={()=>setCurrstate("Sign Up")}> Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrstate("Login")}>Login here</span></p>
            }
            
            
        </form>

    </div>
  )
}

export default Loginpopup