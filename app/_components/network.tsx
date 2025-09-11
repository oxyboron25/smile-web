import React from "react";

export default function SmileDTU() {
  return (
    <div className="w-full mx-auto px-6 py-16 bg-[#121212] text-[#f5f5f5]">
      {/* Section 1 - DTU */}
      <div id="dtu" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-5">
            Shaping a Supportive Campus
          </h1>
          <p className="text-lg text-[#d6d6d6]">
            With a vision to foster empathy, resilience and social impact, SMILE
            DTU is committed to breaking the stigma around mental health on
            campus. Through awareness campaigns, collaborations with NGOs, and
            global institutions, it provides DTU students with a platform to
            address real-world challenges while building a supportive community
            rooted in care and understanding.
          </p>
        </div>
        <div className="max-w-[480px] mx-auto">
          <img
            src="/new/dtu.jpg"
            alt="SMILE DTU main visual"
            className="w-full aspect-square object-cover shadow-[0_18px_40px_rgba(0,0,0,0.5),0_0_60px_rgba(59,180,126,0.35)] rounded-[12px]"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t-2 border-white/10"></div>

      {/* Section 2 - DTU Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center gap-6">
          <img
            src="Logo.svg"
            alt="SMILE Logo"
            className="w-[150px] drop-shadow-lg"
          />
          <h2 className="text-3xl font-bold text-white">SMILE DTU</h2>
        </div>
        <div>
          <p className="text-lg text-[#d6d6d6]">
            SMILE DTU is a student-driven initiative dedicated to creating a
            culture of openness and positive mental well-being at DTU. Guided by
            the principle of “Students Making an Impact through Leadership and
            Empathy,” it connects students with meaningful projects and networks
            that empower them to grow personally and professionally. Rooted in
            DTU’s spirit of innovation, SMILE DTU equips its members with the
            skills, exposure, and support to excel in their careers while
            championing mental health and social change.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t-2 border-white/10"></div>

      {/* Section 3 - Pilani */}
      <div id="pilani" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-5">
            Fostering a Caring Community
          </h1>
          <p className="text-lg text-[#d6d6d6]">
            At SMILE BITS Pilani, our guiding principle is to build a campus
            where care and connection are at the heart of student life. We
            believe that openness and compassion can transform the way we
            experience college, turning everyday struggles into shared journeys.
            Through awareness drives and meaningful conversations, we aim to
            provide safe spaces where students can express themselves and grow
            together. Our goal is to foster resilience and compassion so that
            each student feels supported in both their challenges and
            aspirations.
          </p>
        </div>
        <div className="max-w-[480px] mx-auto">
          <img
            src="/new/pilani.jpg"
            alt="SMILE Pilani main visual"
            className="w-full aspect-square object-cover shadow-[0_18px_40px_rgba(0,0,0,0.5),0_0_60px_rgba(59,180,126,0.35)] rounded-[12px]"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t-2 border-white/10"></div>

      {/* Section 4 - Pilani Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center gap-6">
          <img
            src="Logo.svg"
            alt="SMILE Logo"
            className="w-[150px] drop-shadow-lg"
          />
          <h2 className="text-3xl font-bold text-white">SMILE BITS PILANI</h2>
        </div>
        <div>
          <p className="text-lg text-[#d6d6d6]">
            SMILE BITS Pilani stands as the pioneering chapter that sparked a
            global movement. Through comprehensive training in leadership
            development and community building, it equips students with
            essential skills to create inclusive and supportive environments. As
            the flagship chapter, we serve as the foundational model inspiring
            similar initiatives worldwide. SMILE BITS Pilani breaks barriers
            around mental health through awareness campaigns to foster peer
            networks and collaborations that empower both personal and
            professional growth. Together, we hope to shape impactful networks
            and compassionate individuals ready to lead and collaborate
            effectively to drive meaningful change.
          </p>
        </div>
      </div>
    </div>
  );
}
