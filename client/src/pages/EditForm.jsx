import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import { updateUserFailure,updateUserStart,updateUserSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';

export default function TutorForm() {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.user)
  const navigate = useNavigate()
  const [formData,setFormData]  = useState(currentUser)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      dispatch(updateUserStart())

      const res = await fetch(`/api/user/update/${currentUser._id}`,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)
      })

      const data = await res.json()
 

      if(data.success === false){
        dispatch(updateUserFailure(data.message))
        return 
      }

      dispatch(updateUserSuccess(data))
      navigate("/profile")
    }catch(error){
      dispatch(updateUserFailure(error.message))
    }
  }



  return (
    
    <div className='flex flex-row h-screen w-full fixed left-0 top-0'>

      <div className='flex fixed left-0 top-0 h-screen w-[50px] bg-dark-blue'></div>

      <SideBar className='sticky top-0' isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div className='shadow-xl bg-gray-100 mt-10 mb-4 min-h-[75vh] lg:min-h-[80vh] lg:min-w-[75vw]'>
        {/* <p className='text-black text-4xl font-bold mt-3 ml-96'> " Edit Form " </p> */}

        <form className='mt-10 ml-3 flex flex-col gap-6' onSubmit={handleSubmit}>
          <div className='flex justify-between gap-4'>
            <div>
              <label > Branch : </label> <input className='outline-none border-l-2 border-black' type='text' name='branch' id='branch' value={formData.branch} onChange={handleChange}></input>
            </div>
            <div>
              <label > Year : </label> <input className='outline-none border-l-2 border-black' type='text' name='year' id='year' value={formData.year} onChange={handleChange}></input>
            </div>
            <div>
              <label> CGPA : </label> <input className='outline-none border-l-2 border-black' type='text' name='cgpa' id='cgpa' value={formData.cgpa} onChange={handleChange}></input>
            </div>
          </div>

          <div className='flex gap-2 whitespace-nowrap'>
            <label> Skills : </label>
            <input className='outline-none border-l-2 border-black min-w-full' type='text' id='skills' name="skills" value={formData.skills} onChange={handleChange}></input>
          </div>
          
          <div className='flex flex-col gap-2 whitespace-nowrap'>
            <label> Clubs : </label>
            <textarea className='outline-none border-l-2 border-black min-w-full h-20' type='text' id='clubs' name="clubs" value={formData.clubs}
            placeholder='In which clubs are you in ? what all work have you done in that club ? ...' onChange={handleChange}></textarea>
          </div>

          <div className='flex flex-col gap-2 whitespace-nowrap'>
            <label> Work Experience : </label>
            <textarea className='outline-none border-l-2 border-black min-w-full h-20' type='text' id='work_experience' name="work_experience" value={formData.work_experience}
            placeholder='As a work experience you can tell your juniors about projects you worked on and internships you cracked...' onChange={handleChange}></textarea>
          </div>

          <div className='flex flex-col gap-2 whitespace-nowrap'>
            <label> Other : </label>
            <textarea className='outline-none border-l-2 border-black min-w-full h-20' type='text' id='other' name="other" value={formData.other}
            placeholder='Tell your juniors anything you want to tell...' onChange={handleChange}></textarea>
          </div>

          <button className='bg-pink-700 text-white rounded-full max-w-lg h-10 ml-64' type='submit'> Submit </button>

        </form>
      </div>

      </div>
  )
}
