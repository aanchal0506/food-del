import React,{useState} from 'react'
import './LoginFolder.css'
import { assets } from '../../assets/assets'
const LoginFolder = ({setShowLogin}) => {
    const [currentState,setcurrentState]=useState("Login")

  return (
    <div className='LoginFolder'>
        <form className='login-container'>
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-input'>
                {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>
                {currentState=="Sign Up"?"Create Account":"Login"}
            </button>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>setcurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setcurrentState("Login")}>Login here</span></p>}
            
            
        </form>
    </div>
  )
}

export default LoginFolder
