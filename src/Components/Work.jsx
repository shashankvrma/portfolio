import React from 'react'
import Project1 from '../assets/projects/project1.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-bold text-4xl inline border-b-4 border-pink-600 text-gray-300'>Projects</p>
          <p className='py-6'>Check out my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style = {{ backgroundImage:`url(${Project1})`}} 
          className='shadow-lg bg-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-wide tracking-wider'>
                  AlmaMingle
              </span>
              <div className='pt-8 text-center'>
                <a href="https://se-alma-mingle-18js.vercel.app" target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/kamaliniPonnuru/WallStreetDeves_SEProject/tree/main/source%20code/Phase%203" target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work