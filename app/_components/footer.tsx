import React from "react";

// import { FaInstagram, FaLinkedin } from "react-icons/fa";// replace with your logo 
import Logo from "@/public/Logo.svg";
import { Linkedin } from "lucide-react";
import { FaInstagram ,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001612] text-white py-10 px-6 flex flex-col items-center space-y-6">
      {/* Logo */}
      <div>
        <img src="/new/logo.png" alt="SMILE Logo" className="h-20 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-xl font-medium">
        <a href="#" className="hover:text-gray-300">The Network</a>
        <a href="#" className="hover:text-gray-300">Explore Mental Health</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Start a Chapter</a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6">
        <a href="#">
          <img src="/new/Group 40077 (1).png" alt="LinkedIn" className="h-12 w-116" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
