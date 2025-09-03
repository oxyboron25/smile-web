import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/navbar";
import { useScroll } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMILE : Society for Mental health Inclusivity, Literacy and Empowerment",
  description: "Official website of SMILE - Society for Mental health Inclusivity, Literacy and Empowerment.",
  icons: {
    icon: "/favicon.ico", // 👈 place your favicon file in /public/favicon.ico
  },
  openGraph: {
    title: "SMILE : Society for Mental health Inclusivity, Literacy and Empowerment",
    description: "Join SMILE in promoting mental health awareness and inclusivity worldwide.",
    url: "https://smile-global.org", // 👈 change if needed
    siteName: "SMILE Global",
    images: [
      {
        url: "/favicon.ico", // 👈 place an image in /public/og-image.png
        width: 1200,
        height: 630,
        alt: "SMILE Global Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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

