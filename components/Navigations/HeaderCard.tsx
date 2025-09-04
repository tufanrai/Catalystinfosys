"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";

const HeaderCard = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="max-w-[1280px] w-full text-white bg-black md:px-16 md:py-8 py-4 font-[--main-font]">
      <ul className="w-full items-center jsutify-center gap-3 hidden md:flex">
        <li className="mr-auto">
          <Link href={"/"}>
            <span className="font-thin">
              <b className="font-bold md:text-xl text-lg">Catalyst</b> infosys
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="w-full borderfont-thin text-xs md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="w-full borderfont-thin text-xs md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0"
            href={"/service"}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="w-full borderfont-thin text-xs md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0"
            href={"/aboutus"}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            className="w-full borderfont-thin text-xs md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0"
            href={"/contact"}
          >
            Contact us
          </Link>
        </li>
        <li className="ml-auto">
          <Link href={"/login"}>
            <button className="border md:font-medium font-thin text-md rounded-tl-lg rounded-br-lg px-5 py-1 cursor-pointer ease duration-300 hover:bg-white/50">
              Login
            </button>
          </Link>
        </li>
      </ul>
      <ul className="w-full flex items-center justify-between md:hidden">
        <li className="mr-auto">
          <Link href={"/"}>
            <span className="font-thin">
              <b className="font-bold md:text-xl text-lg">Catalyst</b> infosys
            </span>
          </Link>
        </li>
        <li
          className={`absolute top-0 right-0 max-w-[240px] w-full bg-black ${
            open ? "h-screen z-999" : ""
          }  p-4`}
        >
          <ul className="w-full flex flex-col items-start justify-start">
            <li className={`${open && open ? "w-full" : "w-[25px]"} `}>
              {open && open ? (
                <div
                  className="w-full text-center text-lg px-5 py-1 cursor-pointer"
                  onClick={() => openMenu()}
                >
                  <ImMenu4 />
                </div>
              ) : (
                <div
                  className="w-full text-center text-lg px-5 py-1 cursor-pointer"
                  onClick={() => openMenu()}
                >
                  <ImMenu3 />
                </div>
              )}
            </li>
            {open && open ? (
              <li className="w-full mt-2">
                <ul className="w-full flex flex-col items-start justify-start gap-3">
                  <li className="w-full cursor-pointer borderfont-thin text-xs md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0">
                    <Link className="w-full" href={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer borderfont-thin text-xs md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0">
                    <Link className="w-full" href={"/service"}>
                      Services
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer borderfont-thin text-xs md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0">
                    <Link className="w-full" href={"/aboutus"}>
                      About us
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer borderfont-thin text-xs md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0">
                    <Link className="w-full" href={"/contact"}>
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link href={"/login"}>
                      <button className="md:border md:font-medium font-thin text-md rounded-tl-lg rounded-br-lg px-5 py-1 cursor-pointer ease duration-300 hover:bg-white/50">
                        Login
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              ""
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HeaderCard;
