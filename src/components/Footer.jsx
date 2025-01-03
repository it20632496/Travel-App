import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-black text-white">
      <div className="flex justify-between">
        <p>&copy; 2024 Travel App</p>
        <div className="space-x-4">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
