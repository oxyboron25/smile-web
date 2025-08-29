import React from "react";

const GlobalNetworks: React.FC = () => {
  return (
    <section className="relative w-full bg-[#001612] px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
        {/* Left Heading */}
        <div className="mb-8 lg:mb-0">
          <h2 className="text-4xl font-light text-white leading-tight">
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
          src="/new/Group 40079.png"
          alt="World Map"
          className="w-full max-w-5xl min-w-[300px] min-h-[200px] aspect-[16/9] object-contain"
        />
      </div>
    </section>
  );
};

export default GlobalNetworks;



