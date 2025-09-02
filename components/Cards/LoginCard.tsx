import React from "react";

const LoginCard = () => {
  return (
    <div className="max-w-[522px] max-h-[397px] w-full h-screen border rounded-lg backdrop-blur-sm bg-white/12 py-8 flex flex-col items-center px-16">
      <div className="w-full mb-9">
        <h1 className="w-full font-bold text-center text-xl text-white">
          Login
        </h1>
        <h4 className="w-full text-center text-lg text-white">
          Only for the admins
        </h4>
      </div>
      <div className="w-full text-white flex flex-col items-center justify-center gap-2">
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <span>E-mail</span>
          <input
            type="text"
            className="max-w-[454px] w-full max-h-[35px] h-screen rounded-sm border border-white px-5 py-2 font-medium md:text-md text-sm outline-none"
            placeholder="demomail@gmail.com"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <span>Password</span>
          <input
            type="text"
            className="max-w-[454px] w-full max-h-[35px] h-screen rounded-sm border border-white px-5 py-2 font-medium md:text-md text-sm outline-none"
            placeholder="********"
          />
        </div>
        <div className="w-full flex justify-center mt-8">
          <button className="w-full border px-8 py-2 rounded-sm font-medium md:text-md text-sm cursor-pointer hover:bg-white/20 ease duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
