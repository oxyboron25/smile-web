import React from "react";

const GlobalNetworks: React.FC = () => {
  return (
    <section className="relative w-full bg-[#001612] px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        {/* Left Heading */}
        <div className="mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-white leading-tight">
            Building <br />
            <span className="italic text-4xl text-[#98F3D9] font-light">
              Global Networks
            </span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="text-white text-lg max-w-md">
          A symbiotic network of{" "}
          <span className="text-[#98F3D9]">
            students, founders, and professional mentors
          </span>{" "}
          driving cultural change in mental health support
        </div>
      </div>

      {/* Map Section */}
      <div className="relative mt-12 w-full flex justify-center">
        <img
          src="/new/map.png" // place map image inside /public/new/
          alt="World Map"
          className="w-full max-w-5xl min-w-[300px] min-h-[200px] aspect-[16/9] object-contain"
        />
      </div>

      {/* Legend Section */}
      <div className="mt-8 flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Our Global Presence
        </h3>
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-teal-500"></span>
            <span className="text-white text-xl">Present</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-cyan-400"></span>
            <span className="text-white text-xl">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworks;


