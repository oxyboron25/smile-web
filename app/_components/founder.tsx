import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FounderStories: React.FC = () => {
  return (
    <section className="bg-[#121212] text-white px-6 md:px-20 py-16">
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
          <h2 className="text-3xl md:text-4xl font-light">Our Journey</h2>
          <p className="text-3xl md:text-5xl italic text-[#4EBCA5]">
            Founder Stories
          </p>
        </div>
      </div>

      {/* Founder Card */}
      <div className="mt-12 ml-12 mr-10 bg-white text-black rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src="/new/Group 40063 (1).png" // replace with actual image path
            alt="Founder"
            className="rounded-lg w-full bg-[#7D7D7D] object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="uppercase text-xl font-semibold text-gray-500">
            Co-Founder
          </p>
          <h3 className="text-4xl font-medium mt-1">NAVIN VENKAT</h3>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            “I only grasped the <span className="italic">importance</span> of
            mental health in my third year of college. I wanted to make sure
            that <span className="italic">no-one</span> went through the
            struggles I did.”
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="flex items-center gap-2 bg-black text-white mt-20 text-xl px-4 py-2 rounded-xl hover:bg-gray-800 transition">
              Read More
              <img
                src="/new/Group 40056.png" // <-- replace with your arrow image path
                alt="arrow"
                className="w-8 h-8"
              />
            </button>
            <div className="flex items-center mt-20 gap-2 ml-auto">
              <button className="p-2 rounded-full border bg-black text-white border-gray-300 hover:bg-gray-200 transition">
                <ArrowLeft size={25} />
              </button>
              <button className="p-2 rounded-full border bg-black text-white border-gray-300 hover:bg-gray-200 transition">
                <ArrowRight size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStories;
