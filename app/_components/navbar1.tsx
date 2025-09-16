import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  // separate timers for each dropdown (so they don't cancel each other)
  const networkCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exploreCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Network handlers
  const openNetworkDropdown = () => {
    if (networkCloseTimeoutRef.current) {
      clearTimeout(networkCloseTimeoutRef.current);
      networkCloseTimeoutRef.current = null;
    }
    setNetworkOpen(true);
  };

  const closeNetworkDropdown = () => {
    if (networkCloseTimeoutRef.current) clearTimeout(networkCloseTimeoutRef.current);
    networkCloseTimeoutRef.current = setTimeout(() => {
      setNetworkOpen(false);
      networkCloseTimeoutRef.current = null;
    }, 200);
  };

  // Explore handlers
  const openExploreDropdown = () => {
    if (exploreCloseTimeoutRef.current) {
      clearTimeout(exploreCloseTimeoutRef.current);
      exploreCloseTimeoutRef.current = null;
    }
    setExploreOpen(true);
  };

  const closeExploreDropdown = () => {
    if (exploreCloseTimeoutRef.current) clearTimeout(exploreCloseTimeoutRef.current);
    exploreCloseTimeoutRef.current = setTimeout(() => {
      setExploreOpen(false);
      exploreCloseTimeoutRef.current = null;
    }, 200);
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (networkCloseTimeoutRef.current) clearTimeout(networkCloseTimeoutRef.current);
      if (exploreCloseTimeoutRef.current) clearTimeout(exploreCloseTimeoutRef.current);
    };
  }, []);

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
        <div className="hidden md:flex space-x-6 lg:space-x-10 font-medium relative">
          {/* Home */}
          <Link href="/" className="cursor-pointer text-[16px] hover:text-gray-300">
            Home
          </Link>

          {/* Network Dropdown */}
          <div
            className="relative"
            onMouseEnter={openNetworkDropdown}
            onMouseLeave={closeNetworkDropdown}
            onFocus={openNetworkDropdown}
            onBlur={closeNetworkDropdown}
            tabIndex={-1}
          >
            <div className="flex items-center text-[16px] space-x-1 cursor-pointer hover:text-gray-300">
              <span>The Network</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            {networkOpen && (
              <div className="absolute left-0 top-full mt-2 bg-[#001612] border border-gray-700 rounded-lg shadow-lg py-2 w-44">
                <Link href="/network#dtu" className="block px-4 py-2 hover:bg-gray-800">
                  INDIA
                </Link>
                <Link href="" className="block px-4 py-2 hover:bg-gray-800">
                  US
                </Link>
              </div>
            )}
          </div>

          {/* Explore Dropdown */}
          <div
            className="relative"
            onMouseEnter={openExploreDropdown}
            onMouseLeave={closeExploreDropdown}
            onFocus={openExploreDropdown}
            onBlur={closeExploreDropdown}
            tabIndex={-1}
          >
            <div className="flex items-center text-[16px] space-x-1 cursor-pointer hover:text-gray-300">
              <span>Explore Mental Health</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            {exploreOpen && (
              <div className="absolute left-0 top-full mt-2 bg-[#001612] border border-gray-700 rounded-lg shadow-lg py-2 w-52">
                <Link href="/explore/startups" className="block px-4 py-2 hover:bg-gray-800">
                  Startups
                </Link>
                <Link href="/explore/blogs" className="block px-4 py-2 hover:bg-gray-800">
                  Blogs
                </Link>
                <Link href="/explore/mentors" className="block px-4 py-2 hover:bg-gray-800">
                  Our Mentors
                </Link>
              </div>
            )}
          </div>

          {/* About Us */}
          <span className="cursor-pointer text-[16px] hover:text-gray-300">
            <Link href="#aboutus" scroll={true}>About Us</Link>
          </span>

          {/* Contact */}
          <Link href="/contact" className="cursor-pointer text-[16px] hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:flex bg-white text-black rounded-xl px-5 py-2 text-[18px] font-light items-center gap-1 hover:bg-gray-200 transition">
          <Link href="/start-your-own-chapter" target="_blank" rel="noopener noreferrer">
            Start a Chapter
            <img src="/new/Group 40058.png" alt="arrow image" className="h-7 w-7 inline-block" />
          </Link>
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#001612] px-5 pb-5 mt-3 text-center space-y-6 sm:space-y-8">
          {/* Home */}
          <Link href="/" className="block text-base hover:text-gray-300">Home</Link>

          {/* Network Dropdown */}
          <div>
            <span className="block text-base mb-2">The Network</span>
            <div className="space-y-2">
              <Link href="/network#dtu" className="block text-sm hover:text-gray-300">INDIA</Link>
              <Link href="" className="block text-sm hover:text-gray-300">US</Link>
            </div>
          </div>

          {/* Explore Dropdown */}
          <div>
            <span className="block text-base mb-2">Explore Mental Health</span>
            <div className="space-y-2">
              <Link href="/explore/startups" className="block text-sm hover:text-gray-300">Startups</Link>
              <Link href="/explore/blogs" className="block text-sm hover:text-gray-300">Blogs</Link>
              <Link href="/explore/mentors" className="block text-sm hover:text-gray-300">Our Mentors</Link>
            </div>
          </div>

          <Link href="#aboutus" scroll={true} className="block text-base hover:text-gray-300">About Us</Link>

          <Link href="/contact" className="block text-base hover:text-gray-300">Contact Us</Link>

          <Link
            href="/start-your-own-chapter/"
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

export default Navbar;


