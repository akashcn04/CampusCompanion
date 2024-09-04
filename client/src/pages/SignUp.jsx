import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [formData,setFormData] = useState({});
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);

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
      setLoading(true);
      const res = await fetch('/api/auth/signup',
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
        setError(data.message);
        setLoading(false);
        return;
      }
  
      setLoading(false);
      setError('');
      navigate("/log-in")

    }catch(error){
      setError(error.message);
      setLoading(false);
    }

  }

  useEffect(() => {
    if (error) {
      alert(error);
      setError(''); 
    }
  }, [error]);

  return (
    <div className='flex flex-col h-screen gap-8 bg-[url("/images/bg-image2.jpg")] bg-cover bg-center'>
    <span className='text-white text-6xl font-bold m-auto mb-0 '>BB.</span>

     <div className="w-full max-w-lg m-auto bg-transparent rounded p-5 mt-0 drop-shadow-xl shadow-inner border-white border-2">        
     <form onSubmit={handleSubmit}>
       <div>
         <label className="block mb-2 text-white" >Username</label>
         <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" id="username"
            onChange={handleChange}/>
       </div>
       <div>
         <label className="block mb-2 text-white" >SRN</label>
         <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"  pattern="PES[a-zA-Z0-9]{10}" name="srn" id="srn"
            onChange={handleChange}/>
       </div>
       <div>
         <label className="block mb-2 text-white"  >E-Mail</label>
         <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" name="email" id="email" pattern="pes[0-9]{10}@pesu.pes.edu" placeholder="Please use your college email..."
            onChange={handleChange}/>
       </div>
       <div>
         <label className="block mb-2 text-white">Password</label>
         <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" id="password"
            onChange={handleChange}/>
       </div>
       <div>
         <label className="block mb-2 text-white" >Confirm Password</label>
         <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="cpassword" id="cpassword"
            onChange={handleChange}/>
       </div>
       <div>          
         <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded disabled:opacity-80" disabled={loading} type="submit">
            {loading ? "Loading..." : "Sign Up"}
         </button>
       </div>       
     </form>  
     <footer>
       <a className="text-black lg:text-white hover:text-pink-700 text-sm float-right" href="/log-in">Already have an account ?</a>
     </footer>   
   </div>
</div>
  )
}
