import React from "react";

export default function StudentsMoveSection() {
  return (
    <section id="aboutus" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%]">
        {/* LEFT SIDE (text + ribbons) */}
        <div className="bg-[#001612] flex flex-col justify-center items-start py-10 px-6 md:pl-16 lg:ml-16 md:py-16">
          <div className="flex flex-row items-start md:items-center ml-24 md:ml-0">
            {/* MOVE THE WORLD text */}
            <div className="flex flex-col text-left">
              <h2 className="text-3xl md:text-7xl  font-light italic text-[#7ED5C9] leading-tight">
                STUDENTS
              </h2>
              <h2 className="text-3xl md:text-7xl mt-2 md:mt-3 md:pt-6 text-white font-light leading-tight">
                MOVE
              </h2>
              <h2 className="text-3xl md:text-7xl mt-2 md:mt-3 md:pt-6 text-white font-light leading-tight">
                THE
              </h2>
              <h2 className="text-3xl md:text-7xl mt-2 md:mt-3 md:pt-6 text-white font-light leading-tight">
                WORLD
              </h2>
              <h2 className="text-3xl md:text-7xl mt-2 md:mt-3 md:pt-6 italic text-[#7ED5C9] font-light leading-tight">
                FORWARD
              </h2>
            </div>

            {/* Ribbons */}
            <div className="flex flex-col space-y-4 md:space-y-6 lg:mt-3 mt-9 -ml-8 md:-ml-20">
              <img
                src="/new/Group 10 5.png"
                alt="Ribbon Icon"
                className="w-10 h-16 md:w-16 md:h-36"
              />
              <img
                src="/new/Group 10 5.png"
                alt="Ribbon Icon"
                className="w-10 h-16 md:w-16 md:h-36"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#132E31] text-[#D6E8E6] text-center md:text-left flex flex-col justify-center py-10 px-6 md:px-12 space-y-6 text-sm md:text-lg leading-relaxed relative">
          <p className="md:mr-20">
            Born from our own struggles, SMILE is building a generation of
            leaders to end mental health stigma. With 170,000 suicides annually
            in India—90% linked to mental health—the need is urgent. We give
            students the platform, community, and courage to drive change.
          </p>
          <p className="pt-6 md:pt-10 md:mr-20">
            We believe deep-rooted stigma can only be dismantled by empowering
            students. In conservative societies, it is institutional—lasting
            change must start where independent thought begins: in colleges.
          </p>
          <p className="pt-6 md:pt-10 md:mr-20">
            Our "3KS" model unites student leaders, mental health founders, and
            influential professionals in a symbiotic network. Students gain
            mentorship and resources, founders receive guidance and feedback,
            and professionals amplify impact to create lasting cultural change.
          </p>
        </div>
      </div>
    </section>
  );
}









