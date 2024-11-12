//import RandomWelcomePicture from "./RandomPicture";
import { useContext, useEffect, useRef } from "react";
//import p5, { Image } from "p5";

//import { P5CanvasInstance } from "@p5-wrapper/react";
import { ThemeContext } from "../../components/context/themeContext";
import { AccordionProvider } from "../../components/context/AccordionContext";
import Accordion from "./accordionHP";

/**function sketch(p: P5CanvasInstance) {
  let img: Image;
  let smallPoint: number;
  let largePoint: number;
  // p is a reference to the p5 instance this sketch is attached to

  p.preload = function () {
    img = p.loadImage(
      "https://izi-by-edf.fr/thumbs/1000%C3%9710000/homepage/2023/08/img-hp-intro.png"
    );
  };

  p.setup = function () {
    p.createCanvas(720, 400);
    smallPoint = 4;
    largePoint = 40;
    p.imageMode(p.CENTER);
    p.noStroke();
    p.background(255);
    img.loadPixels();
  };

  p.draw = function () {
    const pointillize = p.map(p.mouseX, 0, p.width, smallPoint, largePoint);
    const x = p.floor(p.random(img.width));
    const y = p.floor(p.random(img.height));
    const pix: number[] = img.get(x, y);
    p.fill(pix);
    p.ellipse(x, y, pointillize, pointillize);
    console.log(pix);
  };
}**/

export const HomeOld = () => {
  //const p5ContainerRef = useRef<HTMLDivElement | null>(null);
  // const { theme } = useContext(ThemeContext);

  /** useEffect(() => {
    if (!p5ContainerRef.current) {
      return;
    }
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);**/

  return (
    <AccordionProvider>
      {/*<div
        className={`mx-auto flex flex-col items-center justify-center gap-8 px-6 pb-5 pt-60 ${theme === "light" ? "bg-white" : "bg-black"}`}
      >
        <div
          className={`App ${theme === "light" ? "" : "invert"}`}
          ref={p5ContainerRef}
        />
        <div className="flex justify-center">
          <RandomWelcomePicture />
        </div>
      </div>*/}
      <Accordion />
    </AccordionProvider>
  );
};
