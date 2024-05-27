import React from 'react';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Proficient' },
    { name: 'React', level: 'Expert' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    // Add more skills as needed
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <ul className="list-disc space-y-2">
        {skills.map((skill) => (
          <li key={skill.name}>
            <span className="font-bold">{skill.name}:</span> {skill.level}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;