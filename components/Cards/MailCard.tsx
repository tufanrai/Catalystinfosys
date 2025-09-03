import React from "react";

const MailCard = () => {
  return (
    <div className="w-full bg-linear-180 from-indigo-700 to-black md:px-16 px-8 md:py-16 py-8 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="w-[467px] text-white font-[--main-font]">
        <h1 className="font-medium md:text-[22px] text-md text-start mb-4">
          Let's have a meeting,
        </h1>
        <p>
          Let’s have a meeting and talk about which package suits your business
          and helps you scale your business up.
        </p>
      </div>
      <div className="md:max-w-[542px] w-full max-h-[484px] h-screen rounded-md border border-white backdrop-blur-sm bg-white/12 text-white flex flex-col items-center justify-center gap-4 shadow-xl/30 shadow-white">
        <div className="w-full  md:px-16 px-4 flex flex-col items-start justify-start gap-2 ">
          <span>E-mail</span>
          <input
            type="text"
            className="md:max-w-[454px] w-full max-h-[35px] h-screen rounded-sm border border-white px-5 py-2 font-medium md:text-md text-sm outline-none"
            placeholder="demomail@gmail.com"
          />
        </div>
        <div className="w-full md:px-16 px-4 flex flex-col md:flex-row items-start justify-center gap-2">
          <div className="w-full flex flex-col items-start justify-start">
            <span>Full name</span>
            <input
              type="text"
              className="w-full max-h-[35px] h-screen rounded-sm border border-white px-5 py-2 font-medium md:text-md text-sm outline-none"
              placeholder="Jhon Doe"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-2 ">
            <span>Package</span>
            <input
              type="text"
              className="w-full max-h-[35px] h-screen rounded-sm border border-white px-5 py-2 font-medium md:text-md text-sm outline-none"
              placeholder="System Development"
            />
          </div>
        </div>
        <div className="w-full  md:px-16 px-4 flex flex-col items-start justify-start gap-2 ">
          <span>Description</span>
          <textarea
            placeholder="I want to buid an e-commerce website for my dropshipping business"
            className="border w-full rounded-md"
            rows={5}
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-center px-18">
          <button className="w-full border px-8 py-2 rounded-sm font-medium md:text-md text-sm cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailCard;
