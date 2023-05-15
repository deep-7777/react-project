import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

// import { FaIconName } from 'react-icons/fa';
// import { FaHome } from 'react-icons/fa';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            // icon:<FaTh/>
        },
        {
          path:"/addminviewall",
          name:"Admin View All",
          // icon:<FaTh/>
      },
        {
            path:"/program",
            name:"Program",
            // icon:<FaUserAlt/>
        },
        {
            path:"/village",
            name:"Village",
            // icon:<FaRegChartBar/>
        },
        {
            path:"/stateuser",
            name:"State User",
            // icon:<FaCommentAlt/>
        },
        {
            path:"/block",
            name:"Block User",
            // icon:<FaShoppingBag/>
        },
        {
            path:"/mentor",
            name:"Mentor",
            // icon:<FaThList/>
        },
        {
            path:"/allstudent",
            name:"All Student",
            // icon:<FaThList/>
        },
        {
          path:"/allstates",
          name:"All States",
          // icon:<FaThList/>
      }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;