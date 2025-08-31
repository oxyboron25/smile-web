import Image from "next/image";
import Logo from "@/public/Logo.svg";
import {
  MotionValue,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  progress: MotionValue<number>;
}

const Nav = ({ progress }: NavbarProps) => {
  const opacity = useTransform(progress, [0, 0.025], [0, 1]);
  return (
    <motion.nav
      id="nav"
      className={
        " fixed top-0 w-screen h-[10vh] z-[99999] py-1 flex justify-between items-center"
      }
    >
      <motion.div
        style={{ opacity: opacity }}
        className="absolute w-full h-full bg-[#001612]"
      ></motion.div>
      <Image
        src={Logo}
        alt="Logo"
        className=" lg:h-[50px] h-[40px] object-contain py-1 z-10 lg:pl-10"
      />
      <div className="lg:flex gap-10 text-xl hidden text-white z-10 pr-10">
        <Link
          href={"#about"}
          scroll={true} 
          role="button"
          className="border border-transparent rounded-full text-white px-6 py-2 transition"
        >
          About Us
        </Link>
        {/* <div role="button">Founders</div> */}
        {/* <div
          role="button"
          className="border border-transparent rounded-full text-white px-6 py-2 hover:text-black transition"
        >
          Mentors
        </div> */}
        <div
          role="button"
          className="border border-transparent rounded-full text-white px-6 py-2 transition"
        >
          What We Do
        </div>
        <div
          role="button"
          className="border border-transparent rounded-full text-white px-6 py-2 transition"
        >
          Contact Us
        </div>
        {/* <div
          role="button"
          className="border border-white rounded-full text-white px-6 py-2 hover:bg-white hover:text-black transition"
        >
          Start Your Branch
        </div> */}
        <Link
          href="/gallery"
          role="button"
          className="border border-transparent rounded-full text-white px-6 py-2 transition"
    >
           Gallery
        </Link>


        <Link
          href="https://forms.gle/AAf2EazgHWpNGRUF7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            role="button"
            className="border border-white rounded-full text-white px-6 py-2 hover:bg-white hover:text-black ease-in-out transition"
          >
            Start Your Branch
          </div>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Nav;
