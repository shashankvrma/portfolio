import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Education = () => {
  // Animation variants for the section container
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for list items (education/work experience items)
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      name="education"
      className="py-12 w-full md:h-screen text-gray-300 bg-transparent"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mt-11 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 items-center text-center">
          <p className="text-bold text-center text-4xl inline border-b-4 border-pink-600 text-slate-900 font-poppins">
            Education & Work Experience
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Education Section */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-slate-800 font-satoshi">
                  {/* Education Icon */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C15.168 5.477 16.754 5 18.5 5S20.832 5.477 22 6.253v13C20.832 18.523 19.246 18 17.5 18s-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium font-satoshi text-slate-800">
                  Education
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {/* Education Item 1 */}
                <motion.div
                  className="mb-4 p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants} // Apply item variants
                >
                  <h3 className="text-md font-semibold text-gray-800">
                    University of North Texas
                  </h3>
                  <p className="text-sm text-gray-600">
                    Masters, Computer Science
                  </p>
                  <p className="text-sm text-gray-500">2023-2025</p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                    <li>GPA - 4.0</li>
                  </ul>
                </motion.div>

                {/* Education Item 2 - Add more as needed */}
                <motion.div
                  className="mb-4 p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants} // Apply item variants
                >
                  <h3 className="text-md font-semibold text-gray-800">
                    Institute of Engineering and Rural Technology
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bachelor, Computer Science
                  </p>
                  <p className="text-sm text-gray-500">2015-2019</p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                    <li>Passed with I-div Honors</li>
                  </ul>
                </motion.div>
              </dd>
            </div>

            {/* Work Experience Section */}
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-slate-800 font-satoshi">
                  {/* Work Icon */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium font-satoshi text-slate-800">
                  Work Experience
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {/* Work Experience Item 1 */}
                <motion.div
                  className="mb-4 p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants} // Apply item variants
                >
                  <h3 className="text-md font-semibold text-gray-800">
                    Ge Digital
                  </h3>
                  <p className="text-sm text-gray-600">
                    Java Full Stack Software Engineer
                  </p>
                  <p className="text-sm text-gray-500">2022-2023</p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                    <li>Java, React, Postgres, LDAP, Powershell, Docker</li>
                  </ul>
                </motion.div>

                {/* Work Experience Item 2 - Add more as needed */}
                <motion.div
                  className="mb-4 p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants} // Apply item variants
                >
                  <h3 className="text-md font-semibold text-gray-800">
                    Cognizant
                  </h3>
                  <p className="text-sm text-gray-600">
                    Java Full Stack Software Engineer
                  </p>
                  <p className="text-sm text-gray-500">2019-2022</p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                    <li>Java, Angular, Mongodb, Docker, AWS</li>
                  </ul>
                </motion.div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
