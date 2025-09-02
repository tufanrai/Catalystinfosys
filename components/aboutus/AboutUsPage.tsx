import React from "react";
import Model from "@/public/Model.png";
import HowWeWorkCard from "../Cards/HowWeWorkCard";

const AboutUsPage = () => {
  return (
    <div className="max-w-[1280px] w-full font-[--main-font]">
      {/* Landing Page */}
      <div className="w-full md:p-16 p-8 flex items-center bg-linear-to-r from-indigo-700 to-black justify-around">
        <div className="w-[510px]">
          <h1 className="font-bold md:text-[32px] text-lg">
            We Listen. We Solve. We Deliver.
          </h1>
          <p className="font-medium md:text-[14px] text-sm max-w-[334px] w-full text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            accusamus harum tempore ea dignissimos voluptatibus ut expedita ex
            fuga voluptatem suscipit praesentium omnis reprehenderit mollitia
            porro in, delectus nam. Voluptatum?
          </p>
          <button className="px-5 py-1 border rounded-lg max-w-[134px] w-full text-[14px] mt-4 cursor-pointer hover:bg-white hover:text-black ease duration-300">
            Learn more
          </button>
        </div>
        <div>
          <div className="overflow-hidden w-[327px]">
            <img src={Model.src} width={"100%"} />
          </div>
        </div>
      </div>
      {/* How we work */}
      <HowWeWorkCard />
      {/* Team */}
      <div className="w-full bg-linear-to-r from-indigo-700 to-black py-16">
        <h1 className="w-full text-center font-bold text-xl mb-12">Our Team</h1>
        <div className="w-full h-[80vh] relative">
          <div className="w-[216px] h-[353px] absolute left-[50%] -translate-x-[50%]">
            <div className="w-[216px] h-[281px] rounded-lg bg-white"></div>
            <div>
              <h6>Tufan Rai</h6>
              <hr />
              <span>Co-founder & CEO</span>
            </div>
          </div>
          <div className="w-[216px] h-[353px] absolute left-10 top-[70%] -translate-y-[50%]">
            <div className="w-[216px] h-[281px] rounded-lg bg-white"></div>
            <div>
              <h6>Tufan Rai</h6>
              <hr />
              <span>Co-founder & CEO</span>
            </div>
          </div>
          <div className="w-[216px] h-[353px] absolute right-10 top-[70%] -translate-y-[50%]">
            <div className="w-[216px] h-[281px] rounded-lg bg-white"></div>
            <div>
              <h6>Tufan Rai</h6>
              <hr />
              <span>Co-founder & CEO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
