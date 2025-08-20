import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

const Banner = () => {
  return (
    <WavyBackground className="w-full h-auto flex justify-center items-center">
      <div className="max-w-[1280px] w-full h-auto flex flex-col items-center overflow-hidden">
        <h1 className="text-center text-white/90 font-bold text-5xl md:text-[60px]">
          Catalystinfosys
        </h1>
        <h6 className="text-center text-white font-medium text-sm mt-2 md:text-lg">
          The Digital Leap: From Local to Global
        </h6>
      </div>
    </WavyBackground>
  );
};

export default Banner;
