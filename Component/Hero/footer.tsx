"use client";
import React from "react";
import { Link } from "lucide-react";
import { FooterLinks } from "../contents/footerLinks";

const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-black text-white">
      <div className="max-w-[1280px] w-full h-auto md:px-16 md:py-8 px-8 py-4 flex flex-col items-center justify-start">
        <div className="w-full h-auto">
          <div className="flex flex-col md:flex-row items-start justify-start gap-4">
            {FooterLinks.map((value, index) => (
              <ul
                className="w-full md:max-w-50 flex flex-col items-start justify-start gap-2"
                key={index}
              >
                <li className="mb-3">
                  <h1 className="w-full font-medium text-lg md:text-xl text-white/90 italic">
                    {value.title}
                  </h1>
                </li>
                {value.value.map((links, ind) => (
                  <li className="max-w-[100%] md:max-w-100 w-full" key={ind}>
                    <p className="font-medium text-sm md:text-lg text-white/50 hover:bg-neutral-800/90 ease duration-300 cursor-pointer w-full px-4 py-1">
                      {links.name}
                    </p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <hr className="border-white/40 w-full mt-8 mb-4" />
        <span className="font-thin text-xs md:text-sm">
          &copy; Catalystinfosys - The Digital Leap: From Local to Global
        </span>
      </div>
    </div>
  );
};

export default Footer;
