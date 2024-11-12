import { useContext } from "react";
import ImageManipulation from "./ImageManipulation";
import { ThemeContext } from "../../components/context/themeContext";

export default function WebProject() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`flex h-[calc(100vh-120px)] items-center justify-center ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      >
        <div className="flex w-7/12 justify-between px-12 py-8">
          <div className="space-y-2">
            <h3 className="font-medium text-gray-500">(Client project)</h3>
            <ul className="space-y-1 text-2xl font-bold">
              <li>Les Archives</li>
              <li>Gregoire C.</li>
              <li>Focus Immo</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-gray-500">(Personal project)</h3>
            <ul className="space-y-1 text-2xl font-bold">
              <li>Cargo Collective</li>
              <li>Photo portfolio</li>
            </ul>
          </div>
        </div>
      </div>
      {/*<ImageManipulation />*/}
    </>
  );
}
