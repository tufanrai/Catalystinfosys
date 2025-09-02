import React from "react";

const FooterPage = () => {
  return (
    <div className="max-w-[1280px] w-full font-[--main-font]">
      <div className="w-full bg-neutral-700">
        <div className="w-full px-8 py-2 flex items-center justify-around md:px-16 md:py-8 px-8 py-4">
          <div className="w-full text-white flex flex-col items-start justify-start">
            <h1 className="font-bold md:text-[28px] text-lg text-start">
              Parton Satisfaction,
            </h1>
            <h6 className="font-medium md:text-[22px] text-md text-start mb-4">
              Our Motivation
            </h6>
            <p className="w-[505px] font-thin md:text-sm text-xs">
              We are always pleased and happy to help you and become a memorable
              part of your success journey.
            </p>
          </div>
          <div>
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-white"></div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-16 py-16">
          <div className="w-[378px] h-[296px] rounded-md px-5 py-2 bg-slate-700 flex flex-col items-center justify-center">
            <div className="w-[326px] h-[167px] text-white">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus laboriosam esse similique tenetur consectetur totam
                aut fugit quidem accusamus alias. Mollitia, hic distinctio?
                Expedita voluptatem odit ipsam enim non. Voluptates?"
              </p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <img
                src=""
                className="w-[40px] h-[40px] rounded-full object-cover object-center bg-white"
              />
              <span className="text-white">Tufan Rai</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white flex items-center justify-evenly gap-8 p-24">
        <ul>
          <li>
            <h4>About Catalyst infosys</h4>
          </li>
          <li>About Us</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>Blogs</li>
        </ul>
        <ul>
          <li>
            <h4>Services</h4>
          </li>
          <li>System Development</li>
          <li>Static Web Development</li>
          <li>UI/UX Designing</li>
        </ul>
        <ul>
          <li>
            <h4>Help</h4>
          </li>
          <li>Call Us</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <hr className="w-full h-[1px] bg-white" />
      <div className="py-8 flex items-center justify-center w-full">
        <span className="text-white/60 font-thin md:text-sm text-xs">
          &copy; Catalyst infosys: The Digital Leap: from Local to Global
        </span>
      </div>
    </div>
  );
};

export default FooterPage;
