import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import GetTutorCard from '../components/GetTutorCard'

export default function GetTutor() {

    const [isOpen, setIsOpen] = useState(false);
    const [branch,setBranch] = useState("ALL")
    const [year,setYear] = useState("ALL")
    const [list,setList] = useState([]);
    const [filteredTutors, setFilteredTutors] = useState([]);

    useEffect(() => {

      const fetchTutors = async () => {
        const res = await fetch('/api/user/fetchTutors');
        const data = await res.json()
        setList(data)
      }

      fetchTutors()

      
      
    },[])

    useEffect(() => {
      let updatedList = list;
  
      if (branch !== "ALL") {
        updatedList = updatedList.filter(tutor => tutor.branch.toLowerCase() === branch.toLocaleLowerCase());
      }
  
      if (year !== "ALL") {
        updatedList = updatedList.filter(tutor => tutor.year[0] === year[0]);
      }

      updatedList = updatedList.sort((a, b) => a.rank - b.rank);
  
      setFilteredTutors(updatedList);
    }, [branch, year, list]);

  return (
    <div className='flex flex-row h-screen w-full left-0 top-0'>
        
        <div className='flex fixed left-0 top-0 h-screen w-[375px] bg-dark-blue'></div>
        
        <SideBar className='sticky top-0' isOpen={isOpen} setIsOpen={setIsOpen}/>

        <div className='mb-4 lg:min-w-[75vw] flex flex-col  items-center gap-5'>
        
        <div className='flex flex-wrap justify-between gap-16 items-center mt-10'>

        
        <div className='flex gap-5 items-center'>
          <label className='font-semibold text-xl'> Branch : </label>
          
          <div className='flex w-14 h-6'>
            <select value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option>ALL</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>MEC</option>
              <option>BIO</option>
            </select>
          </div>

        </div>


        <div className='flex gap-5 items-center'>
          
          <label className='font-bold text-xl'>  Year : </label>

          <div className='flex w-14 h-6'>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option>ALL</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
            </select>
          </div>
          
       </div>
          
        </div>



        <div className='border border-black w-full top-10'></div>
        
        {/* Tutor card listing  */}
        <div className='mt-3 flex flex-col gap-3 justify-center ml-3'>  
              {
                filteredTutors.map((id,index) => (<GetTutorCard id={id} key={index}/>))
              }
            </div>
        </div>
        
   </div>
  )
}
