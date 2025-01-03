import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-lg">
      <div className="text-lg font-bold">Logo</div>
      <div className="space-x-4">
        <a href="/" className="hover:text-purple-600">Home</a>
        <a href="/about" className="hover:text-purple-600">About</a>
        <a href="/contact" className="hover:text-purple-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
