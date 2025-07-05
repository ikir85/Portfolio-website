import { useEffect, useState } from "react";

import ImageHP from "./imageHP";
import { images } from "../../dataTable/imageData";

export default function RandomWelcomePicture() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ImageHP
      src={images[currentIndex].file}
      alt={images[currentIndex].name}
      display={images[currentIndex].imageType}
      pageLink={images[currentIndex].link}
      name={images[currentIndex].name}
    />
  );
}
