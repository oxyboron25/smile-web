import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // social icons
import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="bg-[#001612] text-white py-10 px-6">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Logo */}
          <div>
            <img src="/new/logo.png" alt="SMILE Logo" className="h-16 sm:h-20 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center">
            
            <a href="#" className="hover:text-gray-300">The Network</a>
            <a href="#" className="hover:text-gray-300">Explore Mental Health</a>
            <a href="#aboutus" className="hover:text-gray-300">About Us</a>
            <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
            <Link
              href="/start-your-own-chapter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Start a Chapter ↗
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl sm:text-3xl">
            <a
              href="https://www.instagram.com/we.spread.smiles/following/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/society-for-mental-health-inclusivity-literacy-empowerment"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

