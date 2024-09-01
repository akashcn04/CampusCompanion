import React from 'react'

export default function SignUp() {
  return (
    <div class='flex flex-col h-screen gap-8 bg-[url("/images/bg-image2.jpg")] bg-cover bg-center'>
    <span className='text-white text-6xl font-bold m-auto mb-0 '>BB.</span>

     <div class="w-full max-w-lg m-auto bg-transparent rounded p-5 mt-0 drop-shadow-xl shadow-inner border-white border-2">        
     <form>
       <div>
         <label class="block mb-2 text-white" for="username">Username</label>
         <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username"/>
       </div>
       <div>
         <label class="block mb-2 text-white" for="password">SRN</label>
         <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password"/>
       </div>
       <div>
         <label class="block mb-2 text-white" for="password">E-Mail</label>
         <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password"/>
       </div>
       <div>
         <label class="block mb-2 text-white" for="password">Password</label>
         <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password"/>
       </div>
       <div>
         <label class="block mb-2 text-white" for="password">Confirm Password</label>
         <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password"/>
       </div>
       <div>          
         <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"/>
       </div>       
     </form>  
     <footer>
       <a class="text-black lg:text-white hover:text-pink-700 text-sm float-right" href="/log-in">Already have an account ?</a>
     </footer>   
   </div>
</div>
  )
}
