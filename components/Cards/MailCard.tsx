import React from "react";

const MailCard = () => {
  return (
    <div className="max-w-[542px] w-full max-h-[484px] h-screen rounded-md border border-white backdrop-blur-sm bg-white/12 text-white flex flex-col items-center justify-center gap-4 shadow-xl/30 shadow-white">
      <div className="w-full  px-16 flex flex-col items-start justify-start gap-2 ">
        <span>E-mail</span>
        <input
          type="text"
          className="max-w-[454px] w-full max-h-[35px] h-screen rounded-sm border border-white px-5 py-2 font-medium md:text-md text-sm outline-none"
          placeholder="demomail@gmail.com"
        />
      </div>
      <div className="w-full px-16 flex flex-col md:flex-row items-start justify-center gap-2">
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
      <div className="w-full  px-16 flex flex-col items-start justify-start gap-2 ">
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
  );
};

export default MailCard;
