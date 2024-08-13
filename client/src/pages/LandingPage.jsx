import React,{useEffect,useState} from 'react'
import { FaAnglesUp } from "react-icons/fa6"

export default function LandingPage() {
  return (
    <div className='relaive'>
      <div className='h-screen w-full overflow-hidden'>
      <iframe
        src={"/animations/fluidCursor/fluidCursor.html"}
        title="Animation"
        className='inset-0 w-full h-full absolute z-0'
      >
      </iframe>
      </div>

      <div className='absolute z-10 top-10 left-10'>
        <p className='text-8xl font-bold mt-10 ml-4'><span className='text-cream'>Brain</span> <span className='text-dark-cream'>Bros.</span> </p>
        <p className='text-white text-9xl font-bold mt-10 ml-3'>Connect.Learn.Grow.</p>
        <p className='text-light-ivory text-3xl mt-1 ml-6'>"Unlock your potential with guidance from those who’ve been there."</p>

        <div className='flex flex-col absolute mt-16 gap-5 -right-32'>
          <button className='border-white border rounded-full text-4xl text-white font-semibold bg-skin hover:text-skin hover:bg-white px-5 py-3 w-60'>Sign Up</button>
          <button className='border-white border rounded-full text-4xl text-white font-semibold bg-olive-green hover:text-olive-green hover:bg-white px-5 py-3 w-60'>Log in</button>
        </div>

      </div>

      <div className='absolute bottom-0 whitespace-nowrap left-96'>

        <div className='flex flex-wrap ml-32 gap-5 justify-between text-center'>
         <FaAnglesUp className='text-white font-bold text-3xl'/>
         <p className='border bottom-0 bg-gray-400 text-white w-96 text-2xl font-semibold px-28 rounded-lg'>How it works ?</p>
         <FaAnglesUp className='text-white font-bold text-3xl'/>
        </div>

        <div>
          <p>
            
          </p>
        </div>
      
      
      </div>

      
    </div>
    
  );

  

}
