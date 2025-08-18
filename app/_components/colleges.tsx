import React from "react";

const JoinSmile: React.FC = () => {
  // Card data
  const cards = [
    { title: "IIT BOMBAY", img: "/new/iitb.png", btn: "Coming Soon →"} ,
    { title: "DTU", img: "/new/dtu.png", btn: "Read More →" },
    { title: "BITS PILANI", img: "/new/bits.png", btn: "Read More→" },
    { title: "UCLA", img: "/new/The_University_of_California_UCLA 1.png", btn: "Coming Soon →" },
    { title: "Yale University", img: "/new/Yale.png", btn: "Coming Soon →" },
    { title: "Stanford University", img: "/new/stanford1.png", btn: "Coming Soon →" },
  ];

  // Color classes repeating [black → white → dark green]
  const colors = [
    "bg-black text-white",
    "bg-white text-gray-900 shadow-md border border-gray-200",
    
  ];

  return (
    <section className="max-w-8xl mx-auto px-6 py-16 bg-[#132E31] overflow-hidden">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        {/* Left Description */}
        <div className="md:max-w-md text-lg leading-relaxed ml-12  text-white">
          A symbiotic network of students, founders, and professional mentors
          driving cultural change in mental health support
        </div>

        {/* Right Heading */}
        <div className="mt-6 md:mt-0 text-right">
          <h2 className="text-4xl mr-10  text-white">Join SMILE</h2>
          <p className="text-5xl italic mr-8 text-white">Empower change</p>
        </div>
      </div>

      {/* Continuous Scroll Section */}
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-12 animate-scroll">
          {[...cards, ...cards].map((card, index) => {
            const colorClass = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`min-w-[250px] rounded-2xl p-6 flex flex-col justify-between h-64 ${colorClass}`}
              >
                <img
                  src={card.img}
                  alt={`${card.title} Logo`}
                  className="w-24 h-24 mx-auto mb-3 object-contain"
                />
                <h3 className="text-lg font-semibold text-center flex-grow flex items-center justify-center">
                  {card.title}
                </h3>
                {/* Button always grey background */}
                <button className="bg-gray-300 text-black rounded-full px-4 py-2 mt-4 text-sm">
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
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default JoinSmile;









