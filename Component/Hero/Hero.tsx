import Banner from "@/Component/Hero/banner";
import React from "react";
import Team from "@/Component/Hero/team";
import Services from "@/Component/Hero/services";
import Reviews from "@/Component/Hero/Reviews";
import Footer from "@/Component/Hero/footer";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <Banner />
      <Services />
      <Team />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Hero;
