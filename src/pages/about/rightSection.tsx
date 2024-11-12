import imageRight from "../../assets/img/surfer_image.jpeg";
import DownloadLink from "../../components/Links/DowlnloadLink";

export default function RightSection() {
  return (
    <div className="relative flex flex-1 items-center justify-center bg-gray-100">
      <img
        src={imageRight}
        alt="Surfing"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute right-0 top-0 p-8">
        <nav className="flex gap-8 text-lg">
          <DownloadLink
            className="underline"
            fileName="Curriculum vitae"
            fileUrl="path/to/your/file.pdf"
          />
        </nav>
      </div>
    </div>
  );
}
