import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MentorsSection: React.FC = () => {
  return (
    <section className="bg-[#001612] text-white flex flex-col items-center px-4 py-16">
      {/* Heading */}
      <div className="text-center max-w-4xl mb-14">
        <h2 className="text-4xl md:text-6xl font-normal mb-4">
          Meet Our <span className="italic text-[#4EBCA5]">Mentors</span>
        </h2>
        <p className="text-base md:text-xl text-gray-300">
          Leading professionals back our network and share our vision to
          destigmatize mental health.
        </p>
      </div>

      {/* Mentor Card */}
      <div className="bg-[#132E31] rounded-xl w-full max-w-7xl flex flex-col md:flex-row items-center p-8 md:p-10 gap-8 shadow-xl">
        {/* Mentor Image */}
        <div className="flex-shrink-0 w-48 h-48 md:w-72 md:h-72 rounded-lg overflow-hidden bg-gray-300">
          <img
            src="/mentor.png" // replace with actual image path
            alt="Sharad Aggarwal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mentor Info */}
        <div className="flex flex-col justify-between flex-1">
          <h3 className="text-xl pt-10 md:text-4xl font-semibold mb-2">
            MR. SHARAD AGGARWAL
          </h3>
          <p className="text-sm md:text-lg text-[#4EBCA5] font-semibold mb-4 uppercase">
            Global Head - Strategy, Partnerships & AI Solutions at Google Cloud
          </p>
          <blockquote className="text-base md:text-lg pt-8 italic text-gray-300 leading-relaxed mb-6">
            “I believe real impact stems from{" "}
            <span className="italic text-[#4EBCA5]">
              aligning strategy with empathy
            </span>
            . SMILE’s mission to nurture youth mental wellness and leadership
            resonates deeply with my values.”
          </blockquote>

          {/* Bottom Row */}
          <div className="flex items-center justify-between pb-10 mt-4">
            <button className="flex items-center gap-2 bg-black text-white text-lg md:text-lg px-5 py-3 rounded-xl hover:opacity-80 transition">
              Read More
              {/* Replace this with your arrow image */}
              <img src="/new/Group 40056.png" alt="arrow" className="w-8 h-8" />
            </button>

            <div className="flex gap-3">
              <button className="p-3 rounded-full bg-black hover:opacity-80 transition">
                <ArrowLeft size={25} />
              </button>
              <button className="p-3 rounded-full bg-black hover:opacity-80 transition">
                <ArrowRight size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;

