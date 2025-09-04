import React from "react";
import systemDevelopment from "@/public/🚀 Full-Stack Development Guide | Web & App Dev Essentials 💻🌍.jpg";
import webDevelopment from "@/public/webDev.jpg";
import UiUxDesign from "@/public/Designing Wonder.jpg";

const ServicesCard = () => {
  return (
    <div className="w-full bg-linear-120 from-black via-black/42 to-theme py-8">
      <h1 className="font-bold md:text-[28px] text-lg w-full text-center">
        Introduce Yourself to the World!
      </h1>
      <h6 className="font-medium md:text-[22px] text-md relative bottom-2 w-full text-center">
        Become digital, become international
      </h6>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 px-16 py-8">
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
              Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
              sapien vitae pellentesque sem placerat in id. Placerat in id
              cursus mi pretium tellus duis. Pretium tellus duis convallis
              tempus leo eu aenean.
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
              Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
              sapien vitae pellentesque sem placerat in id. Placerat in id
              cursus mi pretium tellus duis. Pretium tellus duis convallis
              tempus leo eu aenean.
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
              Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
              sapien vitae pellentesque sem placerat in id. Placerat in id
              cursus mi pretium tellus duis. Pretium tellus duis convallis
              tempus leo eu aenean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
