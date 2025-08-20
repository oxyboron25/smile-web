import React from "react";

export default function StudentsMoveSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE (dark background with text) */}
        <div className="bg-[#001612] flex flex-col justify-center items-start py-16 px-6 md:pl-16 relative">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-light italic text-[#7ED5C9] leading-tight">
              STUDENTS
            </h2>
            <h2 className="text-4xl md:text-6xl mt-3 text-white font-light leading-tight">MOVE</h2>
            <h2 className="text-4xl md:text-6xl mt-3 text-white font-light leading-tight">THE</h2>
            <h2 className="text-4xl md:text-6xl mt-3 text-white font-light leading-tight">WORLD</h2>
            <h2 className="text-4xl md:text-6xl mt-3 italic text-[#7ED5C9] leading-tight ">
              FORWARD
            </h2>
          </div>

          {/* Ribbons now fit on the right side of the text */}
          <div className="absolute right-6 md:right-9 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
            <img src="/new/Group 10 5.png" alt="Ribbon Icon" className="w-16 h-32" />
            <img src="/new/Group 10 5.png" alt="Ribbon Icon" className="w-16 h-32" />
          </div>
        </div>

        {/* RIGHT SIDE (lighter background with paragraphs) */}
        <div className="bg-[#0F2D2C] text-[#D6E8E6] flex flex-col justify-center py-16 px-8 md:px-12 space-y-6 text-base md:text-lg leading-relaxed relative">
          {/* Adjust ribbons to appear closer to left text */}

          <p>
            Born from our own struggles, SMILE is building a generation of leaders to end mental health stigma. 
            With 170,000 suicides annually in India—90% linked to mental health—the need is urgent. 
            We give students the platform, community, and courage to drive change.
          </p>
          <p>
            We believe deep-rooted stigma can only be dismantled by empowering students. 
            In conservative societies, it is institutional—lasting change must start where independent thought begins: in colleges.
          </p>
          <p>
            Our "3KS" model unites student leaders, mental health founders, and influential professionals in a symbiotic network. 
            Students gain mentorship and resources, founders receive guidance and feedback, 
            and professionals amplify impact to create lasting cultural change.
          </p>
        </div>
      </div>
    </section>
  );
}

