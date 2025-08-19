import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#0F2D2C] text-white px-6 md:px-20 py-16">
      {/* Stats Row */}
      <div className="bg-white text-black rounded-lg shadow-md grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 overflow-hidden mb-12">
        <div className="flex flex-col items-center py-6">
          <h3 className="text-xl font-bold">5K+</h3>
          <p className="text-sm text-gray-500">Active Members</p>
        </div>
        <div className="flex flex-col items-center py-6">
          <h3 className="text-xl font-bold">20+</h3>
          <p className="text-sm text-gray-500">Events Organized</p>
        </div>
        <div className="flex flex-col items-center py-6">
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-sm text-gray-500">Colleges Reached</p>
        </div>
        <div className="flex flex-col items-center py-6">
          <h3 className="text-xl font-bold">10k+</h3>
          <p className="text-sm text-gray-500">Volunteer Hours</p>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-8 max-w-4xl mx-auto text-lg leading-relaxed">
        <p>
          The <span className="italic">stigma</span> around mental health is an{" "}
          <span className="italic">entrenched institutional problem</span>, especially in
          conservative societies where silence is seen as strength.
        </p>
        <p>
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
