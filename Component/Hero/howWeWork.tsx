import React from "react";
import { Timeline } from "@/Component/timeline";
import { WorkingNature } from "../contents/HowWeWork";

const HowWeWork = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-black/90">
      <div className="max-w-[1280px] w-full h-auto">
        <Timeline data={WorkingNature} />
      </div>
    </div>
  );
};

export default HowWeWork;
