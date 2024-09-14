import SideBar from '../components/SideBar'
import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const {currentUser} = useSelector((state) => state.user)
  const {tutorList,tuteeList,srn,role} = currentUser;
  const [mode,setMode] = useState("tutee")
  const navigate = useNavigate()
  var newMode;

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);
  
  var toRender,tutor_tueeList;
  if(role==="tutor" && mode==="tutor"){
    toRender = "students"
    tutor_tueeList = tuteeList
  }else{
    toRender = "tutors"
    tutor_tueeList = tutorList
  }

  console.log(tutor_tueeList)
  

  const handleTutorClick = () => {
    if(role === "tutee"){
      const year = parseInt(srn.substring(6,8))
      const totyear = 2000 + year
      const currentYear = new Date().getFullYear();

      if(currentYear - totyear > 1){
        navigate("/tutor-form")
      }else{
        alert("You need to be atlest in second year of your college.")
      }
    }
    else if(mode === "tutee"){
      setMode("tutor")
      newMode = "tutor"
    }else{
      setMode("tutee")
      newMode = "tutee"
    }

    localStorage.setItem('mode', newMode); 
    window.location.reload();
  }

  const getButtonLabel = () => {
    if (role === 'tutee') {
      return 'Become a Tutor';
    } else if (role === 'tutor' && mode === 'tutee') {
      return 'Tutor Mode';
    } else if (role === 'tutor' && mode === 'tutor') {
      return 'Tutee Mode';
    }
    return '';
  };

  return (
    

    <div className='flex flex-row h-screen w-full fixed left-0 top-0'>

      <div className='flex fixed left-0 top-0 h-screen w-[50px] bg-dark-blue'></div>

      <SideBar className='sticky top-0' isOpen={isOpen} setIsOpen={setIsOpen}/>

    <div className={`flex flex-col lg:flex-row m-0 ${ isOpen && 'hidden'}`}>

      {/* Central line */}
      <div className='px-5 mt-0 mb-0 flex flex-col'>

      <div className='flex flex-col'>
        <div className='lg:hidden mt-5 ml-4 '>
          <p className={`text-6xl font-bold`}>
            <span className='text-dark-blue'>Brain</span> 
            <span className='text-gold'>Bros.</span>
          </p>
        </div>

        <div className="border-t border-cream border-2 m-2">
  
        </div>
      </div>

        <div className='text-3xl lg:text-4xl font-bold mt-1 lg:mt-7'>{ toRender==="students" ? "My Students : " : "My Tutors :" } </div>

        <div className='shadow-xl bg-gray-100 mt-6 mb-4 min-h-[75vh] lg:min-h-[80vh] lg:min-w-[45vw]'>
            <div className='mt-3 flex flex-col gap-3 justify-center ml-3'>  
              {
                tutor_tueeList.map((id,index) => (<UserCard id={id} key={index}/>))
              }
            </div>
            
        </div>
      
      </div>

      {/* Vertical divider */}
      <div className="border-2 border-gray-300 h-screen mt-5 ml-2 lg:ml-3 hidden lg:block"></div>


      {/* Left Line */}
      <div>
        <button className='border-white hover:border-dark-blue border text-nowrap rounded-full text-2xl lg:text-3xl text-white font-semibold bg-dark-blue hover:text-dark-blue hover:bg-white px-10 py-3 w-full mt-7 ml-1 lg:ml-7'
            onClick={handleTutorClick}> {getButtonLabel()} </button>

        <div className='shadow-xl bg-gray-100 mt-5 ml-2 lg:ml-10 min-h-[80vh] min-w-[21vw]'>

        </div>
      
      
      </div>

    </div>


    </div>
  )
}

// import SideBar from "../components/SideBar"
// import { useState } from "react";

// export default function Home(){
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='flex flex-col lg:flex-row h-screen w-full '>
//   {/* Sidebar */}
//   <div className='lg:w-1/4 lg:h-screen lg:sticky lg:top-0 bg-gray-200'>
//     <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
//   </div>

//   {/* Main Content */}
//   <div className='flex flex-col lg:flex-row flex-grow'>
//     <div className='flex flex-col flex-grow px-5 mt-0 mb-0'>
//       <div className='lg:hidden mt-5 ml-4'>
//         <p className='text-6xl font-bold'>
//           <span className='text-dark-blue'>Brain</span>
//           <span className='text-gold'>Bros.</span>
//         </p>
//       </div>

//       <div className='border-t border-cream border-2 m-2'></div>

//     <div className={`${!isOpen && 'hidden'}`}>

//       <div className='text-3xl lg:text-4xl font-bold mt-1 lg:mt-7'>My Tutors:</div>

//       <div className='shadow-xl bg-gray-100 mt-6 mb-4 min-h-[75vh] lg:min-h-[80vh] lg:min-w-[35vw]'>
//         {/* Content for My Tutors */}
//       </div>
//     </div>

//     {/* Vertical Divider */}
//     <div className='border-2 border-gray-300 h-full mt-5 ml-1 hidden lg:block'></div>

//     {/* Right Column */}
//     <div className='flex flex-col lg:w-1/4 lg:min-w-[21vw] ml-1'>
//       <button className='border-white hover:border-dark-blue border text-nowrap rounded-full text-2xl lg:text-3xl text-white font-semibold bg-dark-blue hover:text-dark-blue hover:bg-white px-10 py-3 w-full mt-7 ml-1 lg:ml-3'>
//         Become a tutor
//       </button>

//       <div className='shadow-xl bg-gray-100 mt-5 ml-3 min-h-[80vh] min-w-[21vw]'>
//         {/* Additional Content */}
//       </div>
//     </div>

//     </div>

//   </div>
// </div>

//   )
// }