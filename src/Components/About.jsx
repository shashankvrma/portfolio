import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-transparent">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-bold inline border-b-2 border-pink-600 font-poppins text-slate-900">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-extrabold text-gray-200">
              Hi, This is Shashank Verma. Nice to meet you
            </p>
          </div>
          <div>
            <p className="leading-relaxed text-gray-700s">
              I am a skilled software engineer with experience at General
              Electrics Digital and Cognizant, where I enhanced security and
              user management, improved logging and monitoring, and reduced
              response times. I have a strong background in Java, Spring Boot,
              ReactJS, and cloud technologies like AWS. I hold a B.Tech in
              Computer Science from the Institute of Engineering and Rural
              Technology and am currently pursuing a Master's in Computer
              Science at the University of North Texas. I have led projects,
              received a 5-star rating from my boss, and solved over 615
              LeetCode questions. My personal projects include an alumni blog
              application with JWT authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
