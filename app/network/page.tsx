'use client'

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "../_components/footer";  // adjust path if needed
import SmileDTU from "../_components/network"; // ✅ import your component

export default function NetworkPage() {
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
      <SmileDTU />   {/* ✅ your page content */}
      <Footer />     {/* ✅ footer */}
    </main>
  );
}
