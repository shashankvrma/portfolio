import React from 'react';

function Projects() {
  const projects = [
    { title: 'Project 1', description: '...', link: '#' },
    { title: 'Project 2', description: '...', link: '#' },
    // ... more projects
  ];

  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.title} className="shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700">{project.description}</p>
          <a href={project.link} className="text-blue-500 hover:text-blue-700">
            View Project
          </a>
        </div>
      ))}
      </section>
  )}

  export default Projects;