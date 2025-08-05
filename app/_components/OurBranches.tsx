"use client";
import { useRef } from "react";
import Link from "next/link";

export default function OurBranches() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const branches = [
    {
      name: "BITS Pilani Chapter",
      status: "active",
      logo: "/logos/g236.png",
      link: "/gallery#bits-pilani",
      color: "green",
    },
    {
      name: "DTU Chapter",
      status: "active",
      logo: "/logos/Danmarks_Tekniske_Universitet_(logo).svg-2 1.png",
      link: "/gallery#dtu",
      color: "white",
    },
    {
      name: "UCLA Chapter",
      status: "coming-soon",
      logo: "/logos/The_University_of_California_UCLA 1.png",
      link: "#",
      color: "default",
    },
    {
      name: "STANFORD Chapter",
      status: "coming-soon",
      logo: "/logos/image 21.png",
      link: "#",
      color: "green",
    },
    {
      name: "YALE Chapter",
      status: "coming-soon",
      logo: "/logos/YALE.png",
      link: "#",
      color: "white",
    },
    {
      name: "COLUMBIA Chapter",
      status: "coming-soon",
      logo: "/logos/Columbia_University_Shield_Blue-White 1.png",
      link: "#",
      color: "default",
    },
    {
      name: "BERKLEY Chapter",
      status: "coming-soon",
      logo: "/logos/image 20.png",
      link: "#",
      color: "green",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - width : scrollLeft + width,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: "url('/Background-group-people.png')",
        backgroundSize: "100% 300%",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-white text-4xl font-bold text-left px-12 md:px-20 mb-12">
        Our Branches
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
      >
        <img src="/logos/Group 40023.png" alt="Scroll left" className="w-4 h-4" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
      >
        <img src="/logos/arrow right.png" alt="Scroll right" className="w-4 h-4" />
      </button>

      {/* Cards Section */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-12 scroll-smooth no-scrollbar"
      >
        {branches.map((branch, index) => {
          const cardBase =
            "w-72 p-6 text-center rounded-2xl shadow-md flex-shrink-0 flex flex-col items-center";
          const isGreen = branch.color === "green";
          const isWhite = branch.color === "white";
          const isComingSoon = branch.status === "coming-soon";

          const cardClasses = isGreen
            ? `${cardBase} bg-[#16817A] text-white`
            : isWhite
            ? `${cardBase} bg-white text-black`
            : `${cardBase} bg-[#1a1a1a] text-white`;

          return isComingSoon ? (
            <div key={index} className={cardClasses}>
              <img
                src={branch.logo}
                alt={branch.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
              <p className="text-sm mt-2 px-4 py-1 rounded-full border border-gray-400">
                Coming Soon
              </p>
            </div>
          ) : (
            <Link href={branch.link} key={index}>
              <div className={`${cardClasses} hover:shadow-lg transition`}>
                <img
                  src={branch.logo}
                  alt={branch.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
                <button
                  className={`text-sm px-4 py-1 rounded-full border mt-2 ${
                    isWhite
                      ? "text-black border-black hover:bg-black hover:text-white"
                      : "text-white border-white hover:bg-white hover:text-black"
                  } transition`}
                >
                  View →
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

