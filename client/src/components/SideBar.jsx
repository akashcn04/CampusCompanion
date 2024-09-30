import React, { useState } from 'react'
import { FaBars,FaCircleInfo} from "react-icons/fa6";
import {FaHome,FaSignOutAlt} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiChatFollowUpFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { signOutFailure, signOutStart, signOutSuccess } from '../redux/user/userSlice';

const SideBarButton = ({ to, children, icon ,so}) => {


  return (
    <div className="flex items-center">
      {icon && <span className="mr-8 text-2xl text-white">{icon}</span>}
      <Link to={to} className="flex items-center py-2 px-20 max-w-full hover:bg-cream hover:text-dark-blue transition-colors rounded-full text-lg text-white whitespace-nowrap">
        {children}
      </Link>
    </div>
  );
};


export default function SideBar({isOpen,setIsOpen}) { //

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {currentUser} = useSelector((state) => state.user)

  

 const handleSignOut = async () => {
    try{
      dispatch(signOutStart())
      const res = await fetch('/api/auth/signout');
      const data = await res.json()

      if(data.success === false){
        dispatch(signOutFailure(data.message))
        return 
      }

      dispatch(signOutSuccess(data))
      navigate("/")
      
    }catch(error){
      dispatch(signOutFailure(error.message))
    }
 }

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`bg-dark-blue h-full p-5 pt-8 ${isOpen ?'w-full' : 'w-1/5'} lg:w-[375px] relative transform transition-transform`}>
      <div className='flex flex-col flex-wrap justify-between'>
        <FaBars  onClick={toggleSidebar}
        className= 'text-white text-2xl absolute left-3 lg:right-10 top-9 cursor-pointer lg:hidden'/>

        <div className={`absolute top-28 flex flex-wrap flex-col ${!isOpen && 'hidden'} lg:block` }>

          <div className='flex flex-wrap flex-col max-w-full'>
            <p className='text-white text-7xl font-bold w-full'>Brain</p>
            <p className='text-dark-cream text-7xl font-bold w-full'>Bros.</p>
          </div>

          <div className='absolute top-48 left-15 items-center'>
            <ul className='max-w-full items-center gap-3 space-y-2'> 
              <li><SideBarButton to="/home" icon={<FaHome/>} so="false">Home</SideBarButton></li>
              <li><SideBarButton to="/get-tutor" icon={<LiaChalkboardTeacherSolid/>} so="false">Get Tutor</SideBarButton></li>
              <li><SideBarButton to="/" icon={<RiChatFollowUpFill/>} so="false">Requests</SideBarButton></li>
              {currentUser.role === "tutor" && <li><SideBarButton to="/profile" icon={<CgProfile/>} so="false">Profile</SideBarButton></li>}
              <li><SideBarButton to="/" icon={<FaCircleInfo/>} so="false">About</SideBarButton></li>
              <li onClick={handleSignOut}><SideBarButton to="/" icon={<FaSignOutAlt/>} so="true">Sign Out</SideBarButton></li>
            </ul>
          </div>
        </div>
      </div>
    </div>   
  )

}


