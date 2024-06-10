import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'
import Typewriter from 'typewriter-effect'
import bggif from '../assets/gif/bg-gif.gif' 

const Home = () => {
  return (
    // bg-[#0a192f]
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
       {/* Container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, I am </p>
          <h1 className='text-4xl sm:text-7xl text-bold text-[#ccd6f6]'>Shashank Verma</h1>

          {/* TypeWriter */}
          <div>
            <h1 className="md:flex md:flex-row text-4xl font-semibold max-md:text-3xl">
              <span className="text-white">I'm a</span>
              <span className="ml-2 text-[#009e66]">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Developer").pauseFor(1000).deleteAll()
                      .typeString("Programmer").pauseFor(1000).deleteAll()
                      .typeString("Learner").pauseFor(1000).deleteAll()
                      .start();
                  }}
                  options={{
                    loop: true,
                  }}
                />
              </span>
        </h1>
      </div>
          {/* TypeWriter End */}

          <p className='text-[#8892b0] max-w-[700px] py-4'>I specialize in Java, Spring Boot, React, MySQL ....</p>
       
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <Link to='work' smooth={true} duration={500}>
                      <HiArrowNarrowRight className='ml-3'/>
                </Link> 
                </span>
            </button>
        </div>
       </div>
    </div>
  )
}

export default Home