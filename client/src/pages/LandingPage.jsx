import React,{useEffect,useState} from 'react'

export default function LandingPage() {
  return (
    <div>
      <div className='h-screen w-full overflow-hidden'>
      <iframe
        src={"/animations/fluidCursor/fluidCursor.html"}
        title="Animation"
        className='inset-0 w-full h-full'
      >

        <p className='text-6-xl text-white'>Something</p>
      </iframe>
      </div>

      <div>
      <p className='text-black text-6xl absolute'>Connect.Learn.Grow</p>
      </div>

    </div>
    
  );

  

}
