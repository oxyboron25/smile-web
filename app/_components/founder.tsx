import React from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const FounderStories: React.FC = () => {
  return (
    <section className="bg-[#111111] text-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <p className="text-lg leading-relaxed">
            A symbiotic network of{" "}
            <span className="text-[#4EBCA5]">students</span>,{" "}
            <span className="text-[#4EBCA5]">founders</span>, and{" "}
            <span className="text-[#4EBCA5]">professional mentors</span> driving
            cultural change in mental health support
          </p>
        </div>

        {/* Right Heading */}
        <div className="text-right">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Journey</h2>
          <p className="text-3xl md:text-4xl italic text-[#4EBCA5]">
            Founder Stories
          </p>
        </div>
      </div>

      {/* Founder Card */}
      <div className="mt-12 bg-white text-black rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src="/navin.png" // replace with actual image path
            alt="Founder"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="uppercase text-xs font-semibold text-gray-500">
            Co-Founder
          </p>
          <h3 className="text-2xl font-semibold mt-1">Navin Venkat</h3>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            “I only grasped the <span className="italic">importance</span> of
            mental health in my third year of college. I wanted to make sure
            that <span className="italic">no-one</span> went through the
            struggles I did.”
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
              Read More <ExternalLink size={14} />
            </button>
            <div className="flex items-center gap-2 ml-auto">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition">
                <ArrowLeft size={16} />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStories;