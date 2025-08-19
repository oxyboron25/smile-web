import React from "react";

const JoinSmile: React.FC = () => {
  // Card data
  const cards = [
    { title: "IIT BOMBAY", img: "/new/image 69 (2).png", btn: "Coming Soon →" },
    { title: "DTU", img: "/new/dtu.png", btn: "Read More →" },
    { title: "BITS PILANI", img: "/new/image 70 (3).png", btn: "Read More →" },
    { title: "UCLA", img: "/new/The_University_of_California_UCLA 1 (1).png", btn: "Coming Soon →" },
    { title: "Yale University", img: "/new/YALE (1).png", btn: "Coming Soon →" },
    { title: "Stanford University", img: "/new/image 21 (1).png", btn: "Coming Soon →" },
  ];

  // Color classes repeating [black → white]
  const colors = [
    "bg-black text-white",
    "bg-white text-gray-900 shadow-md border border-gray-200",
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14 lg:py-16 bg-[#132E31] overflow-hidden">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 sm:mb-12">
        {/* Left Description */}
        <div className="md:max-w-md text-sm sm:text-base lg:text-lg leading-relaxed md:ml-12 text-white text-center md:text-left">
          A symbiotic network of students, founders, and professional mentors
          driving cultural change in mental health support
        </div>

        {/* Right Heading */}
        <div className="mt-6 md:mt-0 text-center md:text-right">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mr-0 md:mr-10 text-white font-bold">
            Join SMILE
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl italic mr-0 md:mr-8 text-teal-400">
            Empower change
          </p>
        </div>
      </div>

      {/* Continuous Scroll Section */}
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-6 sm:space-x-8 lg:space-x-12 animate-scroll">
          {[...cards, ...cards].map((card, index) => {
            const colorClass = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`min-w-[180px] sm:min-w-[220px] lg:min-w-[250px] rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-56 sm:h-64 ${colorClass}`}
              >
                <img
                  src={card.img}
                  alt={`${card.title} Logo`}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 object-contain"
                />
                <h3 className="text-base sm:text-lg font-semibold text-center flex-grow flex items-center justify-center">
                  {card.title}
                </h3>
                {/* Button always grey background */}
                <button className="bg-gray-300 text-black rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mt-4 text-xs sm:text-sm">
                  {card.btn}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default JoinSmile;










