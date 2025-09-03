import React from "react";
import businessMan from "@/public/Buisness Man Photos - Download Free High-Quality Pictures | Freepik.jpg";
import SystemDevelopment from "@/public/🚀 Full-Stack Development Guide | Web & App Dev Essentials 💻🌍.jpg";
import webDevelopment from "@/public/webDev.jpg";
import UIDesign from "@/public/Designing Wonder.jpg";
import MailCard from "../Cards/MailCard";
import ServicesCard from "../Cards/ServicesCard";

const ServicePage = () => {
  return (
    <div className="max-w-[1280px] w-full font-[--main-font] bg-black text-white">
      {/* Landing Page */}
      <div className="w-full h-screen md:px-16 px-8 md: font-[--main-font] py-8 py-4 flex flex-col-reverse md:flex-row items-center justify-around bg-linear-to-r from-theme to-black">
        <div>
          <h1 className="font-semibold text-[24px]">Why limit yourself,</h1>
          <h6 className="font-medium text-[24px]">
            When you can become international
          </h6>
          <p className="w-[434px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            veritatis voluptates sit fugiat iusto sapiente perferendis aperiam
            impedit quisquam rerum. Quo assumenda nihil dolorem explicabo optio
            non blanditiis officiis natus?
          </p>
        </div>
        <div className="relative p-8">
          <div className="w-[250px] h-[299px] overflow-hidden rounded-lg border border-indigo-700 ease duration-300 hover:scale-105">
            <img src={businessMan.src} width={"100%"} />
          </div>
          <span className="border px-5 py-2 border-1 absolute absolute top-2 right-2 border-indigo-700 backdrop-blur-xl/30 bg-indigo-700/34">
            Embrace the world
          </span>
          <span className="border px-5 py-2 border-1 absolute absolute top-50 left-[-10] border-indigo-700 backdrop-blur-xl/30 bg-indigo-700/34">
            Build Global Bridges
          </span>
          <span className="border px-5 py-2 border-1 absolute absolute bottom-2 right-2 border-indigo-700 backdrop-blur-xl/30 bg-indigo-700/34">
            world is Yours
          </span>
        </div>
      </div>
      {/* Services */}
      <ServicesCard />
      {/* Contacy Page */}
      <MailCard />
    </div>
  );
};

export default ServicePage;
