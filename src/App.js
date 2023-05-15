// import logo from './logo.svg';
import React from 'react'
// import ReactDOM from 'react-dom'
import "./App.css";
// import { BrowserRouter,Route, Routes  } from "react-router-dom";
import Login from "./component/login";
import Dashboard from "./component/dashboard";
// import Program from "./component/program";
// import AdminViewAll from './component/adminViewAll';
// import Login from "./component/login";
// import Allstates from "./component/all-state";
// import Allstudent from "./component/all-student";
// import Mentor from "./component/mentor";
// import Block from "./component/block-user";
// import Village from "./component/village";

// import Program from "./program";
// import StateUser from "./component/stateuser";
// import Sidebar from './component/sidenavbar';
import { Route, Routes,  } from "react-router-dom";



// import {
//   HomeOutlined,
//   DashboardOutlined,
//   UnorderedListOutlined,
//   UserOutlined,
//   PoweroffOutlined,
// } from "@ant-design/icons";


function App() {
  return (
    <>
       <Routes> 
        < Route path="/" element={<Login/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
         
       </Routes> 

    {/* <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/adminViewAll" element={ <AdminViewAll/>}></Route>
          <Route path="/program" element={<Program />} />
          <Route path="/village" element={<Village />} />
          <Route path="/stateuser" element={<StateUser />} />
          <Route path="/block" element={<Block />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/allstudent" element={<Allstudent />} />
          <Route path="/allstates" element={<Allstates />} />
        </Routes>
      </Sidebar>
    </BrowserRouter> */}
  
    </>
  );
}

// -----------------------------------------------------------------------------------

// function Footer() {
//   return (
//     <>
//       {/* <!-- Footer Start --> */}
//       <footer>
//         <div class="container">
//           <div class="row">
//             <div class="col-xl-3 col-lg-4 col-md-6">
//               <div>
//                 <h3>Logo</h3>
//                 <p class="mb-30 footer-desc">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
//                   soluta facilis eos quia optio iusto odit atque eum tempore,
//                   quisquam officiis vero veniam hic,
//                 </p>
//               </div>
//             </div>
//             <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
//               <div class="">
//                 <h4>Quick Link</h4>
//                 <ul class="list-unstyled">
//                   <li>
//                     <a href="#" class="text-decoration-none">
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" class="text-decoration-none">
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" class="text-decoration-none">
//                       Service
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" class="text-decoration-none">
//                       Contact
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div class="col-xl-3 col-lg-3 col-md-6">
//               <div>
//                 <h4>Service</h4>
//                 <ul class="list-unstyled">
//                   <li>
//                     <a href="#" class="text-decoration-none">
//                       Marketing
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" class="text-decoration-none">
//                       Branding
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" class="text-decoration-none">
//                       Web Design
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" class="text-decoration-none">
//                       Graphics Design
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div class="col-xl-3 col-lg-3 col-md-6">
//               <div>
//                 <h4>Newsletter</h4>
//                 <div>
//                   <label for="Newsletter" class="form-label">
//                     Subscribe To Our Newsletter
//                   </label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     Placeholder="Enter Your Email"
//                   />
//                   <button class="btn btn-danger mt-3">Subscribe</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="d-flex justify-content-center">
//             <div class="copyright">
//               <p>
//                 Developed and maintained by{" "}
//                 <a href="#" target="_blank">
//                   company
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* <!-- end Footer --> */}
//     </>
//   );
// }

// // -------------------------------------------------------------------------------------

// function SideMenu() {
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{ display: "flex", flexDirection: "row", flex: 1, height: "80vh" }}
//     >
//       <Menu
//         onClick={({ key }) => {
//           if (key === "***") {
//           } else {
//             navigate(key);
//           }
//         }}
//         items={[
//           { 
//             label: "Admin View All",
//              key: "/addminviewall",
//               // icon: <HomeOutlined />
//              },
//           { 
//             label: "Program", 
//             key: "/program", 
//             // icon: <HomeOutlined />
//            },
//           {
//              label: "Village",
//               key: "/village", 
//               // icon: <HomeOutlined />
//              },
//           { 
//             label: "State User", 
//           key: "/stateuser",
//           //  icon: <HomeOutlined /> 
//           },
//           {
//             label: "Block User",
//             key: "/block",
//             // icon: <DashboardOutlined />,
//           },
//           {
//             label: "Mentor",
//             key: "/mentor",
//             // icon: <UnorderedListOutlined />,
//           },
//           {
//             label: "All Student",
//             key: "/allstudent",
//             // icon: <UserOutlined />,
//           },
//           {
//             label: "All States",
//             key: "/allstates",
//             // icon: <PoweroffOutlined />,
//             danger: true,
//           },
//         ]}
//       >

//       </Menu>
//       <Content />
//     </div>
//   );
// }

// // ------------------------------------------------------------------------------------------------------

// function Content() {
//   return (
//     <div>
//       {/* show all things in ui  */}

//       <Routes>
//         <Route
//           path="/addminviewall"
//           element={ <Addmin/>
//           }
//         ></Route>
//         {/* <Route
//           path="/program"
//           element={
//             <div>
//               <div class="card">
//                 <div class="card-body">program card</div>
//               </div>
//             </div>
//           }
//         ></Route> */}
//         <Route path="/program" element={<Program />} />

//         {/* <Route
//           path="/village"
//           element={
//             <div>
//               <div class="card">
//                 <div class="card-body">village card</div>
//               </div>
//             </div>
//           }
//         ></Route> */}
//         <Route path="/village" element={<Village />} />

//         {/* <Route
//           path="/stateuser"
//           element={
//             <div>
//               <div class="card">
//                 <div class="card-body">State User card</div>
//               </div>
//             </div>
//           }
//         ></Route> */}
//         <Route path="/stateuser" element={<StateUser />} />
//         {/* <Route
//           path="/block"
//           element={
//             <div>
//               <div>
//                 <div class="card">
//                   <div class="card-body">block card</div>
//                 </div>
//               </div>
//             </div>
//           }
//         ></Route> */}
//         <Route path="/block" element={<Block />} />
//         {/* <Route
//           path="/mentor"
//           element={
//             <div>
//               <div>
//                 <div class="card">
//                   <div class="card-body">Mentor card</div>
//                 </div>
//               </div>
//             </div>
//           }
//         ></Route> */}
//         <Route path="/mentor" element={<Mentor />} />

//         {/* <Route
//           path="/allstudent"
//           element={
//             <div>
//               <div>
//                 <div class="card">
//                   <div class="card-body">allstudent card</div>
//                 </div>
//               </div>
//             </div>
//           }
//         ></Route> */}
//         <Route path="/allstudent" element={<Allstudent />} />

//         {/* <Route
//           path="/allstates"
//           element={
//             <div>
//               <div class="card">
//                 <div class="card-body">Allstates card</div>
//               </div>
//             </div>
//           }
//         ></Route> */}
//         <Route path="/allstates" element={<Allstates />} />

//         {/* <Route path='/'element={<div></div>} ></Route>  */}
//       </Routes>
//     </div>
//   );
// }

export default App;
