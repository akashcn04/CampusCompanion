import React, { useEffect, useState } from 'react'
import { TbLetterBSmall } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInFailure,signInSuccess } from '../redux/user/userSlice';

export default function LogIn() {


  const [formData,setFormData] = useState({});
  const {currentUser,loading,error} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    if(e.target.id === "cpassword"){
      return;
    }
    setFormData({
      ...formData,
      [e.target.id] : e.target.value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
        {
          method : 'POST',
          headers : {
            'Content-Type' : "application/json",
          },
          body : JSON.stringify(formData)
        }
      );
  
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message))
        return;
      }
  
      dispatch(signInSuccess(data))
      
      navigate("/home")

    }catch(error){
      dispatch(signInFailure(error.message))
    }

  }

 
  

  return (
    <div className='flex flex-col h-screen gap-8 bg-[url("/images/bg-image2.jpg")] bg-cover bg-center'>
     <span className='text-white text-6xl font-bold m-auto mb-0 '>BB.</span>

      <div className="w-full max-w-md m-auto bg-transparent rounded p-5 mt-0 drop-shadow-xl shadow-inner border-white border-2">        
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-white" >SRN</label>
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="srn" id="srn"
              onChange={handleChange}/>
        </div>
        <div>
          <label className="block mb-2 text-white">Password</label>
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" id="password"
              onChange={handleChange}/>
        </div>
        <div>          
        <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded disabled:opacity-80" disabled={loading} type="submit">
            {loading ? "Loading..." : "Log In"}
         </button>
        </div>       
      </form>  
      <footer>
        <a className="text-white hover:text-pink-700 text-sm float-right" href="/sign-up">Create New Account</a>
      </footer>   
    </div>
</div>
  )
}
