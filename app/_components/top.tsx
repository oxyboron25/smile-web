import React from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#001612] text-white py-4 px-6 md:px-16">
      <div className="max-w-screen-2xl ml-16 mr-20 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logo.svg"
            alt="SMILE Logo"
            className="h-16 w-auto md:h-20" // 🔥 Bigger logo
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <div className="flex items-center text-[27] space-x-1 cursor-pointer hover:text-gray-300">
            <span>The Network</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center text-[27] space-x-1 cursor-pointer hover:text-gray-300">
            <span>Explore Mental Health</span>
            <ChevronDown size={16} />
          </div>
          <span className="cursor-pointer text-[27] hover:text-gray-300">
            About Us
          </span>
        </div>

        {/* Button */}
        <button className="bg-white text-black rounded-xl px-5 py-2 text-[35] font-light hover:bg-gray-200 transition flex items-center gap-1">
  Start a Chapter
  <img src="/new/Group 40058.png" alt="arrow" className="w-6 h-6" />
</button>

      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#001612] text-white px-6 md:px-16 py-20 md:py-32">
      <div className="max-w-screen-2xl ml-16 mr-10 mx-auto">
        <h1 className="text-3xl md:text-6xl leading-tight tracking-wider">
          We’re building the world’s{" "}
          <span className="italic font-light">largest</span> student-run NGO to{" "}
          <span className="italic font-light">destigmatize</span> mental health,{" "}
          <span className="text-[#4EBCA5] italic">one SMILE</span> at a time
        </h1>

        <p className="mt-12 text-base font-light md:text-lg text-gray-300  leading-relaxed">
          By uniting student-run startups, universities and industry
          professionals, SMILE supports impactful ventures and offers free
          resources to students who require mental health support.
        </p>

        <button className="mt-12 bg-white text-black rounded-xl px-6 py-3 text-[35] font-light flex items-center gap-1 hover:bg-gray-200 transition">
          Start a Chapter 
          <img src="/new/Group 40058.png" alt="arrow image" className="w-6 h-6" />
        </button>
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







