import React from "react";

// import { FaInstagram, FaLinkedin } from "react-icons/fa";// replace with your logo 
import Logo from "@/public/Logo.svg";

import Link from "next/link";

const Footer = () => {
  return (
   <section id="footer">
     <footer className="bg-[#001612] text-white py-10 px-6 flex flex-col items-center space-y-6">
      {/* Logo */}
      <div>
        <img src="/new/logo.png" alt="SMILE Logo" className="h-20 w-auto" />
      </div>

      {/* Navigation Links */}

      <div className="flex space-x-8 text-[20px] font-medium">
        <a href="#" className="hover:text-gray-300">The Network</a>
        <a href="#" className="hover:text-gray-300">Explore Mental Health</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <Link
            href="/contact"
            className="cursor-pointer text-[20px] hover:text-gray-300"
          >
            Contact Us
          </Link>
        <Link href="/start-your-own-chapter" target="_blank" className="hover:text-gray-300">Start a Chapter ↗</Link>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6">
        <a href="#">
          <img src="/new/Group 40077 (1).png" alt="LinkedIn" className="h-10 w-116" />
        </a>
      </div>
    </footer>
   </section>
  );
};

export default Footer;
