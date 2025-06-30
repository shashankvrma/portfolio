import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM Coursera",
    date: "Febraury 15, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/d1febf91739bee953b0b79479133cf60",
  },
  {
    title: "Introduction to HTML, CSS, and JavaScript",
    issuer: "IBM Coursera",
    date: "Febraury 20, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/37959013f79570404a76c600454648c4",
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM Coursera",
    date: "March 1, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/ace532db2959c5117e5dfd75ead0021f",
  },
  {
    title: "JavaScript Programming Essentials",
    issuer: "IBM Coursera",
    date: "March 21, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/1f1bc916f2d02ae15adbc185cc4ab7ce",
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM Coursera",
    date: "April 13, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/03291d1ff65b56167274c65394fd277e",
  },
  {
    title: "Get Started with Cloud Native, DevOps, Agile, and NoSQL",
    issuer: "IBM Coursera",
    date: "May 29, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/befd93ac2da43c96d9cd4a78d744fbdb",
  },

  {
    title: "Java 17",
    issuer: "Linkedin",
    date: "April 10, 2024",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
    link: "https://www.linkedin.com/learning/certificates/ada6f5df7dbe982f5f276a5211ea8cdf8806004e4856bba801712e8cbe2e5d62?u=74650474",
  },
  {
    title: "Java Exception Handling",
    issuer: "Linkedin",
    date: "September 29, 2022",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
    link: "https://www.linkedin.com/learning/certificates/d5b205a80d0814893ad503307adcfaf6cba768b562f90339594d7f31ff7d91e3?u=74650474",
  },
  {
    title: "Java Lambdas and Stream",
    issuer: "Linkedin",
    date: "September 26, 2022",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
    link: "https://www.linkedin.com/learning/certificates/0de856f3ff6bfcc11d84236378f55b1e85a9f889be836f0b047d3104587a628b?u=74650474",
  },
];

const Certification = () => {
  return (
    <motion.div
      name="certificates"
      className="w-full md:h-screen text-gray-300 bg-transparent p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pb-8 flex justify-center">
        <p className="text-bold text-4xl border-b-4 border-pink-600 text-slate-900 font-poppins">
          Certifications
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300 w-64 text-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={cert.logo}
              alt={cert.issuer}
              className="w-16 h-16 object-contain mb-2"
            />
            <h3 className="text-lg font-semibold text-white text-center">
              {cert.title}
            </h3>
            <p className="text-sm text-white/80 text-center">
              {cert.issuer} &mdash; {cert.date}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sky-950 underline hover:text-blue-400 transition-colors"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certification;
