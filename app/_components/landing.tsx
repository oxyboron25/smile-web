import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#001612] text-white px-5 sm:px-6 md:px-16 pt-8 sm:pt-10 md:pt-20 pb-8 md:pb-0">
      <div className="mx-auto max-w-full md:max-w-screen-2xl ml-2 md:ml-16 mr-2 md:mr-11 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-6xl leading-snug sm:leading-relaxed md:leading-tight tracking-wide break-words">
          We’re building the world’s{" "}
          <span className="italic font-light">largest</span> student-run NGO to{" "}
          <span className="italic font-light">destigmatize</span> mental health,{" "}
          <span className="text-[#4EBCA5] italic">one SMILE</span> at a time
        </h1>

        <p className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg font-light text-gray-300 leading-relaxed">
          By uniting student-run startups, universities and industry
          professionals, SMILE supports impactful ventures and offers free
          resources to students who require mental health support.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start mt-6 sm:mt-8 md:mt-8 mb-40">
          <Link
            href="/start-your-own-chapter/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-xl px-5 py-2 sm:px-6 sm:py-2 sm:text-base md:px-6 md:py-3 md:text-[18px] font-light flex items-center justify-center gap-1 hover:bg-gray-200 transition"
          >
            Start a Chapter
            <img
              src="/new/Group 40058.png"
              alt="arrow image"
              className="h-6 w-6 md:h-7 md:w-7 inline-block"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

