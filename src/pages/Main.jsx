import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = () => {
  
    return (
      <div className='bg-[#F5E6E8]'>
        
    
        
  <div > 
    <Header />

    <div className="grid grid-cols-2 items-center gap-4 px-60 mt-[127px] mb-[127px]">
  <div className="text-left">
    <h6 className="text-xl font-bold text-blue-950 mb-4">Hello, I'm Mariam Dopidze,</h6> 
    <h1 className="text-5xl font-bold text-blue-950 ">Front-End Developer</h1>
  </div>
  <div className=" relative flex justify-center bg-[#D8A7D8] w-[370px] h-[370px] rounded-full">
    <img 
      src="/images/profile1.png" 
      alt="Profile" 
      className=" absolute w-[355px] h-[355px] rounded-full object-cover"
    />
   <div className="absolute w-[390px] h-[390px] rounded-full border-2 border-[#A583C2]"></div>

  </div>
</div>



  </div>

    
        <Footer />
      </div>
    );
    
}

export default Main
