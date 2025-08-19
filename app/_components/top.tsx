import React from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-[#001612] text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="SMILE Logo" className="h-6" />
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>The Network</span>
          <ChevronDown size={16} />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>Explore Mental Health</span>
          <ChevronDown size={16} />
        </div>
        <span className="cursor-pointer">About Us</span>
      </div>

      {/* Button */}
      <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium">
        Start a Chapter ↗
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#001612] text-white flex flex-col items-start justify-center px-6 md:px-20 py-16 md:py-28">
      <h1 className="text-3xl md:text-5xl font-semibold leading-snug max-w-4xl">
        We’re building the world’s <span className="italic font-light">largest</span> student-run NGO to{" "}
        <span className="italic font-light">destigmatize</span> mental health,{" "}
        <span className="text-[#4EBCA5] italic">one SMILE</span> at a time
      </h1>
      <p className="mt-6 text-base md:text-lg max-w-3xl text-gray-300">
        By uniting student-run startups, universities and industry professionals, SMILE supports impactful ventures and
        offers free resources to students who require mental health support. It also fosters global collaboration
        between branches in developed and developing countries to advance mental health support where it’s needed most.
      </p>
      <button className="mt-8 bg-white text-black rounded-md px-6 py-3 text-base font-medium">
        Start a Chapter ↗
      </button>
    </section>
  );
};

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#001612]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
