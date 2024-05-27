import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Your Name</h1>
      <nav>
        {/* Navigation links using Tailwind classes */}
      </nav>
    </header>
  );
}

export default Header;