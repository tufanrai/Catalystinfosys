import React from "react";
import businessMan from "@/public/Buisness Man Photos - Download Free High-Quality Pictures | Freepik.jpg";
import SystemDevelopment from "@/public/🚀 Full-Stack Development Guide | Web & App Dev Essentials 💻🌍.jpg";
import webDevelopment from "@/public/webDev.jpg";
import UIDesign from "@/public/Designing Wonder.jpg";
import MailCard from "../Cards/MailCard";

const ServicePage = () => {
  return (
    <div className="max-w-[1280px] w-full font-[--main-font] bg-black text-white">
      {/* Landing Page */}
      <div className="w-full h-screen md:px-16 px-8 md: font-[--main-font] py-8 py-4 flex items-center justify-around bg-linear-to-r from-indigo-700 to-black">
        <div>
          <h1 className="font-medium text-[24px]">Why limit yourself,</h1>
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
      <div className="w-full md:px-16 px-8 md:py-8 py-4 flex flex-col gap-8 bg-linear-7 from-indigo-700 to-black">
        <div className="flex items-start justify-around px-8 py-4 bg-neutral-800 runded-lg">
          <div className="w-[360px] h-[236px] rounded-md overflow-hidden">
            <img src={SystemDevelopment.src} width={"100%"} />
          </div>
          <div className="h-[148px] w-[480px]">
            <h4>System Development</h4>
            <p>
              Introduce your Business/ Company to the world, make it recognise
              and scale your business up to international level with this
              package. We build eye catching and responsive static websites.
              This package is suitable for those companies who just want to
              introduce themself in the market and share about their companies
              and their locations to their clients
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start justify-around px-8 bg-neutral-800 py-4 runded-lg">
          <div className="w-[360px] h-[236px] rounded-md overflow-hidden">
            <img src={webDevelopment.src} width={"100%"} />
          </div>
          <div className="h-[148px] w-[480px]">
            <h4>System Development</h4>
            <p>
              Introduce your Business/ Company to the world, make it recognise
              and scale your business up to international level with this
              package. We build eye catching and responsive static websites.
              This package is suitable for those companies who just want to
              introduce themself in the market and share about their companies
              and their locations to their clients
            </p>
          </div>
        </div>
        <div className="flex items-start justify-around px-8 py-4 bg-neutral-800 runded-lg">
          <div className="w-[360px] h-[236px] rounded-md overflow-hidden">
            <img src={UIDesign.src} width={"100%"} />
          </div>
          <div className="h-[148px] w-[480px]">
            <h4>System Development</h4>
            <p>
              Introduce your Business/ Company to the world, make it recognise
              and scale your business up to international level with this
              package. We build eye catching and responsive static websites.
              This package is suitable for those companies who just want to
              introduce themself in the market and share about their companies
              and their locations to their clients
            </p>
          </div>
        </div>
      </div>
      {/* Contacy Page */}
      <div className="w-full bg-linear-180 from-indigo-700 to-black md:px-16 px-8 md:py-16 py-8 flex items-center justify-center gap-8">
        <div className="w-[467px]">
          <h1 className="font-medium md:text-[22px] text-md text-start mb-4">
            Let's have a meeting,
          </h1>
          <p>
            Let’s have a meeting and talk about which package suits your
            business and helps you scale your business up.
          </p>
        </div>
        <div>
          <MailCard />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
