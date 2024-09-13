import React, { useState } from 'react'
import SideBar from '../components/SideBar'

export default function GetTutor() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-row h-screen w-full fixed left-0 top-0'>
        <div className='flex fixed left-0 top-0 h-screen w-[50px] bg-dark-blue'></div>
        <SideBar className='sticky top-0' isOpen={isOpen} setIsOpen={setIsOpen}/>

        
   </div>
  )
}
