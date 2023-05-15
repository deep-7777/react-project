// import './login.css';
// import profile from "../image/a.png";
// import email from "./../image/email.jpg";
// import pass from "./../image/pass.png";
import React, { useState } from 'react';
import { Navigate } from "react-router-dom"



function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await fetch('http://127.0.0.1:8000/login/', {
      // method: 'POST',
      // headers: {
        // 'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({ username, password })
    // });
    // const data = await response.json();
    // if (response.ok) {
      // localStorage.setItem('token', data.token);
      setIsLoggedIn(true);
    // } else {
    //   alert('Invalid credentials');
    // }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard"/>;
  }
  return (
    <div class="account-pages mt-5 mb-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4">
                <div class="card">

                    <div class="card-body p-4">
                        
                        <div class="text-center w-75 m-auto">
                            <div class="auth-logo">
                                <a href="index.html" class="logo logo-dark text-center">
                                    <span class="logo-lg">
                                        <img src="assets/images/logo.jpg" alt="" height="30"/>
                                    </span>
                                </a>
            
                                <a href="index.html" class="logo logo-light text-center">
                                    <span class="logo-lg">
                                        <img src="assets/images/logo.jpg" alt="" height="30"/>
                                    </span>
                                </a>
                            </div>
                            <p class="text-muted mb-4 mt-3">Enter your username and password to access your panel.</p>
                        </div>      

                        <form onSubmit={handleSubmit} >


                            <div class="mb-2">
                              <label for="username" class="form-label">USERNAME</label>
                              <input class="form-control" type="text"  value={username} onChange={handleUsernameChange} pattern="^\d*[a-zA-Z][a-zA-Z0-9]*$" required="" placeholder="Enter your Username"/>
                              <span class="text-danger" id="username-error"></span>
                          </div>

                            <div class="mb-2">
                                <label for="password" class="form-label">Password</label>
                                <div class="input-group input-group-merge">
                                    <input type="password"value={password} onChange={handlePasswordChange} class="form-control" placeholder="Enter your Password"/>
                                    
                                    <div class="input-group-text" data-password="false">
                                        <span class="password-eye"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="checkbox-signin" checked/>
                                    <label class="form-check-label" for="checkbox-signin">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div class="d-grid mb-0 text-center">
                                <button class="btn btn-primary" type="submit"> Log In </button>
                            </div>

                        </form>


                    </div> 
                </div>
                           
               

            </div>
        </div>
       
    </div>
    
</div> 
 )
}

export default Login;