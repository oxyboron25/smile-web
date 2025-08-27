import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#132E31] text-white px-6 md:px-20 py-16">
      {/* Stats Row */}
      

      {/* Text Content */}
      <div className="space-y-8 max-w-8xl ml-16 mr-10 tracking-wide mx-auto text-3xl leading-relaxed">
        <p className="mt-16">
          The <span className="italic">stigma</span> around mental health is an{" "}
          <span className="italic">entrenched institutional problem</span>, especially in
          conservative societies where silence is seen as strength.
        </p>
        <p className="pt-20 pb-28">
          We started SMILE after facing our <span className="italic">own struggles</span>, to
          build a <span className="italic">student-led institution</span> that empower young leaders
          in college to champion mental health and <span className="italic">break</span> the stigma
          where it begins.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
