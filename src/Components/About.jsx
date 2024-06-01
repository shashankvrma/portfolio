import React from 'react';

function About() {
  return (
     <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       <div className='flex flex-col w-full h-full justify-center items-center'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl text-bold inline border-b-2 border-pink-600'>About</p>
          </div>
          <div>

          </div>
        </div> 
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
              <p className='sm:text-right text-4xl text-bold'>Hi, This is Shashank Verma. Nice to meet you</p>
          </div>
          <div>
          <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
          </div>
        </div>
       </div>
     </div>
  );
}

export default About;