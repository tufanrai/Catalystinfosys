import React from "react";
import AboutUsImgCard from "../cards/AboutUsImgCard";
import team1 from "@/public/ .jpg";
import team2 from "@/public/ -2.jpg";
import { AboutBannerText } from "../contents/AboutUs";

const Team = () => {
  return (
    <div className="bg-black/90 w-full">
      <div className="max-w-[1280px] h-screen w-full flex flex-col md:flex-row items-center justify-evenly md:justify-center md:gap-8 overflow-hidden md:px-16">
        <div className="max-w-[80%] max-h-[70%] w-full h-screen flex flex-col items-center justify-center">
          <span className="px-4 py-2 font-medium text-sm md:text-lg italic text-white/60 border border-blue-800 backdrop-blur-sm bg-blue-600/20 shadow-xl/30 shadow-blue-600/90 rounded-lg z-10 relative top-6 left-18">
            Passionate team
          </span>
          <AboutUsImgCard
            image={team1.src}
            className="max-w-60 max-h-40"
            position=""
          />
          <AboutUsImgCard
            image={team2.src}
            className="max-w-46 max-h-80 relative"
            position="relative bottom-12 z-10 right-12"
          />
        </div>
        <div className=" max-w-[80%] max-h-[30%] w-full flex flex-col items-center justify-start gap-1 mb-18 py-4">
          <h1 className="text-start w-full font-bold text-lg md:text-2xl italic text-blue-700">
            {AboutBannerText.title}
          </h1>
          <p className="text-start w-full font-light text-sm md:text-lg text-neutral-500">
            {AboutBannerText.description}
          </p>
          <button className="px-5 py-2 font-medium text-sm md:text-md border border-blue-800 rounded-lg text-blue-800 bg-blue-800/20 mt-8">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
