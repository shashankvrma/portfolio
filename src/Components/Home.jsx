import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import Profile from "./elements/Profile";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full flex bg-[#0a192f]">
      <div className="w-3/5 p-6 mx-auto flex flex-col justify-center h-full px-1 md:px-28 mt-18 sm:mt-10">
        <div className="flex flex-row items-center gap-x-4">
          <p className="text-pink-600">Hi, I am</p>
          <h1 className="text-4xl sm:text-6xl text-bold text-[#ccd6f6]">
            Shashank Verma
          </h1>
        </div>
        {/* TypeWriter Starts */}
        <div>
          <h1 className="md:flex md:flex-row text-4xl font-semibold max-md:text-2xl">
            <span className="text-white">I'm a</span>
            <span className="ml-2 text-[#009e66]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Programmer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Learner")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                }}
              />
            </span>
          </h1>
        </div>
        {/* TypeWriter Ends */}

        <p className="text-[#8892b0] max-w-[700px] py-4 md:text-2xl">
          I am a skilled software engineer with a strong background in Java,
          Spring Boot, ReactJS, and cloud technologies like AWS. I have
          experience enhancing security, improving logging and monitoring, and
          leading projects, and I am currently pursuing a Master's in Computer
          Science at the University of North Texas.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* bg-green-500 */}
      <div className="w-2/5 p-4 mx-auto px-8 flex-col justify-center h-full hidden md:flex">
        <div className="mx-auto px-8 m-6 justify-center items-center">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Home;
