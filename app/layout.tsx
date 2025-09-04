import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderCard from "@/components/Navigations/HeaderCard";
import FooterPage from "@/components/footer/FooterPage";

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
        <div className="w-full flex flex-col justify-center bg-black md:px-16 px-8">
          <HeaderCard />
          {children}
          <FooterPage />
        </div>
      </body>
    </html>
  );
}
