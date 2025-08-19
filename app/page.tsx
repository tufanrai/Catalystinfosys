import Banner from "@/Component/Hero/banner";
import React from "react";
import { FloatingNav } from "@/Component/header/nav";
import { AiFillHome } from "react-icons/ai";
import Team from "@/Component/Hero/team";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { div } from "motion/react-client";
import Services from "@/Component/Hero/services";
import HowWeWork from "@/Component/Hero/howWeWork";
import Reviews from "@/Component/Hero/Reviews";
import Footer from "@/Component/Hero/footer";

const page = () => {
  return (
    <div className="w-full h-auto">
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
            icon: <></>,
          },
          {
            name: "About us",
            link: "/aboutus",
            icon: <></>,
          },
          {
            name: "Reviews",
            link: "/reviews",
            icon: <></>,
          },
          {
            name: "Contact",
            link: "/contact",
            icon: <></>,
          },
        ]}
        className="bg-black border-white/[0.2] border-neutral-200 border text-white z-999"
      />
      <Banner />
      <Team />
      <Services />
      <HowWeWork />
      <Reviews />
      <Footer />
    </div>
  );
};

export default page;
