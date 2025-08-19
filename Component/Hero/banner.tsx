import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

const Banner = () => {
  return (
    <WavyBackground className="scale-120">
      <h1 className="text-center text-white/90 font-bold text-[60px]">
        Catalystinfosys
      </h1>
      <h6 className="text-center text-white font-medium text-lg">
        The Digital Leap: From Local to Global
      </h6>
    </WavyBackground>
  );
};

export default Banner;
