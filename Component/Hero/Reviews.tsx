import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const Reviews = () => {
  return (
    <div className="w-full h-100 bg-black flex justify-center items-center">
      <InfiniteMovingCards
        items={[
          {
            quote:
              "This is the most attracting UI that I have ever seen in my entire life",
            name: "Tufan Rai",
            title: "Woow",
          },
          {
            quote:
              "This is the most attracting UI that I have ever seen in my entire life",
            name: "Hikmat",
            title: "Woow",
          },
          {
            quote:
              "This is the most attracting UI that I have ever seen in my entire life",
            name: "Prayash",
            title: "Woow",
          },
          {
            quote:
              "This is the most attracting UI that I have ever seen in my entire life",
            name: "Abhaya",
            title: "Woow",
          },
        ]}
        direction="right"
        pauseOnHover
        className="max-w-[1280px] w-full h-100 flex items-center justify-center"
        speed="fast"
      />
    </div>
  );
};

export default Reviews;
