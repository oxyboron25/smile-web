import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#001612] text-white py-2 px-4 sm:px-6 md:px-16">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto ml-2 md:ml-16 mr-2 md:mr-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logo.svg"
            alt="SMILE Logo"
            className="h-9 sm:h-8 md:h-10 lg:h-12 w-auto"
          />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 font-medium">
          <div className="flex items-center text-[16px] space-x-1 hover:text-gray-300">
            <Link href="#mentors" scroll={true}>
              The Network
            </Link>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center text-[16px] space-x-1 cursor-pointer hover:text-gray-300">
            <span>Explore Mental Health</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="cursor-pointer text-[16px] hover:text-gray-300">
            <Link href="#founders" scroll={true}>
              About Us
            </Link>
          </span>
        </div>
        {/* Desktop Button */}
        <button className="hidden md:flex bg-white text-black rounded-xl px-5 py-2 text-[18px] font-light items-center gap-1 hover:bg-gray-200 transition">
          <Link href="/form" target="_blank" rel="noopener noreferrer">
            Start a Chapter
            <img
              src="/new/Group 40058.png"
              alt="arrow image"
              className="h-7 w-7 inline-block"
            />
          </Link>
        </button>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#001612] px-5 pb-5 mt-3 text-center space-y-6 sm:space-y-8">
          <Link
            href="#mentors"
            scroll={true}
            className="block text-base hover:text-gray-300"
          >
            The Network
          </Link>
          <span className="block text-base hover:text-gray-300">
            Explore Mental Health
          </span>
          <span className="block text-base hover:text-gray-300">About Us</span>
          <Link
            href="/form"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block bg-white text-black rounded-lg px-5 py-2 text-base font-light hover:bg-gray-200 transition"
          >
            Start a Chapter
          </Link>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#001612] text-white px-5 sm:px-6 md:px-16 pt-8 sm:pt-10 md:pt-20 pb-8 md:pb-0">
      <div className="mx-auto max-w-full md:max-w-screen-2xl ml-2 md:ml-16 mr-2 md:mr-11 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-6xl leading-snug sm:leading-relaxed md:leading-tight tracking-wide break-words">
          We’re building the world’s{" "}
          <span className="italic font-light">largest</span> student-run NGO to{" "}
          <span className="italic font-light">destigmatize</span> mental health,{" "}
          <span className="text-[#4EBCA5] italic">one SMILE</span> at a time
        </h1>

        <p className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg font-light text-gray-300 leading-relaxed">
          By uniting student-run startups, universities and industry
          professionals, SMILE supports impactful ventures and offers free
          resources to students who require mental health support.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start mt-6 sm:mt-8 md:mt-8">
          <Link
            href="/form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-xl px-5 py-2 sm:px-6 sm:py-2 sm:text-base md:px-6 md:py-3 md:text-[18px] font-light flex items-center justify-center gap-1 hover:bg-gray-200 transition"
          >
            Start a Chapter
            <img
              src="/new/Group 40058.png"
              alt="arrow image"
              className="h-6 w-6 md:h-7 md:w-7 inline-block"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Homepage = () => {
  return (
    <div className="bg-[#001612] min-h-full md:min-h-screen pt-[3vh] pb-0 md:pt-[2vh] md:pb-0">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;


