import React from "react";

const JoinSmileSection: React.FC = () => {
  return (
    <section className="bg-[#121212] text-gray-900 py-10 sm:py-12 lg:py-16 px-6 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6 sm:gap-8 justify-start 
                        ml-0 sm:ml-8 lg:ml-16"> {/* ✅ remove margin on small screens */}
          
          {/* Title */}
          <div className="text-center lg:text-left"> {/* ✅ center only on mobile */}
            <h2 className="text-2xl sm:text-3xl  lg:text-4xl text-white leading-tight">
              Join SMILE
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl italic mt-1 text-[#98F3D9]">
              Empower change
            </p>
          </div>

          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-xl p-4 gap-4 relative">
            {/* IMAGE */}
            <div className="w-full sm:w-1/2 aspect-[4/3] min-w-[160px] min-h-[120px] relative">
              <img
                src="/new/Adobe Express - file (1) 1 (2).png"
                alt="Activities"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center">
                <img src="/new/Group 40058.png" alt="arrow" className="w-8 h-8" />
              </button>
            </div>

            {/* TEXT */}
            <div className="flex-1 flex flex-col justify-center relative pr-0 sm:pr-10 mt-3 sm:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
                Browse our <i>activities</i>
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base text-center sm:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>
          </div>

          {/* Row: Mentor + Chapter */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            
            {/* Chapter */}
            <div className="flex-1 bg-black rounded-xl overflow-hidden aspect-[4/3] min-w-[150px] min-h-[120px] relative flex items-end justify-center">
              <img
                src="/new/Frame 8 (2).png"
                alt="Chapter"
                className="max-w-full max-h-[82%] object-contain"
              />
            </div>

            {/* Mentor */}
            <div className="flex-1 bg-black rounded-xl overflow-hidden aspect-[4/3] min-w-[150px] min-h-[120px] relative">
              <img
                src="/new/image 63 (3).png"
                alt="Mentor"
                className="w-full h-full object-cover"
              />
              {/* ✅ Always left aligned text */}
              <div className="absolute bottom-3 left-3 text-white text-sm sm:text-lg lg:text-xl text-left">
                Become a <i>Mentor</i>
              </div>
              <img
                src="/new/Group 40058.png"
                alt="Arrow"
                className="absolute bottom-3 right-3 w-8 h-8 sm:w-9 sm:h-9 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-6 sm:gap-8 justify-start mr-0 sm:mr-8 lg:mr-16">
          {/* Description */}
          <div className="text-center lg:text-right text-white text-sm sm:text-base lg:text-lg leading-relaxed mt-2">
            A symbiotic network of students, founders,
            <br className="hidden sm:block" />
            and professional mentors driving cultural
            <br className="hidden sm:block" />
            change in mental health support
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-4 relative flex flex-col gap-3">
            <div className="aspect-[16/9] min-w-[180px] min-h-[140px] relative">
              <img
                src="/new/Adobe Express - file 1 (1).png"
                alt="Join SMILE"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center">
                <img src="/new/Group 40056.png" alt="arrow" className="w-8 h-8" />
              </button>
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-center sm:text-left">
              Leading from the front: Join <i>SMILE</i>
            </h3>
            <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSmileSection;






