import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/navbar";
import { useScroll } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMILE : Society for Mental health Inclusivity, Literacy and Empowerment",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#001612] relative w-screen overflow-x-hidden'}>
        {children}
      </body>
    </html>
  );
}
