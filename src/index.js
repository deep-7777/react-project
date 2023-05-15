import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, } from "react-router-dom";
// import { createRoot } from 'react-dom/client';

// import Home from './home';
// import LoginForm from './login/login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
{/* <Home/> */}
 {/* <Route index element={<App />} />
<Route path="/login" element={<LoginForm/>} />
<Route path="home" element={<Home/>} /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
