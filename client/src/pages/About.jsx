import React from 'react'

export default function About() {
  return (
    <div>
    <section className='bg-red-500'>
    <div className='flex max-w-[1320px] mx-auto' >
        <div className='basis-[55%]'>
            <p>I AM ABOUT PAGE</p>
            <div className='flex gap-[30px] py-[30px]'>
                <button className='bg-blue-300 text-white rounded-[5px] p-[15px_25px]'>REGISTER</button>
                <button className='bg-blue-300 text-white rounded-[5px] p-[15px_25px]'>BOOK A DEMO</button>
            </div>
        </div>
        <div className='basis-[45%]'>
              <p>AKASH</p>
        </div>

    </div>
    </section>

    </div>
  )
}
