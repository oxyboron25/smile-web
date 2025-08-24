import React from "react";

const JoinSmileSection: React.FC = () => {
  return (
    <section className="bg-[rgb(0,0,0)] text-gray-900 py-10 sm:py-12 lg:py-16 px-6 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6 sm:gap-8 justify-start">
          {/* Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              Join SMILE
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl italic mt-1 text-[#98F3D9]">
              Empower change
            </p>
          </div>

          {/* Card 1: Browse Activities */}
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-xl p-4 gap-4 relative">
            <div className="w-full sm:w-1/2 aspect-[4/3] min-w-[160px] min-h-[120px]">
              <img
                src="/new/Adobe Express - file (1) 1 (2).png"
                alt="Activities"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center relative pr-10">
              <h3 className="text-lg sm:text-xl font-semibold">
                Browse our <i>activities</i>
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full font-bold cursor-pointer">
                →
              </div>
            </div>
          </div>

          {/* Row: Mentor + Chapter */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Chapter Card */}
            <div className="flex-1 bg-black rounded-xl overflow-hidden aspect-[4/3] min-w-[150px] min-h-[120px]">
              <img
                src="/new/Frame 8 (1).png"
                alt="Chapter"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mentor Card */}
            <div className="flex-1 bg-black rounded-xl overflow-hidden aspect-[4/3] min-w-[150px] min-h-[120px] relative">
              <img
                src="/new/image 63 (3).png"
                alt="Mentor"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white text-base sm:text-lg lg:text-xl">
                Become a <i>Mentor</i>
              </div>
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full font-bold cursor-pointer">
                ↗
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-6 sm:gap-8 justify-start">
          {/* Description */}
          <div className="text-center lg:text-right text-white text-sm sm:text-base lg:text-lg leading-relaxed mt-2">
            A symbiotic network of students, founders,<br className="hidden sm:block" />
            and professional mentors driving cultural<br className="hidden sm:block" />
            change in mental health support
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-4 relative flex flex-col gap-3">
            <div className="aspect-[16/9] min-w-[180px] min-h-[140px]">
              <img
                src="/new/Adobe Express - file 1 (1).png"
                alt="Join SMILE"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Leading from the front: Join <i>SMILE</i>
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
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


