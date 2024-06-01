import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
       {/* Container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, My Name is </p>
          <h1 className='text-4xl sm:text-7xl text-bold text-[#ccd6f6]'>Shashank Verma</h1>
          <h2 className='text-4xl sm:text-7xl text-bold text-[#8892b0]'>I/m a Full Stack Developer</h2>
          <p className='text-[#8892b0] max-w-[700px] py-4'>I specialize in Java, Spring Boot, React, MySQL ....</p>
       
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work 
                <span className='group-hover:rotate-90 duration-300'>
                   <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
        </div>
       </div>
    </div>
  )
}

export default Home