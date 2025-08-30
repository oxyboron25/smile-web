import React from "react";

const JoinSmile: React.FC = () => {
  // Card data
  const cards = [
    { title: "IIT BOMBAY", img: "/new/image 69 (2).png", btn: "Coming Soon 🡥" },
    { title: "DTU", img: "/new/dtu.png", btn: "Read More 🡥" },
    { title: "BITS PILANI", img: "/new/image 70 (3).png", btn: "Read More 🡥" },
    { title: "UCLA", img: "/new/The_University_of_California_UCLA 1 (1).png", btn: "Coming Soon 🡥" },
    { title: "Yale University", img: "/new/YALE (1).png", btn: "Coming Soon 🡥" },
    { title: "Stanford University", img: "/new/image 21 (1).png", btn: "Coming Soon 🡥" },
  ];

  // Color classes repeating [black → white → dark green]
  const colors = [
    "bg-[#001612] text-white",          // black
    "bg-white text-gray-900 shadow-md border border-gray-200", // white
    "bg-[#121212] text-white",          // dark green
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14 lg:py-16 bg-[#132E31] overflow-hidden">
      {/* Top Row */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start mb-10 sm:mb-12">
        {/* Left Description */}
        <div className="md:max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-white md:ml-20 text-center md:text-left">
          A symbiotic network of students, founders, and professional mentors
          driving cultural change in mental health support
        </div>

        {/* Right Heading */}
        <div className="mb-6 md:mb-0 mx-auto md:mr-20 text-center md:text-right">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-light">
            Join SMILE
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl italic text-teal-400">
            Empower change
          </p>
        </div>
      </div>

      {/* Continuous Scroll Section */}
      <div className="relative w-full overflow-hidden">
        <div className="scroll-track flex flex-nowrap">
          {[...cards, ...cards].map((card, index) => {
            const colorClass = colors[index % colors.length];

            // Button background based on card type
            const btnBg =
              colorClass.includes("#001612") ? "#000000" : "#313131";

            return (
              <div
                key={index}
                className={`min-w-[180px] sm:min-w-[220px] lg:min-w-[250px] mx-3 rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-56 sm:h-64 ${colorClass}`}
              >
                <img
                  src={card.img}
                  alt={`${card.title} Logo`}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 object-contain"
                />
                <h3 className="text-base sm:text-lg font-semibold text-center flex-grow flex items-center justify-center">
                  {card.title}
                </h3>
                <button
                  style={{ backgroundColor: btnBg }}
                  className="text-white rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 mt-4 text-xs sm:text-sm"
                >
                  {card.btn}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .scroll-track {
          width: max-content;
          animation: scroll 15s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default JoinSmile;














