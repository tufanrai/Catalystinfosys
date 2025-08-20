import React from "react";
import AboutUsImgCard from "../cards/AboutUsImgCard";
import team1 from "@/public/ .jpg";
import team2 from "@/public/ -2.jpg";
import { AboutBannerText } from "../contents/AboutUs";

const Team = () => {
  return (
    <div className="bg-black/90 text-white w-full h-auto">
      <div className="max-w-[1280px] max-h-[70%] h-screen w-full flex flex-col md:flex-row items-center justify-evenly border md:justify-center gap-4 md:gap-8 overflow-hidden py-8 md:px-16">
        <div className="max-w-[80%] max-h-[90%] w-full h-screen relative">
          <AboutUsImgCard
            image={team1.src}
            className="max-w-60 max-h-40"
            position="top-10 left-22"
          />
          <AboutUsImgCard
            image={team2.src}
            className="max-w-46 max-h-80"
            position="bottom-8 left-8"
          />
        </div>
        <div className=" max-w-[80%] max-h-[90%] w-full h-screen"></div>
      </div>
    </div>
  );
};

export default Team;
