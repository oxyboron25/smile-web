import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://smile-global.org"), 
  title: "SMILE : Society for Mental health Inclusivity, Literacy and Empowerment",
  description:
    "SMILE is a student-driven movement fighting mental health stigma across India.",
  openGraph: {
    title: "SMILE : Society for Mental health Inclusivity, Literacy and Empowerment",
    description:
      "SMILE is a student-driven movement fighting mental health stigma across India.",
    url: "https://smile-global.org",
    siteName: "SMILE Global",
    images: [
      {
        url: "/new/fav.png", 
        width: 1200,
        height: 630,
        alt: "SMILE Global Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMILE : Society for Mental health Inclusivity, Literacy and Empowerment",
    description:
      "SMILE is a student-driven movement fighting mental health stigma across India.",
    images: ["/new/fav.png"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/new/fav.png" type="image/png" />
      </head>
      <body
        className={
          inter.className +
          " bg-[#001612] relative w-screen overflow-x-hidden"
        }
      >
        {children}
      </body>
    </html>
  );
}


