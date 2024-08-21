import { Link } from "react-router-dom";
import { images } from "../../dataTable/imageData";
import "react-slideshow-image/dist/styles.css";

export default function GalleryList() {
  return (
    <>
      <div className="columns-1 gap-5 pt-52 sm:columns-2 sm:gap-6 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-8">
        {images.map((galleryImages) => (
          <div className="group relative">
            <img
              className="h-auto w-fit object-cover group-hover:opacity-20"
              src={galleryImages.file}
              alt={galleryImages.name}
            />
            <Link
              to={galleryImages.link}
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-6xl text-black hover:text-gray-600 group-hover:block"
            >
              {galleryImages.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
