import team1 from "@/public/ .jpg";
import team2 from "@/public/ -2.jpg";

interface IBannerImage {
  image: string;
}

interface IBannerText {
  title: string;
  description: string;
}

export const AboutBannerImage: IBannerImage[] = [
  {
    image: `${team1.src}`,
  },
  {
    image: `${team2.src}`,
  },
];

export const AboutBannerText: IBannerText = {
  title: "Scale Your Business with Us!",
  description:
    "Our expert and passionate team will help you build very responsive and professional looking site which is very SEO friendly, making your site appear at the top of the list.",
};
