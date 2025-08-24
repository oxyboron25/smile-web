import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function SmileMethodology() {
  return (
    <section className="bg-[#0F2D2C] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Subheading side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
          {/* Left: Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl text-[#7ED5C9] font-light italic">
              The 3KS Framework
            </h2>
            <h3 className="text-3xl md:text-5xl font-light">
              SMILE’s Methodology
            </h3>
          </div>

          {/* Right: Subheading */}
          <div>
            <p className="text-lg md:text-xl leading-relaxed">
              A symbiotic network of{" "}
              <span className="text-[#7ED5C9] ">students</span>,{" "}
              <span className="text-[#7ED5C9] ">founders</span>, and{" "}
              <span className="text-[#7ED5C9] ">professional mentors</span>{" "}
              driving cultural change in mental health support
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#C1E3DF] text-black rounded-lg overflow-hidden shadow-md">
            <img
              src="/pic1.png"
              alt="Professional Mentors"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 relative">
              <p className="text-sm">
                <span className="font-semibold text-[#0F2D2C]">
                  Professional mentors
                </span>{" "}
                amplify impact, open doors to wider networks, and help drive lasting cultural change.
              </p>
              <ArrowUpRight className="absolute bottom-6 right-6 w-6 h-6 text-black" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E6F2F0] text-black rounded-lg overflow-hidden shadow-md">
            <img
              src="/pic2.png"
              alt="Founders"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 relative">
              <p className="text-sm">
                <span className="font-semibold text-[#0F2D2C]">Founders</span>{" "}
                gain mentorship, valuable customer feedback, and connections to refine and scale their solutions.
              </p>
              <ArrowUpRight className="absolute bottom-6 right-6 w-6 h-6 text-black" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#D9EFEA] text-black rounded-lg overflow-hidden shadow-md">
            <img
              src="/pic3.png"
              alt="Students"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 relative">
              <p className="text-sm">
                <span className="font-semibold text-[#0F2D2C]">Students</span>{" "}
                gain affordable resources, and the support they need to lead change in their communities.
              </p>
              <ArrowUpRight className="absolute bottom-6 right-6 w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
