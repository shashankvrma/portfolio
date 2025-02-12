import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Java 17",
    issuer: "Linkedin",
    date: "April 10, 2024",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
    link: "https://www.linkedin.com/learning/certificates/ada6f5df7dbe982f5f276a5211ea8cdf8806004e4856bba801712e8cbe2e5d62?u=74650474"
  },
  {
    title: "Java Exception Handling",
    issuer: "Linkedin",
    date: "September 29, 2022",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
    link: "https://www.linkedin.com/learning/certificates/d5b205a80d0814893ad503307adcfaf6cba768b562f90339594d7f31ff7d91e3?u=74650474"
  },
  {
    title: "Java Lambdas and Stream",
    issuer: "Linkedin",
    date: "September 26, 2022",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
    link: "https://www.linkedin.com/learning/certificates/0de856f3ff6bfcc11d84236378f55b1e85a9f889be836f0b047d3104587a628b?u=74650474"
  },
];

const Certification = () => {
  return (
    <motion.div 
      name = "certificates"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pb-8 flex justify-center">
  <p className="text-bold text-4xl border-b-4 border-pink-600 text-gray-300">
    Certifications
  </p>
</div>
      <div className="flex flex-wrap gap-4 justify-center">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 w-64"
            whileHover={{ scale: 1.05 }}
          >
            <img src={cert.logo} alt={cert.issuer} className="w-16 h-16 object-contain mb-2" />
            <h3 className="text-lg font-semibold text-gray-900 text-center">{cert.title}</h3>
            <p className="text-sm text-gray-600 text-center">{cert.issuer} - {cert.date}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 text-blue-500 underline hover:text-blue-700"
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
