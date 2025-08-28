import React from "react";

export default function SmileMethodology() {
  return (
    <section className="bg-[#132E31] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Subheading side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
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
            <p className="text-[27] md:text-xl leading-relaxed">
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
          <div>
            <div className="bg-[#C1E3DF] rounded-lg overflow-hidden shadow-md relative">
              <img
                src="/pic1.png"
                alt="Professional Mentors"
                className="w-full h-56 object-cover"
              />
              <img
                src="/new/Group 40058.png"  // <-- your arrow image path here
                alt="arrow"
                className="absolute bottom-3 right-3 w-7 h-7"
              />
            </div>
            <div className="mt-4">
              <p className="text-[21] max-w-2xl">
                <span className="font-semibold text-[#7ED5C9]">
                  Professional mentors
                </span>{" "}
                amplify impact, open doors to wider networks, and help drive lasting cultural change.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div className="bg-[#E6F2F0] rounded-lg overflow-hidden shadow-md relative">
              <img
                src="/pic2.png"
                alt="Founders"
                className="w-full h-56 object-cover"
              />
              <img
                src="/new/Group 40058.png"  // <-- arrow image
                alt="arrow"
                className="absolute bottom-3 right-3 w-7 h-7"
              />
            </div>
            <div className="mt-4">
              <p className="text-[21] max-w-2xl">
                <span className="font-semibold text-[#7ED5C9]">Founders</span>{" "}
                gain mentorship, valuable customer feedback, and connections to refine and scale their solutions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div className="bg-[#D9EFEA] rounded-lg overflow-hidden shadow-md relative">
              <img
                src="/pic3.png"
                alt="Students"
                className="w-full h-56 object-cover"
              />
              <img
                src="/new/Group 40058.png"  // <-- arrow image
                alt="arrow"
                className="absolute bottom-3 right-3 w-7 h-7"
              />
            </div>
            <div className="mt-4">
              <p className="text-[21] max-w-2xl">
                <span className="font-semibold text-[#7ED5C9]">Students</span>{" "}
                gain affordable resources, and the support they need to lead change in their communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
