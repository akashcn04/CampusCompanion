import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { useSelector } from 'react-redux'
import RequestCard from '../components/RequestCard'

export default function Requests() {

  const [isOpen,setIsOpen] = useState();  

  const {currentUser} = useSelector((state) => state.user)
  const {requestList} = currentUser

  console.log(requestList)

  return (
    <div className='flex flex-row h-screen w-full left-0 top-0'>
        
        <div className='flex fixed left-0 top-0 h-screen w-[375px] bg-dark-blue'></div>
        
        <SideBar className='sticky top-0' isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div className='mt-3 flex flex-col gap-3 ml-3'>  
        {
          requestList?.map((id,index) => (<RequestCard id={id} key={index}/>))
        }
      </div>
        
        
    </div>

  
  )
}
