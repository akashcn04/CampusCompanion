import React,{useEffect,useState} from 'react'
import { FaAnglesUp } from "react-icons/fa6"
import {Link} from "react-router-dom";

export default function LandingPage() {
  return (
    <div className='relaive h-screen overflow-hidden bg-[url("/images/bg-image2.jpg")] bg-cover bg-center'>
      {/* <div className='h-screen w-full overflow-hidden'>
      <iframe
        src={"/animations/fluidCursor/fluidCursor.html"}
        title="Animation"
        className='inset-0 w-full h-full absolute z-0'
      >
      </iframe>
      </div> */}

      <div className='absolute z-10 top-10 left-10'>
        <p className='text-8xl font-bold mt-10 ml-4'><span className='text-cream'>Brain</span> <span className='text-dark-cream'>Bros.</span> </p>
        <p className='text-white text-9xl font-bold mt-10 ml-3'>Connect.Learn.Grow.</p>
        <p className='text-light-ivory text-3xl mt-1 ml-6'>"Unlock your potential with guidance from those who’ve been there."</p>

        <div className='flex flex-col absolute mt-32 gap-5 -right-32'>
          <Link to="/sign-up"><button className='border-white border rounded-full text-4xl text-white bg-transparent hover:text-slate-400 hover:bg-white font-semibold px-5 py-3 w-60'>Sign Up</button> </Link>
          <Link to="/log-in"><button className='border-white border rounded-full text-4xl text-white bg-transparent hover:text-slate-400 hover:bg-white font-semibold px-5 py-3 w-60'>Log in</button> </Link>
        </div>

      </div>

      
    </div>
    
  );

  

}
