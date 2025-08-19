import { BackgroundBeamsWithCollision } from "@/Component/backgroundBeam";
import React from "react";
import AboutUsImgCard from "../cards/AboutUsImgCard";
import team1 from "@/public/ .jpg";
import team2 from "@/public/ -2.jpg";
import { AboutBannerText } from "../contents/AboutUs";

const Team = () => {
  return (
    <BackgroundBeamsWithCollision className="bg-black/90 text-white w-full h-auto">
      <div className="max-w-[1280px] h-screen w-full flex items-center justify-center gap-8 overflow-hidden px-16">
        <div className="w-full h-150 overflow-hidden relative p-16 after:absolute after:top-32 after:right-22 after:content-['Passionate_team'] after:italic after:px-8 after:py-2 after:rounded-lg after:backdrop-blur-lg after:bg-blue-600/25 after:shadow-xl/30 after:shadow-blue-600 after:border after:border-blue-600 after:text-blue-600">
          <AboutUsImgCard
            image={team1.src}
            width="228px"
            height="283px"
            className="absolute top-38 left-50 max-w-[228px] h-[283px] w-full "
          />
          <AboutUsImgCard
            image={team2.src}
            width="224px"
            height="136px"
            className="absolute bottom-28 left-32 z-999 max-w-[224px] max-h-[136px]"
          />
        </div>
        <div className="w-full px-8 py-4 flex flex-col items-start justify-center">
          <h1 className="w-full text-start text-shadow-lg/30 text-shadow-white/60 font-bold italic text-blue-600 text-3xl">
            {AboutBannerText.title}
          </h1>
          <p className="max-w-100 w-full text-start font-thin text-sm text-white/85 mt-4">
            {AboutBannerText.description}
          </p>
          <button className="mt-8 border border-blue-800 rounded-sm px-8 py-2 font-medium text-md text-blue-800 ml-25 cursor-pointer ease duration-300 hover:text-white hover:bg-blue-800">
            Know Us
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Team;
