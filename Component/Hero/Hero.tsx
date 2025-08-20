import Banner from "@/Component/Hero/banner";
import React from "react";
import { FloatingNav } from "@/Component/floating-navbar";
import { AiFillHome } from "react-icons/ai";
import Team from "@/Component/Hero/team";
import Services from "@/Component/Hero/services";
import HowWeWork from "@/Component/Hero/howWeWork";
import Reviews from "@/Component/Hero/Reviews";
import Footer from "@/Component/Hero/footer";

const Hero = () => {
  return (
    <div className="w-full h-screen">
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
                <span>Hello There</span>
              </>
            ),
          },
          {
            name: "About us",
            link: "/aboutus",
            icon: (
              <>
                <span>Hello There</span>
              </>
            ),
          },
          {
            name: "Reviews",
            link: "/reviews",
            icon: (
              <>
                <span>Hello There</span>
              </>
            ),
          },
          {
            name: "Contact",
            link: "/contact",
            icon: (
              <>
                <span>Hello There</span>
              </>
            ),
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

export default Hero;
