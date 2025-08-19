import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001612] text-white py-10 px-6 flex flex-col items-center space-y-6">
      {/* Logo */}
      <div>
        <img src="/new/logo.png" alt="SMILE Logo" className="h-12" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-300">The Network</a>
        <a href="#" className="hover:text-gray-300">Explore Mental Health</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Start a Chapter</a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6">
        <a href="#">
          <img src="" alt="LinkedIn" className="h-8 w-8" />
        </a>
        <a href="#">
          <img src="" alt="Instagram" className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

