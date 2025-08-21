import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/Component/floating-navbar";
import { AiFillHome } from "react-icons/ai";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalystinfosys",
  description:
    "Softwate developing company based in Nepal. Primarilly focuses on developing websites (full stack, static)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <AiFillHome />,
            },
            {
              name: "Services",
              link: "/services",
              icon: (
                <>
                  <span>Services</span>
                </>
              ),
            },
            {
              name: "About us",
              link: "/aboutus",
              icon: (
                <>
                  <span>About Us</span>
                </>
              ),
            },
            {
              name: "Reviews",
              link: "/reviews",
              icon: (
                <>
                  <span>Reviews</span>
                </>
              ),
            },
            {
              name: "Contact",
              link: "/contact",
              icon: (
                <>
                  <span>Contact</span>
                </>
              ),
            },
          ]}
          className="bg-black border-white/[0.2] border-neutral-200 border text-white z-999"
        />
        {children}
      </body>
    </html>
  );
}
