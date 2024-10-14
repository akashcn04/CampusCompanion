import React, { useEffect, useState } from 'react';
import { RiChatFollowUpFill } from "react-icons/ri";

export default function RequestCard({id}) {

    const [request,setRequest] = useState({})
    const [tutee,setTutee] = useState({})

    useEffect(() => {

        const fetchData = async () => {
            try {
              // Fetch the request data first
              const response = await fetch(`/api/request/info/${id}`);
              const requestData = await response.json();
              setRequest(requestData);
      
              // Only fetch tutee data if request.from is available
              if (requestData?.from) {
                const tuteeResponse = await fetch(`/api/user/info`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ id: requestData.from }),
                });
                const tuteeData = await tuteeResponse.json();
                setTutee(tuteeData);
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();

    },[id])



  return (
    <div className={`bg-cream w-[65vw] min-h-[12vh] rounded-lg flex items-center gap-5`}>
      
      
    <div className="ml-5">
      <RiChatFollowUpFill className="text-6xl" />
    </div>

    <div className='flex flex-col py-2 gap-1'>
        <p className='text-xl font-semibold'>{tutee.username} </p>

        <div className='bg-slate-50 p-2 rounded-md max-w-[63vw]'>
            <p>{request.message}</p>
        </div>

        <div className='flex py-2 gap-3 ml-[40vw]'>
        <button className='bg-blue-900 text-white rounded-full w-[5vw]' type='submit'> Info </button>
        <button className='bg-green-700 text-white rounded-full w-[5vw]' type='submit'> Accept </button>
        <button className='bg-red-700 text-white rounded-full w-[5vw]' type='submit'> Reject </button>
        </div>
    </div>

    

  </div>
  )
}
