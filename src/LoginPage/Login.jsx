import React,{useRef,useState} from 'react'

import Array from './Array'
import Home from './Home'
import './Login.css'
import { Carousel } from 'antd';


  
function Login() {
    

    

    const email=useState()
    const password=useState()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")

    const handleSubmit=()=>{
        if(email.current.value==="abc@gmail.com"&&password.current.value==="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }

    } 
  return (
    
    <div className='yow'>
      
    <div className="one">

<div class="two">




</div>
        
    
    <div class="three">
        {
           
            getEmail&&getPassword?
           <Home/>:
           
        <form name='basic'  onSubmit={handleSubmit}>
             <h1>Login Page</h1>
            

            


            
            
            <div className='in1'>
                <label>Email Address:</label> <br />
                <input type="text"  placeholder="Email Address"  ref={email} />
            </div>
            <div className='in2'>
                <label>Password:</label>
                <br />
                <input type="password" placeholder="Password" ref={password}/>
                
            </div>
            
            <button class="btn">Login</button>
            

            
        </form>
        }


    </div>
    </div>
    </div>
  )
}

export default Login;



// <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
// <div class="container" id="container">
// 	<div class="form-container sign-up-container">
// 		<form action="#">
// 			<h1>Create Account</h1>
// 			<div class="social-container">
// 				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
// 				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
// 				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
// 			</div>
// 			<span>or use your email for registration</span>
// 			<input type="text" placeholder="Name" />
// 			<input type="email" placeholder="Email" />
// 			<input type="password" placeholder="Password" />
// 			<button>Sign Up</button>
// 		</form>
// 	</div>
// 	<div class="form-container sign-in-container">
// 		<form action="#">
// 			<h1>Sign in</h1>
// 			<div class="social-container">
// 				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
// 				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
// 				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
// 			</div>
// 			<span>or use your account</span>
// 			<input type="email" placeholder="Email" />
// 			<input type="password" placeholder="Password" />
// 			<a href="#">Forgot your password?</a>
// 			<button>Sign In</button>
// 		</form>
// 	</div>
// 	<div class="overlay-container">
// 		<div class="overlay">
// 			<div class="overlay-panel overlay-left">
// 				<h1>Welcome Back!</h1>
// 				<p>To keep connected with us please login with your personal info</p>
// 				<button class="ghost" id="signIn">Sign In</button>
// 			</div>
// 			<div class="overlay-panel overlay-right">
// 				<h1>Hello, Friend!</h1>
// 				<p>Enter your personal details and start journey with us</p>
// 				<button class="ghost" id="signUp">Sign Up</button>
// 			</div>
// 		</div>
// 	</div>
// </div>

// <footer>
// 	<p>
// 		Created with <i class="fa fa-heart"></i> by
// 		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
// 		- Read how I created this and how you can join the challenge
// 		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
// 	</p>
// </footer>