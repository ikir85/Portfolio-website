import "react-slideshow-image/dist/styles.css";
import TumblrPosts from "./TumblrPosts";
import { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";

export default function GalleryList() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`px-4 pt-20 md:px-20 md:pt-52 flex flex-col gap-8 ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-medium">Portfolio photo</h3>
          <ul className="flex flex-col gap-4 space-y-1 text-lg font-bold">
            <li>
              <a
                className="hover:underline"
                href="https://cargocollective.com/riki-tinoza"
              >
                cargocollective.com/riki-tinoza
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://riki-tinoza.tumblr.com/"
              >
                riki-tinoza.tumblr.com/
              </a>
            </li>
          </ul>
        </div>
        <TumblrPosts />
      </div>
    </>
  );
}
