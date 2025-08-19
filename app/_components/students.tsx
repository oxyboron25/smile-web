import React from "react";

export default function StudentsMoveSection() {
  return (
    <section className="bg-[#0F2D2C] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-4xl md:text-5xl font-light italic text-[#7ED5C9]">
            STUDENTS
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold">MOVE</h2>
          <h2 className="text-4xl md:text-5xl font-bold">THE</h2>
          <h2 className="text-4xl md:text-5xl font-bold">WORLD</h2>
          <h2 className="text-4xl md:text-5xl italic text-[#7ED5C9]">
            FORWARD
          </h2>

          {/* Ribbon Images */}
          <div className="flex flex-col space-y-6 mt-6">
            <img src="" alt="Ribbon Icon" className="w-10 h-16 mx-auto md:mx-0" />
            <img src="" alt="Ribbon Icon" className="w-10 h-16 mx-auto md:mx-0" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Born from our own struggles, SMILE is building a generation of leaders to end mental health stigma. 
            With 170,000 suicides annually in India—90% linked to mental health—the need is urgent. We give students the platform, 
            community, and courage to drive change.
          </p>
          <p>
            We believe deep-rooted stigma can only be dismantled by empowering students. In conservative societies, it is institutional—
            lasting change must start where independent thought begins: in colleges.
          </p>
          <p>
            Our “3KS” model unites student leaders, mental health founders, and influential professionals in a symbiotic network. 
            Students gain mentorship and resources, founders receive guidance and feedback, and professionals amplify impact to 
            create lasting cultural change.
          </p>
        </div>
      </div>
    </section>
  );
}
