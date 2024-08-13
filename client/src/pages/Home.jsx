import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className='flex flex-wrap'>

      <SideBar/>

      <div className='flex flex-col'>
        <div className='lg:hidden mt-5 ml-4 '>
          <p className={`text-6xl font-bold`}>
            <span className='text-dark-blue'>Brain</span> 
            <span className='text-gold'>Bros.</span>
          </p>
        </div>

        <div className="border-t border-cream border-2 m-2">
  
        </div>

        <div>Home</div>
      </div>


    </div>
  )
}
