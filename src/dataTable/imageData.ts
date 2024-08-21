import image1 from "../assets/img/hp/img1.jpg";
import image2 from "../assets/img/hp/img2.jpg";
import image3 from "../assets/img/hp/img3.jpg";
import image4 from "../assets/img/hp/img4.jpg";
import image5 from "../assets/img/hp/img5.jpg";
import image6 from "../assets/img/hp/img6.jpg";
import image7 from "../assets/img/hp/img7.jpg";
import image8 from "../assets/img/hp/img8.jpg";
import image10 from "../assets/img/hp/img10.jpg";

export type imageDisplay = "portrait" | "landscape";

interface imageFormat {
  file: string;
  imageType: imageDisplay;
  link: string;
  name: string;
}

export const images = [
  {
    file: image1,
    name: "Image 1",
    link: "/galley/img1",
    imageType: "portrait",
  },
  {
    file: image10,
    name: "Image 10",
    link: "/galley/img10",
    imageType: "landscape",
  },
  {
    file: image8,
    name: "Image 8",
    link: "/galley/img8",
    imageType: "landscape",
  },
  {
    file: image3,
    name: "Image 3",
    link: "/galley/img3",
    imageType: "portrait",
  },
  {
    file: image5,
    name: "Image 5",
    link: "/galley/img5",
    imageType: "landscape",
  },
  {
    file: image6,
    name: "Image 6",
    link: "/galley/img6",
    imageType: "landscape",
  },
  {
    file: image7,
    name: "Image 7",
    link: "/galley/img7",
    imageType: "landscape",
  },
  {
    file: image2,
    name: "Image 2",
    link: "/galley/img2",
    imageType: "portrait",
  },
  {
    file: image4,
    name: "Image 4",
    link: "/galley/img2",
    imageType: "landscape",
  },
] satisfies imageFormat[];
