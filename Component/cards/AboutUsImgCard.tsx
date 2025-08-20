import React from "react";

interface IProps {
  image: string;
  className?: string;
  position?: string;
}
const AboutUsImgCard = (props: IProps) => {
  return (
    <div
      className={`rounded-lg hover:scale-105 ease duration-300 border-[1px] border-blue-600/50 shadow-xl/30 shadow-blue-600/50 overflow-hidden inline-block absolute ${props.position}`}
    >
      <img
        src={`${props.image}`}
        className={`object-cover object-center object-no-repeat ${props.className}`}
      />
    </div>
  );
};

export default AboutUsImgCard;
