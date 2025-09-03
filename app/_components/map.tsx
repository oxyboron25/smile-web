import React from "react";

const GlobalNetworks: React.FC = () => {
  return (
    <section className="relative w-full bg-[#001612] px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
        {/* Left Heading */}
        <div className="mb-8 lg:mb-0 md:ml-2">
          <h2 className="text-4xl font-light text-white leading-tight">
            Building <br />
            <span className="italic text-4xl text-[#98F3D9] font-light">
              Global Networks
            </span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="text-white text-lg  max-w-md">
          A symbiotic network of{" "}
          <span className="text-[#98F3D9]">
            students, founders, and professional mentors
          </span>{" "}
          driving cultural change in mental health support
        </div>
      </div>

      {/* Map Section */}
      <div className="relative mt-8 w-full flex justify-center">
        <img
          src="/new/map.png"
          alt="World Map"
          className="w-full max-w-5xl min-w-[300px] min-h-[200px] aspect-[16/9] object-contain"
        />
      </div>
      <div>
        <p className="text-white text-center text-4xl mt-12">Our Global Presence</p>
        
      </div>
        <div className="flex gap-20 items-center text-2xl justify-center mt-10 text-white">
      {/* Present */}
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-full border-2 border-white bg-[#4EBCA5]/40"></span>
        <span>Present</span>
      </div>

      {/* Coming Soon */}
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-full border-2 border-white bg-cyan-400/40"></span>
        <span>Coming Soon</span>
      </div>
    </div>
    </section>
  );
};

export default GlobalNetworks;



