import React from "react";
import MailCard from "../Cards/MailCard";

const ContactPage = () => {
  return (
    <div className="max-w-[1280px] w-full">
      <div className="w-full bg-linear-180 from-indigo-700 to-black md:px-16 px-8 md:py-16 py-8 flex items-center justify-center gap-8">
        <div className="w-[467px] text-white font-[--main-font]">
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

export default ContactPage;
