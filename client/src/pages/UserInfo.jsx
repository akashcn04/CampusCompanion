import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SideBar from '../components/SideBar';
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';

const TutorDetails = () => {
const [isOpen, setIsOpen] = useState(false);
  const { tutorId } = useParams(); // Extract tutorId from URL
  const location = useLocation();
  const [tutor, setTutor] = useState(location.state?.tutor || null); // Use state first if available
  const {currentUser} = useSelector((state) => state.user)

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        const response = await fetch('/api/user/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "id" : tutorId
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch tutor data: ${response.statusText}`);
        }

        const data = await response.json();
        setTutor(data);
      } catch (error) {
        console.error('Error fetching tutor data:', error);
      }
    };

    fetchTutorData();
  }, []);

  if (!tutor) {
    return <div>Loading...</div>;
  }


  return (
    <div className='flex flex-row h-screen w-full fixed left-0 top-0'>

      <div className='flex fixed left-0 top-0 h-screen w-[50px] bg-dark-blue'></div>

      <SideBar className='sticky top-0' isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div className='shadow-xl bg-gray-100 top-0 mb-4 min-h-[75vh] lg:min-h-[80vh] lg:min-w-[75vw] flex flex-col justify-center items-center gap-5'>
        <div className='flex items-center gap-6  '>  
            <CgProfile className='text-9xl'/>
            <div> 
                <p className='text-4xl font-semibold'> {tutor.username} </p>
                <p className='text-2xl'> {tutor.srn} </p>
                <p className='text-2xl'> {tutor.branch } </p>
            </div>
        </div>

        <div className='flex mt-10 gap-2'>
            <span> CGPA : </span>
            <p> {tutor.cgpa} </p>
        </div>

        <div className='flex gap-2'>
            <span> Skills : </span>
            <p> {tutor.skills} </p>
        </div>
        <div className='flex gap-2'>
            <span> Clubs : </span>
            <p> {tutor.clubs} </p>
        </div>        
        <div className='flex gap-2'>
            <span> Work experience : </span>
            <p> {tutor.work_experience} </p>
        </div>        
        <div className='flex gap-2'>
            <span> Others : </span>
            <p> {tutor.other} </p>
        </div>

        {tutor.role=="tutor" && !currentUser.tutorList.includes(tutor._id) && <button className='bg-pink-700 rounded-full h-10 w-80 mt-10 text-white'> Request </button>}

      </div>
    </div>
  );
};

export default TutorDetails;
