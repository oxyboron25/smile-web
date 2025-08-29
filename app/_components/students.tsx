import React from "react";

export default function StudentsMoveSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%]">
        
        {/* LEFT SIDE (text + ribbons in flexbox) */}
        <div className="bg-[#001612] flex flex-col justify-center items-start ml-16 py-16 px-6 md:pl-16">
          <div className="flex flex-row items-center">
            
            {/* MOVE THE WORLD text (vertical stack) */}
            <div className="flex flex-col text-left">
              <h2 className="text-4xl md:text-7xl font-light italic text-[#7ED5C9] leading-tight">
                STUDENTS
              </h2>
              <h2 className="text-4xl md:text-7xl mt-3 pt-6 text-white font-light leading-tight">MOVE</h2>
              <h2 className="text-4xl md:text-7xl mt-3 pt-6 text-white font-light leading-tight">THE</h2>
              <h2 className="text-4xl md:text-7xl mt-3 pt-6 text-white font-light leading-tight">WORLD</h2>
              <h2 className="text-4xl md:text-7xl mt-3 pt-6 italic text-[#7ED5C9] font-light leading-tight">
                FORWARD
              </h2>
            </div>

            {/* Ribbons (vertical stack) */}
            <div className="flex flex-col space-y-6 -ml-20">
              <img src="/new/Group 10 5.png" alt="Ribbon Icon" className="w-16 h-32" />
              <img src="/new/Group 10 5.png" alt="Ribbon Icon" className="w-16 h-32" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (unchanged) */}
        <div className="bg-[#132E31] text-[#D6E8E6] flex flex-col justify-center py-16 px-8 md:px-12 space-y-6 text-base md:text-lg leading-relaxed relative">
          <p className="mr-20">
            Born from our own struggles, SMILE is building a generation of leaders to end mental health stigma. 
            With 170,000 suicides annually in India—90% linked to mental health—the need is urgent. 
            We give students the platform, community, and courage to drive change.
          </p>
          <p className="mr-20 pt-10">
            We believe deep-rooted stigma can only be dismantled by empowering students. 
            In conservative societies, it is institutional—lasting change must start where independent thought begins: in colleges.
          </p>
          <p className="mr-20 pt-10">
            Our "3KS" model unites student leaders, mental health founders, and influential professionals in a symbiotic network. 
            Students gain mentorship and resources, founders receive guidance and feedback, 
            and professionals amplify impact to create lasting cultural change.
          </p>
        </div>
      </div>
    </section>
  );
}






