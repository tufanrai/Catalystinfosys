import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

const Banner = () => {
  return (
    <WavyBackground className="w-full h-screen flex justify-center items-center">
      <div className="max-w-[1280px] w-full">
        <h1 className="text-center text-white/90 font-bold text-xl md:text-[60px]">
          Catalystinfosys
        </h1>
        <h6 className="text-center text-white font-medium text-[12px] md:text-lg">
          The Digital Leap: From Local to Global
        </h6>
      </div>
    </WavyBackground>
  );
};

export default Banner;
