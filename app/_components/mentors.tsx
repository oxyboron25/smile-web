import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Mentor {
  image: string;
  name: string;
  role: string;
  quote: string;
  quoteHighlight: string;
}

const mentors: Mentor[] = [
  {
    image: "/mentor.png",
    name: "MR. SHARAD AGGARWAL",
    role: "Global Head - Strategy, Partnerships & AI Solutions at Google Cloud",
    quote:
      "I believe real impact stems from aligning strategy with empathy. SMILE’s mission to nurture youth mental wellness and leadership resonates deeply with my values.",
    quoteHighlight: "aligning strategy with empathy",
  },
  {
    image: "/mentor2.png",
    name: "ADV. DR KRISS VENUGOPAL",
    role: "Clinical hypnotherapist, Legal Scholar and Voics Coach",
    quote:
      "As someone working at the intersection of law, therapy and education, I believe real change begins by empowering students with the right tools and support.",
    quoteHighlight: "law, therapy and education",
  },
  {
    image: "/mentor3.png",
    name: "Sh. MANISH K AGARWAL",
    role: "Special Commissioner- Delhi Police",
    quote:
      "In my 30 years as a Police Officer, I've seen how stress and mental health challenges impact performance, resillience and well being. ",
    quoteHighlight: "performance, resillience and well being",
  },
];

const MentorsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? mentors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#001612] text-white flex flex-col items-center px-4 py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-4xl mb-14">
        <h2 className="text-4xl md:text-6xl font-normal mb-4">
          Meet Our <span className="italic text-[#4EBCA5]">Mentors</span>
        </h2>
        <p className="text-base md:text-xl text-gray-300">
          Leading professionals back our network and share our vision to
          destigmatize mental health.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 px-4 md:px-8"
            >
              <div className="bg-[#132E31] rounded-xl flex flex-col md:flex-row items-center p-8 md:p-10 gap-8 shadow-xl">
                {/* Mentor Image */}
                <div className="flex-shrink-0 w-48 h-48 md:w-72 md:h-72 rounded-lg overflow-hidden bg-gray-300">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Mentor Info */}
                <div className="flex flex-col justify-between flex-1">
                  <h3 className="text-xl pt-10 md:text-4xl font-semibold mb-2">
                    {mentor.name}
                  </h3>
                  <p className="text-sm md:text-lg text-[#4EBCA5] font-semibold mb-4 uppercase">
                    {mentor.role}
                  </p>
                  <blockquote className="text-base md:text-lg pt-8 italic text-gray-300 leading-relaxed mb-6">
                    “
                    {mentor.quote.includes(mentor.quoteHighlight) ? (
                      <>
                        {mentor.quote.split(mentor.quoteHighlight)[0]}
                        <span className="italic text-[#4EBCA5]">
                          {mentor.quoteHighlight}
                        </span>
                        {mentor.quote.split(mentor.quoteHighlight)[1]}
                      </>
                    ) : (
                      mentor.quote
                    )}
                    ”
                  </blockquote>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between pb-10 mt-4">
                    <button className="flex items-center gap-2 bg-black text-white text-lg md:text-lg px-5 py-3 rounded-xl hover:opacity-80 transition">
                      Read More
                      <ArrowRight size={28} className="ml-1" />
                    </button>

                    <div className="flex gap-3">
                      <button
                        className="p-3 rounded-full bg-black hover:opacity-80 transition"
                        onClick={handlePrev}
                        aria-label="Previous mentor"
                      >
                        <ArrowLeft size={25} />
                      </button>
                      <button
                        className="p-3 rounded-full bg-black hover:opacity-80 transition"
                        onClick={handleNext}
                        aria-label="Next mentor"
                      >
                        <ArrowRight size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-8">
        {mentors.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Show mentor ${idx + 1}`}
            className={`w-3 h-3 rounded-full border-2 ${
              idx === current
                ? "bg-[#4EBCA5] border-[#4EBCA5]"
                : "bg-transparent border-gray-500"
            } transition`}
          />
        ))}
      </div>
    </section>
  );
};

export default MentorsSection;






