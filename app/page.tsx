import Ballpit from "@/components/Ballpit";
import React from "react";
import Team1 from "@/public/ .jpg";
import Team2 from "@/public/ -2.jpg";
import systemDevelopment from "@/public/🚀 Full-Stack Development Guide | Web & App Dev Essentials 💻🌍.jpg";
import webDevelopment from "@/public/webDev.jpg";
import UiUxDesign from "@/public/Designing Wonder.jpg";
import HowWeWorkCard from "@/components/Cards/HowWeWorkCard";

const page = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      <div className="max-w-[1280px] w-full bg-black font-[--main-font] text-white bg-black">
        {/* Hero Component */}
        <div className=" flex px-8 py-4 items-center justify-center w-full h-screen text-white bg-linear-300 from-black to-indigo-700">
          <div className="max-w-[1172px] max-h-[662px] w-full h-screen border backdrop-blur-lg bg-white/12 py-8 relative overflow-hidden">
            <div className="w-full">
              <div className="w-full h-screen flex items-start justify-start absolute top-0 left-0">
                <Ballpit count={100} colors={["#fff", "#4B0082"]} />
              </div>
              <div className="w-120 absolute top-[50%] left-[50%] -translate-[50%] z-999">
                <h1 className="font-bold md:text-[32px] text-lg">
                  The Digital Leap:
                </h1>
                <h6 className="font-medium md:text-[22px] text-md relative bottom-2">
                  From Local to Global
                </h6>
                <p className="font-thin md:text-[14px] text-sm max-w-[334px] w-full text-white/70">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis hic sapiente culpa optio aliquid expedita ex
                  exercitationem et maiores minus, quibusdam ipsum itaque,
                  nostrum officia. Debitis maxime sint provident quos?
                </p>
                <button className="px-5 py-1 border rounded-lg max-w-[134px] w-full text-[14px] mt-4 cursor-pointer hover:bg-white hover:text-black ease duration-300">
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* About Us Component */}
        <div className="w-full flex items-center justify-center bg-black text-white md:px-16 px-8 md:py-8 py-4">
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
            <span className="border border-indigo-700 absolute top-8 shadow-xl/30 shadow-indigo-500 right-24 px-5 py-2 backdrop-blur-sm bg-indigo-600/12">
              5 <sup>+</sup>yrs of experience
            </span>
            <span className="border border-indigo-700 absolute left-18 shadow-xl/30 shadow-indigo-500 bottom-64 px-5 py-2 backdrop-blur-sm bg-indigo-600/12 z-11">
              Co-operative team
            </span>
            <span className="border border-indigo-700 absolute bottom-4 shadow-xl/30 shadow-indigo-500 right-32 px-5 py-2 backdrop-blur-sm bg-indigo-600/12 z-11">
              Expert team
            </span>
          </div>
          <div className="w-[40%]">
            <h1 className="font-bold md:text-[28px] text-lg">Why Choose Us?</h1>
            <p className="font-thin md:text-[18px] text-sm max-w-[334px] w-full text-white/70">
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
        <div className="w-full bg-linear-12 from-black to-indigo-700 py-8">
          <h1 className="font-bold md:text-[28px] text-lg w-full text-center">
            Introduce Yourself to the World!
          </h1>
          <h6 className="font-medium md:text-[22px] text-md relative bottom-2 w-full text-center">
            Become digital, become international
          </h6>
          <div className="w-full flex items-center justify-center gap-4 px-16 py-2">
            <div className="w-[378px] h-[358px] bg-slate-800/70 rounded-lg flex flex-col items-center justify-start py-4 gap-8">
              <img
                src={systemDevelopment.src}
                width={"100%"}
                className="w-[333px] h-[153px] object-cover"
              />
              <div className="w-[333px]">
                <h6 className="font-medium text-[18px] text-md relative bottom-2 w-full text-start">
                  System Development
                </h6>
                <p className="font-thin text-[12px] text-sm max-w-[334px] w-full text-white/70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Consectetur adipiscing elit quisque faucibus ex sapien vitae.
                  Ex sapien vitae pellentesque sem placerat in id. Placerat in
                  id cursus mi pretium tellus duis. Pretium tellus duis
                  convallis tempus leo eu aenean.
                </p>
              </div>
            </div>
            <div className="w-[378px] h-[358px] bg-slate-800/70 rounded-lg flex flex-col items-center justify-start py-4 gap-8">
              <img
                src={webDevelopment.src}
                width={"100%"}
                className="w-[333px] h-[153px] object-cover"
              />
              <div className="w-[333px]">
                <h6 className="font-medium text-[18px] text-md relative bottom-2 w-full text-start">
                  Web Development
                </h6>
                <p className="font-thin text-[12px] text-sm max-w-[334px] w-full text-white/70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Consectetur adipiscing elit quisque faucibus ex sapien vitae.
                  Ex sapien vitae pellentesque sem placerat in id. Placerat in
                  id cursus mi pretium tellus duis. Pretium tellus duis
                  convallis tempus leo eu aenean.
                </p>
              </div>
            </div>
            <div className="w-[378px] h-[358px] bg-slate-800/70 rounded-lg flex flex-col items-center justify-start py-4 gap-8">
              <img
                src={UiUxDesign.src}
                width={"100%"}
                className="w-[333px] h-[153px] object-cover"
              />
              <div className="w-[333px]">
                <h6 className="font-medium text-[18px] text-md relative bottom-2 w-full text-start">
                  UI/IX Development
                </h6>
                <p className="font-thin text-[12px] text-sm max-w-[334px] w-full text-white/70">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Consectetur adipiscing elit quisque faucibus ex sapien vitae.
                  Ex sapien vitae pellentesque sem placerat in id. Placerat in
                  id cursus mi pretium tellus duis. Pretium tellus duis
                  convallis tempus leo eu aenean.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SDLC Component */}
        <HowWeWorkCard />
      </div>
    </div>
  );
};

export default page;
