'use client'

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "../_components/footer";
import ContactMain from "../_components/contactmain";
import Contact from "../_components/contactus";
import Navbar from "../_components/navbar1";

export default function ContactPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-[#001612] min-h-screen w-full scroll-smooth">
      <Navbar />     
      <Contact />     {/* hero / top section */}
      <ContactMain /> {/* contact form */}
      <Footer />      {/* footer */}
    </main>
  );
}

