"use client";

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import Homepage from "./_components/top";
import StatsBox from "./_components/box";
import StigmaSection from "./_components/stigma";
import BannerImage from "./_components/banner";
import StudentsMoveSection from "./_components/students";
import SmileMethodology from "./_components/3ks";
import JoinSmileSection from "./_components/joinsmile";
import MentorsSection from "./_components/mentors";
import JoinSmile from "./_components/colleges";
import FounderStories from "./_components/founder";
import GlobalNetworks from "./_components/map";
import InsightsSection from "./_components/insights";
import Faqs from "./_components/faqs";
import Footer from "./_components/footer";
import Link from "next/link"; // ✅ import for button
import Navbar from "./_components/navbar1";
import Hero from "./_components/landing";
import StatsSection from "./_components/box";

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1, // smaller = smoother
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup
    };
  }, []);

  return (
    <main className="bg-[#001612] h-fit w-[100vw] relative">
      <Navbar />
      <Hero/>
      <StatsSection/>
      <StigmaSection />
      <BannerImage />
      <StudentsMoveSection />
      <SmileMethodology />
      <JoinSmileSection />
      <MentorsSection />
      <JoinSmile />
      <FounderStories />
      <GlobalNetworks />
      <InsightsSection />
      <Faqs />
      <Footer />

      {/* ✅ Floating Button */}
      <Link
        href="/form" target="_blank" rel="noopener noreferrer" // change route or form link
        className="fixed bottom-6 right-6 bg-white text-black px-5 py-2 text-[18px] font-light rounded-xl shadow-lg hover:bg-gray-200 transition-colors z-50"
      >
        Start a Chapter
        <img
              src="/new/Group 40058.png"
              alt="arrow image"
              className="h-7 w-7 inline-block"
            />
      </Link>
    </main>
  );
}


