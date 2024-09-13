import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export default function UserCard() {
  return (
    <div className='bg-white min-w-[43vw] min-h-[12vh] rounded-lg flex items-center gap-5'>
        <div className='ml-5'>
            <CgProfile className='text-6xl'/>
        </div>

        <div className='flex flex-col ml-5 '>
            <p className='font-semibold'> Devendra S Alase </p>
            <div className='flex gap-1  items-center'>   
                <p className='text-green-500'> About </p> <FaExternalLinkSquareAlt/>
            </div>

        </div>
    </div>
  )
}
