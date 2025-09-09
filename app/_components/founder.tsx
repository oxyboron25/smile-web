import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Founder {
  image: string;
  role: string;
  name: string;
  quote: string;
}

const founders: Founder[] = [
  {
    image: "/new/Group 40063 (1).png",
    role: "Co-Founder",
    name: "NAVIN VENKAT",
    quote:
      "“I only grasped the importance of mental health in my third year of college. I wanted to make sure that no-one went through the struggles I did.”",
  },
  {
    image: "/new/Group 40063 (1).png",
    role: "Co-Founder",
    name: "MANAV KANOI",
    quote:
      "““Building community is at the heart of everything. I believe in shared strength and supporting each other through challenges.”",
  },
  {
    image: "/new/Group 40063 (1).png",
    role: "Co-Founder",
    name: "RITIEN MOHAN",
    quote:
      "“Mental health awareness changed my life. I am passionate about spreading hope and knowledge across campuses.”",
  },
];

const FounderStories: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? founders.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === founders.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="founders"
      className="bg-[#121212] text-white px-6 md:px-20 py-16 overflow-hidden"
    >
      {/* Top Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl md:text-right font-light">
            Our Journey
          </h2>
          <p className="text-3xl md:text-5xl md:text-right italic text-[#4EBCA5]">
            Founder Stories
          </p>
        </div>
        <div className="order-2 md:order-1">
          <p className="text-lg leading-relaxed">
            A symbiotic network of{" "}
            <span className="text-[#4EBCA5]">students</span>,{" "}
            <span className="text-[#4EBCA5]">founders</span>, and{" "}
            <span className="text-[#4EBCA5]">professional mentors</span> driving
            cultural change in mental health support
          </p>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto mt-12 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {founders.map((founder, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-6 md:px-12">
              <div className="bg-white text-black rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                {/* Image */}
                <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="rounded-lg w-3/4 sm:w-2/3 md:w-full max-w-[250px] md:max-w-full h-auto bg-[#E1D7CE] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="uppercase text-xl font-semibold text-gray-500">
                    {founder.role}
                  </p>
                  <h3 className="text-4xl font-medium mt-1">{founder.name}</h3>
                  <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                    {founder.quote}
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6">
                    <button className="flex items-center justify-center gap-2 bg-black text-white text-lg px-5 py-3 rounded-xl hover:bg-gray-800 transition">
                      Read More
                      <img
                        src="/new/Group 40056.png"
                        alt="arrow"
                        className="w-7 h-7"
                      />
                    </button>

                    {/* Navigation */}
                    <div className="flex items-center justify-center md:ml-auto gap-3">
                      <button
                        className="p-2 rounded-full border bg-black text-white border-gray-300 hover:opacity-80 transition"
                        onClick={handlePrev}
                      >
                        <ArrowLeft size={22} />
                      </button>
                      <button
                        className="p-2 rounded-full border bg-black text-white border-gray-300 hover:opacity-80 transition"
                        onClick={handleNext}
                      >
                        <ArrowRight size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {founders.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 ${
                idx === current
                  ? "bg-[#4EBCA5] border-[#4EBCA5]"
                  : "bg-transparent border-gray-500"
              } transition`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderStories;



