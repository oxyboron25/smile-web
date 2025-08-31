import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#132E31] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
      {/* Text Content */}
      <div className="space-y-6 sm:space-y-8 max-w-8xl mx-auto lg:ml-16 lg:mr-12 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide">
        <p className="mt-10 sm:mt-12 md:mt-16">
          The <span className="italic">stigma</span> around mental health is an{" "}
          <span className="italic">entrenched institutional problem</span>, especially in
          conservative societies where silence is seen as strength.
        </p>
        <p className="pt-10 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-28">
          We started SMILE after facing our <span className="italic">own struggles</span>, to
          build a <span className="italic">student-led institution</span> that empowers young
          leaders in college to champion mental health and{" "}
          <span className="italic">break</span> the stigma where it begins.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;


