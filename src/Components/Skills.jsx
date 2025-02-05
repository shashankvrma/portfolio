// Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'Java',
    level: 'Expert',
    percentage: 90,
    icon: 'src/assets/java.png',
  },
  {
    name: 'React',
    level: 'Advanced',
    percentage: 85,
    icon: 'src/assets/react.png',
  },
  {
    name: 'Tailwind',
    level: 'Advanced',
    percentage: 80,
    icon: 'src/assets/tailwind.png',
  },
  {
    name: 'Github',
    level: 'Advanced',
    percentage: 80,
    icon: 'src/assets/github.png',
  },
  {
    name: 'HTML',
    level: 'Advanced',
    percentage: 80,
    icon: 'src/assets/html.png',
  },
  {
    name: 'CSS',
    level: 'Proficient',
    percentage: 70,
    icon: 'src/assets/css.png',
  },
  {
    name: 'MongoDB',
    level: 'Proficient',
    percentage: 70,
    icon: 'src/assets/mongo.png',
  },

];

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-full'>
      <section className="py-12" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='pb-8 mt-16'>
          <p className='text-bold text-4xl inline border-b-4 border-pink-600 text-gray-300'>Skills</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-orange-200 shadow-md rounded-lg p-4 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.level}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
                <motion.div
                  className="bg-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default Skills;
