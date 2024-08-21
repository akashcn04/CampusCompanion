import React from 'react'
import { TbLetterBSmall } from "react-icons/tb";

export default function LogIn() {
  return (
    <div class='flex flex-col h-screen gap-8 bg-[url("/images/bg-image2.jpg")] bg-cover bg-center'>
     <span className='text-white text-6xl font-bold m-auto mb-0 '>BB.</span>

      <div class="w-full max-w-md m-auto bg-transparent rounded p-5 mt-0 drop-shadow-xl shadow-inner border-white border-2">        
      <form>
        <div>
          <label class="block mb-2 text-white" for="username">SRN</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username"/>
        </div>
        <div>
          <label class="block mb-2 text-white" for="password">Password</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password"/>
        </div>
        <div>          
          <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"/>
        </div>       
      </form>  
      <footer>
        <a class="text-white hover:text-pink-700 text-sm float-right" href="/sign-up">Create Account</a>
      </footer>   
    </div>
</div>
  )
}
