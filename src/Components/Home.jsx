import React from "react";
import GlassCard from "./elements/Glasscard";
import Typewriter from "typewriter-effect";
import Profile from "./elements/Profile";
import HomeButton from "./elements/HomeButton";

export default function Home() {
  const HomeElements = [
    {
      name: "5+ years of Experience",
      imageUrl: "https://img.icons8.com/3d-fluency/94/under-computer.png",
      link: "https://www.linkedin.com/in/shashank-verma7/",
    },
    {
      name: "Java Full Stack Developer",
      imageUrl: "https://img.icons8.com/3d-fluency/94/java-coffee-cup-logo.png",
      link: "https://www.linkedin.com/in/shashank-verma7/",
    },
    {
      name: "640+ LeetCode Problem Solved",
      imageUrl:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png",
      link: "https://leetcode.com/shashankvrma/",
    },
    {
      name: "Completed Masters in CS",
      imageUrl: "https://img.icons8.com/emoji/48/man-student.png",
      link: "https://leetcode.com/shashankvrma/",
    },
  ];

  return (
    // bg-gradient-to-br from-slate-300 via-blue-400 to-blue-950
    <div
      name="home"
      className="min-h-screen w-full flex flex-col md:flex-row  text-black pt-16 md:pt-0"
    >
      {/* Left/Main Content */}
      <div className="w-full md:w-3/5 p-6 ml-0 md:p-10 md:ml-10 md:mt-24 flex flex-col justify-center sm: h-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4">
          <p className="text-orange-600 font-poppins text-lg sm:text-xl">
            Hi, I am
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-700 font-satoshi">
            Shashank Verma
          </h1>
        </div>

        {/* TypeWriter */}
        <div className="mt-4">
          <h1 className="text-2xl sm:text-4xl font-semibold flex flex-wrap">
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
                options={{ loop: true }}
              />
            </span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {HomeElements.map((element, index) => (
            <GlassCard
              key={index}
              name={element.name}
              image={element.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Right/Profile Section - only visible on md+ */}
      <div className="hidden md:flex w-full md:w-2/5 p-6 flex-col justify-center items-center">
        <div className="w-full flex justify-center">
          <Profile />
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mt-16">
          <HomeButton link="work" name="View My Work" />
          <HomeButton link="about" name="About Me" />
        </div>
      </div>
    </div>
  );
}
