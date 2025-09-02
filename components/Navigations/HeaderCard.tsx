import Link from "next/link";
import React from "react";

const HeaderCard = () => {
  return (
    <div className="max-w-[1280px] w-full text-white px-16 font-[--main-font]">
      <ul className="w-full flex items-center jsutify-center gap-3">
        <li className="mr-auto">
          <Link href={"/"}>
            <span className="font-thin">
              <b className="font-bold md:text-xl text-lg">Catalyst</b> infosys
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="w-full borderfont-thin text-sm md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="w-full borderfont-thin text-sm md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0"
            href={"/service"}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="w-full borderfont-thin text-sm md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0"
            href={"/aboutus"}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            className="w-full borderfont-thin text-sm md:text-md relative after:absolute after:bottom-0 after:left-10 after:w-0 hover:after:ease hover:after:duration-300 after:content-[''] after:bg-white after:h-[1px] hover:after:w-full hover:after:left-0"
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
    </div>
  );
};

export default HeaderCard;
