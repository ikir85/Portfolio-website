import { useContext } from "react";
import MainContent from "./mainContent";
import RightSection from "./rightSection";
import { ThemeContext } from "../../components/context/themeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="flex h-[calc(100vh-120px)]">
        <div
          className={`flex flex-1 flex-col justify-center p-12 ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
        >
          <MainContent />
        </div>
        <RightSection />
      </div>
    </>
  );
}
