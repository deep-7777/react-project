import React from 'react';
import Addmin from "./adminViewAll";
// import Login from "./component/login";
import Allstates from "./all-state";
import Students from "./students";
import Mentor from "./mentor";
import Village from "./village";
import Program from "./program";
import StateUser from "./stateuser";
import All_block from "./all_Block";
import All_district from "./all_District";
import All_user from "./all_user";
import Program_allocated from "./allocated_program";

import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./header";
import { Menu } from "antd";
import Block_user from './block-user';
// import Footer from './footer';
// import React, { useState } from 'react';





function Dashboard() {
    return (
<div>
<Header />
<div>
  <SideMenu />
</div>
{/* <Footer /> */}
</div>
       
  );
}


function SideMenu() {
    const navigate = useNavigate();
    return (
      <div
        style={{ display: "flex", flexDirection: "row", flex: 1, height: "80vh" }}
      >
        <Menu
          onClick={({ key }) => {
            if (key === "***") {
            } else {
              navigate(key);
            }
          }}
          items={[
            { 
              label: "Admin View All",
               key: "/addminviewall",
                // icon: <HomeOutlined />
               },
            { 
              label: "Program", 
              key: "/program", 
              // icon: <HomeOutlined />
             },
            {
               label: "Village",
                key: "/village", 
                // icon: <HomeOutlined />
               },
            { 
              label: "State User", 
                 key: "/stateuser",
            //  icon: <HomeOutlined /> 
            },
            {
              label: "Block User",
              key: "/block",
              // icon: <DashboardOutlined />,
            },
            {
              label: "Mentor",
              key: "/mentor",
              // icon: <UnorderedListOutlined />,
            },
            {
              label: "All Student",
              key: "/allstudent",
              // icon: <UserOutlined />,
            },
            {
              label: "All Block",
              key: "/all_block",
              // icon: <UserOutlined />,
            },
            {
              label: "All District",
              key: "/all_Districts",
              // icon: <UserOutlined />,
            },
            {
              label: "All States",
              key: "/allstates",
              // icon: <PoweroffOutlined />,
              danger: true,
            },
          ]}
        >
        </Menu>
        <Content />
      </div>
    );
  }

function Content() {
    return (
      <div>
        {/* show all things in ui  */}
  
        <Routes>
          <Route path="/" element={ <Addmin/>} />
          <Route path="/program" element={<Program />} />
          <Route path="/village" element={<Village />} />
          <Route path="/stateuser" element={<StateUser />} />
          <Route path="/block" element={<Block_user />} />
          <Route path="/mentor" element={<Mentor />} />         
          <Route path="/allstudent" element={<Students />} />
          <Route path="/allstates" element={<Allstates />} />
          <Route path="/all_block" element={<All_block />} />
          <Route path="/all_Districts" element={<All_district />} />
          <Route path="/all_user" element={<All_user />} />
          <Route path="/allocated_program" element={<Program_allocated />} />
          {/* <Route path="/adminViewAll" element={<Program_allocated />} /> */}
          


          {/* <Route path='/'element={<div></div>} ></Route>  */}
        </Routes>
      </div>
    );
  }

export default Dashboard;