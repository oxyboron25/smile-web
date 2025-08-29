import React from "react";

export default function InsightsSection() {
  return (
    <section className="bg-[#132E31] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12">
          {/* Left: Heading */}
          <div>
            <h2 className="text-6xl font-light mb-2">Stay Updated</h2>
            <p className="text-5xl italic text-teal-400">Insights from SMILE</p>
          </div>

          {/* Right: Subheading */}
          <p className="max-w-xl text-gray-300 mt-6 md:mt-0 md:ml-6">
            A symbiotic network of{" "}
            <span className="text-teal-400">students</span>,{" "}
            <span className="text-teal-400">founders</span>, and{" "}
            <span className="text-teal-400">professional mentors</span> driving
            cultural change in mental health support
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#132E31] rounded-3xl p-6 flex flex-col text-center">
            <div className="w-full aspect-[4/3] flex items-center justify-center bg-[#122529] rounded-2xl mb-4">
              <img
                src="/new/image 44 (2).png"
                alt="Professional mentors"
                className="max-h-full object-contain"
              />
            </div>
            <p className="text-gray-300 flex-grow">
              <span className="text-teal-400 font-semibold">
                Professional mentors
              </span>{" "}
              amplify impact, open doors to wider networks, and help drive
              lasting cultural change.{" "}
              <span className="text-teal-400">Professional mentors</span> amplify
              impact, open doors to wider networks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#132E31] rounded-3xl p-6 flex flex-col text-center">
            <div className="w-full aspect-[4/3] flex items-center justify-center bg-[#122529] rounded-2xl mb-4">
              <img
                src="/Logo.svg"
                alt="Founders"
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
            <p className="text-gray-300 flex-grow">
              <span className="text-teal-400 font-semibold">Founders</span> gain{" "}
              <span className="text-teal-400">mentorship</span>, valuable customer
              feedback, and connections to refine and scale their solutions.{" "}
              <span className="text-teal-400">Professional mentors</span> amplify
              impact, open doors to wider networks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#132E31] rounded-3xl p-6 flex flex-col text-center">
            <div className="w-full aspect-[4/3] flex items-center justify-center bg-[#122529] rounded-2xl mb-4">
              <div className="flex flex-wrap justify-center items-center gap-4">
                <img
                  src="/new/Group 10 4 (1).png"
                  alt="Symbol 1"
                  className="w-14 h-20 object-contain"
                />
                <img
                  src="/new/Group 10 5.png"
                  alt="Symbol 2"
                  className="w-14 h-20 object-contain"
                />
                <img
                  src="/new/Group 10 4 (1).png"
                  alt="Symbol 3"
                  className="w-14 h-20 object-contain"
                />
                <img
                  src="/new/Group 10 5.png"
                  alt="Symbol 4"
                  className="w-14 h-20 object-contain"
                />
              </div>
            </div>

            <p className="text-gray-300 flex-grow">
              <span className="text-teal-400 font-semibold">Students</span> gain
              affordable <span className="text-teal-400">resources</span>, and the
              support they need to lead change in their communities.{" "}
              <span className="text-teal-400">Professional mentors</span> amplify
              impact, open doors to wider networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


