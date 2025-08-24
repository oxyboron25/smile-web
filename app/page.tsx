'use client'
import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Founders from "./_components/Founders";
import Timeline from "./_components/Timeline";
import { useScroll } from "framer-motion";
import Nav from "./_components/navbar";
import Contact from "./_components/Contact";
import Contribute from "./_components/Contribute";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Button from "./_components/Start-Your-Branch";
import OurBranches from "./_components/OurBranches";
import OpenYourBranch from "./_components/openyourbranch";
import MentorCarousel from "./_components/mentor";

import JoinSmile from "./_components/colleges";
import GlobalNetworks from "./_components/map";
import InsightsSection from "./_components/insights";
import JoinSmile1 from "./_components/joinsmile";
import FAQs from "./_components/faqs";
import JoinSmileSection from "./_components/joinsmile";
import SmileNavbar from "./_components/footer";
import FounderStories from "./_components/founder";
import MentorsSection from "./_components/mentors";
import SmileMethodology from "./_components/3ks";
import StudentsMoveSection from "./_components/students";
import Homepage from "./_components/top";
import StigmaSection from "./_components/stigma";
import Faqs from "./_components/faqs";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import BannerImage from "./_components/banner";







export default function Home() {
  const {scrollYProgress} = useScroll()

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })
  return (
    <main className=" bg-[#001612] h-fit w-[100vw] scroll-smooth">
      
      <Homepage />
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

      
      
      
      

      {/* <Timeline /> */}
      {/* <Contribute /> */}
      {/* <Contact /> */}
      <Footer/>
    </main>
  );
}
