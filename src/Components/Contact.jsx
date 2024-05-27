import React from 'react';

function Contact() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700">
        Feel free to reach out to me using the following methods:
      </p>
      <ul className="list-none mt-4">
        <li>
          <a href="mailto:youremail@example.com" className="text-blue-500 hover:text-blue-700">
            Email: youremail@example.com
          </a>
        </li>
        <li className="mt-2">
          <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            LinkedIn: your-linkedin-profile
          </a>
        </li>
        {/* Add more contact methods as needed */}
      </ul>
      <p className="text-gray-700 mt-4">
        You can also send me a message using the form below:
      </p>
      {/* Add a contact form here if desired (optional) */}
    </section>
  );
}

export default Contact;