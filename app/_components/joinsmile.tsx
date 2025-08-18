import React from "react";

const JoinSmileSection: React.FC = () => {
  return (
    <section className="bg-[rgb(0,0,0)] text-gray-900 py-16 px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-8 justify-start">
          {/* Title */}
          <div>
            <h2 className="text-4xl text-white leading-tight">Join SMILE</h2>
            <p className="text-5xl italic mt-1 text-[#98F3D9] ">Empower change</p>
          </div>

          {/* Card 1: Browse Activities */}
          <div className="flex flex-row items-center bg-white rounded-xl p-4 gap-4 relative">
            <img
              src="/new/2people.png"
              alt="Activities"
              className="w-1/2 h-40 object-cover rounded-lg"
            />
            <div className="flex-1 flex flex-col justify-center relative pr-10">
              <h3 className="text-xl font-semibold">
                Browse our <i>activities</i>
              </h3>
              <p className="text-gray-700 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full font-bold cursor-pointer">
                →
              </div>
            </div>
          </div>

          {/* Row: Mentor + Chapter */}
          <div className="flex gap-6">
            <div className="flex-1 bg-black rounded-xl overflow-hidden h-48">
              <img
                src="/new/findyourchapter.png"
                alt="Chapter"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 bg-black rounded-xl overflow-hidden h-48">
              <img
                src="/new/becomeamentor.png"
                alt="Mentor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-8 justify-start">
          {/* Description */}
          <div className="text-right text-white text-lg leading-relaxed mt-2">
            A symbiotic network of students, founders,<br />
            and professional mentors driving cultural<br />
            change in mental health support
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-4 relative flex flex-col gap-3">
            <img
              src="/new/group.png"
              alt="Join SMILE"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold">
              Leading from the front: Join <i>SMILE</i>
            </h3>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full font-bold cursor-pointer">
              →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSmileSection;
