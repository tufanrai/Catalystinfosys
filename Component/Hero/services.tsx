import { HoverEffect } from "@/Component/serviceCard";
import React from "react";

const Services = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-black/90">
      <div className="max-w-[1280px] w-full h-auto py-8 px-16">
        <h1 className="w-full text-center text-white font-semibold text-3xl">
          What we provide,
        </h1>
        <div>
          <HoverEffect
            items={[
              {
                title: "Static web design",
                description: `Transform your ideas into stunning digital experiences with our professional website design services. We craft visually appealing, user-friendly, and conversion-focused designs tailored to your brand.`,
                link: "facebook.com",
              },
              {
                title: "System development",
                description: `End-to-end system development that brings your business logic to life — fast, reliable, and scalable.`,
                link: "instagram.com",
              },
              {
                title: "UI/UX Designing",
                description: `Intuitive and visually appealing UI/UX design services to enhance user engagement and experience.`,
                link: "linkedin.com",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
