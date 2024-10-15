import React, { useEffect, useState } from 'react';
import { RiChatFollowUpFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFailure,updateUserStart,updateUserSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function RequestCard({id}) {

    const [request,setRequest] = useState({})
    const [tutee,setTutee] = useState({})
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleAccept = async(e) => {
      e.preventDefault()
      try{
      dispatch(updateUserStart())
      const res = await fetch("/api/request/accept",{
        method : 'POST',
        headers : {
         'Content-Type' : "application/json"
        },
        body: JSON.stringify({
          myId : currentUser._id,
          requestedTuteeId : tutee._id,
          requestId : request._id
        }),
      })

      const data = await res.json()

      dispatch(updateUserSuccess(data.tutor_user))
      alert("Request Accepted")
      navigate(0)
    }catch(error){
      dispatch(updateUserFailure(error.message))
    }

    }

    const handleReject = async (e) => {
      e.preventDefault()
      
      try{
      const res = await fetch("/api/request/reject",{
        method : 'POST',
        headers : {
         'Content-Type' : "application/json"
        },
        body: JSON.stringify({
          myId : currentUser._id,
          requestedTuteeId : tutee._id,
          requestId : request._id
        }),
      })

      alert("Request rejected")
      navigate(0)
      

    }catch(error){
      dispatch(updateUserFailure(error.message))
    }


    } 

  return (
    <div className={`bg-cream w-[65vw] min-h-[12vh] rounded-lg flex items-center gap-5`}>
      
      
    <div className="ml-5">
      <RiChatFollowUpFill className="text-6xl" />
    </div>

    <div className='flex flex-col py-2 gap-1'>
        <p className='text-xl font-semibold'>{tutee.username} </p>

        <div className='bg-slate-50 p-2 rounded-md max-w-[63vw]'>
            <p>{request?.message}</p>
        </div>

        {request?.state == "Active" && <div className='flex py-2 gap-3 ml-[40vw]'>
        <button className='bg-green-700 text-white rounded-full w-[5vw]' type='submit' onClick={handleAccept}> Accept </button>
        <button className='bg-red-700 text-white rounded-full w-[5vw]' type='submit' onClick={handleReject}> Reject </button>
        </div>}

        {request?.state != "Active" && <div className='flex py-2 gap-3 ml-[50vw]'>
            <p className='font-semibold'> {request.state} </p>
          </div>  
        }
    </div>

    

  </div>
  )
}
