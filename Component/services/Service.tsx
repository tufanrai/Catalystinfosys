import { LampContainer } from "@/components/ui/lamp";
import React from "react";

const ServicePage = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center">
      <div className="max-w-[1280px] w-full h-screen flex flex-col justify-start">
        <LampContainer className="w-full max-h-[80%] h-screen">
          <h1 className="w-full font-black text-white text-5xl text-shadow-lg/30 text-shadow-sky-500/60">
            About Us
          </h1>
          <p className="w-full font-medium text-white text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            deserunt sit neque soluta sint. Dolore eum optio debitis facere,
            excepturi quidem beatae quod animi, ratione eaque, aspernatur
            corrupti vel numquam.
          </p>
        </LampContainer>
      </div>
    </div>
  );
};

export default ServicePage;
