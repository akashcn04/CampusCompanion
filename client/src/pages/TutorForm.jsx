import React, { useState } from 'react'
import SideBar from '../components/SideBar';

export default function TutorForm() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className='flex flex-row h-screen w-full fixed left-0 top-0'>

      <div className='flex fixed left-0 top-0 h-screen w-[50px] bg-dark-blue'></div>

      <SideBar className='sticky top-0' isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div className='shadow-xl bg-gray-100 mt-6 mb-4 min-h-[75vh] lg:min-h-[80vh] lg:min-w-[75vw]'>
        <p className='text-black text-4xl font-bold mt-3 ml-80'> " Tutor Application Form " </p>

        <form className='mt-10 ml-3 flex flex-col gap-6'>
          <div className='flex justify-between gap-4'>
            <div>
              <label className='text-1xl'> Branch : </label> <input className='outline-none border-l-2 border-black' type='text' name='branch' id='branch'></input>
            </div>
            <div>
              <label> Year : </label> <input className='outline-none border-l-2 border-black' type='text' name='year' id='year'></input>
            </div>
            <div>
              <label> CGPA : </label> <input className='outline-none border-l-2 border-black' type='text' name='cgpa' id='cgpa'></input>
            </div>
          </div>

          <div className='flex gap-2 whitespace-nowrap'>
            <label> Skills : </label>
            <input className='outline-none border-l-2 border-black min-w-full' type='text' id='skills' name="skills"></input>
          </div>
          
          <div className='flex flex-col gap-2 whitespace-nowrap'>
            <label> Clubs : </label>
            <textarea className='outline-none border-l-2 border-black min-w-full h-20' type='text' id='skills' name="skills"
            placeholder='In which clubs are you in ? what all work have you done in that club ? ...'></textarea>
          </div>

          <div className='flex flex-col gap-2 whitespace-nowrap'>
            <label> Work Experience : </label>
            <textarea className='outline-none border-l-2 border-black min-w-full h-20' type='text' id='skills' name="skills" 
            placeholder='As a work experience you can tell your juniors about projects you worked on and internships you cracked...'></textarea>
          </div>

          <div className='flex flex-col gap-2 whitespace-nowrap'>
            <label> Other : </label>
            <textarea className='outline-none border-l-2 border-black min-w-full h-20' type='text' id='skills' name="skills"
            placeholder='Tell your juniors anything you want to tell...'></textarea>
          </div>

          <button className='bg-pink-700 text-white rounded-full max-w-lg h-10 ml-64' type='submit'> Submit </button>

        </form>
      </div>

      </div>
  )
}
