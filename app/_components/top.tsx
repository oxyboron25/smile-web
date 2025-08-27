import React from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-[#001612] text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="SMILE Logo"
          className="h-16 w-auto md:h-20" // 🔥 Bigger logo
        />
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-10 text-sm font-medium">
        <div className="flex items-center text-lg space-x-1 cursor-pointer hover:text-gray-300">
          <span>The Network</span>
          <ChevronDown size={16} />
        </div>
        <div className="flex items-center text-lg space-x-1 cursor-pointer hover:text-gray-300">
          <span>Explore Mental Health</span>
          <ChevronDown size={16} />
        </div>
        <span className="cursor-pointer text-lg hover:text-gray-300">About Us</span>
      </div>

      {/* Button */}
      <button className="bg-white text-black rounded-full px-5 py-2 text-lg font-medium hover:bg-gray-200 transition">
        Start a Chapter ↗
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#001612] text-white px-6 md:px-16 py-20 md:py-32">
      <div>
        <h1 className="text-3xl md:text-6xl leading-tight tracking-wider">
          We’re building the world’s{" "}
          <span className="italic font-light">largest</span> student-run NGO to{" "}
          <span className="italic font-light">destigmatize</span> mental health,{" "}
          <span className="text-[#4EBCA5] italic">one SMILE</span> at a time
        </h1>

        <p className="mt-12 text-base font-light md:text-lg text-gray-300 max-w-3xl leading-relaxed">
          By uniting student-run startups, universities and industry professionals, SMILE supports impactful ventures
          and offers free resources to students who require mental health support.
        </p>

        <button className="mt-12 bg-white text-black rounded-md px-6 py-3 text-base font-medium hover:bg-gray-200 transition">
          Start a Chapter ↗
        </button>
      </div>
      <div className="bg-white text-black rounded-lg shadow-md mt-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 overflow-hidden mb-12">
        <div className="flex flex-col items-center py-6">
          <h3 className="text-xl font-bold">5K+</h3>
          <p className="text-sm text-gray-500">Active Members</p>
        </div>
        <div className="flex flex-col items-center py-6">
          <h3 className="text-xl font-bold">20+</h3>
          <p className="text-sm text-gray-500">Events Organized</p>
        </div>
        <div className="flex flex-col items-center py-6">
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-sm text-gray-500">Colleges Reached</p>
        </div>
        <div className="flex flex-col items-center py-6">
          <h3 className="text-xl font-bold">10k+</h3>
          <p className="text-sm text-gray-500">Volunteer Hours</p>
        </div>
      </div>
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


