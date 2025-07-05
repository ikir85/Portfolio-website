import "react-slideshow-image/dist/styles.css";
import TumblrPosts from "./TumblrPosts";
import { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";

export default function GalleryList() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`px-20 pt-52 ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      >
        <TumblrPosts />
      </div>
    </>
  );
}
