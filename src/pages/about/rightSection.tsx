import imageRight from "../../assets/img/surfer_image.jpeg";
import DownloadLink from "../../components/Links/DowlnloadLink";

export default function RightSection() {
  return (
    <div className="relative hidden flex-1 items-center justify-center bg-gray-100 sm:flex">
      <img
        src={imageRight}
        alt="Surfing"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute right-0 top-0 p-8">
        <nav className="flex gap-8 text-lg">
          <DownloadLink
            className="underline"
            fileName="Cv-Web_NDINGA"
            fileUrl="/src/assets/pdf/NDINGA_CV_24.pdf"
          />
        </nav>
      </div>
    </div>
  );
}
