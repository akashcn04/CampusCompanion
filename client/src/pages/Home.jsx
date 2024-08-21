// import SideBar from '../components/SideBar'

// export default function Home() {
//   return (
//     <div className='flex flex-row h-screen w-full'>

//       <SideBar className='sticky top-0'/>

//     <div className='flex flex-col lg:flex-row m-0'>

//       {/* Central line */}
//       <div className='px-5 mt-0 mb-0 flex flex-col'>

//       <div className='flex flex-col'>
//         <div className='lg:hidden mt-5 ml-4 '>
//           <p className={`text-6xl font-bold`}>
//             <span className='text-dark-blue'>Brain</span> 
//             <span className='text-gold'>Bros.</span>
//           </p>
//         </div>

//         <div className="border-t border-cream border-2 m-2">
  
//         </div>
//       </div>

//         <div className='text-3xl lg:text-4xl font-bold mt-1 lg:mt-7'>My Tutors : </div>

//         <div className='shadow-xl bg-gray-100 mt-6 mb-4 min-h-[75vh] lg:min-h-[80vh] lg:min-w-[45vw]'>

//         </div>
      
//       </div>

//       {/* Vertical divider */}
//       <div class="border-2 border-gray-300 h-screen mt-5 ml-3 hidden lg:block"></div>


//       {/* Left Line */}
//       <div>
//         <button className='border-white hover:border-dark-blue border text-nowrap rounded-full text-2xl lg:text-3xl text-white font-semibold bg-dark-blue hover:text-dark-blue hover:bg-white px-10 py-3 w-full mt-7 ml-1 lg:ml-7'> Become a tutor </button>

//         <div className='shadow-xl bg-gray-100 mt-5 ml-10 min-h-[80vh] min-w-[21vw]'>

//         </div>
      
      
//       </div>

//     </div>


//     </div>
//   )
// }

import SideBar from "../components/SideBar"

export default function Home(){
  return (
    <div className='flex flex-col lg:flex-row h-screen w-full '>
  {/* Sidebar */}
  <div className='lg:w-1/4 lg:h-screen lg:sticky lg:top-0 bg-gray-200'>
    <SideBar />
  </div>

  {/* Main Content */}
  <div className='flex flex-col lg:flex-row flex-grow'>
    <div className='flex flex-col flex-grow px-5 mt-0 mb-0'>
      <div className='lg:hidden mt-5 ml-4'>
        <p className='text-6xl font-bold'>
          <span className='text-dark-blue'>Brain</span>
          <span className='text-gold'>Bros.</span>
        </p>
      </div>

      <div className='border-t border-cream border-2 m-2'></div>

      <div className='text-3xl lg:text-4xl font-bold mt-1 lg:mt-7'>My Tutors:</div>

      <div className='shadow-xl bg-gray-100 mt-6 mb-4 min-h-[75vh] lg:min-h-[80vh] lg:min-w-[35vw]'>
        {/* Content for My Tutors */}
      </div>
    </div>

    {/* Vertical Divider */}
    <div className='border-2 border-gray-300 h-full mt-5 ml-1 hidden lg:block'></div>

    {/* Right Column */}
    <div className='flex flex-col lg:w-1/4 lg:min-w-[21vw] ml-1'>
      <button className='border-white hover:border-dark-blue border text-nowrap rounded-full text-2xl lg:text-3xl text-white font-semibold bg-dark-blue hover:text-dark-blue hover:bg-white px-10 py-3 w-full mt-7 ml-1 lg:ml-3'>
        Become a tutor
      </button>

      <div className='shadow-xl bg-gray-100 mt-5 ml-3 min-h-[80vh] min-w-[21vw]'>
        {/* Additional Content */}
      </div>
    </div>


  </div>
</div>

  )
}