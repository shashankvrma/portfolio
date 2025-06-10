import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import Profile from "./elements/Profile";
import HomeCard from "./elements/HomeCard";

const Home = () => {
  const HomeElements = [
    {
       name: "5+ years of Experience",
       imageUrl: "",
       link: "https://www.linkedin.com/in/shashank-verma7/"
    },
    {
       name: "Java Full Stack Developer",
       imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Java_logo_and_wordmark.svg/1200px-Java_logo_and_wordmark.svg.png",
       link: "https://www.linkedin.com/in/shashank-verma7/"
    },
    {
       name: "615+ LeetCode Problem Solved",
       imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LeetCode_logo_black.png/800px-LeetCode_logo_black.png",
       link: "https://leetcode.com/shashankvrma/"
    },
    {
       name: "Completed Masters in CS",
       imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LeetCode_logo_black.png/800px-LeetCode_logo_black.png",
       link: "https://leetcode.com/shashankvrma/"
    },
    
]
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

<div className="flex flex-wrap gap-4 mt-6">
        { HomeElements.map((element, index) => (
          <HomeCard
            key={index}
            name={element.name}
            imageUrl={element.imageUrl}
            link={element.link}
          />
        ))}
</div>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="mt-12 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
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
