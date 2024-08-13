import React, { useState } from 'react'
import { FaBars,FaCircleInfo} from "react-icons/fa6";
import {FaHome,FaSignOutAlt} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiChatFollowUpFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const SideBarButton = ({ to, children, icon }) => {
  return (
    <div className="flex items-center">
      {icon && <span className="mr-8 text-2xl text-white">{icon}</span>}
      <Link to={to} className="flex items-center py-2 px-20 max-w-full hover:bg-cream hover:text-dark-blue transition-colors rounded-full text-lg text-white whitespace-nowrap">
        {children}
      </Link>
    </div>
  );
};


export default function SideBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`bg-dark-blue h-screen p-5 pt-8 ${isOpen ?'w-full' : 'w-1/5'} lg:w-[375px] relative transform transition-transform`}>
      <div className='flex flex-col flex-wrap justify-between'>
        <FaBars  onClick={toggleSidebar}
        className= 'text-white text-2xl absolute right-6 lg:right-10 top-9 cursor-pointer lg:hidden'/>

        <div className={`absolute top-28 flex flex-wrap flex-col ${!isOpen && 'hidden'} lg:block` }>

          <div className='flex flex-wrap flex-col max-w-full'>
            <p className='text-white text-7xl font-bold w-full'>Brain</p>
            <p className='text-dark-cream text-7xl font-bold w-full'>Bros.</p>
          </div>

          <div className='absolute top-48 left-15 items-center'>
            <ul className='max-w-full items-center gap-3 space-y-2'> 
              <li><SideBarButton to="/" icon={<FaHome/>}>Home</SideBarButton></li>
              <li><SideBarButton to="/" icon={<LiaChalkboardTeacherSolid/>}>Get Tutor</SideBarButton></li>
              <li><SideBarButton to="/" icon={<RiChatFollowUpFill/>}>Requests</SideBarButton></li>
              <li><SideBarButton to="/" icon={<CgProfile/>}>Profile</SideBarButton></li>
              <li><SideBarButton to="/" icon={<FaCircleInfo/>}>About</SideBarButton></li>
              <li><SideBarButton to="/sign-out" icon={<FaSignOutAlt/>}>Sign Out</SideBarButton></li>
            </ul>
          </div>
        </div>
      </div>
    </div>   
  )

}


