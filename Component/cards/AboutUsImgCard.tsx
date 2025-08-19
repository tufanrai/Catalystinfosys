import React from "react";

interface IProps {
  image: string;
  className: string;
  width: string;
  height: string;
}
const AboutUsImgCard = (props: IProps) => {
  return (
    <div
      className={`rounded-lg hover:scale-105 ease duration-300 border-[1px] border-blue-600/50 shadow-xl/30 shadow-blue-600/50 overflow-hidden ${props.className}}`}
    >
      <img
        src={props.image}
        className={`object-cover object-center w-[${props.width}] h-[${props.height}]`}
        width={"100%"}
        alt=""
      />
    </div>
  );
};

export default AboutUsImgCard;
