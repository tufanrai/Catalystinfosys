import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-black/90 text-white">
      <div className="max-w-[1280px] w-full h-auto md:px-16 md:py-8 px-8 py-4 flex flex-col items-center justify-start">
        <div className="w-full h-auto">
          <div className="flex items-center justify-start gap-4">
            <ul>
              <li>
                <h1>Useful Links</h1>
              </li>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Services</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
            <ul>
              <li>
                <h1>Media Links</h1>
              </li>
              <li>
                <p>Facebook</p>
              </li>
              <li>
                <p>instagram</p>
              </li>
              <li>
                <p>linkedin</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-white/90 w-full mt-8 mb-4" />
        <span>
          &copy; Catalystinfosys - The Digital Leap: From Local to Global
        </span>
      </div>
    </div>
  );
};

export default Footer;
