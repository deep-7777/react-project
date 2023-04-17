// import logo from './logo.svg';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header';
// import Sidenav from './component/sidenavbar';
import {Menu} from "antd"
import { Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <div className="App">
        <Header/>
   <Menu 
   items={[
    {label:"home"},
      {label:"dashboard"},
      {label:"users"},
      {label:"profile"},
      {label:"login"},
      ]}></Menu>

    </div>
  );
}

function Content(){
  return
   <div>
    <Routes>
       <Route></Route>
    </Routes>
  </div>
}
export default App;
