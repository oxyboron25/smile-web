import React from "react";

const Mentors: React.FC = () => {
  return (
    <div className="w-full mx-auto px-6 py-16 bg-[#121212] text-[#f5f5f5]">
      {/* Mentor 1 */}
      <div id="kriss" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-extrabold mb-4 ml-28 text-[#4EBCA5]">
            Adv. Dr Kriss Venugopal
          </h1>
          <p className="text-lg ml-28 text-[#d6d6d6]">
            Adv. Dr Kriss Venugopal is a practising clinical hypnotherapist,
            legal scholar, voice coach and actor with a PhD in Media Psychology.
            His work bridges mental health, voice coaching and public policy,
            offering unique insight into how reform can be both systematic and
            deeply personal. He has worked extensively with students,
            professionals and institutions to drive meaningful changes.
          </p>
        </div>
        <div>
           <img
  src="/new/drkriss.jpg"
  alt="DR Kriss Venugopal"
  className="w-full max-w-sm aspect-square object-cover  mx-auto"
/>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t-2 border-white/10" />

      {/* Mentor 2 */}
      <div id="manish" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
           <img
  src="/new/shmanish.jpg"
  alt="Sh Manish K. Aggarwal"
  className="w-full max-w-sm aspect-square object-cover  mx-auto"
/>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold mb-4 text-[#4EBCA5]">
            Sh. Manish K. Agarwal
          </h1>
          <p className="text-lg mr-32 text-[#d6d6d6]">
            Sh. Manish K. Agarwal is the Special Commissioner of Police, Delhi
            Police with over 30 years of service. A passionate advocate for
            mental health, he has pioneered counselling and stress management
            programs for the police force, drawing from his early experience as
            a Student Counsellor at IIT Kanpur. His commitment to SMILE reflects
            his belief that mental health care is most effective when it is
            community-driven, compassionate, and student-led.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t-2 border-white/10" />

      {/* Mentor 3 */}
      <div id="quincy" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl ml-28 font-extrabold mb-4 text-[#4EBCA5]">
            Quincy X. Brown
          </h1>
          <p className="text-lg ml-28 text-[#d6d6d6]">
            Quincy X. Brown is a biochemist, educator, and community builder
            from Oklahoma, and founder of MQ Chess Club — a movement that
            transforms chess into a tool for mental wellness, cultural
            connection, and resilience. By creating free, public spaces, he
            shows how strategy, patience and adaptability can heal, connect, and
            empower communities worldwide.
          </p>
        </div>
        <div>
           <img
  src="/new/quincy.jpg"
  alt="Quincy X. Brown"
  className="w-full max-w-sm aspect-square object-cover  mx-auto"
/>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t-2 border-white/10" />

      {/* Mentor 4 */}
      <div id="sharad" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
  src="/new/sharad.jpg"
  alt="Sharad Aggarwal"
  className="w-full max-w-sm aspect-square object-cover  mx-auto"
/>

        <div>
          <h1 className="text-3xl font-extrabold mb-4 text-[#4EBCA5]">
            Mr. Sharad Aggarwal
          </h1>
          <p className="text-lg mr-28 text-[#d6d6d6]">
            Mr. Sharad Aggarwal is the Global Head of Strategy, Partnerships &amp; AI Solutions at Google Cloud. With over two decades of leadership in digital transformation and emerging technologies, he focuses on building alliances that harness AI and cloud innovation. His vision is to drive impactful global growth by bridging strategy, partnerships, and next-gen technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mentors;