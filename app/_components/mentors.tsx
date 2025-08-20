import React from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const MentorsSection: React.FC = () => {
  return (
    <section className="bg-[#001612] text-white flex flex-col items-center px-4 py-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">
          Meet Our <span className="italic text-[#4EBCA5]">Mentors</span>
        </h2>
        <p className="text-sm md:text-xl text-gray-300">
          Leading professionals back our network and share our vision to
          destigmatize mental health.
        </p>
      </div>

      {/* Mentor Card */}
      <div className="bg-[#0A2620] rounded-md w-full max-w-5xl flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 shadow-lg">
        {/* Mentor Image */}
        <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-lg overflow-hidden bg-gray-300">
          <img
            src="/mentor.png" // replace with actual image path
            alt="Sharad Aggarwal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mentor Info */}
        <div className="flex flex-col justify-between flex-1">
          <h3 className="text-lg md:text-3xl font-bold mb-1">
            MR. SHARAD AGGARWAL
          </h3>
          <p className="text-xs md:text-lg text-[#4EBCA5] font-semibold mb-3 uppercase">
            Global Head - Strategy, Partnerships & AI Solutions at Google Cloud
          </p>
          <blockquote className="text-sm md:text-base italic text-gray-300 leading-relaxed mb-4">
            “I believe real impact stems from{" "}
            <span className="italic text-[#4EBCA5]">
              aligning strategy with empathy
            </span>
            . SMILE’s mission to nurture youth mental wellness and leadership
            resonates deeply with my values.”
          </blockquote>

          {/* Bottom Row */}
          <div className="flex items-center justify-between mt-2">
            <button className="flex items-center gap-1 bg-black text-white text-xs md:text-lg px-4 py-2 rounded-full hover:opacity-80 transition">
              Read More <ExternalLink size={14} />
            </button>

            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-black hover:opacity-80 transition">
                <ArrowLeft size={16} />
              </button>
              <button className="p-2 rounded-full bg-black hover:opacity-80 transition">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;