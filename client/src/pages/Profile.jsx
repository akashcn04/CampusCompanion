import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {

    const [isOpen, setIsOpen] = useState(false);
    const {currentUser} = useSelector((state) => state.user)
    const navigate = useNavigate()

    return (
        <div className='flex flex-row h-screen w-full fixed left-0 top-0'>
    
          <div className='flex fixed left-0 top-0 h-screen w-[50px] bg-dark-blue'></div>
    
          <SideBar className='sticky top-0' isOpen={isOpen} setIsOpen={setIsOpen}/>
    
          <div className='shadow-xl bg-gray-100 top-0 mb-4 min-h-[75vh] lg:min-h-[80vh] lg:min-w-[75vw] flex flex-col justify-center items-center gap-5'>
            <div className='flex items-center gap-6  '>  
                <CgProfile className='text-9xl'/>
                <div> 
                    <p className='text-4xl font-semibold'> {currentUser.username} </p>
                    <p className='text-2xl'> {currentUser.srn} </p>
                    <p className='text-2xl'> {currentUser.branch } </p>
                </div>
            </div>

            <div className='flex mr-auto ml-72 mt-8 gap-5'>
                <div className='flex flex-col text-xl font-semibold'>
                    <p>Score</p>
                    <p> 250 </p>
                </div>

                <div className='flex flex-col text-xl font-semibold'>
                    <p>Rank</p>
                    <p> 10 </p>
                </div>
            </div>

            <div className='flex flex-col gap-5 mt-0'>
    
            <div className='flex mt-10 gap-2'>
                <span> CGPA : </span>
                <p> {currentUser.cgpa} </p>
            </div>
    
            <div className='flex gap-2'>
                <span> Skills : </span>
                <p> {currentUser.skills} </p>
            </div>
            <div className='flex gap-2'>
                <span> Clubs : </span>
                <p> {currentUser.clubs} </p>
            </div>        
            <div className='flex gap-2'>
                <span> Work experience : </span>
                <p> {currentUser.work_experience} </p>
            </div>        
            <div className='flex gap-2'>
                <span> Others : </span>
                <p> {currentUser.other} </p>
            </div>

            </div>

            <Link to="/edit-form"  className='bg-pink-700 rounded-full h-10 w-20 mt-10 ml-auto mr-44 text-white flex items-center justify-center'> Edit </Link>
          </div>

         
        </div>
      );        
}
