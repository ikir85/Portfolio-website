import { ChangeEvent, useState } from "react";
import image1 from "../../../assets/img/hp/img1.jpg";

export default function ImageEditor() {
  const [link, setLink] = useState(image1);
  const [spacing, setSpacing] = useState(5);
  const [blur, setBlur] = useState(0);
  const [baseColor, setBaseColor] = useState("#0000FF");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    name === "link"
      ? setLink(value)
      : name === "spacing"
        ? setSpacing(parseFloat(value))
        : name === "blur"
          ? setBlur(parseInt(value, 10))
          : setBaseColor(value);
  };

  const imageStyle = {
    padding: `${spacing}px`,
    background: baseColor,
    filter: `blur(${blur}px)`,
  };

  return (
    <section className="imageEditor-section flex flex-col flex-nowrap items-center gap-8 p-8 text-center">
      <article className="imageEditor-article flex flex-nowrap items-center justify-center gap-2">
        <label className="font-bold" htmlFor="link">
          Image link:
        </label>
        <input
          id="link"
          type="url"
          name="link"
          placeholder="Paste your image link here."
          value={link === "image1" ? "" : link}
          onChange={handleInputChange}
        />
        <label className="font-bold" htmlFor="spacing">
          Spacing:
        </label>
        <input
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          value={spacing}
          onChange={handleInputChange}
          data-sizing="px"
        />
        <label className="font-bold" htmlFor="blur">
          Blur:
        </label>
        <input
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          value={blur}
          onChange={handleInputChange}
          data-sizing="px"
        />
        <label className="font-bold" htmlFor="base">
          Base Color:
        </label>
        <input
          id="base"
          type="color"
          name="base"
          value={baseColor}
          onChange={handleInputChange}
        />
      </article>
      <img
        className="imageEditor-img max-h-[50rem] max-w-[50rem]"
        style={imageStyle}
        src={link}
        alt={link === "image1" ? "Default alt text" : "Pasted image"}
      />
    </section>
  );
}
