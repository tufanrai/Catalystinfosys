import React from "react";

const HowWeWorkCard = () => {
  return (
    <div className="w-full bg-linear-140 from-black to-theme py-8">
      <h1 className="font-bold md:text-[28px] text-lg w-full text-center">
        How we work
      </h1>
      <div className="w-full py-4 mt-12 flex flex-col gap-8 overflow-hidden">
        <div className="max-w-[643px] h-[236px] w-full rounded-r-lg bg-violet-400 flex items-start justify-center gap-8 px-16 py-8 shadow-xl/30 shadow-white/70">
          <h6 className="font-medium md:text-xl text-lg">Plan</h6>
          <p className="w-[291px] font-thin md:text-sm text-xs leading-5 text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            facere atque dolore quia? Tempora tempore quaerat ea veniam vitae
            suscipit nulla! Aspernatur ducimus illo eum eveniet adipisci iste
            reprehenderit beatae?
          </p>
        </div>
        <div className="max-w-[643px] h-[236px] w-full rounded-r-lg bg-violet-950 flex items-start justify-center gap-8 px-16 py-8 shadow-xl/30 shadow-white/70 md:relative md:left-[50%]">
          <h6 className="font-medium md:text-xl text-lg">Design</h6>
          <p className="w-[291px] font-thin md:text-sm text-xs leading-5 text-white/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            facere atque dolore quia? Tempora tempore quaerat ea veniam vitae
            suscipit nulla! Aspernatur ducimus illo eum eveniet adipisci iste
            reprehenderit beatae?
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-12 md:gap-0">
          <div className="md:w-[378px] h-[236px] w-full rounded-r-lg bg-purple-300 text-black flex flex-col items-center justify-center gap-8 px-16 py-8 shadow-xl/30 shadow-white/70">
            <h6 className="font-medium md:text-xl text-lg">Develop</h6>
            <p className="w-[291px] font-thin md:text-sm text-xs leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facere atque dolore quia? Tempora tempore quaerat ea veniam vitae
              suscipit nulla! Aspernatur ducimus illo eum eveniet adipisci iste
              reprehenderit beatae?
            </p>
          </div>
          <div className="md:w-[378px] h-[236px] w-full rounded-r-lg bg-purple-400 flex flex-col items-center justify-center gap-8 px-16 py-8 shadow-xl/30 shadow-white/70">
            <h6 className="font-medium md:text-xl text-lg">De-bugg</h6>
            <p className="w-[291px] font-thin md:text-sm text-xs leading-5 text-white/70">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facere atque dolore quia? Tempora tempore quaerat ea veniam vitae
              suscipit nulla! Aspernatur ducimus illo eum eveniet adipisci iste
              reprehenderit beatae?
            </p>
          </div>
          <div className="md:w-[378px] h-[236px] w-full rounded-r-lg bg-indigo-600 flex flex-col items-center justify-center gap-8 px-16 py-8 shadow-xl/30 shadow-white/70">
            <h6 className="font-medium md:text-xl text-lg">Deploy</h6>
            <p className="w-[291px] font-thin md:text-sm text-xs leading-5 text-white/70">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              facere atque dolore quia? Tempora tempore quaerat ea veniam vitae
              suscipit nulla! Aspernatur ducimus illo eum eveniet adipisci iste
              reprehenderit beatae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkCard;
