import { useState } from "react";
import { Link } from "react-router-dom";
import { imageDisplay } from "../../dataTable/imageData";

const MainImgDisplay: Record<imageDisplay, string> = {
  portrait: "w-1/3",
  landscape: "w-1/2",
};

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  display: imageDisplay;
  pageLink: string;
  name: string;
}

export default function ImageHP({
  display,
  src,
  alt,
  name,
  pageLink,
  className,
  ...props
}: Props): JSX.Element {
  const [imageHover, setImageHover] = useState(false);

  return (
    <div
      className={`group relative flex flex-col justify-center rounded-2xl border border-gray-500 p-4 ${MainImgDisplay[display]} ${className}`}
      onMouseEnter={() => setImageHover(true)}
      onMouseLeave={() => setImageHover(false)}
    >
      <img
        className="cursor-pointer p-0 transition-opacity group-hover:opacity-20"
        src={src}
        alt={alt}
        {...props}
      />

      <Link
        to={pageLink}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-black hover:text-gray-600 ${imageHover ? "block" : "hidden"}`}
      >
        {name}
      </Link>
    </div>
  );
}
