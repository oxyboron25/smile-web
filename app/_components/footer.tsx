import React from "react";

// import { FaInstagram, FaLinkedin } from "react-icons/fa";// replace with your logo 
import Logo from "@/public/Logo.svg";
import { Linkedin } from "lucide-react";
import { FaInstagram ,FaLinkedin} from "react-icons/fa";



// type StatBlockProps = {
//     icon: React.ReactNode;
//     number: string;
//     label: string;
// };

// const StatBlock = ({ icon, number, label }: StatBlockProps) => (
//     <div className="flex flex-col items-center gap-4 lg:flex-row lg:text-left">
//         <div>{icon}</div>
//         <div>
//             <p className="text-2xl font-bold text-[#5DA399]">{number}</p>
//             <p className="text-gray-400 font-light">{label}</p>
//         </div>
//     </div>
// );

// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-black text-white py-10 px-6">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

//                 {/* Logo & Tagline */}
//                 <div className="col-span-1 flex flex-col items-start">
//                     <img
//                         src="/Logo.svg"
//                         alt="Logo"
//                         className=" lg:h-[60px] h-[50px] object-contain py-1 z-10 lg:pl-10"
//                     />
//                     <p className="text-sm text-gray-300 py-5">
//                         Society for Mental Health Inclusivity, Literacy and Empowerment
//                     </p>
//                 </div>

//                 {/* Quick Links */}
//                 <div>
//                     <h3 className="text-teal-400 font-semibold mb-3">Quick Links</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="hover:underline">Home</a></li>
//                         <li><a href="#" className="hover:underline">About Us</a></li>
//                         <li><a href="#" className="hover:underline">Contact Us</a></li>
//                     </ul>
//                 </div>

//                 {/* More Links */}
//                 <div>
//                     <h3 className="text-teal-400 font-semibold mb-3">More Links</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="hover:underline">Our Work</a></li>
//                         <li><a href="#" className="hover:underline">Get Involved</a></li>
//                         <li><a href="#" className="hover:underline">Our Branches</a></li>
//                     </ul>
//                 </div>

//                 {/* Social Links */}
//                 <div>
//                     <h3 className="text-teal-400 font-semibold mb-3">Follow Us</h3>
//                     <div className="flex space-x-4 text-2xl">
//                         <a href="#" aria-label="Instagram" className="hover:text-teal-400">
//                             <FaInstagram size={30} color="white" />

//                         </a>
//                         <a href="#" aria-label="LinkedIn" className="hover:text-teal-400">
//                             <FaLinkedin size={30} color="white" />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-[#001612] py-10 px-6 flex flex-col items-center space-y-6">
//         {/* Logo */}
//         <div>
//           <img src="/new/logo.png" alt="SMILE Logo" className="h-20 w-auto" />
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
//           <a href="#" className="hover:text-gray-300">The Network</a>
//           <a href="#" className="hover:text-gray-300">Explore Mental Health</a>
//           <a href="#" className="hover:text-gray-300">About Us</a>
//           <a href="#" className="hover:text-gray-300">Start a Chapter</a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex space-x-6">
//           <a href="#">
//             <img
//               src="/new/Group 40077 (1).png"
//               alt="LinkedIn"
//               className="h-12 w-auto"
//             />
//           </a>
//         </div>
//       </div>
//         </footer>
//     );
// };

// export default Footer;


// const Footer = () => {
//   return (
//     <footer className="bg-[#001612] text-white py-10 px-6 flex flex-col items-center space-y-6">
//       {/* Logo */}
//       <div>
//         <img src="/new/logo.png" alt="SMILE Logo" className="h-20 w-auto" />
//       </div>

//       {/* Navigation Links */}
//       <div className="flex space-x-8 text-xl font-medium">
//         <a href="#" className="hover:text-gray-300">The Network</a>
//         <a href="#" className="hover:text-gray-300">Explore Mental Health</a>
//         <a href="#" className="hover:text-gray-300">About Us</a>
//         <a href="#" className="hover:text-gray-300">Start a Chapter</a>
//       </div>

//       {/* Social Icons */}
//       <div className="flex space-x-6">
//         <a href="#">
//           <img src="/new/Group 40077 (1).png" alt="LinkedIn" className="h-12 w-116" />
//         </a>
        
//       </div>
//     </footer>
//   );
// };





const Footer = () => {
  return (
    <footer className="bg-[#001612] text-white py-10 px-6 flex flex-col items-center space-y-6">
      {/* Logo */}
      <div>
        <img src="/new/logo.png" alt="SMILE Logo" className="h-20 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-xl font-medium">
        <a href="#" className="hover:text-gray-300">The Network</a>
        <a href="#" className="hover:text-gray-300">Explore Mental Health</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Start a Chapter</a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6">
        <a href="#">
          <img src="/new/Group 40077 (1).png" alt="LinkedIn" className="h-12 w-116" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
