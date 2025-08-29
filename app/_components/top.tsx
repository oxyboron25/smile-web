import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#001612] text-white py-3 px-3 sm:px-4 md:px-16">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto ml-2 md:ml-16 mr-2 md:mr-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logo.svg"
            alt="SMILE Logo"
            className="h-8 sm:h-10 md:h-16 lg:h-20 w-auto"
          />
        </div>

        {/* Desktop Links (md+) */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 font-medium">
          <div className="flex items-center text-[16px] space-x-1 cursor-pointer hover:text-gray-300">
            <span>The Network</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center text-[16px] space-x-1 cursor-pointer hover:text-gray-300">
            <span>Explore Mental Health</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="cursor-pointer text-[16px] hover:text-gray-300">
            About Us
          </span>
        </div>

        {/* Desktop Button (md+) */}
        <button className="hidden md:flex bg-white text-black rounded-xl px-5 py-2 text-[18px] font-light  items-center gap-1 hover:bg-gray-200 transition">
          <Link href="/form" target="_blank">
            Start a Chapter ↗
          </Link>
        </button>

        {/* Mobile / Tablet Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#001612] px-3 pb-4">
          <div className="flex flex-col space-y-3 font-medium">
            <div className="flex items-center justify-between text-sm sm:text-base cursor-pointer hover:text-gray-300">
              <span>The Network</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center justify-between text-sm sm:text-base cursor-pointer hover:text-gray-300">
              <span>Explore Mental Health</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <span className="cursor-pointer text-sm sm:text-base hover:text-gray-300">
              About Us
            </span>
            <button className="mt-2 bg-white text-black rounded-lg px-3 py-2 text-sm sm:text-base font-light flex items-center gap-1 hover:bg-gray-200 transition">
              <Link href="/form" target="_blank">
                Start a Chapter ↗
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      className="
        bg-[#001612] text-white 
        px-4 sm:px-6 md:px-16 
        py-6 sm:py-6 md:py-28
      "
    >
      <div className="mx-auto max-w-full md:max-w-screen-2xl ml-2 md:ml-16 mr-2 md:mr-10">
        <h1 className="text-base sm:text-xl md:text-6xl leading-snug md:leading-tight tracking-wide break-words whitespace-normal">
          We’re building the world’s{" "}
          <span className="italic font-light">largest</span> student-run NGO to{" "}
          <span className="italic font-light">destigmatize</span> mental health,{" "}
          <span className="text-[#4EBCA5] italic">one SMILE</span> at a time
        </h1>

        <p className="mt-3 sm:mt-5 md:mt-12 text-xs sm:text-sm md:text-lg font-light text-gray-300 leading-relaxed break-words whitespace-normal">
          By uniting student-run startups, universities and industry
          professionals, SMILE supports impactful ventures and offers free
          resources to students who require mental health support.
        </p>

        <button className="mt-4 sm:mt-6 md:mt-12 bg-white text-black rounded-xl px-4 py-2 text-sm sm:px-5 sm:py-2 sm:text-base md:px-6 md:py-3 md:text-[18px] font-light flex items-center gap-1 hover:bg-gray-200 transition">
          <Link href="/form" target="_blank">
            Start a Chapter ↗
          </Link>
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





















