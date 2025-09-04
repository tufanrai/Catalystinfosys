import React from "react";
import Team1 from "@/public/ .jpg";
import Team2 from "@/public/ -2.jpg";

import HowWeWorkCard from "@/components/Cards/HowWeWorkCard";
import ServicesCard from "@/components/Cards/ServicesCard";

const page = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      <div className="max-w-[1280px] w-full bg-black font-[--main-font] text-white bg-black">
        {/* Hero Component */}
        <div className=" flex px-8 py-4 items-center justify-center w-full h-screen text-white bg-linear-300 from-black via-black/60 to-theme">
          <div className="max-w-[1172px] max-h-[662px] w-full h-screen md:border backdrop-blur-lg md:bg-white/12 py-8 overflow-hidden flex items-center justify-center">
            <div className="w-120 z-999 flex flex-col items-center justify-center">
              <h1 className="font-bold md:text-[32px] text-lg text-center">
                The Digital Leap:
              </h1>
              <h6 className="font-medium md:text-[22px] text-md relative bottom-2 text-center">
                From Local to Global
              </h6>
              <p className="font-thin md:text-[14px] text-sm max-w-[334px] w-full text-white/70 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis hic sapiente culpa optio aliquid expedita ex
                exercitationem et maiores minus, quibusdam ipsum itaque, nostrum
                officia. Debitis maxime sint provident quos?
              </p>
              <button className="px-5 py-1 border rounded-lg max-w-[134px] w-full text-[14px] mt-4 cursor-pointer hover:bg-white hover:text-black ease duration-300">
                View Services
              </button>
            </div>
          </div>
        </div>
        {/* About Us Component */}
        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center bg-black text-white md:px-16 px-8 py-8">
          <div className="w-[60%] flex flex-col items-center jsutify-center py-4 relative">
            <div className="w-[351px] h-[251px] overflow-hidden relative top-8 border rounded-lg border-indigo-600 hover:scale-105 ease duration-300 hover:shadow-xl/50 shadow-indigo-500">
              <img
                src={Team1.src}
                width={"100%"}
                className="object-cover"
                alt=""
              />
            </div>
            <div className="w-[351px] h-[251px] overflow-hidden relative bottom-4 right-8 z-10 border rounded-lg border-indigo-600 hover:scale-105 ease duration-300 hover:shadow-xl/50 shadow-indigo-500">
              <img src={Team2.src} width={"100%"} alt="" />
            </div>
            <span className="border border-indigo-700 absolute top-8 shadow-xl/30 shadow-indigo-500 -right-12 md:right-24 px-5 py-2 backdrop-blur-sm bg-indigo-600/12">
              5 <sup>+</sup>yrs of experience
            </span>
            <span className="border border-indigo-700 absolute -left-12 md:left-18 shadow-xl/30 shadow-indigo-500 bottom-64 px-5 py-2 backdrop-blur-sm bg-indigo-600/12 z-11">
              Co-operative team
            </span>
            <span className="border border-indigo-700 absolute bottom-4 shadow-xl/30 shadow-indigo-500 -right-12 md:right-32 px-5 py-2 backdrop-blur-sm bg-indigo-600/12 z-11">
              Expert team
            </span>
          </div>
          <div className="md:w-[40%] w-full flex flex-col items-center justify-center py-16">
            <h1 className="font-bold md:text-[28px] text-lg w-full text-center">
              Why Choose Us?
            </h1>
            <p className="font-thin md:text-md text-sm md:max-w-[334px] w-full text-center w-full text-white/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur sit labore eos quasi tempore sint id similique earum
              et. Mollitia, quibusdam. Maxime, aliquid. Accusantium sapiente
              vero eligendi blanditiis, nobis quam.
            </p>
            <button className="px-5 py-1 border rounded-lg max-w-[134px] w-full text-[14px] mt-4 cursor-pointer hover:bg-white hover:text-black ease duration-300">
              Learn more
            </button>
          </div>
        </div>
        {/* Services Component */}
        <ServicesCard />
        {/* SDLC Component */}
        <HowWeWorkCard />
      </div>
    </div>
  );
};

export default page;
