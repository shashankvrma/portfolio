import React from 'react'
import SendButton from './elements/SendButton';

const Popupbox = () => {
  return (
    <div className='w-full h-full bg-white flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/pbmqewpb" className='flex flex-col items-center max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-blue-950'>Contact</p>
                <p className='text-black py-4'>Submit the form below or shoot me an email - shashankvrma@gmail.com</p>
            </div>
            
            <div class="input flex flex-col w-fit static">
            <label for="input" class="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
                   Name:
            </label>
            <input
                type="text"
                placeholder="Name"
                name="name"
                class="border-blue-500 input px-[15px] py-[11px] text-xs bg-white border-2 rounded-[5px] w-[500px] focus:outline-none placeholder:text-black/25"
            />
            </div>

            <div class="input flex flex-col w-fit static">
            <label for="input" class="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
                   Email:
            </label>
            <input
                type="text"
                placeholder="Email"
                name="email"
                class="border-blue-500 input px-[15px] py-[11px] text-xs bg-white border-2 rounded-[5px] w-[500px] focus:outline-none placeholder:text-black/25"
            />
            </div>

            <div class="input flex flex-col w-fit static">
            <label for="input" class="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit">
                   Message:
            </label>
            <textarea
                type="text"
                placeholder="Message"
                name="message"
                rows="10"
                class="border-blue-500 input px-[15px] py-[11px] text-xs bg-white border-2 rounded-[5px] w-[500px] focus:outline-none placeholder:text-black/25"
            />
            </div>

            <div className='flex flex-row items-center gap-x-4 p-4'>
                {/* <button className= 'hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button> */}
                <SendButton />
            </div>
        </form>
    </div>
  )
}

export default Popupbox;