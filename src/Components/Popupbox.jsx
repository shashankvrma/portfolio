import React from "react";
import SendButton from "./elements/SendButton";

const Popupbox = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <div className="py-8">
        <h1 class="text-3xl font-extrabold text-center text-gray-800 mb-5 border-b-2 border-blue-800">
          Contact Me
        </h1>
        <p class="text-xl text-center text-gray-700 mb-8 font-satoshi">
          Found a Bug? Or a New Project? Hit Me Up!
        </p>
        <form
          method="POST"
          action="https://getform.io/f/pbmqewpb"
          className="flex flex-col items-center max-w-[600px] w-full"
        >
          <div class="input flex flex-col w-fit static">
            <label
              for="input"
              class="text-neutral-100 font-semibold mb-2 relative top-2 ml-[7px] px-[3px] w-fit font-poppins"
            >
              Name:
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              class="bg-transparent border rounded-lg shadow border-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-96 appearance-none leading-normal"
            />
          </div>

          <div class="input flex flex-col w-fit static">
            <label
              for="input"
              class="text-neutral-100 font-semibold mb-2 relative top-2 ml-[7px] px-[3px] w-fit font-poppins"
            >
              Email:
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              class="bg-transparent border rounded-lg shadow border-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-96 appearance-none leading-normal"
            />
          </div>

          <div class="input flex flex-col w-fit static">
            <label
              for="input"
              class="text-neutral-100 font-semibold mb-2 relative top-2 ml-[7px] px-[3px] w-fit font-poppins"
            >
              Write Your Message:
            </label>
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              rows="4"
              class="bg-transparent border rounded-lg shadow border-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-96 appearance-none leading-normal"
            />
          </div>

          <div className="flex flex-row items-center gap-x-4 p-4">
            <SendButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popupbox;
